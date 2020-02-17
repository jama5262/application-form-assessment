<template>
  <v-container style="max-width: 900px">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1 class="text-center mt-12">Loan Application</h1>
        <h5 class="text-center primary--text">Complete the following steps to submit your loan application.</h5>
      </v-col>
      <v-col>
        <Stepper />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Stepper from "@/components/Stepper"
export default {
  components: {
    Stepper
  },
};
</script>

<style scoped>

</style>