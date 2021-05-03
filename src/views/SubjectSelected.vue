<template>
  <div>
    <div class="split left">
      <div class="centered">
        <img src="../assets/dashboard (1).png" alt="Avatar woman" />
      </div>
      <div class="text-centered-left">
        <h2>ให้เราวางแผน <br />การลงทะเบียนให้สิ!</h2>
        <p></p>
        <a href="/subject_selected/subject_cal"
          ><button
            type="button"
            class="btn btn-dark"
            
          >
            ลองวางแผน
          </button></a
        >
      </div>
    </div>

    <div class="split right">
      <div class="centered">
        <img src="../assets/planning.png" />
      </div>
      <div class="text-centered-right">
        <h2>
          รายวิชาก่อนหน้า <br />
          และวิชาถัดไป
        </h2>
        <p></p>
        <a href="/subject_selected/dataSubjectdiagram"
          ><button type="button" class="btn btn-light"
            data-mdb-ripple-color="dark">
            ดูรายวิชาและตัวถัดไป
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "subjec_selected",
  components: {
    // TutorAnimation,
  },
};
</script>

<style scoped>
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 0;
  top: -1;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
  background-color: #E5E4E2;
}

.right {
  right: 0;
  background-color: #E3735E;
}
.text-centered-left {
  color: #000;
}
.text-centered-right{
  color: #fff;
}

.centered {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.text-centered-left,
.text-centered-right {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.centered img {
  width: 200px;
}
</style>
