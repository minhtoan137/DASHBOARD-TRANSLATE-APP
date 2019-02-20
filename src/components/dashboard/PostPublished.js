import React from 'react'
import gql from 'graphql-tag'
import moment from 'moment'

import { WrapQuery, AgGridWrapper } from '../util'

const PostPublished = (props) => {
  return (
    <div style={{ padding: '10px' }}>
      <AgGridWrapper
        columnDefs={[
          {headerName: "TIÊU ĐỀ", field: "title", cellClass: 'ag-custom-cell'},
          {headerName: "MỨC ĐỘ HOÀN THÀNH", field: "degreeCompletion", cellClass: 'ag-custom-cell', cellRenderer: (params) => {
            if (params.data.endTime && moment(params.data.endTime).diff(moment(), 'hour') <= 24) {
              return '<div style="height: 100%; display: flex; align-items: center;"><div style="width: 100%; height: 10px; background-color: #F4C1D0; border-radius: 10px;">' +
                '<div style="height: 10px; background-color: #DC3B6C; width: ' + params.data.degreeCompletion +
                '%; border-radius: 10px; text-align: right; color: #fff; line-height: 10px; font-size: 8px; padding-right: ' +
                (params.data.degreeCompletion ? '5px' : '0') + ';">' +
                (params.data.degreeCompletion ? params.data.degreeCompletion + '%' : '') +
                '</div>' +
              '</div></div>';
            } else {
              return '<div style="height: 100%; display: flex; align-items: center;"><div style="width: 100%; height: 10px; background-color: #CBD4D9; border-radius: 10px;">' +
                '<div style="height: 10px; background-color: #82CB56; width: ' + params.data.degreeCompletion +
                '%; border-radius: 10px; text-align: right; color: #fff; line-height: 10px; font-size: 8px; padding-right: ' +
                (params.data.degreeCompletion ? '5px' : '0') + ';">' +
                (params.data.degreeCompletion ? params.data.degreeCompletion + '%' : '') +
                '</div>' +
              '</div></div>';
            }
          }},
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
          {headerName: "NGÀY KT", field: "endTime", cellClass: 'ag-last-cell', cellRendererFramework: (params) => {
            return (
              <span>
                <span>{moment(+params.data.endTime).format('MM-DD-YYYY')}</span>
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
  query translations($state: [Int], $isPublic: Boolean, $isComplete: Boolean) {
    translations(state: $state, isPublic: $isPublic, isComplete: $isComplete) {
      _id title typeOfTranslation endTime degreeCompletion
    }
  }
`

const PostPublishedQuery = (props) => {
  const Component = WrapQuery({
    query: translations,
    variables: {
      state: props.state,
      isPublic: props.isPublic,
      isComplete: props.isComplete
    },
    Component: PostPublished
  })
  return <Component />
}

export default PostPublishedQuery
