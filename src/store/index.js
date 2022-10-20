import { createStore } from 'vuex'
import filmes from './modules/filmes'


export default createStore({
    modules: {
        filmes
    }
})