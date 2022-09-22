import SanityService from '@/services/sanity.service'

export const state = () => ({
  documentLibraryLinks: [],
})

export const mutations = {
  SET_LINKS(state, links) {
    state.documentLibraryLinks = links
  },

}

export const actions = {
  async load({commit}) {
    const links = await SanityService.fetchDocumentLibraryLinks()
    commit('SET_LINKS', links)
  }
}
