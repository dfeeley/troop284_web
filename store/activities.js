import SanityService from '@/services/sanity.service'

export const state = () => ({
  activities: [],
  showcases: [],
  pageContent: null,
})

export const mutations = {
  SET_ACTIVITIES(state, activities) {
    state.activities = activities
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
    console.log('In Vuex activities/load action')
    const activities = await SanityService.fetchActivities()
    const showcases = await SanityService.fetchActivityShowcases()
    const pageContent = await SanityService.fetchActivityPageContent()
    commit('SET_ACTIVITIES', activities)
    commit('SET_SHOWCASES', showcases)
    commit('SET_PAGE_CONTENT', pageContent[0])
    console.log('All done with activities/load')
  }
}

export const getters = {
  activityForSlug: (state) => (slug) => {
    return state.activities.find(obj => obj.slug.current === slug)
  },

  showcaseForId: (state) => (id) => {
    return state.showcases.find(obj => obj._id === id)
  },

}


