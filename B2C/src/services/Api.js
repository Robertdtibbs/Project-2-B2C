import axios from 'axios'

// creating an axios object that will point to our backend base URL
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8088/'
  })
}
