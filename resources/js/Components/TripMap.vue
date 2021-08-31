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
    watch: {
      departure: function(val) {
          // Example of a MapDataEvent of type "sourcedata"
          console.log("Departure added.")
      },
      arrival: function(val) {
          console.log("Arrival added.")
      }
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

            const airports = {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                21.337,
                                45.809
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                22.254,
                                45.41998
                            ]
                        }
                    },
                ]
            }

            map.on('load', function() {
                /* Add the data to your map as a layer */
                map.addSource('places', {
                    'type': 'geojson',
                    'data': airports
                });
                function addMarkers() {
                    for( const marker of airports.features ) {
                        new mapboxgl.Marker()
                            .setLngLat(marker.geometry.coordinates)
                            .addTo(map);
                    }
                }
                addMarkers()
            });
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
