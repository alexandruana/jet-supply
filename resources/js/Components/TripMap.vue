<template>
    <div id="map"></div>
    <div id="distance" class="distance-container"></div>
    <button @click="setGreatCircle">Press me</button>
</template>

<script>
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import {point} from "@turf/helpers";
import distance from "@turf/distance";
import greatCircle from "@turf/great-circle";

export default {
    name: "TripMap",
    data() {
        return {
            geojson: {
                'type': 'FeatureCollection',
                'features': []
            },
            linestring: {
                'type': 'Feature',
                'geometry': {
                    'type': 'LineString',
                    'coordinates': []
                }
            },
            map: null
        }
    },
    mounted() {
        this.initMapBox();
    },
    watch: {
        departure: function(val) {
            this.setPoint(val)
        },
        arrival: function(val) {
            this.setPoint(val)
        }
    },
    computed: {
      getDistance: function() {
          if(Object.keys(this.departure).length && Object.keys(this.arrival).length) {
              let pt1 = point([this.departure.longitude, this.departure.latitude]);
              let pt2 = point([this.arrival.longitude, this.arrival.latitude]);
              const dst = distance(pt1,pt2, {units: 'kilometers'});
              return dst;
          }
      },
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

            // Add greatCircleLines
            this.map.on('load', () => {
                console.log('Map loaded.')

                // Create geoJSON source
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
                // Create routes style (the lines themself)
                this.map.addLayer({
                    id: 'routes',
                    source: 'points',
                    type: 'line',
                    paint: {
                        'line-width': 2,
                        'line-color': '#00a9e2'
                    },
                    filter: ['in', '$type', 'LineString']
                });
            })
        },
        coordinateFeature: function (lng, lat) {
            return {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [lng, lat]
                },
            };
        },
        setPoint: function(feature) {
            const point = this.coordinateFeature(feature.longitude, feature.latitude)
            this.geojson.features.push(point)
            this.map.getSource('points').setData(this.geojson)
        },
        setGreatCircle: function() {
            if(this.geojson.features.length > 1) {
                this.linestring.geometry.coordinates = this.geojson.features.map(
                    (point) => point.geometry.coordinates
                );
            }
            this.geojson.features.push(this.linestring)
            this.map.getSource('points').setData(this.geojson);
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
.distance-container {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
}

.distance-container > * {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 11px;
    line-height: 18px;
    display: block;
    margin: 0;
    padding: 5px 10px;
    border-radius: 3px;
}
</style>
