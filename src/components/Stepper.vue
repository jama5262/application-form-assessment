<template>
  <div>
    <v-stepper v-model="activeStep" alt-labels>
      <template>
        <v-row justify="center">
          <v-col lg="7" md="7" sm="12">
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
              <Step1 v-if="index === 0"/>
              <Step2 v-else-if="index === 1"/>
              <Step3 v-else-if="index === 2"/>
          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Step1 from "@/components/Step1"
import Step2 from "@/components/Step2"
import Step3 from "@/components/Step3"

export default {
  data() {
    return {
      steps: ["Personal Details", "Verification Details", "Business Details"],
    };
  },
  computed: {
    ...mapState(["activeStep"])
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