<template>
  <div class="grid grid-cols-2 gap-5 rounded-lg border-2 shadow-lg max-w-lg mx-auto py-8 px-5 my-10 bg-gray-50">
    <autocomplete-input label="From" placeholder="From where?" :items="allAirports"></autocomplete-input>
  </div>
</template>

<script>
import AutocompleteInput from "@/components/partials/AutocompleteInput";
import {mapGetters} from "vuex";
export default {
  name: "PairingSearch",
  computed: {
    ...mapGetters(['allAirports'])
  },
  components: {
    AutocompleteInput
  }
}
</script>

<style scoped>

</style>