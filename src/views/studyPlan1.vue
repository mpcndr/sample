<template>
  <div class="center">
    <div class="card">
      <div class="additional">
        <div class="user-card">
          <div>
            <img
              class="img-center"
              width="200"
              height="200"
              src="../assets/online-education.png"
            />
          </div>
          <div></div>
        </div>
        <div class="more-info row">
          <div class="col-6">
            <div class="split left">
              <div class="col-12">
                <img
                  height="100px"
                  width="100px"
                  src="../assets/moodboard (1).png"
                  alt="Avatar woman"
                />
              </div>
              <div class="text-centered-left col-12">
                <h2 style="color: #fff">
                  ให้เราวางแผน <br />การลงทะเบียนให้สิ!
                </h2>
                <p></p>
                <a href="/subject_cal">
                  <button
                    type="button"
                    class="btn btn-dark"
                    v-on:click="sendCheck(1)"
                  >
                    วางแผนการเรียน
                  </button></a
                >
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="split right">
              <div class="col-12">
                <img
                  height="100px"
                  width="100px"
                  src="../assets/moodboard.png"
                  alt="Avatar woman"
                />
              </div>
              <div class="text-centered-left col-12">
                <h2 style="color: #fff">
                  รายวิชาก่อนหน้า <br />
                  และวิชาถัดไป
                </h2>
                <p></p>
                <a href="/dataSubjectdiagram">
                  <button
                    type="button"
                    class="btn btn-dark"
                    v-on:click="sendCheck(1)"
                  >
                    ดูรายวิชาและตัวถัดไป
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="general">
        <h1>
          การวางแผนการลงทะเบียน กับรายวิชาก่อนหน้าและวิชาถัดไป
        </h1>
        <p>
          <span class="text-span">สหกิจศึกษา</span> คือ
          การปฏิบัติงานเป็นเวลาไม่น้อยกว่า 1 ภาคการศึกษาในสถานประกอบการในลักษณะ
          พนักงานชั่วคราวเพื่อให้ได้ประสบการณ์จากการไปปฏิบัติงานที่ได้รับมอบหมายที่เกี่ยวกับสาขา
          วิทยาการข้อมูล การจัดทำรายงานสหกิจ และการนำเสนอ
        </p>
        <span class="more">นำลูกศรมาวางไว้บนนี้สิ</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "studyPlan1",
  components: {
    // TutorAnimation,
  },
};
</script>

<style scoped>
.center {
  justify-content: center;
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  /* -webkit-transform: translate(-50%, -50%); */
}
.img-center {
  margin-top: 55%;
}
.card {
  margin: 1.5% 5% 1.5% 5%;
  width: 90%;
  height: 85vh;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
}

.card h1 {
  text-align: center;
  letter-spacing: 6px;
}

.text-span {
  color: #de685e;
  font-size: 24px;
  font-weight: bold;
}

.card .additional {
  /* position: absolute; */
  width: 25%;
  height: 100%;
  background: linear-gradient(#B6D0E2, #c1dcf0);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
}

.card:hover .additional {
  width: 100%;
  border-radius: 0 5px 5px 0;
}

.card .additional > div.user-card {
  width: 25vw;
  height: 100%;
  position: relative;
  float: left;
}

.card .additional .user-card::after {
  content: "";
  display: block;
  position: absolute;
  top: 5%;
  right: -2px;
  height: 90%;
  border-left: 2px solid #868686;
}

.card .additional .user-card .level-center {
  /* top: 15%; */
  color: #fff;
  /* text-transform: uppercase; */
  font-size: 24px;
  /* background: rgba(0, 0, 0, 0.15); */
  padding: 0.2rem 0rem;
  border-radius: 100px;
  /* white-space: nowrap; */
}

.card .additional .more-info {
  /* width: 50%; */
  /* justify-content: center; */
  /* position: absolute; */
  /* left: 50%; */
  height: 100%;
}

.card .additional .coords {
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;
}

.card.green .additional .coords {
  color: #325c46;
}

.card .additional .coords span + span {
  float: right;
}

.card.green .additional .stats {
  color: #325c46;
}

.card .additional .stats > div {
  flex: 1;
  text-align: center;
}

.card .additional .stats i {
  display: block;
}

.card .additional .stats div.title {
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}

.card .additional .stats div.value {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
}

.card .additional .stats div.value.infinity {
  font-size: 2.5rem;
}

.card .general {
  justify-content: center;
  /* width: 50%; */
  height: 100%;
  position: absolute;
  margin-left: 25%;
  /* box-sizing: border-box; */
  padding: 10rem;
  padding-top: 6%;
}

.card .general .more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.9em;
}
p {
  font-size: 20px;
}
.split {
  overflow-x: hidden;
  margin-top: 10%;
}
.left {
  margin-left: 5%;
}
.centered {
  text-align: center;
}

@media screen and (max-width: 360px) {
  .center {
    width: 30%;
    height: 30%;
  }
}
</style>
