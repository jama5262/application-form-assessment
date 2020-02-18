<template>
  <div>
    <v-stepper v-model="activeStep" alt-labels>
      <template>
        <v-row justify="center">
          <v-col lg="8" md="8" sm="12" xs="12" class="pa-0">
            <v-stepper-header>
              <template v-for="(item, index) in steps">
                <v-stepper-step
                  :key="`${index}-step`"
                  :complete="activeStep > index"
                  :step="index + 1"
                >
                  <span class="text-center font-weight-light subtitle-2">{{ item }}</span>
                </v-stepper-step>

                <v-divider v-if="(index + 1) !== steps.length" :key="index"></v-divider>
              </template>
            </v-stepper-header>
          </v-col>
        </v-row>
        <v-stepper-items>
          <v-stepper-content
            v-for="(item, index) in steps"
            :key="`${index}-content`"
            :step="index + 1">
              <PersonalDetails v-if="index === 0"/>
              <VerificationDetails v-else-if="index === 1"/>
              <BusinessDetails v-else-if="index === 2"/>
              <FormSummarize v-else-if="index === 3"/>
          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PersonalDetails from "@/components/PersonalDetails"
import VerificationDetails from "@/components/VerificationDetails"
import BusinessDetails from "@/components/BusinessDetails"
import FormSummarize from "@/components/FormSummarize"

export default {
  data() {
    return {
      steps: ["Personal Details", "Verification Details", "Business Details", "Summarize"],
    };
  },
  computed: {
    ...mapState(["activeStep"])
  },
  components: {
    PersonalDetails,
    VerificationDetails,
    BusinessDetails,
    FormSummarize,
  },
};
</script>

<style scoped>
.v-stepper,
.v-stepper__header {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
</style>