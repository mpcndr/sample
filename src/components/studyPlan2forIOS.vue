<template>
  <div class="center">
    <div class="card">
      <div class="additional">
        <div class="user-card">
          <div class="level-center">
            <p>
              เลือกจบแบบทำสหกิจศึกษา
            </p>
          </div>
          <div>
            <img class="img-center" src="../assets/promotion.png" />
          </div>
          <div class="text-learn">
            <p class="text-more">
              <span class="text-span">สหกิจศึกษา</span> คือ
              การปฏิบัติงานเป็นเวลาไม่น้อยกว่า 1
              ภาคการศึกษาในสถานประกอบการในลักษณะ
              พนักงานชั่วคราวเพื่อให้ได้ประสบการณ์จากการไปปฏิบัติงานที่ได้รับมอบหมายที่เกี่ยวกับสาขา
              วิทยาการข้อมูล การจัดทำรายงานสหกิจ และการนำเสนอ
            </p>
          </div>
        </div>
      </div>
      <div class="general">
        <div class="more-info row">
          <div class="col-6">
            <div class="split left">
              <div>
                <img class="png-plan" src="../assets/moodboard (1).png" />
              </div>
              <div class="text-centered-left">
                <h2 style="color: #000" class="header-plan">
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
                <img class="png-plan" src="../assets/moodboard.png" />
              </div>
              <div class="text-centered-left">
                <h2 style="color: #000" class="header-plan">
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
    </div>
    <div class="card green">
      <div class="additional">
        <div class="user-card">
          <div class="level-center">
            <p>เลือกจบแบบโครงงานวิจัย</p>
          </div>
          <div>
            <img class="img-center" src="../assets/responsive.png" />
          </div>
          <div class="text-learn">
            <p class="text-more">
              <span class="text-span2">โครงงานวิจัย</span> คือ
              หัวข้อทางวิทยาการข้อมูลที่ได้รับการอนุมัติจากคณะกรรมการภายใต้การแนะนำของ
              อาจารย์ที่ปรึกษาในหลักสูตรจัดทำรายงานและการนำเสนอผลงานวิจัย
            </p>
          </div>
        </div>
      </div>
      <div class="general">
        <div class="more-info row">
          <div class="col-6">
            <div class="split left">
              <div class="col-12">
                <img class="png-plan" src="../assets/think.png" />
              </div>
              <div class="text-centered-left col-12">
                <h2 class="header-plan">
                  ให้เราวางแผน <br />การลงทะเบียนให้สิ!
                </h2>
                <p></p>
                <a href="/subject_cal">
                  <button
                    type="button"
                    class="btn btn-dark"
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
                    class="btn btn-dark"
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
    </div>
  </div>
</template>
<style scoped>
.center {
  justify-content: center;
  -webkit-appearance: none;
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  /* -webkit-transform: translate(-50%, -50%); */
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
  color: #fff;
  font-size: 24px;
}

.text-span2 {
  color: #fff;
  font-size: 24px;
}

