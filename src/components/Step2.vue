<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            outlined
            v-model="verificationDetails.nationalId"
            :rules="rules.nationalIdRules"
            label="National ID"
            required
          ></v-text-field>
          <v-text-field
            outlined
            v-model="verificationDetails.kraPin"
            :rules="rules.kraPinRules"
            label="KRA Pin"
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
      <v-btn class="v-btn-primary" color="white" outlined :ripple="false" @click="reset">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    verificationDetails: {
      nationalId: "",
      kraPin: "",
    },
    rules: {
      nationalIdRules: [
        v => !!v || "Naitional ID is required",
        v => /\d{5}/.test(v) || "National ID must be valid"
      ],
      kraPinRules: [
        v => !!v || "KRA Pin is required"
      ],
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