
import * as types from './types'

export const mutations = {
    [types.GET_BANNERS](state, { banners }) {
       state.banners = banners
    }
}

