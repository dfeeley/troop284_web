export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    console.log('In nuxtServerInit')
    await dispatch('activities/load')
  }
}
