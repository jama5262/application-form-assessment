<template>
  <v-card class="form-card mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            outlined
            ref="national-id-field"
            v-model="nationalId"
            :rules="rules.nationalIdRules"
            label="National ID"
            required
          ></v-text-field>
          <v-text-field
            outlined
            ref="kra-pin-field"
            v-model="kraPin"
            :rules="rules.kraPinRules"
            label="KRA Pin"
            required
          ></v-text-field>
        </v-form>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        class="v-btn-secondary"
        color="primary"
        outlined
        ref="v-btn-back"
        :ripple="false"
        @click.native="backStep"
      >Back</v-btn>
      <v-btn class="v-btn-primary" color="white" outlined :ripple="false" @click="nextStep">Next</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import { mapFields } from "vuex-map-fields";
import animationShake from "@/animation";

export default {
  data: () => ({
    valid: true,
    verificationDetails: {
      nationalId: "",
      kraPin: ""
    },
    rules: {
      nationalIdRules: [
        v => !!v || "Naitional ID is required",
        v => /\d{5}/.test(v) || "National ID must be valid"
      ],
      kraPinRules: [v => !!v || "KRA Pin is required"]
    }
  }),
  computed: {
    ...mapState(["applicationData"]),
    ...mapFields(["applicationData.nationalId", "applicationData.kraPin"])
  },
  methods: {
    nextStep() {
      if (this.$refs.form.validate()) {
        this.$store.commit("updateActiveStep", 3);
      } else {
        animationShake(".form-card");
      }
    },
    backStep() {
      this.$store.commit("updateActiveStep", 1);
    }
  }
};
</script>