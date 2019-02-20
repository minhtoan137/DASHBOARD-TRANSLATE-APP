import React, { PureComponent, Fragment } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { LicenseManager } from 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import './index.less'
LicenseManager.setLicenseKey(`NDEwMjMzMzIwMDAwMA==4776ae9eddc069aad222a64b09b9e834`)

class AgGridWrapper extends PureComponent {
  constructor (props) {
    super(props)
    this.gridOptions = {
      onGridReady: (params) => {
        params.api.sizeColumnsToFit()
      },
      getRowClass: (params) => {
        return 'ag-row-default'
      }
    }
  }
  render () {
    return (
      <Fragment>
        <div className='ag-theme-balham' style={{ width: '100%', height: 'auto' }}>
          <AgGridReact
            columnDefs={this.props.columnDefs}
            rowData={this.props.rowData}
            paginationPageSize={7}
            rowSelection='single'
            suppressCellSelection={true}
            pagination={true}
            gridOptions={{
              rowHeight: 56,
              ...this.gridOptions
            }}
          />
        </div>
      </Fragment>
    )
  }
}

export { AgGridWrapper }
