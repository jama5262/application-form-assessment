import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    applicationData: {
      firstName: "Jama",
      lastName: "Mohamed",
      phoneNumber: "+2540790749401",
      emailAddress: "jama3137@gmail.com",
      nationalId: "34341916",
      kraPin: "AAA12345",
      companyName: "JM Studios",
      companyLocation: "Nairobi",
      companyRevenue: "20000"
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
    finishApplication: ({ commit }) => {
      commit("updateLoading", true)
      setTimeout(function () {
        commit("updateCompleted", true)
        commit("updateLoading", false)
      }, 2000);
    }
  },
})
