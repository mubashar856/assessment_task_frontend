import axios from './connection'

export default {
  scheduleMatches: function () {
    return axios.post('matches/schedule').then(response => {
      return response.data
    }).catch(err => {
      return err
    })
  }
}