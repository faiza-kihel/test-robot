<template>
  <div>
    <v-form class="mt-14">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <h1 >{{ count }} Contact(s)</h1>
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
    <div v-if="contacts.length > 0">
      <OneContact :contacts="this.contacts" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import axios from "axios";
import OneContact from "./OneContact.vue";
import { useStorage } from "@vueuse/core";

export default Vue.extend({
  name: "HomeContact",

  components: { OneContact },
  // bind object

  data: () => ({
    loading: false,
    selection: 1,
    change: null,
    contacts: [] as any,
    count: null,
  }),
  created(): void {
    this.fetchData();
  },
  methods: {
    // if clear is called
    restore(): any {
      this.contacts = JSON.parse(localStorage.getItem("allContact")) as unknown;
      return;
    },
    //get data from api
    async fetchData(): Promise<any> {
      await axios(
        "https://random-data-api.com/api/users/random_user?size=100"
      ).then((res: any) => {
        this.contacts = res.data;
        // stock data to local storage
        useStorage("allContact", this.contacts);
        this.count = this.contacts.length;
        return this.contacts;
      });
    },
    //if filter is called
    onChange() {
      if (this.change) {
        const filter: any = _.filter(
          this.contacts,
          (item: any) =>
            item.first_name.toUpperCase().includes(this.change) ||
            item.last_name.toUpperCase().includes(this.change) ||
            item.first_name.toLowerCase().includes(this.change) ||
            item.last_name.toLowerCase().includes(this.change)
        );
        this.contacts = filter;
        this.count = this.contacts.length
        return this.contacts;
      } else {
        this.restore();
      }
    },
  },
});
</script>
