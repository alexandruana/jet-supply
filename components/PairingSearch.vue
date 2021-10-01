<template>
     <div class="grid grid-cols-2 gap-5 rounded-lg border-2 shadow-lg max-w-lg mx-auto py-8 px-5 my-10 bg-gray-50">
        <SearchInput label="From" placeholder="Where from?" type="departure" />
        <SearchInput label="To" placeholder="Where to?" type="arrival" />
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