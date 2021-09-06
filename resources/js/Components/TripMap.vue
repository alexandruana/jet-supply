<template>
    <div id="map"></div>
    <div id="distance" class="distance-container"></div>
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
            departureMarker: null,
            arrivalMarker: null,
            map: null
        }
    },
    mounted() {
        this.initMapBox();
    },
    watch: {
        departure: function(val) {
            this.departureMarker.setLngLat([val.longitude, val.latitude])
                .addTo(this.map);
        },
        arrival: function(val) {
          this.arrivalMarker.setLngLat([val.longitude, val.latitude])
              .addTo(this.map);
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
      getGreatCircle: function() {
          if(Object.keys(this.departure).length && Object.keys(this.arrival).length) {

              let pt1 = point([this.departure.longitude, this.departure.latitude]);
              let pt2 = point([this.arrival.longitude, this.arrival.latitude]);

              // Create routes source
              this.map.addSource('routes', {
                  type: 'geojson',
                  data: greatCircle(pt1, pt2)
              });
              // Create routes style (the lines themself)
              this.map.addLayer({
                  id: 'routes',
                  source: 'routes',
                  type: 'line',
                  paint: {
                      'line-width': 1,
                      'line-color': '#00a9e2'
                  }
              });
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

             // Set markers on input
            this.arrivalMarker = new mapboxgl.Marker({});
            this.departureMarker = new mapboxgl.Marker({});

            // Add greatCircleLines
            this.map.on('load', () => {
                console.log('Map loaded.')

                if(Object.keys(this.departure).length && Object.keys(this.arrival).length) {
                    // Create routes source
                    this.map.addSource('routes', {
                        type: 'geojson',
                        data: this.getGreatCircle
                    });
                    // Create routes style (the lines themself)
                    this.map.addLayer({
                        id: 'routes',
                        source: 'routes',
                        type: 'line',
                        paint: {
                            'line-width': 1,
                            'line-color': '#00a9e2'
                        }
                    });
                }
            })
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
