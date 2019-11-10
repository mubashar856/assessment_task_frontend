import tournamentService from '../../../services/tournament'
export default {
  get: ({commit}) => {
    return tournamentService.getTournaments().then(tournaments => {
      commit('set', tournaments)
      return Promise.resolve(tournaments)
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}
