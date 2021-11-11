<template>
  <div class="flex flex-col">
    <client-only>
      <datepicker v-model="date" color="#00A9E2"> </datepicker>
    </client-only>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {
      date: null,
    };
  },
});
</script>

<style lang="scss">
.vd-wrapper {
  padding: 0.5rem;
  .vd-picker__input {
    &-icon {
      margin: 0;
    }
    input {
      padding: 0;
      margin: 0;
    }
  }
}
</style>