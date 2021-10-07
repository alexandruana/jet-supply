<template>
  <div class="search-input relative">
    <label class="block">
      <span class="text-gray-700 font-bold">{{ label }}</span>
      <input
          type="search"
          class="mt-1 p-2 block min-w-full border-0 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-transparent border-b-2 border-blue-500"
          autocomplete="off"
          :placeholder="placeholder"
          v-model.trim="keyword"
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
      <NuxtLink v-if="isAirportSet === true" :to="`/airport/${this.$store.state.pairing[this.type].icao}`" class="text-gray-300 mt-2 text-xs text-right">Details</NuxtLink>
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
      isAirportSet() {
        if(this.$store.state.pairing[this.type]) {
          return true;
        } else {
          return false;
        }
      }
    },
    methods: {
      selectAirport: function(airport) {
        this.addAirport({airport: airport, type: this.type})
        this.keyword = `${this.$store.state.pairing[this.type].name} (${this.$store.state.pairing[this.type].iata })`
        localStorage.setItem(this.type, airport.city + " " + airport.icao);
      },
      resetAirport: function() {
        if (this.keyword != null) {
          this.removeAirport(this.type)
          this.keyword = ''
          localStorage.removeItem(this.type)
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