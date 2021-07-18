<template>
    <div class="pairing-search">

        <div class="airport-input">
            <label>
                <input type="text" v-model="From" @keyup="airportSearch">
            </label>
            <ul v-if="Airports.length > 0">
                <li v-for="airport in Airports" :key="airport.id">{{ airport.gps_code }}</li>
            </ul>
        </div>

        <div class="airport-input">
            <label>
                <input type="text" v-model="To" @keyup="airportSearch">
            </label>
            <li v-for="airport in Airports" :key="airport.id">{{ airport.gps_code }}</li>
        </div>

    </div>
</template>

<script>
export default {
    name: "PairingSearch",
    data() {
        return {
            From: null,
            To: null,
            Airports: []
        };
    },
    methods: {
       airportSearch() {
            axios.get('/searchairport', {
                params: { keyword: this.From }
            })
                .then(res => this.Airports = res.data)
                .catch(error => {});
        },
    }
}
</script>

<style scoped>
    .pairing-search {
        display: flex;
        flex-direction: row;
    }
</style>
