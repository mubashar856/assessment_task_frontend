import axios from './connection'

export default {
  getMatchStats: function (matchId) {
    let params = {matchId}
    return axios.get('match-stats', {params}).then(response => {
      return response.data.data
    }).catch(err => {
      return err
    })
  }
}