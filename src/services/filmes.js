import Axios from "axios"

export default class Filmes {
    static getFilmes = async () => {
        return await Axios.get(`http://localhost:3000/filmes`)
    }

    static setFilmes = async (data) => {
        return await Axios.post(`http://localhost:3000/filmes`, data)
    }

    static deleteFilmes = async (data) => {
        return await Axios.delete(`http://localhost:3000/filmes/${data.id}`)
    }
}