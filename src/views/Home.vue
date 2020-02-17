<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
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
    Stepper,
  },
};
</script>

<style lang="scss" scoped>
</style>