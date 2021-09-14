<template>
  <div class="hello">
    <pairing-search></pairing-search>
    <div class="container mx-auto">
      {{ this.allAirports[0] }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PairingSearch from "@/components/PairingSearch";
export default {
  name: 'HelloWorld',
  components: {PairingSearch},
  computed: {
    ...mapGetters(['allAirports'])
  },
  mounted() {
    this.$store.dispatch('getAirports');
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
