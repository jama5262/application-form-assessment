<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="BusinessDetails.companyName"
                outlined
                :rules="rules.companyNameRules"
                label="Company Name"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="BusinessDetails.companyLocation"
                outlined
                :rules="rules.companyLocationRules"
                label="Company Location"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            outlined
            v-model="BusinessDetails.companyRevenue"
            :rules="rules.companyRevenueRules"
            label="Company Revenue"
            required
          ></v-text-field>
        </v-form>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>-->
      <v-spacer></v-spacer>
      <v-btn class="v-btn-secondary" color="primary" outlined :ripple="false " @click="reset">Back</v-btn>
      <v-btn class="v-btn-primary" color="white" outlined :ripple="false" @click="reset">Finish</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    BusinessDetails: {
      companyName: "",
      companyLocation: "",
      companyRevenue: ""
    },
    rules: {
      companyNameRules: [v => !!v || "Company name is required"],
      companyLocationRules: [v => !!v || "Company location is required"],
      companyRevenueRules: [v => !!v || "Company revenue is required"]
    }
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>