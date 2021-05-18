<template>
  <div class="center">
    <div class="card">
      <div class="additional">
        <div class="user-card">
          <div class="level-center">
            แผนการเรียน ก.
          </div>
          <div>
            <img
              class="img-center"
              width="150"
              height="150"
              src="../assets/promotion.png"
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
                <h2 style="color: #fff">ให้เราวางแผน <br />การลงทะเบียนให้สิ!</h2>
                <p></p>
                <a href="/subject_cal">
                  <button type="button" class="btn btn-dark" v-on:click="sendCheck(1)">
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
                  <button type="button" class="btn btn-dark" v-on:click="sendCheck(1)">
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
          เลือกจบแบบทำสหกิจศึกษา
        </h1>
        <p>
          <span class="text-span">สหกิจศึกษา</span> คือ
          การปฏิบัติงานเป็นเวลาไม่น้อยกว่า 1 ภาคการศึกษาในสถานประกอบการในลักษณะ
          พนักงานชั่วคราวเพื่อให้ได้ประสบการณ์จากการไปปฏิบัติงานที่ได้รับมอบหมายที่เกี่ยวกับสาขา
          วิทยาการข้อมูล การจัดทำรายงานสหกิจ และการนำเสนอ
        </p>
        <span class="more">จิ้มตรงนี้เพื่อดูเพิ่มเติม</span>
      </div>
    </div>
    <div class="card green">
      <div class="additional">
        <div class="user-card">
          <div class="level-center">
            แผนการเรียน ข.
          </div>
          <div>
            <img
              class="img-center"
              width="150"
              height="150"
              src="../assets/responsive.png"
            />
          </div>
        </div>
        <div class="more-info row">
          <div class="col-6">
            <div class="split left">
              <div class="col-12">
                <img
                  height="100px"
                  width="100px"
                  src="../assets/think.png"
                  alt="Avatar woman"
                />
              </div>
              <div class="text-centered-left col-12">
                <h2>ให้เราวางแผน <br />การลงทะเบียนให้สิ!</h2>
                <p></p>
                <a href="/subject_cal" >
                  <button type="button" class="btn btn-light" v-on:click="sendCheck(2)">
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
                  src="../assets/project-plan.png"
                  alt="Avatar woman"
                />
              </div>
              <div class="text-centered-left col-12">
                <h2>
                  รายวิชาก่อนหน้า <br />
                  และวิชาถัดไป
                </h2>
                <p></p>
                <a href="/dataSubjectdiagram">
                  <button type="button" class="btn btn-light" v-on:click="sendCheck(2)">
                    ดูรายวิชาและตัวถัดไป
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="general">
        <h1>เลือกจบแบบโครงงานวิจัย</h1>
        <p>
          <span class="text-span2">โครงงานวิจัย</span> คือ
          หัวข้อทางวิทยาการข้อมูลที่ได้รับการอนุมัติจากคณะกรรมการภายใต้การแนะนำของ
          อาจารย์ที่ปรึกษาในหลักสูตรจัดทำรายงานและการนำเสนอผลงานวิจัย
        </p>
        <span class="more">จิ้มตรงนี้เพื่อดูเพิ่มเติม</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StudyPlan',
  methods: {
    sendCheck(choose) {
      console.log(choose);
      this.$store.dispatch("setChoose", choose)
      console.log(this.$store.getters.getChoose);
    }
  },
  created() {
    console.log("===> "+this.$store.getters.getChoose);
  }
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
  margin-top: 10%;
}
.card {
  margin: 1.5% 5% 1.5% 5%;
  width: 90%;
  height: 400px;
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

.text-span2 {
  color: #92bca6;
  font-size: 24px;
  font-weight: bold;
}

.card .additional {
  position: absolute;
  width: 250px;
  height: 100%;
  background: linear-gradient(#de685e, #ee786e);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
}

.card.green .additional {
  background: linear-gradient(#92bca6, #a2ccb6);
}

.card:hover .additional {
  width: 100%;
  border-radius: 0 5px 5px 0;
}

.card .additional .user-card {
  width: 250px;
  height: 100%;
  position: relative;
  float: left;
}

.card .additional .user-card::after {
  content: "";
  display: block;
  position: absolute;
  top: 10%;
  right: -2px;
  height: 80%;
  border-left: 2px solid #dbd2d2;
}

.level-center {
  justify-content: center;
  margin-top: 30%;
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
  margin-left: 30%;
  /* box-sizing: border-box; */
  padding: 5rem;
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
  /* height: 100%; */
  /* width: 50%; */
  overflow-x: hidden;
  /* padding-top: 10px; */
  margin-top: 10%;
}
.left {
  margin-left: 5%;
}
.centered {
  /* position: absolute; */
  /* top: 35%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  text-align: center;
}
</style>
