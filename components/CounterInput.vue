<template>
    <div class="counter-input flex flex-row items-center">
        <div class="mr-3">
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: icon }" class="text-jet-blue-light fa-xl"/>
        </div>
        <div class="flex flex-row p-2 rounded-lg relative">
            <input
            class="border-0 focus:outline-none focus:ring-0 bg-transparent text-sm md:text-base font-semibold"
            type="number"
            min="0" 
            :value="this.pax"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data() {
        return {
            pax: 0
        }
    },
    methods: {
        increment: function() {
            return this.pax++;
        },
        decrement: function() {
            return this.pax--;
        }
    },
    props: [
        'icon',
        'placeholder'
    ]
})
</script>

<style lang="scss" scoped>
</style>