.card .additional {
  position: absolute;
  width: 250px;
  height: 100%;
  background: linear-gradient(#de685e, #ee786e);
  overflow: hidden;
  z-index: 2;
}

.card.green .additional {
  background: linear-gradient(#92bca6, #a2ccb6);
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
  margin-top: 25%;
}

.card .additional .user-card .level-center {
  /* top: 15%; */
  color: #fff;
  /* text-transform: uppercase; */
  font-size: 22px;
  /* background: rgba(0, 0, 0, 0.15); */
  padding: 5px;
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

.card .general {
  justify-content: center;
  width: 50%;
  height: 100%;
  position: absolute;
  margin-left: 40%;
  box-sizing: border-box;
  padding: 0;
}
p {
  font-size: 20px;
}
.split {
  /* height: 100%; */
  /* width: 50%; */
  overflow-x: hidden;
  /* padding-top: 10px; */
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
@media screen and (max-width: 1366px) {
  .card {
    margin: 1.5% 5% 1.5% 5%;
    width: 90%;
    height: 450px;
    background-color: #fff;
    background: linear-gradient(#f8f8f8, #fff);
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
    border-radius: 6px;
  }
  .card .additional {
    position: absolute;
    width: 340px;
    height: 100%;
    background: linear-gradient(#de685e, #ee786e);
    transition: width 0.4s;
    overflow: hidden;
    z-index: 2;
  }
  .card .additional .user-card {
    width: 350px;
    height: 100%;
    position: relative;
    float: left;
  }
  .img-center {
    margin-top: 0%;
    width: 95px;
    height: 95px;
  }
  .level-center > p {
    margin-top: -8%;
    font-size: 26px;
  }
  .text-more {
    font-size: 16px;
    padding: 20px;
  }
  .png-plan {
    margin-top: 10%;
    width: 120px;
    height: 120px;
  }
  .btn {
    font-size: 20px;
  }
  .general {
    margin-left: 35%;
    margin-top: 5%;
  }
  .header-plan {
    margin-top: 10px;
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    .card .additional {
      position: absolute;
      width: 360px;
      height: 100%;
      background: linear-gradient(#de685e, #ee786e);
      transition: width 0.4s;
      overflow: hidden;
      z-index: 2;
    }
    .card .additional .user-card {
      width: 370px;
      height: 100%;
      position: relative;
      float: left;
    }
    .card .additional .user-card::after {
      display: block;
      position: absolute;
      top: 10%;
      right: -12px;
      height: 80%;
      border-left: 2px solid #dbd2d2;
    }
    .level-center > p {
      margin-top: 0%;
      font-size: 28px;
    }
    .img-center {
      margin-top: 0%;
      width: 95px;
      height: 95px;
    }
    .text-p {
      font-size: 24px;
      margin-top: 15%;
    }
    .text-more {
      font-size: 18px;
      padding: 5px;
    }
    .png-plan {
      margin-top: 10%;
      width: 150px;
      height: 150px;
    }
    .btn {
      font-size: 20px;
    }
    .general {
      margin-left: 35%;
      margin-top: 5%;
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
        .card .general {
          justify-content: center;
          /* width: 50%; */
          height: 100%;
          margin-top: 10%;
          box-sizing: border-box;
          padding-top: 5%;
        }
        .header-plan {
          font-size: 14px;
          margin-top: 10%;
        }
        @media only screen and (min-device-width: 414px) and (max-device-height: 896px) {
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
          .general > h1 {
            margin-top: -15%;
            font-size: 18px;
            letter-spacing: 0px;
          }
          /* แผนการเรียน ก./ข. img */
          .img-center {
            margin-top: 0%;
            width: 75px;
            height: 75px;
          }
          .png-plan {
            margin-top: 0%;
            width: 90px;
            height: 90px;
          }
          .text-span,
          .text-span2 {
            font-size: 12px;
          }
          .level-center > p {
              margin-top: 0%;
              font-size: 20px;
            }
          .text-more {
            font-size: 10px;
          }
          .card .general {
            justify-content: center;
            height: 100%;
            margin-left: 200px;
            margin-right: 0%;
            padding: 0% auto;
          }
          .text-learn {
            padding: 5px;
          }
          .btn {
            font-size: 14px;
          }
        }
        @media screen and (max-width: 375px) {
          .card {
            margin: 1.5% 5% 1.5% 5%;
            width: 90%;
            height: 320px;
            background-color: #fff;
            background: linear-gradient(#f8f8f8, #fff);
            box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
            border-radius: 6px;
          }
          @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
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
            .general > h1 {
              margin-top: -15%;
              font-size: 18px;
              letter-spacing: 0px;
            }
            /* แผนการเรียน ก./ข. img */
            .img-center {
              margin-top: 0%;
              width: 75px;
              height: 75px;
            }
            .png-plan {
              margin-top: 0%;
              width: 90px;
              height: 90px;
            }
            .level-center > p {
              margin-top: 0%;
              font-size: 20px;
            }
            .text-span,
            .text-span2 {
              font-size: 12px;
            }
            .text-more {
              font-size: 10px;
            }
            .card .general {
              justify-content: center;
              height: 100%;
              margin-left: 200px;
              margin-right: 0%;
              padding: 0% auto;
            }
            .text-learn {
              padding: 5px;
            }
            .btn {
              font-size: 14px;
            }
          }
          @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 2) {
            .card {
              margin: 1.5% 5% 1.5% 5%;
              width: 90%;
              height: 370px;
              background-color: #fff;
              background: linear-gradient(#f8f8f8, #fff);
              box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
              border-radius: 6px;
            }
            /* แผนการเรียน ก./ข. img */
            .img-center {
              margin-top: 0%;
              width: 75px;
              height: 75px;
            }
            .level-center > p {
              margin-top: 0%;
              font-size: 20px;
            }
            .png-plan {
              margin-top: 20%;
              width: 90px;
              height: 90px;
            }
            .text-span,
            .text-span2 {
              font-size: 14px;
            }
            .text-more {
              font-size: 12px;
            }
            .card .general {
              justify-content: center;
              height: 100%;
              margin-left: 200px;
              margin-right: 0%;
              padding: 0% auto;
            }
            .text-learn {
              padding: 5px;
            }
            .btn {
              font-size: 14px;
            }
          }
          @media screen and (max-width: 320px) {
            .card {
              margin: 1.5% 5% 1.5% 5%;
              width: 90%;
              height: 300px;
              background-color: #fff;
              background: linear-gradient(#f8f8f8, #fff);
              box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
              border-radius: 6px;
            }
            .level-center > p {
              margin-top: 0%;
              font-size: 20px;
            }
            @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
              .card .additional {
                position: absolute;
                width: 160px;
                height: 100%;
                background: linear-gradient(#de685e, #ee786e);
                overflow: hidden;
                z-index: 2;
              }
              .card .additional .user-card {
                width: 170px;
                height: 100%;
                position: relative;
                float: left;
              }
              /* แผนการเรียน ก./ข. img */
              .img-center {
                margin-top: -5%;
                width: 65px;
                height: 65px;
              }
              .png-plan {
                margin-top: 20%;
                width: 70px;
                height: 70px;
              }
              .text-span,
              .text-span2 {
                font-size: 12px;
              }
              .text-more {
                font-size: 8px;
              }
              .card .general {
                justify-content: center;
                height: 100%;
                margin-left: 190px;
                margin-right: 0%;
                padding: 0% auto;
              }
              .text-learn {
                padding: 5px;
              }
              .btn {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
