<template>
  <div>
    <div v-if="checkDesktop()">
      <!-- <h1>Hello IOS</h1> -->
      <studyplan2IOS></studyplan2IOS>
    </div>
    <div v-else>
      <!-- <h1>Hello Computer</h1> -->
      <div class="center">
        <div class="card">
          <div class="additional">
            <div class="user-card">
              <div class="level-center">
                <p class="text-p">แผนการเรียน ก.</p>
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
                  <div>
                    <img
                      class="png-plan"
                      height="100px"
                      width="100px"
                      src="../assets/moodboard (1).png"
                    />
                  </div>
                  <div class="text-centered-left">
                    <h2 style="color: #fff" class="header-plan">
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
                  <div>
                    <img
                      class="png-plan"
                      height="100px"
                      width="100px"
                      src="../assets/moodboard.png"
                    />
                  </div>
                  <div class="text-centered-left">
                    <h2 style="color: #fff" class="header-plan">
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
              เลือกจบแบบทำสหกิจศึกษา
            </h1>
            <p class="text-more">
              <span class="text-span">สหกิจศึกษา</span> คือ
              การปฏิบัติงานเป็นเวลาไม่น้อยกว่า 1
              ภาคการศึกษาในสถานประกอบการในลักษณะ
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
                <p class="text-p">แผนการเรียน ข.</p>
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
                      class="png-plan"
                      height="100px"
                      width="100px"
                      src="../assets/think.png"
                      alt="Avatar woman"
                    />
                  </div>
                  <div class="text-centered-left col-12">
                    <h2 class="header-plan">
                      ให้เราวางแผน <br />การลงทะเบียนให้สิ!
                    </h2>
                    <p></p>
                    <a href="/subject_cal">
                      <button
                        type="button"
                        class="btn btn-light"
                        v-on:click="sendCheck(2)"
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
                      class="png-plan"
                      height="100px"
                      width="100px"
                      src="../assets/project-plan.png"
                      alt="Avatar woman"
                    />
                  </div>
                  <div class="text-centered-left col-12">
                    <h2 class="header-plan">
                      รายวิชาก่อนหน้า <br />
                      และวิชาถัดไป
                    </h2>
                    <p></p>
                    <a href="/dataSubjectdiagram">
                      <button
                        type="button"
                        class="btn btn-light"
                        v-on:click="sendCheck(2)"
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
            <h1>เลือกจบแบบโครงงานวิจัย</h1>
            <p class="text-more">
              <span class="text-span2">โครงงานวิจัย</span> คือ
              หัวข้อทางวิทยาการข้อมูลที่ได้รับการอนุมัติจากคณะกรรมการภายใต้การแนะนำของ
              อาจารย์ที่ปรึกษาในหลักสูตรจัดทำรายงานและการนำเสนอผลงานวิจัย
            </p>
            <span class="more">จิ้มตรงนี้เพื่อดูเพิ่มเติม</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import studyplan2IOS from "../components/studyPlan2forIOS";
export default {
  name: "StudyPlan2",
  components: {
    studyplan2IOS,
  },
  data() {
    return {
      ios: true,
    };
  },
  methods: {
    sendCheck(choose) {
      console.log(choose);
      this.$store.dispatch("setChoose", choose);
      console.log(this.$store.getters.getChoose);
    },
    checkDesktop() {
      if (
        (navigator.vendor != null &&
          navigator.vendor.match(/Apple Computer, Inc./) &&
          navigator.userAgent.match(/iPhone/i)) ||
        navigator.userAgent.match(/iPod/i)
      ) {
        console.log("iphone");
      } else if (
        navigator.vendor != null &&
        navigator.vendor.match(/Apple Computer, Inc./) &&
        navigator.userAgent.match(/iPad/i)
      ) {
        console.log("ipad");
      } else if (
        navigator.vendor != null &&
        navigator.vendor.match(/Apple Computer, Inc./) &&
        navigator.userAgent.indexOf("Safari") != -1
      ) {
        console.log("safari");
      } else if (navigator.vendor == null || navigator.vendor != null) {
        console.log("com");
        this.ios = false
      }
    },
  },
  created() {
    console.log("===> " + this.$store.getters.getChoose);
    this.checkDesktop();
  },
};
</script>
<style scoped>
.center {
  justify-content: center;
  -webkit-appearance: none;
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
  position: absolute;
  /* top: 35%;
  left: 50%; */
  transform: translate(-50%, -50%);
  text-align: center;
}

/* @media only screen and (min-device-width : 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  
} */

