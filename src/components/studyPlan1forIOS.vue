<template>
  <div>
    <div class="center">
      <div class="card">
        <div class="additional">
          <div class="user-card">
            <div class="level-center">
              <p>การวางแผนการลงทะเบียน<br />กับรายวิชาก่อนหน้าและวิชาถัดไป</p>
            </div>
            <div class="text-learn">
              <p class="text-span">"ช่วยอะไรได้บ้าง?"</p>
              <p class="text-more1">
                ในส่วนนี้จะนำรายวิชาที่นักศึกษาได้ลงทะเบียนมาก่อนแล้ว
                มาช่วยวางแผนและแนะนำในการลงทะเบียนในเทอมปัจจุบันจนจบหลักสูตร
              </p>
              <p class="text-more2">
                <span id="text-danger">ข้อชี้แนะ!</span>
                จะแสดงเฉพาะรายวิชาหลักทั้งหมดเท่านั้น
                ยังไม่รวมรายวิชาเลือกในหมวดต่างๆ
                นักศึกษาต้องตัดสินใจเลือกลงทะเบียนเองในแต่ละเทอม
                โดยดูรายวิชาเลือกได้ในเมนู วิชาเลือก
                นอกจากนี้การวางแผนการลงทะเบียนยังไม่นำเกรดเฉลี่ยของนักศึกษามาคิดร่วมด้วยการแนะนำแผนการเรียนนี้เป็นการประกอบการตัดสินใจในการลงทะเบียนเท่านั้น
                นักศึกษาควรพิจารณาก่อนลงทะเบียน
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
    </div>
  </div>
</template>
<style scoped>
.center {
  justify-content: center;
  -webkit-appearance: none;
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
  text-align: left;
}

