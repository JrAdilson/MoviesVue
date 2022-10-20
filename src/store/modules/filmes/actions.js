//import Filmes from '@/services/filmes'
import Filmes from '@/services/filmes'
import * as types from './mutation-types'

export const getFilmes = async ({ commit }) => {
    //const request = await Filmes.getFilmes()
    let filmes = 'Vingadores: Ultimato, Pulp Fiction, Parasita, Laranja Mecânica, Clube da Luta'
    commit(types.SET_FILMES, filmes)
}

export const setFilmes = async (_content, data) => {
    return Filmes.setFilmes(data)
}

export const deleteFilmes = async ({ commit }, data) => {
    await Filmes.deleteFilmes(data)
    getFilmes({ commit })
}