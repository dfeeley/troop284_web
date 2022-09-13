export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      dispatch('frontpage/load'),
      dispatch('activities/load'),
      dispatch('verbiage/load'),
      dispatch('eagle/load'),
      dispatch('knowledgeCenter/load'),
    ])
  }
}
