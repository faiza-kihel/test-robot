<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center v-toolbar__title">Contact App For Test</div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {},
  // setup() {},

  data: () => ({
    loading: false,
    selection: 1,
  }),
});
</script>
