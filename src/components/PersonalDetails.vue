<template>
  <v-card class="form-card mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                ref="first-name-field"
                v-model="firstName"
                outlined
                :rules="rules.firstNameRules"
                label="First Name"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                ref="last-name-field"
                v-model="lastName"
                outlined
                :rules="rules.lastNameRules"
                label="Last Name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            ref="phone-number-field"
            outlined
            v-model="phoneNumber"
            :rules="rules.phoneNumberRules"
            label="Phone Number"
            required
          ></v-text-field>
          <v-text-field
            ref="email-address-field"
            outlined
            v-model="emailAddress"
            :rules="rules.emailRules"
            label="Email Address"
            required
          ></v-text-field>
        </v-form>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="v-btn-primary" color="white" outlined :ripple="false" @click="nextStep">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import animationShake from "@/animation";

export default {
  data: () => ({
    valid: true,
    rules: {
      firstNameRules: [v => !!v || "First name is required"],
      lastNameRules: [v => !!v || "Last name is required"],
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
  computed: {
    ...mapFields([
      "applicationData.firstName",
      "applicationData.lastName",
      "applicationData.phoneNumber",
      "applicationData.emailAddress"
    ])
  },
  methods: {
    nextStep() {
      if (this.$refs.form.validate()) {
        this.$store.commit("updateActiveStep", 2);
      } else {
        animationShake(".form-card");
      }
    }
  }
};
</script>