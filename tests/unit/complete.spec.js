import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Complete from "@/components/Complete"
import store from "@/store"

const localVue = createLocalVue()
localVue.use(Vuex)

const stubs = ["v-row", "v-col"]

describe('Complete', () => {

  it('render title to small screen', () => {
    const wrapper = shallowMount(Complete, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'sm-screen-title-text' }).text()).toBe("Completed")
  })

  it('render description to small screen', () => {
    const wrapper = shallowMount(Complete, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'sm-screen-desc-text' }).text()).toBe("Your loan application is being processed and we will contact you soon")
  })

  it('render title to large screen', () => {
    const wrapper = shallowMount(Complete, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'lg-screen-title-text' }).text()).toBe("Completed")
  })

  it('render description to large screen', () => {
    const wrapper = shallowMount(Complete, { store, localVue, stubs })
    expect(wrapper.find({ ref: 'lg-screen-desc-text' }).text()).toBe("Your loan application is being processed and we will contact you soon")
  })

})