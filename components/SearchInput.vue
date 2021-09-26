<template>
  <label class="block">
    <span class="text-gray-700 font-bold">{{ label }}</span>
    <input
        type="text"
        class="mt-1 block rounded-md border-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent"
        autocomplete="off"
        :placeholder="placeholder"
        v-model.trim="keyword"
    >
    <ul>
      <li v-for="result in filteredResults" :key="result.id">
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
            keyword: '',
        }
    },
    computed: {
      filteredResults() {
        if (!this.keyword) return null
  
        return this.items.filter(item => { 
          if (!item.icao) return false

          return item.icao
            .toString()
            .toLowerCase()
            .includes(this.keyword.toLowerCase())
        })
      }
    },
    props: {
      label: String,
      placeholder: String,
      items: {  
        type: Array,
        required: true
      },
    }
})
</script>