import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { setContext } from 'apollo-link-context'

import { graphqlUrl, socketEndpoint } from '../../config'

const httpLink = new HttpLink({
  uri: graphqlUrl
})
const wsLink = new WebSocketLink({
  uri: socketEndpoint,
  options: {
    reconnect: true
  }
})
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // authorization: localStorage.getItem('TOKEN') ? `Bearer ${localStorage.getItem('TOKEN')}` : ``
      "access-token": localStorage.getItem('TOKEN') ? `${localStorage.getItem('TOKEN')}` : ``
    }
  }
})
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  }, wsLink, httpLink
)
const Client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
})

export { Client }
