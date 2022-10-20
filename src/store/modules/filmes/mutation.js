import * as types from './mutation-types'

export default {
    [types.SET_FILMES] (state, payload) {
        state.filmes = payload
    }
}