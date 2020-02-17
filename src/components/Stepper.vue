<template>
  <div>
    <v-stepper v-model="active" alt-labels>
      <template>
        <v-row justify="center">
          <v-col lg="7" md="7" sm="12">
            <v-stepper-header>
              <template v-for="(item, index) in steps">
                <v-stepper-step
                  :key="`${index}-step`"
                  :complete="active > index"
                  :step="index + 1"
                >{{ item }}</v-stepper-step>

                <v-divider v-if="(index + 1) !== steps.length" :key="index"></v-divider>
              </template>
            </v-stepper-header>
          </v-col>
        </v-row>

        <v-stepper-items>
          <v-stepper-content
            v-for="(item, index) in steps"
            :key="`${index}-content`"
            :step="index + 1"
          >
              <Step1 v-if="index === 0"/>
              <Step2 v-else-if="index === 1"/>
              <Step3 v-else-if="index === 2"/>

            <v-btn color="primary" @click="nextStep(index + 1)">Continue</v-btn>
            <v-btn text  @click="backStep(index + 1)">Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>
</template>

<script>

import Step1 from "@/components/Step1"
import Step2 from "@/components/Step2"
import Step3 from "@/components/Step3"

export default {
  data() {
    return {
      active: 1,
      steps: ["Personal Details", "Verification Details", "Business Details"],
    };
  },
  methods: {
    nextStep(n) {
      if (n !== this.steps.length) {
        this.active = n + 1;
      }
    },
    backStep(n) {
      if (n !== 0) {
        this.active = n - 1;
      }
    }
  },
  components: {
    Step1,
    Step2,
    Step3,
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