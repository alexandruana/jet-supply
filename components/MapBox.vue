<template>
    <div class="container mx-auto shadow-lg rounded-lg max-w-4xl h-96">
        <div id="map" class="rounded-lg"></div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import mapboxgl from 'mapbox-gl';
import { point } from '@turf/helpers';

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
    watch: {
        departure: function(val) {
            if(val != null) {
                this.setPoint(val);
                this.removePoint(val);
            }
        },
        arrival: function(val) {
            if(val != null) {
                this.setPoint(val);
                this.removePoint(val);
            }
        }
    },
    mounted() {
        this.initMapBox();
        if(JSON.parse(localStorage.getItem(this.type))) {
            try {
                console.log('localStorage exists.')
                // this.keyword = JSON.parse(localStorage.getItem(this.type)).city + ", " + JSON.parse(localStorage.getItem(this.type)).iata;
            } catch(e) {
                console.log('localStorage missing')
                // localStorage.removeItem(this.type)
            }
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
                zoom: 4
            });

            this.map.on('load', () => {
                this.map.addSource('points', {
                    type: 'geojson',
                    data: this.geojson
                });
                 this.map.addLayer({
                    id: 'points',
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
        setPoint: function(feature) {
            const pt = point([feature.latitude, feature.longitude], {id: feature.icao})
            this.geojson.features.push(pt)
            this.map.getSource('points').setData(this.geojson)
        },
        removePoint: function(feature) {
            const features = this.geojson.features;
            const pt = features.filter( (item) => {
                return item.properties.id == feature.icao
            });
            console.log(features)
            console.log(pt)
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
