import React from 'react'
import gql from 'graphql-tag'

import { LineChart, WrapQuery } from '../util'

const AccountInfoAdmin = (props) => {
  const data = JSON.parse(props.data.dbAccountInfoAdmin)
  return (
    <div style={{ padding: '10px' }}>
      <div className='account-section'>
        fdklgjl
      </div>
      <div className='account-section'>
        <LineChart
          labels={['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']}
          label='Tổng tiền dịch giả nhận'
          data={data.chartData || [0,0,0,0,0,0,0,0,0,0,0,0]}
        />
      </div>
    </div>
  )
}

const dbAccountInfoAdmin = gql`
query dbAccountInfoAdmin($month: Float) {
  dbAccountInfoAdmin(month: $month)
}
`

const AccountInfoAdminQuery = (props) => {
  const Component = WrapQuery({
    query: dbAccountInfoAdmin,
    variables: {
      month: props.month
    },
    Component: AccountInfoAdmin
  })
  return <Component />
}

export default AccountInfoAdminQuery
