<template>
  <v-card class="form-card mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                ref="company-name-field"
                v-model="companyName"
                outlined
                :rules="rules.companyNameRules"
                label="Company Name"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                ref="company-location-field"
                v-model="companyLocation"
                outlined
                :rules="rules.companyLocationRules"
                label="Company Location"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            ref="company-revenue-field"
            outlined
            v-model="companyRevenue"
            :rules="rules.companyRevenueRules"
            label="Company Revenue"
            required
          ></v-text-field>
        </v-form>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn ref="v-btn-back" class="v-btn-secondary" color="primary" outlined :ripple="false " @click.native="backStep">Back</v-btn>
      <v-btn ref="v-btn-next" class="v-btn-primary" color="white" :loading="loading" outlined :ripple="false"  @click.native="submit">Confirm</v-btn>
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
    rules: {
      companyNameRules: [v => !!v || "Company name is required"],
      companyLocationRules: [v => !!v || "Company location is required"],
      companyRevenueRules: [v => !!v || "Company revenue is required"]
    }
  }),
  computed: {
    ...mapState(["loading", "applicationData"]),
    ...mapFields([
      "applicationData.companyName",
      "applicationData.companyLocation",
      "applicationData.companyRevenue"
    ])
  },
  methods: {
    backStep() {
      this.$store.commit("updateActiveStep", 2)
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.commit("updateActiveStep", 4)
      } else {
        animationShake(".form-card")
      }
    }
  }
};
</script>