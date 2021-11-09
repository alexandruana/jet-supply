<template>
    <div class="counter-input h-10 w-32">
            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button data-action="decrement" class="bg-jet-blue-light text-white hover:text-white hover:bg-jet-blue h-full w-20 rounded-l cursor-pointer outline-none transition-all" @click="decrement">
                    <span class="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" :value="this.pax" v-bind="this.pax" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"></input>
                <button data-action="increment" class="bg-jet-blue-light text-white hover:bg-jet-blue h-full w-20 rounded-r cursor-pointer transition-all" @click="increment">
                    <span class="m-auto text-2xl font-thin">+</span>
                </button>
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
        'placeholder'
    ]
})
</script>

<style lang="scss" scoped>
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .custom-number-input input:focus {
        outline: none !important;
    }

    .custom-number-input button:focus {
        outline: none !important;
    }
</style>
