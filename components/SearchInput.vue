<template>
    <label class="block">
    <span class="text-gray-700 font-bold">{{ label }}</span>
    <input
        type="search"
        class="mt-1 block rounded-md border-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent"
        autocomplete="off"
        :placeholder="placeholder"
        v-model="searchQuery"
    >
    <ul v-if="results.length">
      <li v-for="result in results" :key="result.id">
        <NuxtLink to="/">
          {{ result.name }}
        </NuxtLink>
      </li>
    </ul>
  </label>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup(props) {},
    data() {
        return {
            searchQuery: '',
            results: [],
            hasInput: false,
        }
    },
    methods: {
      filterResults: function() {
        this.results = this.items
      },
      search: function() {
          this.hasInput = true;
          console.log('Filtering...')
      },
    },
    props: {
      label: String,
      placeholder: String,
      items: {
        type: Array,
        required: false
      },
    }
})
</script>

<style lang="scss">

</style>
