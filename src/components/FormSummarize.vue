<template>
  <v-card class="form-card mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <transition name="fade" mode="out-in">
          <div v-if="!completed">
            <v-row>
              <v-col class="pa-0 pl-3 pt-3" cols="12">
                <span class="overline font-weight-black primary--text">Personal Details</span>
              </v-col>
              <v-col xs="12" sm="6" md="6">
                <span class="caption">First Name</span>
                <br />
                <span ref="first-name" class="font-weight-black">{{ applicationData.firstName }}</span>
              </v-col>
              <v-col xs="12" sm="6" md="6">
                <span class="caption">Last Name</span>
                <br />
                <span ref="last-name" class="font-weight-black">{{ applicationData.lastName }}</span>
              </v-col>
              <v-col xs="12" sm="12" md="6">
                <span class="caption">Phone Number</span>
                <br />
                <span ref="phone-number" class="font-weight-black">{{ applicationData.phoneNumber }}</span>
              </v-col>
              <v-col xs="12" sm="6" md="6">
                <span class="caption">Email Address</span>
                <br />
                <span ref="email-address" class="font-weight-black">{{ applicationData.emailAddress }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pa-0 pl-3 pt-3" cols="12">
                <span class="overline font-weight-black primary--text">Verification Details</span>
              </v-col>
              <v-col xs="12" sm="6" md="6">
                <span class="caption">National ID</span>
                <br />
                <span ref="company-name" class="font-weight-black">{{ applicationData.nationalId }}</span>
              </v-col>
              <v-col xs="12" sm="6" md="6">
                <span class="caption">KRA Pin</span>
                <br />
                <span ref="company-location" class="font-weight-black">{{ applicationData.kraPin }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pa-0 pl-3 pt-3" cols="12">
                <span class="overline font-weight-black primary--text">Business Details</span>
              </v-col>
              <v-col xs="12" sm="6" md="6">
                <span class="caption">Company Name</span>
                <br />
                <span ref="company-revenue" class="font-weight-black">{{ applicationData.companyName }}</span>
              </v-col>
              <v-col xs="12" sm="6" md="6">
                <span class="caption">Company Location</span>
                <br />
                <span ref="national-id" class="font-weight-black">{{ applicationData.companyLocation }}</span>
              </v-col>
              <v-col cols="12">
                <span class="caption">Company Revenue</span>
                <br />
                <span ref="kra-pin" class="font-weight-black">{{ applicationData.companyRevenue }}</span>
              </v-col>
            </v-row>
          </div>
          <Complete v-else />
        </transition>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions v-if="!completed">
      <v-spacer></v-spacer>
      <v-btn
        class="v-btn-secondary"
        color="primary"
        outlined
        ref="v-btn-back"
        :ripple="false "
        @click.native="backStep"
      >Back</v-btn>
      <v-btn
        class="v-btn-primary"
        color="white"
        :loading="loading"
        outlined
        :ripple="false"
        @click="finishApplication"
      >Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import Complete from "@/components/Complete";

export default {
  computed: {
    ...mapState(["loading", "completed", "applicationData"]),
    ...mapFields([
      "applicationData.companyName",
      "applicationData.companyLocation",
      "applicationData.companyRevenue"
    ])
  },
  methods: {
    ...mapActions(["finishApplication"]),
    backStep() {
      this.$store.commit("updateActiveStep", 3);
    },
  },
  components: {
    Complete
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>