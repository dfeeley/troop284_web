import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type == "activity"]{
  _id,
  name,
  image,
  body,
  date,
  otherimages,
} | order(date desc)`;

export const state = () => ({
  activities: []
})

export const mutations = {
  'SET_ACTIVITIES': (state, activities) => state.activities = activities,
}

export const actions = {
  async fetchActivities({commit}) {
    const activities = await $sanity.fetch(query)
    commit('SET_ACTIVITIES', activities)
  },


}
