<template>
  <Calendar />
</template>

<script>
import Calendar from "@/components/Calendar.vue";

export default {
  components: {
    Calendar,
  },
};
</script>
<style scoped>
@media (max-width: 1200px) {
  * {
    zoom: 0.95;
  }
}
</style>
