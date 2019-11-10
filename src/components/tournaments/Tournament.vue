<template>
    <div class="tournament-container">
        <div class="tournament-header">
            {{tournament.name}}
        </div>
        <div class="tournament-body">
            <v-row dense>
                <v-col xs="12" sm="12" md="6" lg="6" v-for="match in tournament.matches" :key="match.id">
                    <match :match="match"/>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
    import match from '../matches/Match'
  export default {
    name: 'Tournament',
    components: {match},
    props: {
      tournament: Object
    },
    data: () => ({})
  }
</script>

<style>
    .tournament-container {
        background-color: #f0f0f0;
        box-shadow: 0 0 4px 2px #ccc;
        border-radius: 4px;
    }
    .tournament-body {
        padding: 5px 8px;
    }
    .tournament-header {
        background-color: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        padding: 3px 8px;
        font-weight: bold;
        border-bottom: solid 1px #bbb;
    }
</style>
