<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="contact in contacts" :key="contact.id" :cols="3">
        <v-card
          :loading="loading"
          class="my-2"
          max-width="280"
          :to="`/detail/${contact.id}`"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img
            max-height="180"
            max-width="280"
            class="mx-1"
            :src="`${contact.avatar}`"
          >
          </v-img>
          <v-card-title>
            {{ contact.first_name }} {{ contact.last_name }}</v-card-title
          >
          <!--v-text="card.title" -->
          <v-card-text>
            <!-- subtitle EMAIL -->
            <div class="my-0 text-subtitle-1">
              <v-icon> mdi-email </v-icon> {{ contact.email }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {},
  setup(props) {
    console.log("props", props.contacts);
  },
});
</script>
