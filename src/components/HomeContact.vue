<template v-if="isLoading">
  <div>
    <v-form class="mt-14">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <div v-if="isLoading">
              <v-progress-circular :indeterminate="isLoading" color="primary">
              </v-progress-circular>
            </div>
            <div v-if="!isLoading">
              <div class="title">{{ count }} Contact(s)</div>
            </div>

            <!-- <h1>{{ count }} Contact(s)</h1> -->
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="change"
              @input="onChange()"
              @click:clear="restore()"
              label="search..."
              outlined
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <OneContact :contacts="contacts" />

    <!-- <div v-if="contacts.length > 0">
     
    </div> -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";

import _ from "lodash";
import axios from "axios";
import OneContact from "./OneContact.vue";
import { useStorage } from "@vueuse/core";
import { onMounted, ref } from "@vue/composition-api";

export default Vue.extend({
  //name: "HomeContact",

  components: { OneContact },

  // bind object
  setup() {
    // init varriable
    const change = ref(null);
    const contacts = ref([] as any);
    const count = ref(null);
    const isLoading = ref(true);
    
    //mounted function for get data from Api
    onMounted(async () => {
      axios("https://random-data-api.com/api/users/random_user?size=100").then(
        (res: any) => {
          contacts.value = res.data;
          isLoading.value = false;

          // stock data to local storage
          useStorage("allContact", contacts.value);
          count.value = contacts.value.length;
        }
      );
    });

    // call if clear is clicked
    function restore() {
      isLoading.value = true;
      const array: any = JSON.parse(
        localStorage.getItem("allContact") as string
      );
      contacts.value = array as unknown;
      isLoading.value = false;
      count.value = contacts.value.length;
    }
    //call if input is changed
    async function onChange(): Promise<any> {
      if (change.value) {
        isLoading.value = true;
        const filter: any = _.filter(
          contacts.value,
          (item: any) =>
            item.first_name.toUpperCase().includes(change.value) ||
            item.last_name.toUpperCase().includes(change.value) ||
            item.first_name.toLowerCase().includes(change.value) ||
            item.last_name.toLowerCase().includes(change.value)
        );
        contacts.value = filter;
        isLoading.value = false;
        count.value = contacts.value.length;
        return { contacts, count };
      } else {
        restore();
      }
    }
    //return data
    return {
      change,
      contacts,
      isLoading,
      count,
      restore,
      onChange,
    };
  },
});
</script>
<style scoped>
.title {
  font-size: 2.5rem !important;
  font-weight: 400;
  padding-top: 10px;
}
.v-sheet.v-card:hover {
  box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%),
    0 3px 14px 2px rgb(0 0 0 / 12%);
}
</style>
