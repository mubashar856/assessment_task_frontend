import mutation from './mutation'
import getter from './getter'
import action from './action'

export default {
  namespaced: true,
  state: {
    teams: []
  },
  mutations: mutation,
  actions: action,
  getters: getter
}
