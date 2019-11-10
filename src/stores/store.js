import Vue from 'vue'
import Vuex from 'vuex'

import tournament from './modules/tournament/index'
import team from './modules/teams/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tournament,
    team
  }
})
