import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import PersonalDetails from "@/components/PersonalDetails"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["v-card", "v-list-item", "v-list-item-content", "v-form", "v-row", "v-col", "v-text-field", "v-card-actions", "v-spacer", "v-btn"]

describe('PersonalDetails', () => {

  beforeEach(() => {
    const data = {
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "0712345678",
      emailAddress: "email@gmail.com",
    }
    store.state.applicationData = { ...data }
  })

  it('render first name details to inputs', () => {
    const wrapper = shallowMount(PersonalDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'first-name-field' }).attributes().value).toBe("First Name")
  })

  it('render last name details to inputs', () => {
    const wrapper = shallowMount(PersonalDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'last-name-field' }).attributes().value).toBe("Last Name")
  })

  it('render phone number details to inputs', () => {
    const wrapper = shallowMount(PersonalDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'phone-number-field' }).attributes().value).toBe("0712345678")
  })

  it('render email address details to inputs', () => {
    const wrapper = shallowMount(PersonalDetails, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'email-address-field' }).attributes().value).toBe("email@gmail.com")
  })

})