<template>
  <div id="map" class="rounded-lg"></div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { point } from "@turf/helpers";
import greatCircle from "@turf/great-circle";
import { mapGetters } from "vuex";
import mapboxgl from "mapbox-gl";

export default defineComponent({
  data() {
    return {
      geojson: {
        type: "FeatureCollection",
        features: [],
      },
      map: null,
    };
  },
  computed: {
    ...mapGetters(["getPairing"]),
  },
  watch: {
    departure: function (val, oldVal) {
      if (val) {
        this.addPoint(val);
      } else if (oldVal) {
        this.removePoint(oldVal);
      }
    },
    arrival: function (val, oldVal) {
      if (val) {
        this.addPoint(val);
      } else if (oldVal) {
        this.removePoint(oldVal);
      }
    },
  },
  mounted() {
    this.initMapBox();
  },
  methods: {
    // Initialize MapBox map
    initMapBox: function () {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYWxleGFuZHJ1YW5hIiwiYSI6ImNrZTl3NzJ3bzIxNG4yc2w2aG03dHNkMDUifQ.xaSxrVMLZtfGAlWoGvB1PQ";
        this.map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/alexandruana/cksxeq0637zjy17tcvd4h919d",
            center: [22.253, 45.419],
            zoom: 4,
        });

        this.map.on("load", () => {
            this.map.addSource("geojson", {
                type: "geojson",
                data: this.geojson,
            });

            this.map.addLayer({
                id: "measure-points",
                type: "circle",
                source: "geojson",
                paint: {
                    "circle-radius": 8,
                    "circle-color": "#00a9e2",
                },
                filter: ["in", "$type", "Point"],
            });

            this.map.addLayer({
                id: 'measure-lines',
                type: 'line',
                source: 'geojson',
                layout: {
                    'line-cap': 'round',
                    'line-join': 'round'
                },
                paint: {
                    'line-color': '#00a9e2',
                    'line-width': 2.5
                },
                filter: ['in', '$type', 'LineString']
            });

            this.map.on('sourcedataloading', (e) => {
                const features = this.map.querySourceFeatures('geojson', {
                    sourceLayer: 'measure-points'
                });
                console.log(features)
                
                if(e.isSourceLoaded && e.source.data.features.length == 2) {
                    const features = e.source.data.features;
                    const linestring = features.map(
                        (point) => point.geometry.coordinates
                    );
                    this.geojson.features.push(linestring);
                    this.map.getSource("geojson").setData(this.geojson);
                /*  const features = e.source.data.features;
                    const linestring = features.map(
                        (point) => point.geometry.coordinates
                    );

                    const pt1 = linestring[0];
                    const pt2 = linestring[1];

                    const arc = greatCircle(pt1, pt2);

                    this.geojson.features.push(arc);

                    let index = features.findIndex(
                        (el) => el.geometry.type === "LineString"
                    ); */
                }
            })

        });
    },
    addPoint(feature) {
      const pt = point([feature.latitude, feature.longitude], {
        id: feature.icao,
      });
      this.geojson.features.push(pt);
      this.map.getSource("geojson").setData(this.geojson);
    },
    removePoint(feature) {
      let index = this.geojson.features.findIndex(
        (el) => el.properties.id === feature.icao
      );
      this.geojson.features.splice(index, 1);
      this.map.getSource("geojson").setData(this.geojson);
    },
  },
  props: ["departure", "arrival"],
});
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>
