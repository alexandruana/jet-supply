<template>
    <div class="overview-panel">

        <div class="overview-figures">
            <div class="kpi">
                <div class="kpi__label">
                    Latitude
                </div>
                <div class="kpi__value">
                    Some coordinates
                </div>
            </div>
        </div>

        <div class="overview-map">
        Here comes the map.
        </div>

    </div>
</template>

<script>
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
    ]
        }
    },
    methods: {
    getCost: function(aircraft) {
       for (let i = 0; i < this.aircraft.length; i++) {
           // Identifying aircraft
           if(this.aircraft[i].name === aircraft) {
               // Calculating cost
               // return this.aircraft[i].hourlyRate * (rtime * 1440)
           }
        }
    },
    }
}
</script>

<style scoped>
    .overview-panel {
        color: #f1f5f9;
        padding: 20px;
        min-height: 25vh;
        background: #2d3142;
        border-radius: 20px;
    }

</style>
