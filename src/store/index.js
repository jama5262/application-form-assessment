import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export const finishApplication = ({ commit }) => {
  commit("updateLoading", true)
  setTimeout(function () {
    commit("updateLoading", false)
    commit("updateCompleted", true)
  }, 2000);
}

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
    completed: false,
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
    updateCompleted: (state, completed) => {
      state.completed = completed
    },
    updateActiveStep: (state, step) => {
      state.activeStep = step
    },
  },
  actions: {
    finishApplication
  },
})
