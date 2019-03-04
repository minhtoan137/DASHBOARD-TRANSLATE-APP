import React from 'react'
import { Skeleton } from 'antd'
import { Query, Mutation } from 'react-apollo'

const WrapQuery = ({ query, variables, Component }) => {
  return (props) => (
    <Query query={query} variables={variables}>
      {
        ({ loading, error, data, refetch, subscribeToMore }) => {
          if (loading) return <Skeleton />
          if (error) {
            localStorage.removeItem('TOKEN')
            return <Skeleton active />
          }
          return (
            <Component
              {...props}
              data={Object.assign(data, props.data)}
              refetch={refetch}
              subscribeToMore={subscribeToMore}
            />
          )
        }
      }
    </Query>
  )
}

const WrapMutation = ({ mutation, name, Component }) => {
  return (props) => (
    <Mutation mutation={mutation}>
      {(mutation) => {
        let wrapProp = { ...props }
        wrapProp[name] = mutation
        return (
          <Component
            {...wrapProp}
          />
        )
      }}
    </Mutation>
  )
}

export { WrapQuery, WrapMutation }
