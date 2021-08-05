<template>
    <div class="pairing-search">
        <div class="airport-input">
            <label for="departureSearch">From</label>
                <input id="departureSearch" v-model="from" type="text" @keyup="departureSearch" placeholder="Airport">
            <ul v-if="depAirport.length > 0">
                <li v-for="airport in depAirport" :key="airport.id" >{{ airport.ident }}, {{ airport.iata_code }} ({{ airport.municipality }} / {{ airport.name }})</li>
            </ul>
        </div>

        <div class="airport-input">
            <label for="arrivalSearch">To</label>
            <input id="arrivalSearch" v-model="to" type="text" @keyup="arrivalSearch" placeholder="Airport">
            <ul v-if="arrAirport.length > 0">
                <li v-for="airport in arrAirport" :key="airport.id">{{ airport.ident }}, {{ airport.iata_code }} ({{ airport.municipality }} / {{ airport.name }})</li>
            </ul>
        </div>

        <div class="airport-input">
            <label>Duration</label>
            <input id="durationInput" v-model="duration" tabindex="2" maxlength="5" type="text" placeholder="hh:mm">
        </div>

        <div class="result">
            {{ getFlightTime() }}
        </div>
    </div>

</template>

<script>
import {Duration} from "luxon";

export default {
    name: "PairingSearch",
    data() {
        return {
            from: null,
            to: null,
            depAirport: {},
            arrAirport: {},
            airports: [],
            duration: null,
        };
    },
    methods: {
       departureSearch() {
            axios.get('/searchairport', {
                params: { keyword: this.from }
            })
            .then(res => this.depAirport = res.data)
            .then(res => localStorage.setItem("departure", JSON.stringify(res.data)))
            .catch(error => {});
       },
        arrivalSearch() {
            axios.get('/searchairport', {
                params: { keyword: this.to }
            })
            .then(res => this.arrAirport = res.data)
            .catch(error => {});
        },
        getFlightTime: function() {
            if (this.duration) {
                const time = Duration.fromObject({
                    hours: this.duration.substr(0, this.duration.length-2 ),
                    minutes: this.duration.substr(this.duration.length-2, 2 )
                }).toFormat("hh:mm")

                return time


            }
        },
    },
}
</script>

<style lang="scss" scoped>
    input {
        font-size: 14px;
    }

    .pairing-search {
        display: grid;
        grid-template-columns: 1fr 1fr .2fr .5fr;
        flex-direction: row;
    }

    .result {
        color: #f1f5f9;
        padding: 1rem 2rem;
        background: #2d3142;
        font-weight: bold;
        border-radius: 1.2rem;
    }
    .airport-input {
        margin: 0 2em 0 0;
        label {
            display: block;
            font-weight: bold;
        }
    }
    input[type="text"] {
        width: 100%;
        border: none;
        padding: 0 .5rem;
        background: none;
        text-align: left;
        border-bottom: 2px solid #00a9e2;
    }

    #durationInput {
        text-align: center;
    }
</style>
