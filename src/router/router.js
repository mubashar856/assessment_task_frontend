import Vue from 'vue'
import VueRouter from 'vue-router'
import Matches from '@/containers/Matches'
import PointTable from '@/containers/PointTable'
import MatchStats from '@/containers/MatchStats'


Vue.use(VueRouter)

const routes = [
  { path: '/matches', component: Matches },
  { path: '/point-table', component: PointTable },
  { path: '/matches/:matchId', component: MatchStats},
  { path: '*', component: Matches},
]

export default new VueRouter({
  routes // short for `routes: routes`
})
