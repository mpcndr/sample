<template>
  <div id="popuppuasa18">
    <a class="close-popup" href="#" title="close"
      ><i class="fa fa-times"></i
    ></a>
    <div class="puasa18">
      <p>คำแนะนำ</p>
    </div>
    <div class="Tutor">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
$(window).bind("load", function() {
  $("#popuppuasa18").animate({ top: "25%" }, 1e3),
    $("a.close-popup").click(function() {
      return (
        $(this)
          .parent()
          .fadeOut(1e3),
        !1
      );
    });
});
export default {
  name: "TutorAnimation2",
  methods: {},
};
</script>

<style scoped>

.box1 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 35px;
  background: #2b9e94;
  transform: translate(-230%, 50%);
  box-shadow: -2px 0px 0px #1c726b inset;
  border: 2px solid #000000;
  border-radius: 6px;
  z-index: 2;
}

.box2 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 35px;
  background: #DE526B;
  transform: translate(-50%, 50%);
  box-shadow: -2px 0px 0px #ce3a55 inset;
  border: 2px solid #000000;
  border-radius: 6px;
  z-index: 2;
}

.box3 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80px;
  height: 35px;
  background: #868686;
  transform: translate(130%, 50%);
  box-shadow: -2px 0px 0px #525252 inset;
  border: 2px solid #000000;
  border-radius: 6px;
  z-index: 2;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes change_color {
  0% {
    background: #278fa1;
  }
  33.33% {
    background: #3173bd;
  }
  66.66% {
    background: #0d4a8d;
  }
  100% {
    background: #278fa1;
  }
}
@keyframes run_hari18 {
  0% {
    transform: translate(0%, 0);
  }
  50% {
    transform: translate(100%, 0);
  }
  50.01% {
    transform: translate(-100%, 0);
  }
}
@keyframes sun_movement {
  0% {
    top: 50px;
  }
  20% {
    top: -30px;
  }
  25% {
    top: -30px;
  }
  40% {
    top: 50px;
  }
}
@keyframes run_malam18 {
  0% {
    transform: translate(-20%, 0);
    opacity: 0;
  }
  49.99% {
    transform: translate(0%, 0);
    opacity: 1;
  }
  99.99% {
    transform: translate(20%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(-20%, 0);
    opacity: 1;
  }
}
@keyframes moon_movement {
  0% {
    transform: translate(-200%, 0);
    opacity: 0;
  }
  49.99% {
    transform: translate(0%, 0);
    opacity: 1;
  }
  99.99% {
    transform: translate(200%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(-200%, 0);
    opacity: 1;
  }
}
/* Pop Up Ramadhan */
#popuppuasa18 {
  display: block;
  background: #000;
  position: fixed;
  top: 25%;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
  max-width: 660px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.12);
  z-index: 999;
  min-height: 350px;
  padding: 20px;
  overflow: hidden;
  border-radius: 10px;
  /* animation: change_color 5s infinite linear, slideDown 2s; */
}
#popuppuasa18 .puasa18 {
  position: absolute;
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  padding: 0px;
  z-index: 99999;
  text-align: center;
  margin: auto;
  left: 0;
  right: 0;
  top: 20%;
}
#popuppuasa18 .puasa18 p {
  margin: 0px auto;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
#popuppuasa18 .puasa18 .ramadhan18 {
  font-size: 3rem;
  font-weight: 700;
}
#popuppuasa18 a.close-popup {
  position: absolute;
  bottom: 15px;
  right: 20px;
  color: #fff;
  text-align: center;
  border-radius: 100%;
  cursor: pointer;
  z-index: 99;
  transition: all 0.3s;
}
#popuppuasa18 a.close-popup:hover {
  color: #fff;
}
#popuppuasa18 a.close-popup:active {
  opacity: 0;
}
#popuppuasa18 a.close-popup i {
  font-family: fontawesome;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  transform: rotate(270deg);
  transition: all 0.3s;
}
#popuppuasa18 a.close-popup:hover i {
  transform: rotate(360deg);
}
.gunung18 {
  width: 400px;
  height: 300px;
  display: block;
  background: #4aad52;
  position: absolute;
  bottom: -150px;
  transform: rotate(45deg);
  border-radius: 50px;
}
.gunung18.behind {
  background: #42a54a;
  right: -120px;
  bottom: -180px;
  z-index: -1;
}
.hari18 {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  animation: run_hari18 5s infinite linear;
}
.hari18 .awan18 {
  margin: 30px auto;
  width: 150px;
  height: 70px;
  display: block;
  background: #e7e7e7;
  border-radius: 35px;
  border: 10px solid #ffffff;
  box-shadow: inset 0 -7px 0 0 #d7d7d7;
  position: absolute;
  top: 90px;
  left: 50px;
}
.hari18 .awan18:before {
  content: "";
  width: 65px;
  height: 35px;
  display: block;
  background: #e7e7e7;
  border-radius: 35px 35px 0 0;
  border: 10px solid #ffffff;
  border-bottom: 0;
  position: absolute;
  top: -35px;
  left: 20px;
}
.hari18 .awan18.invert {
  top: 60px;
  left: 250px;
}
.hari18 .awan18.invert:before {
  left: 50px;
}
.hari18 .sun {
  width: 75px;
  height: 75px;
  display: block;
  background: #fff297;
  border-radius: 50%;
  box-shadow: inset -5px -5px 0 0 #ddc991;
  position: absolute;
  top: 50px;
  left: 0;
  animation: sun_movement 5s infinite linear;
}
.malam18 {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  animation: run_malam18 5s infinite linear;
}
.malam18 .bintang18 .star {
  width: 5px;
  height: 5px;
  display: block;
  background: #f7f7f7;
  border-radius: 50%;
  position: absolute;
}
.malam18 .bintang18 .star:nth-child(1) {
  top: 50px;
  left: 50px;
}
.malam18 .bintang18 .star:nth-child(2) {
  top: 200px;
  left: 70px;
}
.malam18 .bintang18 .star:nth-child(3) {
  top: 100px;
  left: 300px;
}
.malam18 .bintang18 .star:nth-child(4) {
  top: 50px;
  left: 220px;
}
.malam18 .bintang18 .star:nth-child(5) {
  top: 160px;
  left: 320px;
}
.malam18 .bintang18 .star:nth-child(6) {
  top: 150px;
  left: 230px;
}
.malam18 .bintang18 .star:nth-child(7) {
  top: 180px;
  left: 400px;
}
.malam18 .bintang18 .star:nth-child(8) {
  top: 50px;
  left: 360px;
}
.malam18 .moon {
  width: 75px;
  height: 75px;
  display: block;
  background: #d7d7d7;
  border-radius: 50%;
  box-shadow: inset -5px -5px 0 0 #c7c7c7;
  position: absolute;
  top: 50px;
  left: 100px;
  animation: moon_movement 5s infinite linear;
}
@media (max-width: 800px) {
  #popuppuasa18 {
    top: 10px !important;
    left: 10px;
    right: 10px;
    min-height: 250px;
  }
  #popuppuasa18 .puasa18 {
    font-size: 1.1rem;
    top: 0;
  }
  #popuppuasa18 .puasa18 .ramadhan18 {
    font-size: 2.5rem;
  }
  .gunung18 {
    display: none;
  }
  .hari18,
  .bintang18,
  .malam18 .moon {
    display: inline;
  }
  #popuppuasa18 a.close-popup {
    z-index: 999999;
  }
}
</style>
