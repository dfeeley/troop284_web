import SanityService from '@/services/sanity.service'

export const state = () => ({
  bookmarks: [],
})

export const mutations = {
  SET_BOOKMARKS(state, bookmarks) {
    state.bookmarks = bookmarks
  },

}

export const actions = {
  async load({commit}) {
    const bookmarks = await SanityService.fetchBookmarks()
    commit('SET_BOOKMARKS', bookmarks)
  }
}
