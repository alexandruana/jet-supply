<template>
     <div class="grid grid-cols-3 gap-5 rounded-lg border-2 max-w-2xl mx-auto py-8 px-5 my-10 bg-gray-50">
        <SearchInput icon="aircraft-depart" placeholder="Departure" type="departure" />
        <SearchInput icon="aircraft-land" placeholder="Arrival" type="arrival" />
        <DateInput />
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
    setup() {    
    },
    computed: {
        ...mapGetters({
            getAirports: 'getAirports'
        })
    },
})
</script>