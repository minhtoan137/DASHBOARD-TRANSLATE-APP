import React, { Component } from 'react'
import { map } from 'lodash'
import uuid from 'uuid/v4'
import { Switch, Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'
import Scrollbars from 'react-custom-scrollbars'
import jwt from 'jsonwebtoken'

import { listRoutesAuthen } from '../../config'
import { LoadableComponent } from '../util'
import TopMenu from './topmenu'
import './index.less'

@inject('store')
@observer
class App extends Component {
  componentWillMount () {
    this.props.store.Authen.checkLogin()
  }
  render () {
    const { Authen } = this.props.store
    const { isLogin } = Authen
    return (
      <div className='app'>
        <Layout>
          <TopMenu />
          <Layout.Content className='content'>
            <Scrollbars autoHide style={{ width: '100vw', height: 'calc(100vh - 60px)' }}>
              <Switch>
                {map(listRoutesAuthen, route => (
                  <Route
                    key={uuid()}
                    exact={route.exact}
                    path={route.path}
                    render={props => {
                      const Comp = LoadableComponent(import(`../${route.component}`))
                      const user = jwt.verify(localStorage.getItem('TOKEN'), 'digihcs')
                      return isLogin ? <Comp user={user.profile[0]} route={route} {...props} /> : <Redirect to='/login' />
                    }}
                  />
                ))}
                <Redirect to='/dashboard' />
              </Switch>
            </Scrollbars>
          </Layout.Content>
        </Layout>
      </div>
    )
  }
}

export default App
