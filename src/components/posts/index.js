import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { map } from 'lodash'
import { Switch, Route } from 'react-router-dom'

import { LoadableComponent } from '../util'
import './index.less'

class Posts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      routes: [
        {
          displayName: 'Bài dịch chưa đăng',
          path: '/notPublic',
          component: 'notPublic',
          exact: false
        },
        {
          displayName: 'Bài cần duyệt',
          path: '/needVerify',
          component: 'needVerify',
          exact: false
        },
        {
          displayName: 'Bài cần dịch',
          path: '/needTranslate',
          component: 'needTranslate',
          exact: false
        },
        {
          displayName: 'Bài đang dịch',
          path: '/translating',
          component: 'translating',
          exact: false
        },
        {
          displayName: 'Bài đã duyệt',
          path: '/published',
          component: 'published',
          exact: false
        },
        {
          displayName: 'Bài đã xóa',
          path: '/removed',
          component: 'removed',
          exact: false
        }
      ]
    }
  }
  render () {
    return (
      <div className='posts'>
        <Switch>
          {map(this.state.routes, route => (
            <Route
              key={uuid()}
              exact={route.exact}
              path={`${this.props.route.path}${route.path}`}
              render={props => {
                const Comp = LoadableComponent(import(`./${route.component}`))
                return <Comp route={route} {...props} />
              }}
            />
          ))}
        </Switch>
      </div>
    )
  }
}

export default Posts