@media screen and (max-width: 1024px) {
  .card .additional {
    position: absolute;
    width: 250px;
    height: 100%;
    background: linear-gradient(#de685e, #ee786e);
    transition: width 0.4s;
    overflow: hidden;
    z-index: 2;
  }
  .card .additional .user-card {
    width: 260px;
    height: 100%;
    position: relative;
    float: left;
  }
  .img-center {
    margin-top: 0%;
    width: 150px;
    height: 150px;
  }
  .text-p {
    font-size: 24px;
    margin-top: 15%;
  }
  .png-plan {
    margin-top: 10%;
    width: 150px;
    height: 150px;
  }
  .btn {
    font-size: 20px;
  }
  @media screen and (max-width: 540px) {
    .card .additional {
      position: absolute;
      width: 160px;
      height: 100%;
      background: linear-gradient(#de685e, #ee786e);
      transition: width 0.4s;
      overflow: hidden;
      z-index: 2;
    }
    .card .additional .user-card {
      width: 170px;
      height: 100%;
      position: relative;
      float: left;
    }
    .img-center {
      margin-top: 10%;
      width: 110px;
      height: 110px;
    }
    .text-p {
      font-size: 22px;
      margin-top: 40%;
    }
    .png-plan {
      margin-top: 50%;
      width: 110px;
      height: 110px;
    }
    .btn {
      font-size: 18px;
    }
    @media screen and (max-width: 414px) {
      .card {
        margin: 1.5% 5% 1.5% 5%;
        width: 90%;
        height: 400px;
        background-color: #fff;
        background: linear-gradient(#f8f8f8, #fff);
        box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
        border-radius: 6px;
      }
      .text-span,
      .text-span2 {
        font-size: 18px;
        font-weight: bold;
      }
      .card .additional {
        position: absolute;
        width: 140px;
        height: 100%;
        background: linear-gradient(#de685e, #ee786e);
        transition: width 0.4s;
        overflow: hidden;
        z-index: 2;
      }
      .card .additional .user-card {
        width: 150px;
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
      .img-center {
        margin-top: 10%;
        width: 95px;
        height: 95px;
      }
      .text-p {
        font-size: 18px;
        margin-top: 55%;
      }
      .general > h1 {
        font-size: 18px;
        letter-spacing: 0px;
      }
      .text-more {
        font-size: 14px;
      }
      .card .general {
        justify-content: center;
        /* width: 50%; */
        height: 100%;
        margin-top: 20%;
        margin-left: 25%;
        margin-right: 0%;
        /* box-sizing: border-box; */
        padding-top: 5%;
      }
      /* more learn */
      .card .general .more {
        position: absolute;
        bottom: 7.5rem;
        right: 1.5rem;
        font-size: 0.9em;
      }
      .header-plan {
        font-size: 14px;
        margin-top: 10%;
      }
      .btn {
        font-size: 14px;
      }
      /* img select paln  */
      .png-plan {
        margin-top: 70%;
        width: 90px;
        height: 90px;
      }
      @media screen and (max-width: 375px) {
        .card {
          margin: 1.5% 5% 1.5% 5%;
          width: 90%;
          height: 350px;
          background-color: #fff;
          background: linear-gradient(#f8f8f8, #fff);
          box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
          border-radius: 6px;
        }
        .text-span,
        .text-span2 {
          font-size: 18px;
          font-weight: bold;
        }
        .card .additional {
          position: absolute;
          width: 110px;
          height: 100%;
          background: linear-gradient(#de685e, #ee786e);
          transition: width 0.4s;
          overflow: hidden;
          z-index: 2;
        }
        .card .additional .user-card {
          width: 120px;
          height: 100%;
          position: relative;
          float: left;
        }
        /* line between plan and select plan */
        .card .additional .user-card::after {
          display: block;
          position: absolute;
          top: 10%;
          right: -2px;
          height: 80%;
          border-left: 2px solid #dbd2d2;
        }
        /* แผนการเรียน ก./ข. img */
        .img-center {
          margin-top: 25%;
          width: 75px;
          height: 75px;
        }
        div .level-center {
          justify-content: center;
        }
        /* text plan a./b. */
        .text-p {
          font-size: 18px;
          margin-top: 50%;
        }
        .general > h1 {
          font-size: 20px;
          letter-spacing: 0px;
        }
        .text-more {
          font-size: 14px;
        }
        .card .general {
          justify-content: center;
          /* width: 50%; */
          height: 100%;
          margin-left: 15%;
          margin-right: 0%;
          /* box-sizing: border-box; */
          padding-top: 5%;
        }
        .card .general .more {
          position: absolute;
          bottom: 6.5rem;
          right: 1.5rem;
          font-size: 0.9em;
        }
        .header-plan {
          font-size: 14px;
          margin-top: 10%;
        }
        @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
          .text-p {
            font-size: 14px;
            margin-top: 50%;
          }
          .general > h1 {
            margin-top: -15%;
            font-size: 18px;
            letter-spacing: 0px;
          }
          /* แผนการเรียน ก./ข. img */
          .img-center {
            margin-top: 25%;
            width: 75px;
            height: 75px;
          }
          .png-plan {
            margin-top: 50%;
            width: 90px;
            height: 90px;
          }
          .card .general .more {
            position: absolute;
            bottom: 7.5rem;
            right: 1.5rem;
            font-size: 0.5em;
          }
          .text-span,
          .text-span2 {
            font-size: 14px;
            font-weight: bold;
          }
          .text-more {
            font-size: 12px;
          }
          .card .general {
            justify-content: center;
            height: 100%;
            /* margin-left: 15%; */
            margin-right: 0%;
            padding: 0% auto;
          }
        }
      }
    }
  }
}
</style>
