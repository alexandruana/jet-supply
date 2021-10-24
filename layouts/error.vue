<template>
    <div class="text-center">
        {{ error.message }} {{ error.statusCode }}
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    head() {
        return {
            title: 'Not found'
        }
    },
    props: {
        error: {
            type: Object,
            required: true,
        }
    }
})
</script>
