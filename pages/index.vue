<template>
  <div class="relative flex flex-col justify-end bg-jet-blue h-screen">
    <div class="container flex flex-row justify-center mx-auto py-10 mb-10">
      <div>
        <h1 class="text-white font-medium text-2xl">Taking you <span class="text-jet-blue-light">wherever</span>, <span class="text-jet-blue-light">whenever</span>.</h1>
        <PairingSearch/>
      </div>
    </div>
    <!-- <MapBox :departure="pairing.departure" :arrival="pairing.arrival"/> -->
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
