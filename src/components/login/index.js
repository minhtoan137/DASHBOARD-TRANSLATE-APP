import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import logo from '../../assets/imgs/logo_app_dich.png'
import './index.less'
import FormLogin from './form'

@inject('store')
@observer
class Login extends Component {
  componentWillMount () {
    this.props.store.Authen.checkLogin()
  }
  render () {
    const { Authen } = this.props.store
    const { onLogin } = Authen
    return (
      <div className='login'>
        <div className='form'>
          <div style={{ width: '100%', height: '60px', textAlign: 'center', marginBottom: '12px' }}>
            <img src={logo} alt='Translate' />
          </div>
          <div className='row-title'>
            <span>Đăng nhập</span>
          </div>
          <FormLogin onLogin={onLogin} />
        </div>
      </div>
    )
  }
}

export default Login
