<template>
  <div class="about">
    <subject/>
  </div>
</template>

<script>
import subject from '@/components/Subject.vue';

export default {
  name: "about_subject",
  components: {
    subject,
  },
};
</script>
<style>
div.about h1 {
  font-size: 200 px;
}
</style>
