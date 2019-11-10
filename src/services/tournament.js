import axios from './connection'

export default {
  getTournaments: function () {
    return axios.get('tournaments').then(response => {
      return response.data.data
    }).catch(err => {
      return err
    })
  }
}