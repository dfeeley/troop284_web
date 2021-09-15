import SanityService from '@/services/sanity.service'

export const state = () => ({
  verbiage: {}
})

export const mutations = {
  SET_VERBIAGE(state, verbiage) {
    state.verbiage = verbiage
  },
}

export const actions = {
  async load({commit}) {
    const verbiage = await SanityService.fetchVerbiage()
    commit('SET_VERBIAGE', verbiage[0])
  }
}

export const getters = {
}


