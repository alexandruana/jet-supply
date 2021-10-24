<template>
  <div class="relative">
    <PairingSearch/>
    <MapBox :departure="pairing.departure" :arrival="pairing.arrival"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  layout: 'default',
  head() {
    return {
      title: 'Homepage',
      meta: [{
        name: 'description',
        content: 'This is our home page.',
        hid: 'description'
      }]
    }
  },
  computed: {
    ...mapState([
        'pairing'
    ])
  },
}
</script>
