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
                  class="img-plan"
                  height="200px"
                  width="200px"
                  src="../assets/think.png"
                />
              </div>
              <div class="text-centered-left col-12">
                <h2 class="text-head" style="color: #6F4E37">
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
                  class="img-plan"
                  height="200px"
                  width="200px"
                  src="../assets/project-plan.png"
                />
              </div>
              <div class="text-centered-left col-12">
                <h2 class="text-head" style="color: #6F4E37">
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
        <h1>การวางแผนการลงทะเบียน<br />กับรายวิชาก่อนหน้าและวิชาถัดไป</h1>
        <h4 class="text-span">"ช่วยอะไรได้บ้าง?"</h4>
        <p class="text-more">
          ในส่วนนี้จะนำรายวิชาที่นักศึกษาได้ลงทะเบียนมาก่อนแล้ว
          มาช่วยวางแผนและแนะนำในการลงทะเบียนในเทอมปัจจุบันจนจบหลักสูตร
        </p>
        <p class="text-more">
          <span class="text-danger">ข้อชี้แนะ!</span>
          จะแสดงเฉพาะรายวิชาหลักทั้งหมดเท่านั้น ยังไม่รวมรายวิชาเลือกในหมวดต่างๆ
          นักศึกษาต้องตัดสินใจเลือกลงทะเบียนเองในแต่ละเทอม
          โดยดูรายวิชาเลือกได้ในเมนู วิชาเลือก
          นอกจากนี้การวางแผนการลงทะเบียนยังไม่นำเกรดเฉลี่ยของนักศึกษามาคิดร่วมด้วยการแนะนำแผนการเรียนนี้เป็นการประกอบการตัดสินใจในการลงทะเบียนเท่านั้น
          นักศึกษาควรพิจารณาก่อนลงทะเบียน
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
  letter-spacing: 4px;
}

.text-span {
  color: #e97451;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 8px;
  text-align: left;
  margin-top: 5%;
}

.card .additional {
  /* position: absolute; */
  width: 480px;
  height: 100%;
  background: linear-gradient(#b6d0e2, #c1dcf0);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
}

.card:hover .additional {
  width: 100%;
  border-radius: 0 5px 5px 0;
}

.card .additional > div.user-card {
  width: 490px;
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
  text-align: left;
}
.split {
  overflow-x: hidden;
  margin-top: 35%;
}
.img-plan {
  margin-bottom: 3%;
}
.left {
  margin-left: 5%;
}
.centered {
  text-align: center;
}
.text-danger {
  color: #c41e3a;
  font-weight: bold;
  font-size: 22px;
  text-decoration: underline;
}
p {
  text-indent: 50px;
}

@media screen and (max-width: 1024px) {
  .card .additional {
    /* position: absolute; */
    width: 350px;
    height: 100%;
    background: linear-gradient(#b6d0e2, #c1dcf0);
    transition: width 0.4s;
    overflow: hidden;
    z-index: 2;
  }
  .card .additional > div.user-card {
    width: 370px;
    height: 100%;
    position: relative;
    float: left;
  }
  .img-center {
    width: 180px;
    height: 180px;
    margin-top: 150%;
  }
  .card .general {
    justify-content: center;
    /* width: 50%; */
    height: 100%;
    position: absolute;
    margin-left: 25%;
    /* box-sizing: border-box; */
    padding: 5rem;
    padding-top: 5%;
  }
  .text-danger {
    color: #c41e3a;
    font-weight: bold;
    font-size: 18px;
    text-decoration: underline;
  }
  .text-span {
    color: #e97451;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 5%;
  }
  .general > h1 {
    margin-top: 20%;
    font-size: 24px;
  }
  .text-more {
    font-size: 18px;
  }
  p {
    text-indent: 0px;
  }
  .img-plan {
    margin-top: 80%;
    width: 200px;
    height: 200px;
  }
  .text-head {
    margin-top: 5%;
    font-size: 32px;
  }
  .btn {
    font-size: 24px;
  }
  p {
    text-indent: 50px;
  }
  @media screen and (max-width: 548px) {
    .card .additional {
      /* position: absolute; */
      width: 150px;
      height: 100%;
      background: linear-gradient(#b6d0e2, #c1dcf0);
      transition: width 0.4s;
      overflow: hidden;
      z-index: 2;
    }
    .card .additional > div.user-card {
      width: 160px;
      height: 100%;
      position: relative;
      float: left;
    }
    .img-center {
      width: 120px;
      height: 120px;
      margin-top: 180%;
    }
    .card .general {
      justify-content: center;
      /* width: 50%; */
      height: 100%;
      position: absolute;
      margin-left: 25%;
      /* box-sizing: border-box; */
      padding: 5rem;
      padding-top: 5%;
    }
    .text-danger {
      color: #c41e3a;
      font-weight: bold;
      font-size: 16px;
      text-decoration: underline;
    }
    .text-span {
      color: #e97451;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0px;
      text-align: left;
      margin-top: 5%;
    }
    .general > h1 {
      margin-top: 20%;
      font-size: 18px;
    }
    .text-more {
      font-size: 14px;
    }
    p {
      text-indent: 0px;
    }
    .img-plan {
      margin-top: 150%;
      width: 120px;
      height: 120px;
    }
    .text-head {
      margin-top: 10%;
      font-size: 18px;
    }
    .btn {
      font-size: 14px;
    }
    @media screen and (max-width: 375px) {
      .card .additional {
        /* position: absolute; */
        width: 150px;
        height: 100%;
        background: linear-gradient(#b6d0e2, #c1dcf0);
        transition: width 0.4s;
        overflow: hidden;
        z-index: 2;
      }
      .card .additional > div.user-card {
        width: 160px;
        height: 100%;
        position: relative;
        float: left;
      }
      .img-center {
        width: 90px;
        height: 90px;
        margin-top: 120%;
      }
      .card .general {
        justify-content: center;
        /* width: 50%; */
        height: 100%;
        position: absolute;
        margin-left: 25%;
        /* box-sizing: border-box; */
        padding: 5rem;
        padding-top: 5%;
      }

      .card .general .more {
        position: absolute;
        bottom: 0.5rem;
        right: 1rem;
        font-size: 0.2em;
      }
      .text-danger {
        color: #c41e3a;
        font-weight: bold;
        font-size: 12px;
        text-decoration: underline;
      }
      .text-span {
        color: #e97451;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0px;
        text-align: left;
        margin-top: 5%;
      }
      .general > h1 {
        font-size: 14px;
      }
      .text-more {
        font-size: 10px;
      }
      p {
        text-indent: 0px;
      }
      .img-plan {
        margin-top: 180%;
        width: 80px;
        height: 80px;
      }
      .text-head {
        margin-top: 10%;
        font-size: 14px;
      }
      .btn {
        font-size: 12px;
      }
    }
  }
}
</style>
