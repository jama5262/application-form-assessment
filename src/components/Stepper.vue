<template>
  <div>
    <v-stepper v-model="active" alt-labels>
      <template>
        <v-stepper-header>
          <template v-for="(item, index) in steps">
            <v-stepper-step
              :key="`${index}-step`"
              :complete="active > index"
              :step="index + 1"
              editable
            >{{ item }}</v-stepper-step>

            <v-divider v-if="(index + 1) !== steps.length" :key="index"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content
            v-for="(item, index) in steps"
            :key="`${index}-content`"
            :step="index + 1"
          >
            <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

            <v-btn color="primary" @click="nextStep(index + 1)">Continue</v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </template>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      steps: ["Personal Details", "Verification Details", "Business Details"]
    };
  },
  methods: {
    nextStep(n) {
      if (n === this.steps.length) {
        this.active = 1;
      } else {
        this.active = n + 1;
      }
    }
  }
};
</script>