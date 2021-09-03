<template>
    <div id="map"></div>
    <div id="distance" class="distance-container"></div>
</template>

<script>
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import length from "@turf/length";

export default {
    name: "TripMap",
    data() {
        return {
            departureMarker: null,
            arrivalMarker: null,
            route: null,
            map: null
        }
    },
    mounted() {
        this.initMapBox()
    },
    watch: {
        departure: function(val) {
            this.departureMarker.setLngLat([val.longitude, val.latitude])
                .addTo(this.map)
        },
        arrival: function(val) {
          this.arrivalMarker.setLngLat([val.longitude, val.latitude])
              .addTo(this.map)
        }
    },
    methods: {
        // Initialize MapBox map
        initMapBox: function() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFuZHJ1YW5hIiwiYSI6ImNrZTl3NzJ3bzIxNG4yc2w2aG03dHNkMDUifQ.xaSxrVMLZtfGAlWoGvB1PQ';
             this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/alexandruana/cksxeq0637zjy17tcvd4h919d',
                center: [22.253, 45.419],
                zoom: 6
            });

             // Set markers on input
            this.arrivalMarker = new mapboxgl.Marker({})
            this.departureMarker = new mapboxgl.Marker({})
        },
    },
    props: {
        departure: Object,
        arrival: Object
    },
}
</script>

<style lang="scss" scoped>
#map {
    min-height: 400px;
    #map { position: absolute; top: 0; bottom: 0; width: 100%; }
}
</style>
