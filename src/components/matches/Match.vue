<template>
    <div class="match-container">
        <b>
            {{match.status}}
        </b>
        <div>
            {{match.matchTime}}
        </div>
        <v-row dense>
            <v-col md="6" lg="6">{{match.team1.name}}</v-col>
            <v-col md="6" lg="6" style="text-align: right;" v-if="!match.stats">--</v-col>
            <v-col md="6" lg="6" style="text-align: right;" v-if="match.stats">
                {{match.stats.team1Score}}/{{match.stats.team1Wickets}} ({{match.stats.team1Overs}})
            </v-col>
            <v-col md="6" lg="6">{{match.team2.name}}</v-col>
            <v-col md="6" lg="6" style="text-align: right;" v-if="!match.stats">--</v-col>
            <v-col md="6" lg="6" style="text-align: right;" v-if="match.stats">
                {{match.stats.team2Score}}/{{match.stats.team2Wickets}} ({{match.stats.team2Overs}})
            </v-col>
        </v-row>
        <div style="width: 100%; height: 1px; background-color: #ccc"></div>
        <div style="float: left; font-size: 14px;">{{match.status != 'Scheduled' ? match.remarks : 'Match is Scheduled'}}</div>
        <div style="float: right">
            <v-btn :disabled="match.status == 'Scheduled'" color="teal" x-small :to="'/matches/'+match.id">detail
            </v-btn>
        </div>
        <div style="clear: both"></div>
    </div>
</template>
<script>
  export default {
    name: 'Match',
    props: {
      match: Object
    },
    data: () => ({})
  }
</script>

<style>
    .match-container {
        border: solid 1px #ccc;
        background-color: #fff;
        padding: 4px 7px;
        border-radius: 5px;
    }
</style>