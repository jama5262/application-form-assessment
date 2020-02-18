import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import FormSummarize from "@/components/FormSummarize"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["v-card", "v-list-item", "v-list-item-content", "v-row", "v-col", "v-card-actions", "v-spacer", "v-btn", "transition"]

describe('FormSummarize', () => {

  beforeEach(() => {
    const data = {
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "0712345678",
      emailAddress: "email@gmail.com",
      nationalId: "Company Name",
      kraPin: "Location",
      companyName: "20000",
      companyLocation: "12345678",
      companyRevenue: "AAA12345"
    }
    store.state.applicationData = { ...data }
  })

  it('button on click step back', async () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    let button = wrapper.find({ ref: 'v-btn-back' })
    button.trigger("click")
    expect(store.state.activeStep).toBe(3)
  })

  it('render first name details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'first-name' }).text()).toBe("First Name")
  })

  it('render last name details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'last-name' }).text()).toBe("Last Name")
  })

  it('render phone number details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'phone-number' }).text()).toBe("0712345678")
  })

  it('render email address details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'email-address' }).text()).toBe("email@gmail.com")
  })

  it('render company name details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'company-name' }).text()).toBe("Company Name")
  })

  it('render company location details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'company-location' }).text()).toBe("Location")
  })

  it('render company revenue details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'company-revenue' }).text()).toBe("20000")
  })

  it('render national id details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'national-id' }).text()).toBe("12345678")
  })

  it('render kra pin details', () => {
    const wrapper = shallowMount(FormSummarize, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'kra-pin' }).text()).toBe("AAA12345")
  })
})