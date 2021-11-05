<template>
  <div
    class="grid sm:grid-cols-1 md:grid-cols-4 md:gap-5 rounded-lg border-2 max-w-4xl py-8 px-5 mt-5 bg-gray-50"
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