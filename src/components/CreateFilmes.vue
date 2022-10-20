<template>
    <v-text-field
        v-model="filmes.id"
        label="ID"
    ></v-text-field>
    <v-text-field
        v-model="filmes.nome"
        label="Nome"
    ></v-text-field>
    <v-text-field
        v-model="filmes.genero"
        label="Gênero"
    ></v-text-field>
    <v-text-field
        v-model="filmes.ano"
        label="Ano"
    ></v-text-field>
    <v-text-field
        v-model="filmes.observacao"
        label="Observação"
    ></v-text-field>
    <v-btn dark color="info" @click="setFilmes(filmes)">Salvar</v-btn>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        methods: {
            ...mapActions("filmes", ["setFilmes"])
        },
        data() {
            return {
                filmes: {
                    id: null,
                    nome: null,
                    genero: null,
                    ano: null,
                    observacao: null
                },
            };
        }
    }
</script>

<style></style>