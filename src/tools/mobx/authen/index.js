import { observable, action } from 'mobx'

class Authen {
  constructor (Store) {
    this.Store = Store
  }
  @observable isLogin = localStorage.getItem('TOKEN') || false
  @action onLogin = () => this.isLogin = true
  @action checkLogin = () => this.isLogin = !!localStorage.getItem('TOKEN')
}

export { Authen }
