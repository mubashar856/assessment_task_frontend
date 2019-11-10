import axios from './connection'

export default {
  getTeams: function () {
    return axios.get('teams').then(response => {
      return response.data.data
    }).catch(err => {
      return err
    })
  }
}