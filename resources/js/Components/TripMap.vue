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
            map: null,
            blyatjson: {
                'type': 'FeatureCollection',
                'features': []
            },
        }
    },
    mounted() {
        this.initMapBox()
    },
    watch: {
        departure: function(val) {
            this.setPoint(val);
            this.map.getSource('places').setData(this.blyatjson)
        },
        arrival: function(val) {
            this.setPoint(val);
            this.map.getSource('places').setData(this.blyatjson)
        }
    },
    methods: {
        // Initialize MapBox map
        initMapBox: function() {
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFuZHJ1YW5hIiwiYSI6ImNrZTl3NzJ3bzIxNG4yc2w2aG03dHNkMDUifQ.xaSxrVMLZtfGAlWoGvB1PQ';
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/alexandruana/cksxeq0637zjy17tcvd4h919d',
                center: [21.261, 46.176],
                zoom: 6
            });

            // Define geoJSON object
            const geojson = {
                'type': 'FeatureCollection',
                'features': []
            };

            // Add geoJSON source
            this.map.on('load', () => {
                this.map.addSource('places', {
                    type: 'geojson',
                    data: this.blyatjson
                });

                // Add styles to map
                this.map.addLayer({
                    'id': 'points',
                    'type': 'circle',
                    'source': 'places',
                    'paint': {
                        'circle-radius': 10,
                        'circle-color': '#00a9e2' // red color
                    }
                });
            });
        },
        setPoint: function(e) {
            const features = this.map.queryRenderedFeatures(e.point, {
                layers: ['points']
            });
            const point = this.coordinateFeature(e.longitude, e.latitude)
            this.blyatjson.features.push(point)
        },
        // Add locations as geoJSON object
        coordinateFeature: function (lng, lat) {
            return {
                center: [lng, lat],
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [lng, lat]
                },
            };
        }
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
