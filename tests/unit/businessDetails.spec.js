import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import BusinessDetails from "@/components/BusinessDetails"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["v-card", "v-list-item", "v-list-item-content", "v-form", "v-row", "v-col", "v-text-field", "v-card-actions", "v-spacer", "v-btn"]

describe('BusinessDetails', () => {

  beforeEach(() => {
    const data = {
      companyName: "Company Name",
      companyLocation: "Location",
      companyRevenue: "20000"
    }
    store.state.applicationData = { ...data }
  })

  it('button on click step back', async () => {
    const wrapper = shallowMount(BusinessDetails, { store, localVue, stubs })
    let button = wrapper.find({ ref: 'v-btn-back' })
    button.trigger("click")
    expect(store.state.activeStep).toBe(2)
  })

  it('render company name details to inputs', () => {
    const wrapper = shallowMount(BusinessDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'company-name-field' }).attributes().value).toBe("Company Name")
  })

  it('render company location details to inputs', () => {
    const wrapper = shallowMount(BusinessDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'company-location-field' }).attributes().value).toBe("Location")
  })

  it('render company revenue details to inputs', () => {
    const wrapper = shallowMount(BusinessDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'company-revenue-field' }).attributes().value).toBe("20000")
  })

})