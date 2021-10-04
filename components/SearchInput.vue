<template>
  <div class="search-input relative">
    <label class="block">
      <span class="text-gray-700 font-bold">{{ label }}</span>
      <input
          type="search"
          class="mt-1 p-2 block min-w-full border-0 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-transparent border-b-2 border-blue-500"
          autocomplete="off"
          :placeholder="placeholder"
          v-model.trim="searchQuery"
          @click="resetAirport"
      >
    </label>
    <ul v-if="filteredResults != null" class="mt-2 absolute shadow-md rounded-lg">
        <li v-for="result in filteredResults" :key="result.id" class="p-2 bg-white hover:bg-gray-100" @click="selectAirport(result)">
          <NuxtLink to="/" class="block">
            {{ result.icao }}, {{ result.iata }} {{ result.name }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink :to="`/airport/LRAR`" class="text-gray-300 mt-2 text-xs text-right">Details</NuxtLink>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
    setup(props) {},
    data() {
        return {
            keyword: '',
        }
    },
    computed: {
      ...mapGetters({
            getAirports: 'getAirports'
      }),
      filteredResults() {
        if (this.keyword.length < 3) return null
  
        return this.getAirports.filter(item => { 
          if (!item.icao) return false

          return item.icao
            .toString()
            .toLowerCase()
            .includes(this.keyword.toLowerCase())
        })
      },
      searchQuery: {
        get() {
          return this.$store.state.pairing[this.type]
        },
        set(value) {
          this.$store.commit('SET_AIRPORT', {airport: value, type: this.type})
        }
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