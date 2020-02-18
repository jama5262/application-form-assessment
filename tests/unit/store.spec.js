import store, { finishApplication } from "@/store"

const defaultState = store.state

const resetState = () => {
  store.replaceState(defaultState)
}

describe('Mutations', () => {
  beforeEach(resetState)

  it('Updated active steps to step 2', () => {
    store.commit("updateActiveStep", 2)
    expect(store.state.activeStep).toBe(2)
  })

  it('Updated active steps to step 4', () => {
    store.commit("updateActiveStep", 4)
    expect(store.state.activeStep).toBe(4)
  })

  it('Updated form completion to true', () => {
    store.commit("updateCompleted", true)
    expect(store.state.completed).toBe(true)
  })

  it('Updated form completion to false', () => {
    store.commit("updateCompleted", false)
    expect(store.state.completed).toBe(false)
  })

  it('Updated form loading to true', () => {
    store.commit("updateLoading", true)
    expect(store.state.loading).toBe(true)
  })

  it('Updated form loading to false', () => {
    store.commit("updateLoading", false)
    expect(store.state.loading).toBe(false)
  })

})

describe('Actions', () => {
  beforeEach(resetState)

  it('Finish Application', () => {

    const commit = jest.fn()
    finishApplication({ commit })
    expect(commit).toHaveBeenCalledWith(
      "updateLoading", true)
  })
})

