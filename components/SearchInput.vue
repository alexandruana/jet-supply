<template>
  <label class="block relative">
    <span class="text-gray-700 font-bold">{{ label }}</span>
    <input
        type="text"
        class="mt-1 p-2 block min-w-full border-0 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-transparent border-b-2 border-blue-500"
        autocomplete="off"
        :placeholder="placeholder"
        v-model.trim="keyword"
        @click="resetAirport"
    >
    <ul v-if="filteredResults != null" class="mt-2 absolute shadow-md rounded-lg">
      <li v-for="result in filteredResults" :key="result.id" class="p-2 bg-white hover:bg-gray-100" @click="selectAirport(result)">
        <NuxtLink to="/">
          {{ result.icao }}, {{ result.iata }} {{ result.name }}
        </NuxtLink>
      </li>
    </ul>
  </label>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapActions } from 'vuex'

export default defineComponent({
    setup(props) {},
    data() {
        return {
            keyword: '',
        }
    },
    computed: {
      filteredResults() {
        if (this.keyword.length < 3) return null
  
        return this.items.filter(item => { 
          if (!item.icao) return false

          return item.icao
            .toString()
            .toLowerCase()
            .includes(this.keyword.toLowerCase())
        })
      }
    },
    methods: {
      selectAirport: function(airport) {
        this.addAirport({airport: airport, type: this.type})
        this.keyword = `${airport.icao}, ${airport.iata} (${airport.city}) / ${airport.name}`
      },
      resetAirport: function() {
        if (this.keyword != null) {
          this.removeAirport(this.type)
          this.keyword = ''
        }
      },
      ...mapActions([
        'addAirport',
        'removeAirport'
      ])
    },
    props: {
      label: String,
      placeholder: String,
      type: String,
    }
})
</script>

<style lang="scss">
</style>