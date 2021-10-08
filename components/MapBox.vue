<template>
    <div class="container mx-auto shadow-lg rounded-lg h-96">
        <div id="map" class="rounded-lg"></div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import mapboxgl from 'mapbox-gl';

export default defineComponent({
    mounted() {
        this.initMapBox();
    },
    methods: {
        // Initialize MapBox map
        initMapBox: function() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFuZHJ1YW5hIiwiYSI6ImNrZTl3NzJ3bzIxNG4yc2w2aG03dHNkMDUifQ.xaSxrVMLZtfGAlWoGvB1PQ';
             this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/alexandruana/cksxeq0637zjy17tcvd4h919d',
                center: [22.253, 45.419],
                zoom: 4
            });
        },
    }
    
})
</script>

<style>
    #map {
        width: 100%;
        height: 100%;
    } 
</style>
