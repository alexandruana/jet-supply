<template>
     <div class="grid grid-cols-2 gap-5 rounded-lg border-2 shadow-lg max-w-lg mx-auto py-8 px-5 my-10 bg-gray-50">
        <SearchInput label="From" placeholder="Where to?" :items="getAirports"/>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
    setup() {    
    },
    async mounted () {
       await this.loadAirports()
    },
    computed: {
        ...mapGetters({
            getAirports: 'getAirports'
        })
    },
    methods: {
        ...mapActions([
            'debug',
            'loadAirports'
        ])
    }
})
</script>


<style lang="scss" scoped>

</style>