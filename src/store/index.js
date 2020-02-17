import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applicationData: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      nationalId: "",
      kraPin: "",
      companyName: "",
      companyLocation: "",
      companyRevenue: ""
    },
    loading: false,
    activeStep: 1
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    updateLoading: (state, loading) => {
      state.loading = loading
    },
    updateActiveStep: (state, step) => {
      state.activeStep = step
    },
  },
  actions: {
    finishApplication: () => {

    }
  },
})
