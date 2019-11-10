<template>
    <div>
        <v-progress-linear indeterminate color="teal" v-if="loader"></v-progress-linear>
        <div v-if="match">
            <team :team="match.team1" :bowlingTeam="match.team2" :stats="stats"></team>
            <br/>
            <team :team="match.team2" :bowlingTeam="match.team1" :stats="stats"></team>
        </div>
    </div>
</template>
<script>
  import team from '../components/detail/Team'
  import matchStatsService from '../services/matchStats'
  import _ from 'lodash'
  export default {
    name: 'MatchStats',
    components: {team},
    data: () => ({
      loader: false,
      stats: []
    }),
    computed: {
      match: function () {
        return this.$store.getters['tournament/match'](this.matchId)
      },
      matchId: function () {
        return this.$route.params.matchId
      }
    },
    watch: {
      match: function () {
        this.getMatchStats()
      }
    },
    methods: {
      getTournaments: function () {
        this.$store.dispatch('tournament/get')
      },
      getMatchStats: function () {
        if (!_.isEmpty(this.match)) {
          if (this.match.status !== 'Scheduled') {
            matchStatsService.getMatchStats(this.matchId).then(stats => {
              this.loader = false
              this.stats = stats
            }).catch(err => {
              console.log(err)
              this.loader = false
            })
          }
        }
      }
    },
    mounted () {
      this.loader = true
      this.getTournaments()
    }
  }
</script>
