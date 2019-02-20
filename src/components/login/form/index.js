import React, { PureComponent } from 'react'
import { isNull } from 'lodash'
import gql from 'graphql-tag'
import { compose, withApollo, graphql } from 'react-apollo'
import { Form, Input, Checkbox, Button, Icon } from 'antd'

class FormLogin extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.mutate({
          variables: {
            LoginInput: {
              username: values.username,
              password: values.password
            }
          }
        }).then(({data: {login: {token}}}) => {
          if (isNull(token)) {
            console.log('sai pass')
          } else {
            localStorage.setItem('TOKEN', token)
            this.props.onLogin()
          }
        })
      }
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <div className='row'>
          <label className='labelInput'>Email/ Tên đăng nhập</label>
          <Form.Item hasFeedback>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Vui lòng nhập tài khoản!', validator: (rule, value, callback) => {
                return value.length === 0 ? callback(true) : callback()
              }}],
            })(
              <Input prefix={<Icon type='user' style={{ color: 'rgba(0, 0, 0, .35)' }} />} />
            )}
          </Form.Item>
        </div>
        <div className='row'>
          <label className='labelInput'>Mật khẩu</label>
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!', validator: (rule, value, callback) => {
                return value.length === 0 ? callback(true) : callback()
              }}],
            })(
              <Input type='password' prefix={<Icon type='lock' style={{ color: 'rgba(0, 0, 0, .35)' }} />} />
            )}
          </Form.Item>
        </div>
        <div className='row' style={{ display: 'flex', justifyContent: 'space-between', userSelect: 'none', height: '40px' }}>
          {getFieldDecorator('save')(
            <Checkbox >Duy trì đăng nhập</Checkbox>
          )}
          <div className='link'>Quên mật khẩu ?</div>
        </div>
        <Button htmlType='submit' style={{ width: '100%' }} type='primary'>
          Đăng nhập
        </Button>
      </Form>
    )
  }
}

const login = gql`
  mutation login ($LoginInput: LoginInput) {
    login (loginInput: $LoginInput) {
      token
    }
  }
`

export default compose(
  withApollo,
  graphql(login)
)(Form.create()(FormLogin))
