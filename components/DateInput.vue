<template>
  <div class="flex flex-row items-center">
    <div class="mr-3">
        <font-awesome-icon :icon="{ prefix: 'fas', iconName: icon }" class="text-jet-blue-light fa-xl"/>
    </div>
    <client-only>
      <datepicker v-model="date" color="#00A9E2" format="DD/MM/YYYY" placeholder="Date" noCalendarIcon></datepicker>
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
  props: [
    'icon'
  ]
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