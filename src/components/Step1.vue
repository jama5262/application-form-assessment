<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="personalDetails.firstName"
                outlined
                :rules="rules.firstNameRules"
                label="First Name"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="personalDetails.lastName"
                outlined
                :rules="rules.lastNameRules"
                label="Last Name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            outlined
            v-model="personalDetails.phoneNumber"
            :rules="rules.phoneNumberRules"
            label="Phone Number"
            required
          ></v-text-field>
          <v-text-field
            outlined
            v-model="personalDetails.emailAddress"
            :rules="rules.emailRules"
            label="Email Address"
            required
          ></v-text-field>
        </v-form>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>-->
      <v-spacer></v-spacer>
      <v-btn class="v-btn-primary" color="white" outlined :ripple="false" @click="reset">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    personalDetails: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: ""
    },
    rules: {
      firstNameRules: [
        v => !!v || "First name is required"
      ],
      lastNameRules: [
        v => !!v || "Last name is required"
      ],
      phoneNumberRules: [
        v => !!v || "Last name is required",
        v => /(\+?2547)\d{8}|(07)\d{8}/.test(v) || "Phone number must be valid"
      ],
      emailRules: [
        v => !!v || "Email address is required",
        v => /.+@.+\..+/.test(v) || "Email address must be valid"
      ]
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

<style scoped>
</style>