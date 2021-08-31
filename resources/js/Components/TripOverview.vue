<template>
    <div class="overview-panel">

        <div class="overview-map">
            <trip-map :departure="allAirports.departure" :arrival="allAirports.arrival"></trip-map>
        </div>

    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TripMap from "@/Components/TripMap";

export default {
    name: "TripOverview",
    data() {
        return {
            aircraft: [
                {
                    name: "L650",
                    hourlyRate: 3700,
                    handlingRate: 1500,
                    cateringRate: 150,
                    nightStopRate: 1500
                },
                {
                    name: "L500",
                    hourlyRate: 3250,
                    handlingRate: 100,
                    cateringRate: 150,
                    nightStopRate: 1500
                },
                {
                    name: "L450",
                    hourlyRate: 2500,
                    handlingRate: 750,
                    cateringRate: 75,
                    nightStopRate: 1000
                },
                {
                    name: "XLS+",
                    hourlyRate: 2350,
                    handlingRate: 750,
                    cateringRate: 75,
                    nightStopRate: 1000
                },
                {
                    name: "P300",
                    hourlyRate: 2100,
                    handlingRate: 750,
                    cateringRate: 75,
                    nightStopRate: 1000
                },
                {
                    name: "CJ3",
                    hourlyRate: 1750,
                    handlingRate: 750,
                    cateringRate: 75,
                    nightStopRate: 1000
                }
    ],
        }
    },
    components: {
        TripMap,
    },
    computed: {
        ...mapGetters([
            'allAirports'
        ]),
    },
}
</script>

<style scoped>
    .overview-panel {
        color: #f1f5f9;
        min-height: 25vh;
        background: #2d3142;
        border-radius: 20px;
    }

</style>
