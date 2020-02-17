import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {
  },
  getters: {
    firstStepData: state => {
      
    },
    secondStepData: state => {

    },
    thirdStepData: state => {

    },
    updateLoading: state => {
      
    },
    updateActiveStep: state => {
      
    }
  },
  actions: {
    finishApplication: () => {
      
    }
  },
})
