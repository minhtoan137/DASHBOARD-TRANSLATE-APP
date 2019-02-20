import React, { Component } from 'react'
import { map } from 'lodash'
import { Button } from 'antd'
import Select from 'react-select'
import gql from 'graphql-tag'

import { TitleState, WrapQuery } from '../../util'

class NotPublic extends Component {
  render () {
    console.log(this.props)
    return (
      <div className='NotPublic'>
        <TitleState title={this.props.route.displayName}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
          <div style={{position: 'relative', paddingRight: 12}}>
            <Select
              classNamePrefix='react-select'
              clearable={true}
              placeholder={'Chuyên khoa'}
              options={map(this.props.data.specialists, item => {
                item['value'] = item._id
                item['label'] = item.name
                return item
              })}
            />
          </div>
          <div style={{position: 'relative', paddingRight: 12}}>
            <Select
              classNamePrefix='react-select'
              clearable={true}
              placeholder={'Nhóm bệnh'}
              options={map(this.props.data.diseaseGroups, item => {
                item['value'] = item._id
                item['label'] = item.name
                return item
              })}
            />
          </div>
          <div style={{position: 'relative', paddingRight: 12}}>
            <Select
              classNamePrefix='react-select'
              clearable={true}
              placeholder={'Loại tin'}
              options={map(['basic', 'advance', 'specialized'], item => {
                let wrapItem = {}
                wrapItem['value'] = item
                wrapItem['label'] = item === 'basic' ? 'Tin thường' : (item === 'specialized' ? 'Tin chuyên ngành' : 'Tin dịch vụ')
                return wrapItem
              })}
            />
          </div>
          <div style={{position: 'relative'}}>
            <Button
              shape='round'
              style={{ height: '100%' }}
              type='primary'
            >
              Tạo bài dịch
            </Button>
          </div>
        </div>
        </TitleState>
      </div>
    )
  }
}

const translations = gql`
query translations($mode: String, $state: [Int]){
  translations(mode: $mode, state: $state){
    _id
    title
    averageTime
    startTime
    endTime
    sourceUrl
    typeOfNews
    level
    typeOfTranslation
    state
    degreeCompletion
    isComplete
    completedAt
    content
    translatedBy {
      _id
      username
      fullname
    }
    createdAt
    createdBy {
      _id
      username
    }
    verifiedAt
    verifiedBy {
      _id
      username
    }
    specialVerifiedBy {
      _id
      username
      fullname
    }
    publishedAt
    publishedBy {
      _id
      username
    }
    isPublic
    diseaseGroup
    wage
  }
  specialists {
    _id
    name
  }
  diseaseGroups {
    _id
    name
  }
}
`

const NotPublicQuery = (props) => {
  const Component = WrapQuery({
    query: translations,
    variables: {
      mode: props.user.code,
      state: [0, 1, 2, 3, 99, 100]
    },
    Component: NotPublic
  })
  return <Component {...props} />
}

export default NotPublicQuery
