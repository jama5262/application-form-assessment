<template>
  <div>
    <v-row class="hidden-sm-and-down">
      <v-col cols="12" ref="sm-screen-title-text" class="primary--text display-3 font-weight-light text-center">{{ title }}</v-col>
      <v-col ref="sm-screen-desc-text" class="headline font-weight-light text-center">{{ description }}</v-col>
    </v-row>
    <v-row class="hidden-md-and-up ">
      <v-col cols="12 " ref="lg-screen-title-text"  class="primary--text display-1 font-weight-light text-center">{{ title }}</v-col>
      <v-col ref="lg-screen-desc-text" class="body-1 font-weight-light text-center">{{ description }}</v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Completed",
        description: "Your loan application is being processed and we will contact you soon"
      }
    },
  }
</script>