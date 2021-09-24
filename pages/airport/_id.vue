<template>
    <h1>{{ airport }}</h1>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
    setup() {},
    data() {
        return {
            airport: {}
        }
    },
    created() {
        const airport = this.getAirports.find((home) => home.icao == this.$route.params.id)
        this.airport = airport
    },
    computed: {
        ...mapGetters({
            getAirports: 'getAirports'
        })
    },
})
</script>
