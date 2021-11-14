<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 py-8 mt-5 md:divide-x divide-gray-500 md:bg-gray-50 rounded-lg"
  >
    <div class="col-span-2 bg-white rounded-lg px-3 py-2 md:col-span-1 md:bg-transparent md:rounded-none md:px-6">
      <SearchInput
        icon="plane-departure"
        placeholder="Departure"
        type="departure"
      />
    </div>
    <div class="col-span-2 bg-white rounded-lg px-3 py-2 md:col-span-1 md:bg-transparent md:rounded-none md:px-6">
      <SearchInput 
        icon="plane-arrival"
        placeholder="Arrival" 
        type="arrival" 
      />
    </div>
    <div class="bg-white rounded-lg px-3 py-2 md:bg-transparent md:rounded-none md:px-6">
      <CounterInput 
        icon="user-friends"
        placeholder="0" 
      />
    </div>
    <div class="bg-white rounded-lg px-3 py-2 md:bg-transparent md:rounded-none md:px-6">
      <DateInput icon="calendar-alt"/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { mapGetters } from "vuex";

export default defineComponent({
  setup() {},
  computed: {
    ...mapGetters({
      getAirports: "getAirports",
    }),
  },
});
</script>