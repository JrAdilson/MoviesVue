<template>
    <div>
        <v-btn @click="getFilmes">Carregar dados</v-btn>
        {{filmes}}
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex"
    export default {
        computed: {
            ...mapGetters("filmes", ["filmes"])
        },
        methods: {
            ...mapActions("filmes", ["getFilmes"]),
        }
    }
</script>

<style>
</style>