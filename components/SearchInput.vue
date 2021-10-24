<template>
  <div class="search-input relative z-50">
    <label class="block">
      <span class="text-gray-700 font-bold">{{ label }}</span>
      <input
          type="search"
          class="mt-1 p-2 block min-w-full border-0 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-transparent border-b-2 border-jet-blue-light"
          autocomplete="off"
          :placeholder="placeholder"
          v-model.trim="keyword"
          @click="resetAirport"
      >
    </label>
    <ul v-if="filteredResults != null" class="mt-2 absolute bg-white shadow-md rounded-b w-full">
        <li v-for="result in filteredResults" :key="result.id" class="p-2 hover:bg-gray-100" @click="selectAirport(result)">
          <NuxtLink to="/" class="block">
            {{ result.icao }}, {{ result.iata }} {{ result.name }}
          </NuxtLink>
        </li>
      </ul>
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
    },
    mounted() {
      if(JSON.parse(localStorage.getItem(this.type))) {
        try {
          this.keyword = JSON.parse(localStorage.getItem(this.type)).city + ", " + JSON.parse(localStorage.getItem(this.type)).iata;
        } catch(e) {
          localStorage.removeItem(this.type)
        }
      }
    },
    methods: {
      selectAirport: function(airport) {
        this.addAirport({airport: airport, type: this.type})
        localStorage.setItem(this.type, JSON.stringify(airport))
        const ap = JSON.parse(localStorage.getItem(this.type))
        this.keyword = `${ap.city}, ${ap.iata }`
      },
      resetAirport: function() {
        if (this.keyword != null) {
          this.removeAirport(this.type)
          localStorage.removeItem(this.type)
          this.keyword = ''
        }
      },
      ...mapActions([
        'addAirport',
        'removeAirport'
      ])
    },
    props: {
      icon: String,
      placeholder: String,
      type: String,
    }
})
</script>

<style lang="scss">
</style>