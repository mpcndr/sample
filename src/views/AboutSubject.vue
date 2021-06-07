<template>
  <div class="about">
    <subject />
  </div>
</template>

<script>
import subject from "@/components/Subject.vue";

export default {
  name: 'about_subject',
  components: {
    subject,
  },
};
</script>
<style scoped>
@media (max-width: 1200px) {
  *{
    zoom: 0.95;
  }
}
</style>
