import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8082/datasters/cric_stats_v2/public/api/'
})
