<template>
    <div class="counter-input">
        <label class="block">
            <input
                type="number"
                class="mt-1 p-2 block min-w-full border-0 bg-transparent"
                autocomplete="off"
                :placeholder="placeholder"
                v-model.trim="pax"
            >
        </label>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data() {
        return {
            pax: null
        }
    },
    props: [
        'placeholder'
    ]
})
</script>

<style lang="scss" scoped>
</style>
