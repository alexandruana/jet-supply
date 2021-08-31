<template>
    <div id="map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

export default {
    name: "TripMap",
    mounted() {
        this.initMapBox()
    },
    methods: {
        initMapBox: function() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFuZHJ1YW5hIiwiYSI6ImNrZTl3NzJ3bzIxNG4yc2w2aG03dHNkMDUifQ.xaSxrVMLZtfGAlWoGvB1PQ';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/alexandruana/cksxeq0637zjy17tcvd4h919d',
                center: [22.253, 45.419],
                zoom: 6
            });

            const marker1 = new mapboxgl.Marker({ color: '#FFFFFF' })
                .setLngLat([22.253, 45.419])
                .addTo(map);

            const marker2 = new mapboxgl.Marker({ color: '#FFFFFF' })
                .setLngLat([21.337, 45.809])
                .addTo(map);
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
