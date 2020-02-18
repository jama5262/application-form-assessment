import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Stepper from "@/components/Stepper"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["v-stepper", "v-row", "v-col", "v-stepper-header", "v-stepper-step", "v-divider", "v-stepper-items", "v-stepper-content", "PersonalDetails", "VerificationDetails", "BusinessDetails", "FormSummarize"]

describe('Stepper', () => {
  it('check if has PersonalDetails', () => {
    const wrapper = shallowMount(Stepper, { store, localVue, stubs })
    expect(wrapper.contains({ ref: 'step-component-0' })).toBe(true)
  })
  it('check if has VerificationDetails', () => {
    const wrapper = shallowMount(Stepper, { store, localVue, stubs })
    expect(wrapper.contains({ ref: 'step-component-1' })).toBe(true)
  })
  it('check if has BusinessDetails', () => {
    const wrapper = shallowMount(Stepper, { store, localVue, stubs })
    expect(wrapper.contains({ ref: 'step-component-2' })).toBe(true)
  })
  it('check if has FormSummarize', () => {
    const wrapper = shallowMount(Stepper, { store, localVue, stubs })
    expect(wrapper.contains({ ref: 'step-component-3' })).toBe(true)
  })

})