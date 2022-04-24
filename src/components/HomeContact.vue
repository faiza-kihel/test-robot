<template>
  <div>
    <v-form class="mt-14">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <h1>{{ count }} Contact(s)</h1>
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
    <OneContact :contacts="userContacts" />
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

    //mounted function for get data from Api
    onMounted(async () => {
      axios("https://random-data-api.com/api/users/random_user?size=100").then(
        (res: any) => {
          contacts.value = res.data;

          // stock data to local storage
          useStorage("allContact", contacts.value);
          count.value = contacts.value.length;
        }
      );
    });

    // call if clear is clicked
    function restore() {
      const array: any = JSON.parse(
        localStorage.getItem("allContact") as string
      );
      contacts.value = array as unknown;
    }
    //call if input is changed
    async function onChange(): Promise<any> {
      if (change.value) {
        const filter: any = _.filter(
          contacts.value,
          (item: any) =>
            item.first_name.toUpperCase().includes(change.value) ||
            item.last_name.toUpperCase().includes(change.value) ||
            item.first_name.toLowerCase().includes(change.value) ||
            item.last_name.toLowerCase().includes(change.value)
        );
        contacts.value = filter;
        count.value = contacts.length;
        return { contacts, count };
      } else {
        restore();
      }
    }
    //return data
    return {
      change,
      userContacts: contacts,
      count,
      restore,
      onChange,
    };
  },
});
</script>
