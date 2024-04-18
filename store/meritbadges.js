import SanityService from '@/services/sanity.service'

export const state = () => ({
  meritBadges: [],
})

export const mutations = {
  SET_MERIT_BADGES(state, meritBadges) {
    state.meritBadges = meritBadges
  },

}

export const actions = {
  async load({commit}) {
    const meritBadges = await SanityService.fetchMeritBadges()
    commit('SET_MERIT_BADGES', meritBadges)
  }
}

export const getters = {
  eagleRequired: (state) => {
    return state.meritBadges.filter(obj => obj.eagle_required === true)
  },
  eagleRequiredNoAlternates: (state) => {
    return state.meritBadges.filter(obj => obj.eagle_required === true && obj.eagle_alternates.length === 0)
  },
  eagleRequiredAlternateGroups: (state) => {
    const badgesWithAlternates = state.meritBadges.filter(obj => obj.eagle_alternates.length > 0);
    const groups = {}
    badgesWithAlternates.forEach(badge => {
      if(badge.slug.current in groups) {
        groups[badge.slug.current].push(badge)
      } else {
        const group = [badge];
        groups[badge.slug.current] = group;
        badge.eagle_alternates.forEach(slug => {
          if (!(slug in groups)) {
            groups[slug] = group;
          }
        })
      }
    })
    return [...new Set(Object.values(groups))]
  },
  notEagleRequired: (state) => {
    return state.meritBadges.filter(obj => obj.eagle_required === false)
  },
  forSlug: (state) => (slug) => {
    return state.meritBadges.find(obj => obj.slug.current === slug)
  }

}
