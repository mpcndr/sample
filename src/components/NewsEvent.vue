<template>

  <div id="news-event container">
    <h2 class="text-header">บทความ</h2>
    
  </div>
</template>

<script>
export default {
  el: "#news-event",
  data() {
    return {};
  },
  methods: {
    getUnits: function() {
      const buttonRight = document.getElementById("slideRight");
      const buttonLeft = document.getElementById("slideLeft");

      buttonRight.onclick = function() {
        document.getElementById("scrollcontainer").scrollLeft += 400;
      };
      buttonLeft.onclick = function() {
        document.getElementById("scrollcontainer").scrollLeft -= 400;
      };
    },
  },
  mounted: function(){
      this.getUnits();
  }
};
</script>

<style scoped>

#news-event {
    margin-top: 5px;
}
.text-header {
    color: #da694b;
    font-weight: bold;
    padding-top: 30px;
}

</style>
