import React, { Component } from 'react'
import { Button } from 'antd'

import { TitleState } from '../util'
import AccountInfoAdmin from './AccountInfoAdmin'
import PostPublished from './PostPublished'
import NeedVerify from './NeedVerify'
import './index.less'

class Dashboard extends Component {
  render () {
    return (
      <div
        className='dashboard'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
      >
        <TitleState title={this.props.route.displayName}>
          <Button
            shape='round'
            style={{ height: '100%' }}
            type='primary'
          >
            Tạo bài dịch
          </Button>
        </TitleState>
        <div className='mod-content'>
          <div style={{ width: 'calc(100% - ((100% - 304px) * .35))', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={{ width: 'calc(100% - 304px)' }}>
                <div className='title-content'>
                  <h6 className='title'>thông tin tổng hợp</h6>
                </div>
                <section style={{background: 'transparent', padding: 0}}>
                  <AccountInfoAdmin
                    month={2}
                  />
                </section>
              </div>
              <div style={{ width: '304px' }}>
                <div className='title-content'>
                  <h6 className='title'>thông báo</h6>
                </div>
                <section>
                  <div style={{ padding: '10px' }}>
                    <div style={{ width: '100%' }} className='account-section' />
                  </div>
                </section>
              </div>
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={{ width: '60%' }}>
                <div className='title-content'>
                  <h6 className='title'>bài đang dịch</h6>
                </div>
                <section style={{background: 'transparent', padding: 0}}>
                  <PostPublished
                    state={[1]}
                    isPublic={true}
                    isComplete={false}
                  />
                </section>
              </div>
              <div style={{ width: '40%' }}>
                <div className='title-content'>
                  <h6 className='title'>bài cần duyệt</h6>
                </div>
                <section style={{background: 'transparent', padding: 0}}>
                  <NeedVerify
                    state={[1]}
                    isComplete={false}
                  />
                </section>
              </div>
            </div>
          </div>
          <div style={{ width: 'calc((100% - 304px) * .35)', display: 'flex' }}>
            <div style={{ width: '100%' }}>
              <div className='title-content'>
                <h6 className='title'>lịch sử</h6>
              </div>
              <section>
                <div style={{ padding: '10px' }}>
                  <div style={{ width: '100%', height: '458px' }} className='account-section' />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
