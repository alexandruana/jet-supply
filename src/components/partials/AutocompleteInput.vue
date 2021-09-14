<template>
  <label class="block">
    <span class="text-gray-700 font-bold">{{ label }}</span>
    <input
        type="search"
        class="mt-1 block rounded-md border-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent"
        :placeholder="placeholder"
        v-model="keyword"
        @input="search"
    >
    <ul v-show="hasInput">
      <li>
        hi
      </li>
    </ul>
  </label>
</template>

<script>
export default {
  name: "AutocompleteInput",
  data() {
    return {
      keyword: '',
      results: [],
      hasInput: false,
    }
  },
  methods: {
    filterResults: function() {
      this.results = this.items.filter((item) => {
        item.toLowerCase() === '';
      })
    },
    search: function() {
      this.hasInput = true;
      this.filterResults();
    }
  },
  props: {
      label: String,
      placeholder: String,
      items: {
        type: Array,
        required: false
      },
  }
}
</script>

<style scoped>

</style>