<template>
    <div class="pairing-search">
        <div class="airport-input">
            <label>From</label>
            <input v-model.trim="from" type="text" placeholder="Airport">
            <ul v-show="from && airports">
                <li v-show="itemVisible(airport, from)" v-for="airport in airports" :key="airport.id" >
                    {{ airport.icao }}, {{ airport.iata }} ({{ airport.city }} / {{ airport.name }})
                </li>
            </ul>
        </div>

        <div class="airport-input">
            <label>To</label>
            <input v-model.trim="to" type="text" placeholder="Airport">
            <ul v-show="to && airports">
                <li v-show="itemVisible(airport, to)" v-for="airport in airports" :key="airport.id" >
                    {{ airport.icao }}, {{ airport.iata }} ({{ airport.city }} / {{ airport.name }})
                </li>
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
            from: '',
            to: '',
            airports: [],
            depAirport: {},
            duration: null,
        };
    },
    mounted () {
        this.getAirports();
    },
    methods: {
        getAirports: function() {
          axios.get('/getairports')
            .then(res => this.airports = res.data)
            .catch(error => {});
        },
        itemVisible: function(airport, model) {
            let currentName = airport.name.toLowerCase()
            let currentInput = model.toLowerCase()
            return currentName.includes(currentInput)
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
    .pairing-search {
        display: grid;
        background: #ffffff;
        flex-direction: row;
        grid-template-columns: 1fr 1fr .2fr .5fr;
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
        position: relative;
        font-size: 14px;
        label {
            display: block;
            font-weight: bold;
        }

        ul {
            width: 100%;
            margin: .25rem 0 0 0;
            z-index: 9;
            position: absolute;
            background: #ffffff;
            box-shadow: 0 2px 5px 1px rgb(0 0 0 / 25%);
            border-radius: .75rem;
            li {
                padding: .5rem;
                cursor: pointer;
            }
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