.card .additional {
  position: absolute;
  width: 250px;
  height: 100%;
  background: linear-gradient(#de685e, #ee786e);
  overflow: hidden;
  z-index: 2;
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
  color: #000;
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
.text-more1 {
  text-align: left;
  text-indent: 50px;
}
.text-more2 {
  text-align: left;
  text-indent: 50px;
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
.png-plan {
  margin-top: 20%;
  width: 150px;
  height: 150px;
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
#text-danger {
  color: #fff;
  /* font-weight: bold; */
  font-size: 22px;
  text-decoration: underline;
}

/* @media only screen and (min-device-width : 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  
} */
@media screen and (max-width: 1366px) {
  .card {
    margin: 1.5% 5% 1.5% 5%;
    width: 90%;
    height: 800px;
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
  .level-center > p {
    margin-top: 0%;
    font-size: 28px;
  }
  .card .additional {
    position: absolute;
    width: 540px;
    height: 100%;
    background: linear-gradient(#de685e, #ee786e);
    overflow: hidden;
    z-index: 2;
  }
  .card .additional .user-card {
    width: 550px;
    height: 100%;
    position: relative;
    float: left;
  }
  .card .additional .user-card::after {
    content: "";
    display: block;
    position: absolute;
    top: 10%;
    right: -10px;
    height: 80%;
    border-left: 2px solid #dbd2d2;
  }
  .png-plan {
    margin-top: 20%;
    width: 140px;
    height: 140px;
  }
  .text-span {
    font-size: 20px;
    letter-spacing: 4px;
    margin-left: 20px;
  }
  .text-more1 {
    font-size: 18px;
    text-indent: 20px;
    padding: 0px 10px;
  }
  .text-more2 {
    font-size: 16px;
    text-indent: 20px;
    padding: 10px;
  }
  #text-danger {
    color: #fff;
    font-size: 18px;
    text-decoration: underline;
  }
  .card .general {
    justify-content: center;
    height: 100%;
    margin-left: 560px;
    margin-right: 0%;
    padding: 0% auto;
  }
  .text-learn {
    padding: 5px;
  }
  .btn {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    .card {
      margin: 1.5% 5% 1.5% 5%;
      width: 90%;
      height: 800px;
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
    .level-center > p {
      margin-top: 0%;
      font-size: 36px;
    }
    .card .additional {
      position: absolute;
      width: 540px;
      height: 100%;
      background: linear-gradient(#de685e, #ee786e);
      overflow: hidden;
      z-index: 2;
    }
    .card .additional .user-card {
      width: 550px;
      height: 100%;
      position: relative;
      float: left;
    }
    .card .additional .user-card::after {
      content: "";
      display: block;
      position: absolute;
      top: 10%;
      right: -25px;
      height: 80%;
      border-left: 2px solid #dbd2d2;
    }
    .png-plan {
      margin-top: 20%;
      width: 200px;
      height: 200px;
    }
    .text-span {
      font-size: 26px;
      letter-spacing: 8px;
      margin-left: 30px;
    }
    .text-more1 {
      font-size: 22px;
      text-indent: 20px;
      padding: 0px 40px;
    }
    .text-more2 {
      font-size: 20px;
      text-indent: 20px;
      padding: 40px;
    }
    .header-plan {
      font-size: 32px;
      margin-top: 15px;
      margin-bottom: 25px;
    }
    #text-danger {
      color: #fff;
      font-size: 22px;
      text-decoration: underline;
    }
    .card .general {
      justify-content: center;
      height: 100%;
      margin-left: 600px;
      margin-right: 0%;
      padding: 0% auto;
    }
    .text-learn {
      padding: 5px;
    }
    .btn {
      font-size: 22px;
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
          height: 500px;
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
        .level-center > p {
          margin-top: 0%;
          font-size: 20px;
        }
        @media only screen and (min-device-width: 414px) and (max-device-height: 896px) {
          .card .additional {
            position: absolute;
            width: 240px;
            height: 100%;
            background: linear-gradient(#de685e, #ee786e);
            transition: width 0.4s;
            overflow: hidden;
            z-index: 2;
          }
          .card .additional .user-card {
            width: 250px;
            height: 100%;
            position: relative;
            float: left;
          }
          .png-plan {
            margin-top: 90%;
            width: 90px;
            height: 90px;
          }
          .text-span {
            font-size: 16px;
            letter-spacing: 2px;
            margin-left: 15px;
          }
          .text-more1 {
            font-size: 14px;
            text-indent: 20px;
            padding: 0px 10px;
          }
          .text-more2 {
            font-size: 12px;
            text-indent: 20px;
            padding: 10px;
          }
          #text-danger {
            color: #fff;
            font-size: 16px;
            text-decoration: underline;
          }
          .card .general {
            justify-content: center;
            height: 100%;
            margin-left: 260px;
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
        @media screen and (max-width: 375px) {
          .card {
            margin: 1.5% 5% 1.5% 5%;
            width: 90%;
            height: 500px;
            background-color: #fff;
            background: linear-gradient(#f8f8f8, #fff);
            box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
            border-radius: 6px;
          }
          .level-center > p {
            margin-top: 0%;
            font-size: 18px;
          }
          .header-plan {
            font-size: 16px;
          }
          @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
            .card .additional {
              position: absolute;
              width: 190px;
              height: 100%;
              background: linear-gradient(#de685e, #ee786e);
              transition: width 0.4s;
              overflow: hidden;
              z-index: 2;
            }
            .card .additional .user-card {
              width: 200px;
              height: 100%;
              position: relative;
              float: left;
            }
            .png-plan {
              margin-top: 90%;
              width: 90px;
              height: 90px;
            }
            .text-span {
              font-size: 16px;
              letter-spacing: 2px;
              margin-left: 15px;
            }
            .text-more1 {
              font-size: 14px;
              text-indent: 20px;
              padding: 0px 10px;
            }
            .text-more2 {
              font-size: 12px;
              text-indent: 20px;
              padding: 10px;
            }
            #text-danger {
              color: #fff;
              font-size: 16px;
              text-decoration: underline;
            }
            .card .general {
              justify-content: center;
              height: 100%;
              margin-left: 220px;
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
          @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 2) {
            .card .additional {
              position: absolute;
              width: 190px;
              height: 100%;
              background: linear-gradient(#de685e, #ee786e);
              transition: width 0.4s;
              overflow: hidden;
              z-index: 2;
            }
            .card .additional .user-card {
              width: 200px;
              height: 100%;
              position: relative;
              float: left;
            }
            .png-plan {
              margin-top: 90%;
              width: 90px;
              height: 90px;
            }
            .text-span {
              font-size: 16px;
              letter-spacing: 2px;
              margin-left: 15px;
            }
            .text-more1 {
              font-size: 14px;
              text-indent: 20px;
              padding: 0px 10px;
            }
            .text-more2 {
              font-size: 12px;
              text-indent: 20px;
              padding: 10px;
            }
            #text-danger {
              color: #fff;
              font-size: 16px;
              text-decoration: underline;
            }
            .card .general {
              justify-content: center;
              height: 100%;
              margin-left: 220px;
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
          @media screen and (max-width: 320px) {
            .card {
              margin: 1.5% 5% 1.5% 5%;
              width: 90%;
              height: 400px;
              background-color: #fff;
              background: linear-gradient(#f8f8f8, #fff);
              box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
              border-radius: 6px;
            }
            .level-center > p {
              margin-top: 0%;
              font-size: 16px;
            }
            .header-plan {
              font-size: 12px;
            }
            @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
              .card .additional {
                position: absolute;
                width: 180px;
                height: 100%;
                background: linear-gradient(#de685e, #ee786e);
                overflow: hidden;
                z-index: 2;
              }
              .card .additional .user-card {
                width: 190px;
                height: 100%;
                position: relative;
                float: left;
              }
              .png-plan {
                margin-top: 80%;
                width: 70px;
                height: 70px;
              }
              .text-span {
                font-size: 14px;
                letter-spacing: 2px;
                margin-left: 15px;
              }
              .text-more1 {
                font-size: 12px;
                text-indent: 20px;
                padding: 0px 10px;
              }
              .text-more2 {
                font-size: 10px;
                text-indent: 20px;
                padding: 10px;
              }
              #text-danger {
                color: #fff;
                font-size: 12px;
                text-decoration: underline;
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
