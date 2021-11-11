<template>
  <div
    class="grid grid-flow-col auto-cols-max py-8 px-5 mt-5 divide-x divide-gray-500 bg-gray-50 rounded-lg"
  >
    <div class="px-6">
      <SearchInput
        icon="aircraft-depart"
        placeholder="Departure"
        type="departure"
      />
    </div>
    <div class="px-6">
      <SearchInput icon="aircraft-land" placeholder="Arrival" type="arrival" />
    </div>
    <div class="px-6">
      <CounterInput placeholder="0" />
    </div>
    <div class="px-6">
      <DateInput />
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