import SanityService from '@/services/sanity.service'

export const state = () => ({
  recent: [],
  showcases: [],
  pageContent: null,
  upcoming: [],
})

export const mutations = {
  SET_RECENT(state, recent) {
    state.recent = recent
  },

  SET_UPCOMING(state, upcoming) {
    state.upcoming = upcoming
  },

  SET_SHOWCASES(state, showcases) {
    state.showcases = showcases
  },

  SET_PAGE_CONTENT(state, pageContent) {
    state.pageContent = pageContent
  }
}

export const actions = {
  async load({commit}) {
    const recent = await SanityService.fetchRecent()
    const showcases = await SanityService.fetchActivityShowcases()
    const pageContent = await SanityService.fetchActivityPageContent()
    const upcoming = await SanityService.fetchUpcoming()
    commit('SET_RECENT', recent)
    commit('SET_SHOWCASES', showcases)
    commit('SET_PAGE_CONTENT', pageContent[0])
    commit('SET_UPCOMING', upcoming)
  }
}

export const getters = {
  recentForSlug: (state) => (slug) => {
    return state.recent.find(obj => obj.slug.current === slug)
  },

  showcaseForId: (state) => (id) => {
    return state.showcases.find(obj => obj._id === id)
  },

}


