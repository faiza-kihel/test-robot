<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="contact in contactsData" :key="contact.id" :cols="3">
        <v-card
          class="my-2"
          max-width="280"
          max-height="340"
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
            max-height="240"
            max-width="280"
            class="mx-1"
            :src="`${contact.avatar}`"
          >
          </v-img>
          <v-card-title>
            {{ contact.first_name }} {{ contact.last_name }}</v-card-title
          >

          <v-card-text>
            <!-- subtitle EMAIL -->
            <div class="my-0">
              <v-icon> mdi-email </v-icon> {{ contact.email }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { computed } from "@vue/composition-api";
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {},
  props: ["contacts"],
  //get contacts props
  setup(props) {
    const contactsData = computed(() => {
      return props.contacts;
    });
    return { contactsData };
  },
});
</script>
<style scoped>
.v-sheet.v-card:hover {
  box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%),
    0 3px 14px 2px rgb(0 0 0 / 12%);
}
</style>
