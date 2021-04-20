<template>
  <div class="container" style="margin-top: 10px">
    <div class="row">
      <div class="index-panel">
        <div class="index-panel-header clearfloat">
          <h3>บทความ</h3>
          <div class="line"></div>
        </div>
      </div>
    </div>
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
  mounted: function() {
    this.getUnits();
  },
};
</script>

<style scoped>
.index-panel-header > h3 {
  margin-top: 35px;
  float: left;
  margin-right: 36px;
  font-size: 20px;
  color: #3b3b3b;
  font-weight: normal;
}

.index-panel-header .line {
  float: left;
  margin-top: 45px;
  width: 200px;
  border-top: 2px solid #da694b;
}

</style>
