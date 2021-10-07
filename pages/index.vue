<template>
  <div>
    <PairingSearch/>
    <MapBox/>
  </div>
</template>

<script>
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
}
</script>
