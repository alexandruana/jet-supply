<template>
  <div class="search-input relative z-50">
    <div class="block">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"/>
      </svg>
      <input
          type="search"
          class="mt-1 p-2 block min-w-full border-0 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-transparent"
          autocomplete="off"
          :placeholder="placeholder"
          v-model.trim="keyword"
          @click="resetAirport"
      >
    </div>
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