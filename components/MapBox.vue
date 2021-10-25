<template>
    <div class="container mx-auto shadow-lg rounded-lg max-w-4xl h-96">
        <div id="map"  class="rounded-lg"></div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { point } from '@turf/helpers';
import { mapGetters } from 'vuex';
import mapboxgl from 'mapbox-gl';

export default defineComponent({
    data () {
        return {
            geojson: {
                'type': 'FeatureCollection',
                'features': []
            },
            map: null,
        }
    },
    computed: {
        ...mapGetters([
            'getPairing'
        ])
    },
    watch: {
        departure: function(val) {
            this.updateMap(val)
        },
        arrival: function(val) {
            this.updateMap(val)
        }
    },
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

            this.map.on('load', () => {
                this.map.addSource('points', {
                    type: 'geojson',
                    data: this.geojson
                });
                this.map.addLayer({
                    id: 'measure-points',
                    type: 'circle',
                    source: 'points',
                    paint: {
                        'circle-radius': 8,
                        'circle-color': '#00a9e2'
                    },
                    filter: ['in', '$type', 'Point']
                });

            });
        },
        updateMap(feature) {
            if(feature != null) {
                const pt = point([feature.latitude, feature.longitude], {id: feature.icao})
                this.geojson.features.push(pt)
                this.map.getSource('points').setData(this.geojson)
            } else {
                // Code to remove marker
            }

        }
    },
    props: [
        'departure',
        'arrival'
    ]
    
})
</script>

<style>
    #map {
        width: 100%;
        height: 100%;
    } 
</style>
