import React from 'react'
import gql from 'graphql-tag'
import moment from 'moment'
import { Icon } from 'antd'

import { WrapQuery, AgGridWrapper } from '../util'

const NeedVerify = (props) => {
  return (
    <div style={{ padding: '10px' }}>
      <AgGridWrapper
        columnDefs={[
          {headerName: '', field: '', cellClass: ['grid-action-cell'], width: 31, minWidth: 31, maxWidth: 31, suppressMenu: true},
          {headerName: "TIÊU ĐỀ", field: "title", cellClass: 'ag-custom-cell'},
          {headerName: "LOẠI BÀI", field: "typeOfTranslation", cellClass: 'ag-custom-cell', cellStyle: {textAlign: 'center'}, cellRenderer: (params) => {
            if (params.data.endTime && moment(params.data.endTime).diff(moment(), 'hour') <= 24) {
              return '<span style="background-color: #F4C1D0; color: #DC3B6C; padding: 6px 10px; border-radius: 20px;">' + (params.data.typeOfTranslation === 'basic' ? 'Thường' : params.data.typeOfTranslation === 'specialized' ? 'Chuyên ngành' : 'Dịch vụ') + '</span>';
            } else {
              if (params.data.typeOfTranslation === 'basic') {
                return '<span style="background-color: #D6F4F6; color: #0AC4C9; padding: 6px 10px; border-radius: 20px;">Thường</span>';
              }
              if (params.data.typeOfTranslation === 'advance') {
                return '<span style="background-color: #D6EFD9; color: #84CC59; padding: 6px 10px; border-radius: 20px;">Dịch vụ</span>';
              }
              if (params.data.typeOfTranslation === 'specialized') {
                return '<span style="background-color: rgba(218, 218, 242, 0.73); color: #6565AD; padding: 6px 10px; border-radius: 20px;">Chuyên ngành</span>';
              }
            }
          }},
          {headerName: "NGÀY HOÀN THÀNH", field: "completedAt", cellClass: 'ag-custom-cell', cellRendererFramework: (params) => {
            return (
              <span>
                <span>{moment(+params.data.completedAt).format('MM-DD-YYYY')}</span>
              </span>
            )
          }},
          {headerName: "PHÍ DỊCH", field: "wage", cellClass: 'ag-last-cell', cellStyle: {textAlign: 'right'}, cellRendererFramework: (params) => {
            return (
              <span>
                <span>{params.data.wage}</span>
                <Icon className='ag-action-after' type='right' />
              </span>
            )
          }}
        ]}
        rowData={props.data.translations || []}
      />
    </div>
  )
}

const translations = gql`
  query getData($state: [Int], $isComplete: Boolean) {
    translations(state: $state, isComplete: $isComplete) {
      _id title typeOfNews typeOfTranslation completedAt wage
    }
  }
`

const NeedVerifyQuery = (props) => {
  const Component = WrapQuery({
    query: translations,
    variables: {
      state: props.state,
      isComplete: props.isComplete
    },
    Component: NeedVerify
  })
  return <Component />
}

export default NeedVerifyQuery
