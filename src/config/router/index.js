const routesNotAuthen = [
  {
    displayName: 'Đăng nhập',
    path: '/login',
    component: 'login',
    exact: true
  }
]

const routesAuthen = [
  {
    displayName: 'Trang Chủ',
    path: '/',
    component: 'app',
    exact: false
  }
]

const listRoutesAuthen = [
  {
    displayName: 'Tổng Hợp',
    path: '/dashboard',
    component: 'dashboard',
    exact: false
  },
  {
    displayName: '',
    path: '/posts',
    component: 'posts',
    exact: false
  },
  {
    displayName: 'Mod',
    path: '/mod',
    component: 'mod',
    exact: false
  },
  {
    displayName: 'Cài Đặt',
    path: '/setting',
    component: 'setting',
    exact: false
  }
]

export { routesNotAuthen, routesAuthen, listRoutesAuthen }
