<template>
  <div
    class="grid grid-flow-col auto-cols-max gap-5 py-8 px-5 mt-5 bg-gray-50 rounded-lg"
  >
    <SearchInput
      icon="aircraft-depart"
      placeholder="Departure"
      type="departure"
    />
    <SearchInput icon="aircraft-land" placeholder="Arrival" type="arrival" />
    <CounterInput placeholder="0" />
    <DateInput />
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