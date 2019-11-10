<template>
    <v-app>
        <v-app-bar app color="teal">
            <v-toolbar-title>Cric Stats</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn to="/matches" class="mr-2">
                Matches
            </v-btn>
            <v-btn to="/point-table" class="mr-2">
                Point Table
            </v-btn>
            <v-btn @click="scheduleMatches" class="mr-2" :loading="matchLoader">
                Schedule Matches
            </v-btn>
        </v-app-bar>
        <v-content>
            <div style="height: 12px; width: 100%;"></div>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import matchService from './services/match'
  export default {
    name: 'App',

    data: () => ({
      matchLoader: false
    }),
    methods: {
      scheduleMatches: function () {
        this.matchLoader = true
        matchService.scheduleMatches().then(resp => {
          console.log(resp)
          this.matchLoader = false
        })
      }
    }
  };
</script>
