<template>
    <div class="rounded-lg border-2 shadow-lg max-w-lg mx-auto py-8 px-5 my-10 bg-gray-50">
        <h1 class="text-center">{{ airport.name }}</h1>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
    layout: 'airport',
    head() {
        return {
            title: this.airport.name
        }
    },
    data() {
        return {
            airport: {}
        }
    },
    created() {
        const airport = this.getAirports.find((airport) => airport.icao == this.$route.params.id)
        this.airport = airport
    },
    computed: {
        ...mapGetters({
            getAirports: 'getAirports'
        })
    },
})
</script>
