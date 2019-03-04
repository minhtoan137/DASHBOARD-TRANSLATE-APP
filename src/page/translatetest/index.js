import React from 'react';
import { Button, Row, Col, DatePicker, Menu, Dropdown, Icon, Popover } from 'antd';
import "./index.less";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Logo from './logo_app_dich.png';
import { Line } from 'react-chartjs-2';

class TranslateTest extends React.Component {
  render() {
    const { MonthPicker } = DatePicker;
    const menu1 = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer">Tạo bài dịch mới</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Bài dịch chưa đăng</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Bài cần duyệt</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Bài cần dich</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Bài đang dịch</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Bài đã duyệt</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Bài đã xóa</a>
        </Menu.Item>
      </Menu>
    )

    const menu2 = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer">Mod</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Dịch giả</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Dịch giả chưa duyệt</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Phân quyền</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer">Cài đặt</a>
        </Menu.Item>
      </Menu>
    )

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '60px', backgroundColor: '#ffffff' }}>
          <div style={{ width: ' 250px', padding: '12px 10px' }}>
            <img src={Logo} alt="ok" style={{ height: '35px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
              <a className="nav-item nav-item-active">
                Tổng hợp
              </a>
              <Dropdown overlay={menu1}>
                <a className="nav-item ant-dropdown-link">
                  Bài dịch <Icon type="down" />
                </a>
              </Dropdown>
              <Dropdown overlay={menu2}>
                <a className="nav-item ant-dropdown-link">
                  Quản lý <Icon type="down" />
                </a>
              </Dropdown>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', paddingRight: '20px', width: '200px' }}>
              <div>
                <Icon style={{ fontSize: '20px' }} type='message' />
              </div>
              <div>
                <Icon style={{ fontSize: '20px' }} type='bell' />
              </div>
              <div>
                <Icon style={{ fontSize: '20px' }} type='user' /> admin
              </div>
            </div>
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
        <div style={{ margin: '15px', fontSize: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <span>Tổng hợp</span>
            <Button type="primary">Tạo bài dịch</Button>
          </div>
          <div style={{ clear: 'both' }}></div>
          <div style={{ marginTop: '20px' }}>
            <Row gutter={24}>
              <Col span={18}>
                <Row gutter={24}>
                  <Col span={16}>
                    <div>
                      <h3>Thông tin tổng hợp</h3>
                    </div>
                    <section style={{ backgroundColor: '#ffffff', width: '50%', float: 'left', height: '250px', padding: '10px' }}>
                      <div>
                        <MonthPicker placeholder="Tháng 2" />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
                        <div>
                          <Icon type="left-circle" />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ color: "#67d12a", fontSize: '30px' }}>1,352,390<sup>Đ</sup></span>
                          <p style={{ fontSize: '15px' }}>Tổng tiền dịch giả nhận trong tháng 2</p>
                        </div>

                        <div>
                          <Icon type="right-circle" />
                        </div>
                      </div>

                      <hr />

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', paddingTop: '20px', fontSize: '14px' }}>
                        <div className="grid-column">
                          <span>0</span>
                          <p style={{ fontSize: '11px' }}>Tổng dịch giả</p>
                        </div>
                        <div className="grid-column">
                          <span>3</span>
                          <p style={{ fontSize: '11px' }}>Tổng bài đang dịch</p>
                        </div>
                        <div className="grid-column">
                          <span>7</span>
                          <p style={{ fontSize: '11px' }}>Tổng bài đã duyệt</p>
                        </div>
                      </div>
                    </section>
                    <section style={{ backgroundColor: '#ffffff', width: '50%', float: 'left', height: '250px', padding: '10px' }}>
                      <Line data={{
                        labels: [
                          "T1",
                          "T2",
                          "T3",
                          "T4",
                          "T5",
                          "T6",
                          "T7",
                          "T8",
                          "T9",
                          "T10",
                          "T11",
                          "T12"
                        ],
                        datasets: [{
                          data: [45, 25, 20, 10, 100, 200, 500, 1030, 1400, 1000, 560, 100],
                          labels: ['Red', 'Blue', 'Purple', 'Yellow'],
                          borderColor: '#08C3C8',
                          backgroundColor: '#BEEEF0',
                          cubicInterpolationMode: 'monotone'
                        }]
                      }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          legend: {
                            display: false
                          },
                          tooltips: {
                            mode: 'index'
                          },
                          hover: {
                            mode: 'index'
                          },
                          scales: {
                            xAxes: [
                              {
                                scaleLabel: {
                                  display: false
                                },
                                ticks: {
                                  fontColor: '#698691'
                                },
                              }
                            ],
                            yAxes: [
                              {
                                scaleLabel: {
                                  display: false
                                },
                                ticks: {
                                  suggestedMin: 0,
                                  suggestedMax: 200,
                                  stepSize: 500,
                                  min: 0,
                                  max: 1500,
                                  beginAtZero: true,
                                  fontColor: '#698691'
                                }
                              }
                            ]
                          }
                        }
                        }
                      />
                    </section>
                  </Col>
                  <Col span={8}>
                    <div>
                      <h3>Thông báo</h3>
                    </div>
                    <section style={{ backgroundColor: '#ffffff', height: '250px' }}>

                    </section>
                  </Col>
                </Row>

                <br />

                <Row gutter={24}>
                  <Col span={14}>
                    <div>
                      <h3>Bài đang dịch</h3>
                    </div>
                    <section style={{ backgroundColor: 'brown', height: '300px' }}>
                      <div
                        className="ag-theme-balham"
                        style={{
                          height: '100%',
                          width: '100%'
                        }}
                      >
                        <AgGridReact
                          columnDefs={[
                            { headerName: "Tiêu đề", field: "title", width: 135, sortable: true, filter: true },
                            { headerName: "Mức độ hòa giải", field: "mediation", width: 130, sortable: true, filter: true },
                            { headerName: "Loại bài", field: "type", width: 135, sortable: true, filter: true },
                            { headerName: "Ngày KT", field: "dateTest", width: 130, sortable: true, filter: true }
                          ]}
                          rowData={[
                            { title: "Testosterone is not the only hormone needed for penis development", mediation: "", type: "Thường", dateTest: "15/03/2019" },
                            { title: "Rare stem cell may be the root of all metastatic cancers", mediation: "", type: "Thường", dateTest: "17/03/2019" },
                            { title: "Breast cancer treatment more effective when determined by tumor cell count", mediation: "", type: "Chuyên ngành", dateTest: "15/03/2019" },
                            { title: "Chuyên ngành 1", mediation: "", type: "Thường", dateTest: "12/03/2019" },
                            { title: "Chuyên ngành 2", mediation: "", type: "Chuyên ngành", dateTest: "22/03/2019" },
                            { title: "Chuyên ngành 3", mediation: "", type: "Thường", dateTest: "19/03/2019" },
                            { title: "Chuyên ngành 4", mediation: "", type: "Chuyên ngành", dateTest: "15/03/2019" },
                          ]}>
                        </AgGridReact>
                      </div>
                      <div style={{ textAlign: 'right', fontSize: '14px', padding: '12px 0' }}>
                        <span style={{ marginRight: '20px' }}>1 đến 7 trong 7</span>
                        ||
                      <span style={{ marginLeft: '20px' }}>
                          <button type="button" style={{ fontSize: '12px', borderRadius: '6px', marginRight: '5px' }}>Prev</button>
                          Trang 1 trong 1
                        <button type="button" style={{ fontSize: '12px', borderRadius: '6px', marginLeft: '5px' }}>Next</button>
                        </span>
                      </div>
                    </section>
                  </Col>
                  <Col span={10}>
                    <div>
                      <h3>Bài cần duyệt</h3>
                    </div>
                    <section style={{ backgroundColor: 'pink', height: '300px' }}>
                      <div
                        className="ag-theme-balham"
                        style={{
                          height: '100%',
                          width: '100%'
                        }}
                      >
                        <AgGridReact
                          columnDefs={[
                            { headerName: "Tiêu đề", field: "title", width: 100 },
                            { headerName: "Loại bài", field: "type", width: 100 },
                            { headerName: "Ngày hoàn thành", field: "dateTest", width: 90 },
                            { headerName: "Phí dịch", field: "cost", width: 75, cellStyle: { textAlign: 'center' } }
                          ]}
                          rowData={[
                            { title: "Testosterone is not the only hormone needed for penis development", cost: "32,521", type: "Thường", dateTest: "15/03/2019" },
                            { title: "Rare stem cell may be the root of all metastatic cancers", cost: "42,312", type: "Thường", dateTest: "17/03/2019" },
                            { title: "Breast cancer treatment more effective when determined by tumor cell count", cost: "23,533", type: "Chuyên ngành", dateTest: "15/03/2019" },
                            { title: "Chuyên ngành 1", cost: "24,213", type: "Thường", dateTest: "12/03/2019" },
                            { title: "Chuyên ngành 2", cost: "32,212", type: "Chuyên ngành", dateTest: "22/03/2019" },
                            { title: "Chuyên ngành 3", cost: "40,523", type: "Thường", dateTest: "19/03/2019" },
                            { title: "Chuyên ngành 4", cost: "45,234", type: "Chuyên ngành", dateTest: "15/03/2019" },
                          ]}>
                        </AgGridReact>
                      </div>
                      <div style={{ textAlign: 'right', fontSize: '14px', padding: '12px 0' }}>
                        <span style={{ marginRight: '20px' }}>1 đến 7 trong 7</span>
                        ||
                      <span style={{ marginLeft: '20px' }}>
                          <button type="button" style={{ fontSize: '12px', borderRadius: '6px', marginRight: '5px' }}>Prev</button>
                          Trang 1 trong 1
                        <button type="button" style={{ fontSize: '12px', borderRadius: '6px', marginLeft: '5px' }}>Next</button>
                        </span>
                      </div>
                    </section>

                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                <div style={{ display: 'flex' }} className="history">
                  <h3 style={{ marginRight: 'auto' }}>Lịch sử</h3>
                  <MonthPicker placeholder="Tháng 2" />
                </div>
                <section style={{ backgroundColor: '#ffffff', height: '500px' }}>
                  <div style={{ height: '100%', padding: '10px' }}>
                    <p style={{
                      display: 'inline-block',
                      backgroundColor: '#f3f3f3',
                      borderRadius: '8px',
                      padding: '5px',
                      fontSize: '14px'
                    }}>Tháng 2</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: '14px' }}>Chưa có nhật ký</div>
                  </div>
                </section>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default TranslateTest