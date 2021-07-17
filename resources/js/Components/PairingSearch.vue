<template>
    <input type="text" v-model="keyword" @keyup="airportSearch">
    <ul v-if="Airports.length > 0">
        <li v-for="airport in Airports" :key="airport.id" v-text="airport.name"></li>
    </ul>
</template>

<script>
export default {
    name: "PairingSearch",
    data() {
        return {
            keyword: null,
            Airports: []
        };
    },
    methods: {
        airportSearch() {
            axios.get('/searchairport', { params: { keyword: this.keyword } })
                .then(res => this.Airports = res.data)
                .catch(error => {});
        }
    }
}
</script>

<style scoped>

</style>
