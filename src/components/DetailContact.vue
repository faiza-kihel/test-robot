<template>
  <div>
    <div class="container mt-16">
      <div class="row justify-center">
        <div class="col col-6">
          <v-btn depressed to="/home">
            <router-link to="/home"></router-link>
            <v-icon left> mdi-arrow-left </v-icon>Go Back To Contact List</v-btn
          >

          <v-card class="my-2" max-width="600" max-height="400">
            <template slot="progress"> </template>
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
import { computed, onMounted, ref } from "@vue/composition-api";
import router from "@/router";
export default Vue.extend({
  name: "DetailContact",
  components: {},
  setup() {
    //
    const contact = ref({});
    const params = ref(null as any);

    //mounted function for get data from Api
    onMounted(async () => {
      //get id params
      const prs: any = Number(router.app.$route.params.id);
      params.value = prs;
      console.log("params", params);
      //get contact by
      await axios(
        ` https://random-data-api.com/api/users/random_user?id=${params.value}`
      ).then((res) => {
        contact.value = res.data;
      });
    });

    //return data
    return {
      contact,
      params,
    };
  },
});
</script>
