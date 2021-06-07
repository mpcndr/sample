<template>
  <div class="home">
    <Calendar />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from "@/components/HelloWorld.vue";

export default {
  name: "Home",
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
