<template>
    <v-table density="compact">
        <thead>
            <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Nome</th>
                <th class="text-center">Gênero</th>
                <th class="text-center">Ano</th>
                <th class="text-center">Observação</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in filmes" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.nome }}</td>
                <td class="text-center"> {{ item.genero }} </td>
                <td class="text-center"> {{ item.ano }} </td>
                <td class="text-center"> {{ item.observacao }} </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>

</script>

<style>
</style>