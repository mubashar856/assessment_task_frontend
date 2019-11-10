<template>
    <div class="team-container">
        <div class="team-header">
            {{team.name}}
        </div>
        <div class="team-body">
            <v-simple-table dense>
                <template v-slot:default>
                    <thead style="background-color:#555;">
                    <tr>
                        <th class="text-left" style="color: #fff;">Batsman</th>
                        <th class="text-left" style="color: #fff;">Status</th>
                        <th class="text-left" style="color: #fff;">Runs</th>
                        <th class="text-left" style="color: #fff;">Balls</th>
                        <th class="text-left" style="color: #fff;">4s</th>
                        <th class="text-left" style="color: #fff;">6s</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="stat, name in battingStats" :key="stat.id">
                        <td>{{ name }}</td>
                        <td>{{computeBatsmanStats(stat).status}}</td>
                        <td>{{computeBatsmanStats(stat).runs}}</td>
                        <td>{{computeBatsmanStats(stat).balls}}</td>
                        <td>{{computeBatsmanStats(stat).fours}}</td>
                        <td>{{computeBatsmanStats(stat).sixes}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>

            <v-simple-table dense>
                <template v-slot:default>
                    <thead style="background-color:#555;">
                    <tr>
                        <th class="text-left" style="color: #fff;">Bowler</th>
                        <th class="text-left" style="color: #fff;">Overs</th>
                        <th class="text-left" style="color: #fff;">Runs</th>
                        <th class="text-left" style="color: #fff;">Wickets</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="stat, name in bowlingStats" :key="stat.id">
                        <td>{{ name }}</td>
                        <td>{{computeBowlingStats(stat).overs}}</td>
                        <td>{{computeBowlingStats(stat).runs}}</td>
                        <td>{{computeBowlingStats(stat).wickets}}</td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
</template>
<script>
  import _ from 'lodash'
  export default {
    name: 'Team',
    props: {
      team: Object,
      bowlingTeam: Object,
      stats: Array
    },
    data: () => ({}),
    computed: {
      battingStats: function () {
        return _.chain(this.stats).filter(stat => stat.battingTeamId === this.team.id).groupBy('batsman.name').value()
      },
      bowlingStats: function () {
        return _.chain(this.stats).filter(stat => stat.bowlingTeamId === this.bowlingTeam.id).groupBy('bowler.name').value()
      }
    },
    methods: {
      computeBatsmanStats: function (stats) {
        return {
          runs: _.sumBy(stats, stat => stat.score),
          balls: _.filter(stats, stat => ['wide ball', 'No Ball'].indexOf(stat.scoreType.name) === -1).length,
          fours: _.filter(stats, stat => stat.scoreType.name === '4').length,
          sixes: _.filter(stats, stat => stat.scoreType.name === '6').length,
          status: this.getBatsmanStatus(stats)
        }
      },
      getBatsmanStatus: function (stats) {
        let ball = _.find(stats, stat => ['run out', 'catch out', 'out'].indexOf(stat.scoreType.name) !== -1)
        if (ball) {
          return `${ball.scoreType.name} by ${ball.bowler.name}`
        } else {
          return 'not out'
        }
      },
      computeBowlingStats: function (stats) {
        return {
          runs: _.sumBy(stats, stat => stat.score),
          overs: this.calculateOvers(_.filter(stats, stat => ['wide ball', 'No Ball'].indexOf(stat.scoreType.name) === -1).length),
          wickets: _.filter(stats, stat => ['run out', 'catch out', 'out'].indexOf(stat.scoreType.name) !== -1).length,
        }
      },
      calculateOvers: function (balls) {
        let first = Math.floor(balls / 6);
        let second = this.fmod(balls, 6) / 10;
        return first + second;
      },
      fmod: function (n, p) {
        return n - p * Math.floor(n / p);
      }
    }
  }
</script>

<style>
    .team-container {
        background-color: #f0f0f0;
        box-shadow: 0 0 4px 2px #ccc;
        border-radius: 4px;
    }

    .team-body {
        /*padding: 5px 8px;*/
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    .team-header {
        background-color: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 3px 8px;
        font-weight: bold;
        border-bottom: solid 1px #bbb;
    }
</style>
