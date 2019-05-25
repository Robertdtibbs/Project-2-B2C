import Api from '@/services/Api'

// exports object holding our register method
export default {
  register (credentials) {
    return Api().post('/register', credentials)
  }
}
