<template>
    <div>
        <v-simple-table dense>
            <template v-slot:default>
                <thead style="background-color:#555;">
                <tr>
                    <th class="text-left" style="color: #fff;">Team</th>
                    <th class="text-left" style="color: #fff;">Matches Played</th>
                    <th class="text-left" style="color: #fff;">Win</th>
                    <th class="text-left" style="color: #fff;">Loss</th>
                    <th class="text-left" style="color: #fff;">No Result</th>
                    <th class="text-left" style="color: #fff;">Points</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="team in teams" :key="team.id">
                    <td>{{team.name}}</td>
                    <td>{{getDetail(team.id).played}}</td>
                    <td>{{getDetail(team.id).wins}}</td>
                    <td>{{getDetail(team.id).loss}}</td>
                    <td>0</td>
                    <td>{{getDetail(team.id).points}}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>
<script>
  import _ from 'lodash'
  export default {
    name: 'PointTable',
    data: () => ({
      loader: false
    }),
    computed: {
      teams: function () {
        return this.$store.getters['team/teams']
      },
    },
    methods: {
      getDetail: function (teamId) {
        let teamMatches = this.$store.getters['tournament/finishedTeamMatches'](teamId)
        let played = teamMatches.length
        let wins = _.filter(teamMatches, match => match.stats.winningTeam.id === teamId).length
        let loss = played - wins
        let points = wins * 2
        return {played, wins, loss, points}
      },
      getTournaments: function () {
        this.loader = true
        this.$store.dispatch('tournament/get').then(resp => {
          console.log(resp)
          this.loader = false
        })
      },
      getTeams: function () {
        this.loader = true
        this.$store.dispatch('team/get').then(resp => {
          console.log(resp)
          this.loader = false
        })
      }
    },
    mounted () {
      this.getTournaments()
      this.getTeams()
    }
  }
</script>
