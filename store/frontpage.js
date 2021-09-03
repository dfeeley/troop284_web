import SanityService from '@/services/sanity.service'

export const state = () => ({
  pageContent: null,
  sections: [],
})

export const mutations = {
  SET_SECTIONS(state, sections) {
    state.sections = sections
  },

  SET_PAGE_CONTENT(state, pageContent) {
    state.pageContent = pageContent
  }
}

export const actions = {
  async load({commit}) {
    const sections = await SanityService.fetchFrontPageSections()
    const pageContent = await SanityService.fetchFrontPageContent()
    commit('SET_SECTIONS', sections)
    commit('SET_PAGE_CONTENT', pageContent[0])
  }
}

export const getters = {
  sectionForId: (state) => (id) => {
    return state.sections.find(obj => obj._id === id)
  },

}


