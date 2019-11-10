import _ from 'lodash'
export default {
  tournaments: state => {
    return state.tournaments
  },
  match: state => matchId => {
    return _.chain(state.tournaments).map(tournament => tournament.matches).flatten().find(match => match.id === parseInt(matchId)).value()
  },
  finishedTeamMatches: state => teamId => {
    return _.chain(state.tournaments).map(tournament => tournament.matches).flatten().filter(match => match.status === 'Finished').filter(match => [match.team1.id, match.team2.id].indexOf(parseInt(teamId)) !== -1).value()
  }
}
