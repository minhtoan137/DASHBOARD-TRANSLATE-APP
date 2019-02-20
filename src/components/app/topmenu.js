import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon, Badge, Button, Popover } from 'antd'
import uuid from 'uuid/v1'

import Logo from '../../assets/imgs/logo_app_dich.png'

class TopMenu extends React.PureComponent {
  render () {
    const dataMenu = [
      { TITLE: 'TỔNG HỢP', LINK: '/dashboard' },
      {
        TITLE: 'BÀI DỊCH',
        DATA: [
          { TITLE: 'TẠO BÀI DỊCH MỚI', LINK: '/addNewPost' },
          { TITLE: 'BÀI DỊCH CHƯA ĐĂNG', LINK: '/posts/notPublic' },
          { TITLE: 'BÀI CẦN DUYỆT', LINK: '/posts/needVerify' },
          { TITLE: 'BÀI CẦN DỊCH', LINK: '/posts/needTranslate' },
          { TITLE: 'BÀI ĐANG DỊCH', LINK: '/posts/translating' },
          { TITLE: 'BÀI ĐÃ DUYỆT', LINK: '/posts/published' },
          { TITLE: 'BÀI ĐÃ XÓA', LINK: '/posts/removed' }
        ]
      },
      {
        TITLE: 'QUẢN LÝ',
        DATA: [
          { TITLE: 'MOD', LINK: '/mod' },
          { TITLE: 'DỊCH GIẢ', LINK: '/translator' },
          { TITLE: 'DỊCH GIẢ CHƯA DUYỆT', LINK: '/new-translator' },
          { TITLE: 'PHÂN QUYỀN', LINK: '/permission' },
          { TITLE: 'CÀI ĐẶT', LINK: '/setting' }
        ]
      }
    ]
    return (
      <Layout.Header className='header'>
        <img className='logo' alt='INNOS TranslateApp' src={Logo} />
        <div className='iconTop'>
          <div className='item'>
            <Badge style={{ backgroundColor: '#67D12A' }} count={23}>
              <Icon style={{ fontSize: '20px' }} type='message' />
            </Badge>
          </div>
          <div className='item'>
            <Icon style={{ fontSize: '20px' }} type='bell' />
          </div>
          <div className='item'>
            <Icon style={{ fontSize: '20px' }} type='user' /> admin
          </div>
          <div style={{ margin: 0 }}>
            <Popover placement='bottomRight' trigger='click' content={(
              <ul style={{ listStyle: 'none', margin: 0, padding: '5px 0px' }}>
                <li>Cá nhân</li>
                <li>Đăng xuất</li>
              </ul>
            )}>
              <Button icon='setting' />
            </Popover>
          </div>
        </div>
        <div className='topMenu'>
          <Menu
            mode='horizontal'
            theme='light'
            style={{ lineHeight: '60px' }}
          >
            {dataMenu.map((value) => {
              if (!value.hasOwnProperty('DATA')) {
                return (
                  <Menu.Item key={uuid()}>
                    <NavLink to={value.LINK}>{value.TITLE}</NavLink>
                  </Menu.Item>
                )
              } else {
                return (
                  <Menu.SubMenu key={uuid()} title={<span>{value.TITLE} <Icon type='down' /></span>}>
                    {value.DATA.map((subValue) => {
                      return (
                        <Menu.Item className='menuItem' key={uuid()}>
                          <NavLink to={subValue.LINK}>{subValue.TITLE}</NavLink>
                        </Menu.Item>
                      )
                    })}
                  </Menu.SubMenu>
                )
              }
            })}
          </Menu>
        </div>
      </Layout.Header>
    )
  }
}

export default TopMenu
