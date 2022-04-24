<template>
  <div>
    <div class="container mt-16">
      <div class="row justify-center">
        <div class="col col-6">
          <v-btn depressed to="/home">
            <router-link to="/home"></router-link>
            <v-icon left> mdi-arrow-left </v-icon>Go Back To Contact List</v-btn
          >

          <v-card
            :loading="loading"
            class="my-2"
            max-width="600"
            max-height="400"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <div class="container">
              <div class="row">
                <div class="col col-4 align-self-center">
                  <v-img
                    max-width="300"
                    class="mx-1"
                    :src="`${contact.avatar}`"
                  >
                  </v-img>
                </div>
                <div class="col">
                  <h1 class="text-h4">
                    {{ contact.first_name }} {{ contact.last_name }}
                  </h1>
                  <!--Phone number -->

                  <v-card-text>
                    <v-card-item-subtitle class="ml-8"
                      >Phone</v-card-item-subtitle
                    >
                    <div class="my-0">
                      <v-icon class="mr-2 mb-2"> mdi-phone </v-icon>
                      {{ contact.phone_number }}
                    </div>
                  </v-card-text>
                  <!-- Date of bird -->

                  <v-card-text>
                    <v-card-item-subtitle class="ml-8"
                      >Date Bird</v-card-item-subtitle
                    >
                    <div class="my-0">
                      <v-icon class="mr-2 mb-2"> mdi-cake </v-icon>
                      {{ contact.date_of_birth }}
                    </div>
                  </v-card-text>
                  <!-- Social Number -->

                  <v-card-text>
                    <v-card-item-subtitle class="ml-8"
                      >Social Number</v-card-item-subtitle
                    >
                    <div class="my-0">
                      <v-icon class="mr-2 mb-2">
                        mdi-card-account-details
                      </v-icon>
                      {{ contact.social_insurance_number }}
                    </div>
                  </v-card-text>
                  <!-- Job -->
                  <v-card-text>
                    <v-card-item-subtitle class="ml-8"
                      >Job</v-card-item-subtitle
                    >
                    <div class="my-0">
                      <v-icon class="mr-2 mb-2"> mdi-briefcase </v-icon>
                      {{ contact.employment.title }}
                    </div>
                  </v-card-text>
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { computed, ref } from "@vue/composition-api";
//import { useRoute, Route } from 'vue-router'
export default Vue.extend({
  name: "DetailContact",
  components: {},
  setup() {
    const conatct = ref({});
    const params = ref(null as any);
    //get id params
    const id = computed(function () {
      // const route :any;
      // return route.params.value.id;
    });

    return {
      id: id,
    };
  },

  // created() {
  //   this.getParams();
  //   if (this.params) {
  //     this.getContact();
  //   }
  // },
  // methods: {
  //   getParams() {
  //     const prs: any = Number(this.$route.params.id);
  //     this.params = prs;
  //     console.log("params");
  //     return this.params;
  //   },
  //   async getContact() {
  //     await axios(
  //       ` https://random-data-api.com/api/users/random_user?id=${this.params}`
  //     ).then((res) => {
  //       this.contact = res.data;
  //       return this.contact;
  //     });
  //   },
  // },
});
</script>
