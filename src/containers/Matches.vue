<template>
    <div>
        <v-progress-linear indeterminate color="teal" v-if="loader"></v-progress-linear>
        <tournament v-for="tournament in tournaments" :key="tournament.id" :tournament="tournament"></tournament>
    </div>
</template>
<script>
  import tournament from '../components/tournaments/Tournament'
  export default {
    name: 'Matches',
    components: {tournament},
    data: () => ({
      loader: false,
    }),
    computed: {
      tournaments: function () {
        return this.$store.getters['tournament/tournaments']
      }
    },
    methods: {
      getTournaments: function () {
        this.$store.dispatch('tournament/get').then(resp => {
          console.log(resp)
          this.loader = false
        })
      }
    },
    mounted () {
      this.loader = true
      this.getTournaments()
      Echo.channel('cric-stats').listen('MatchStatsEvent', (e) => {
        this.getTournaments()
      });
    }
  }
</script>
