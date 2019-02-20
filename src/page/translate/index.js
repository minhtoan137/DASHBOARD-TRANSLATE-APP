import React, { Component, PureComponent } from 'react'
import { map } from 'lodash'
import uuid from 'uuid/v4'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider, observer, inject } from 'mobx-react'
import { ApolloProvider } from 'react-apollo'

import { LoadableComponent } from '../../components/util'
import { routesNotAuthen, routesAuthen } from '../../config'
import { Store, Client } from '../../tools'
import './index.less'

@inject('store')
@observer
class Translate extends Component {
  render () {
    const { Authen } = this.props.store
    const { isLogin } = Authen
    return (
      <BrowserRouter>
        <>
          <Switch>
            {map(routesNotAuthen, route => (
              <Route
                key={uuid()}
                exact={route.exact}
                path={route.path}
                render={props => {
                  const Comp = LoadableComponent(import(`../../components/${route.component}`))
                  return !isLogin ? <Comp route={route} {...props} /> : <Redirect to='/' />
                }}
              />
            ))}
            {map(routesAuthen, route => (
              <Route
                key={uuid()}
                exact={route.exact}
                path={route.path}
                render={props => {
                  const Comp = LoadableComponent(import(`../../components/${route.component}`))
                  return isLogin ? <Comp route={route} {...props} /> : <Redirect to='/login' />
                }}
              />
            ))}
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

const store = new Store()
class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <ApolloProvider client={Client}>
          <Translate />
        </ApolloProvider>
      </Provider>
    )
  }
}

export default App
