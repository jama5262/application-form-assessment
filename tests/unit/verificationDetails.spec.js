import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import VerificationDetails from "@/components/VerificationDetails"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["v-card", "v-list-item", "v-list-item-content", "v-form", "v-row", "v-col", "v-text-field", "v-card-actions", "v-spacer", "v-btn"]

describe('VerificationDetails', () => {

  beforeEach(() => {
    const data = {
      nationalId: "12345678",
      kraPin: "AAA12345",
    }
    store.state.applicationData = { ...data }
  })

  it('button on click step back', async () => {
    const wrapper = shallowMount(VerificationDetails, { store, localVue, stubs })
    let button = wrapper.find({ ref: 'v-btn-back' })
    button.trigger("click")
    expect(store.state.activeStep).toBe(1)
  })

  it('render national id details to inputs', () => {
    const wrapper = shallowMount(VerificationDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'national-id-field' }).attributes().value).toBe("12345678")
  })

  it('render kra pin details to inputs', () => {
    const wrapper = shallowMount(VerificationDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'kra-pin-field' }).attributes().value).toBe("AAA12345")
  })

})