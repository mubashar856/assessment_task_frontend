import teamService from '../../../services/team'
export default {
  get: ({commit}) => {
    return teamService.getTeams().then(teams => {
      commit('set', teams)
      return Promise.resolve(teams)
    }).catch(error => {
      return Promise.reject(error)
    })
  }
}
