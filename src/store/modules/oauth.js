import { getToken } from '@/api/oauth'
// mutations
export const SET_ACCESS_TOKEN = 'setAccessToken'
// actions
export const GET_TOKEN = 'getToken'

const state = {
  accessToken: null
}

const mutations = {
  [SET_ACCESS_TOKEN] (state, payload) {
    state.accessToken = payload
  }
}

const actions = {
  async [GET_TOKEN] ({ commit }) {
    try {
      const { data } = await getToken()
      state.accessToken = data.access_token
      commit('loading/SET_LOADING', true, { root: true })
    } catch (e) {
      commit(SET_ACCESS_TOKEN, null)
      throw new Error('Error OAuth', e)
    } finally {
      commit('loading/SET_LOADING', false, { root: true })
      console.info('Done!')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
