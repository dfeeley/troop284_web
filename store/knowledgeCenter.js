import SanityService from '@/services/sanity.service'

export const state = () => ({
  knowledgeCenterPages: [],
})

export const mutations = {
  SET_PAGES(state, pages) {
    state.knowledgeCenterPages = pages
  },

}

export const actions = {
  async load({commit}) {
    const pages = await SanityService.fetchKnowlegeCenterPages()
    commit('SET_PAGES', pages)
  }
}

export const getters = {
  pageForSlug: (state) => (slug) => {
    return state.knowledgeCenterPages.find(obj => obj.slug.current === slug)
  },
}


