<template>
  <div class="wrapper">
    <!-- tutor dataSubject show in web site -->
    <div class="top">
      <div class="box1">
        <p>Subject</p>
      </div>
      <div class="box2">
        <p>Subject</p>
      </div>
      <div class="box3">
        <p>Subject</p>
      </div>
      <div class="link">
        <div class="link_to"></div>
        <div class="link__to"></div>
        <div class="link_from"></div>
      </div>
      <div class="box4">
        <p>Subject</p>
      </div>
      <div class="box5">
        <p>Subject</p>
      </div>
      <div class="link">
        <div class="link_to2"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="box6">
        <p>Subject</p>
      </div>
      <div class="box7">
        <p>Subject</p>
      </div>
      <div class="box8">
        <p>Subject</p>
      </div>
      <div class="link1-bottom"></div>
      <div class="link2-bottom"></div>
      <div class="link3-bottom"></div>
      <div class="link4-bottom"></div>
    </div>
    <div class="cursor">
      <a>
        <img
          src="../assets/cursor (2).png"
          alt=""
          style="width: 10px; height: 12px;"
        />
      </a>
    </div>
    <div class="click">
      <a>
        <img
          src="../assets/loading.png"
          alt=""
          style="width: 10px; height:10px"
        />
      </a>
    </div>
    <div class="floor"></div>
  </div>
</template>

<script>
export default {
  name: "TutorAnimation",
};
</script>

<style>
p {
  font-family: "Kanit";
  text-align: center;
  font-size: 14px;
  color: #fff;
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: scale(1.5, 1.5) translate(-50%, -50%);
}

.floor {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  height: 2px;
  background: #000000;
  transform: translate(-55%, -50%);
  box-shadow: 0px 2px 5px rgb(110, 110, 110);
  z-index: 2;
}

.box1 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 25px;
  background: #2b9e94;
  transform: translate(-230%, -490%);
  box-shadow: -2px 0px 0px #1c726b inset;
  border: 2px solid #000000;
  border-radius: 3px;
  z-index: 2;
}

.box2 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 25px;
  background: #2b9e94;
  transform: translate(-80%, -490%);
  box-shadow: -2px 0px 0px #1c726b inset;
  border: 2px solid #000000;
  border-radius: 3px;
  z-index: 3;
}

.box3 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 25px;
  background: #de526b;
  transform: translate(70%, -490%);
  box-shadow: -2px 0px 0px #c24158 inset;
  border: 2px solid #000000;
  border-radius: 3px;
  z-index: 3;
}

.box4 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 25px;
  background: rgb(138, 138, 138);
  transform: translate(-230%, -250%);
  box-shadow: -2px 0px 0px #575757 inset;
  border: 2px solid #000000;
  border-radius: 3px;
  z-index: -1;
}

.box5 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 25px;
  background: rgb(138, 138, 138);
  transform: translate(-80%, -250%);
  box-shadow: 0px 2px 5px rgb(100, 100, 100);
  border: 2px solid #000000;
  border-radius: 3px;
  z-index: -1;
  animation: subject-select 3s infinite linear;
}

.box6 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 25px;
  background: #2b9e94;
  transform: translate(-170%, 120%);
  box-shadow: 0px 2px 5px rgb(100, 100, 100);
  border: 2px solid #000000;
  border-radius: 3px;
  z-index: -1;
  animation: show-bottom 3s infinite linear;
}
.box7 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 25px;
  background: #2b9e94;
  transform: translate(-170%, 320%);
  box-shadow: 0px 2px 5px rgb(100, 100, 100);
  border: 2px solid #000000;
  border-radius: 3px;
  z-index: -1;
  animation: show-bottom 3s infinite linear;
}
.box8 {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  height: 25px;
  background: rgb(138, 138, 138);
  transform: translate(30%, 210%);
  box-shadow: 0px 2px 5px rgb(100, 100, 100);
  border: 2px solid #000000;
  border-radius: 3px;
  z-index: -1;
  animation: showbutton-click 3s infinite linear;
}

.link_to {
  position: absolute;
  left: 50%;
  top: 0%;
  width: 3px;
  height: 18px;
  background: #ffd64f;
  border-radius: 8px;
  transform: translate(-4200%, -375%);
  animation: change-link 3s infinite linear;
}

.link_to2 {
  position: absolute;
  left: 50%;
  top: 0%;
  width: 3px;
  height: 18px;
  background: #ffd64f;
  border-radius: 8px;
  transform: translate(-875%, -375%);
  animation: change-link 3s infinite linear;
}

.link_from {
  position: absolute;
  left: 50%;
  top: 0%;
  width: 3px;
  height: 18px;
  background: #ffd64f;
  border-radius: 8px;
  transform: translate(-875%, -282%);
  animation: change-link 3s infinite linear;
}

.link__to {
  position: relative;
  left: 50%;
  top: 50%;
  width: 101px;
  height: 3px;
  background: #ffd64f;
  transform: translate(-125%, -1710%);
  animation: change-link 3s infinite linear;
}

.cursor > a > img {
  transform: translate(1200%, 400%);
  z-index: 2;
  animation: border-select 3s infinite linear;
}
.click > a > img {
  transform: translate(-220%, -640%);
  z-index: 2;
  animation: cursor-click 3s infinite linear;
}

.link1-bottom {
  position: relative;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 2px;
  background: #ffd64f;
  transform: translate(-270%, 3350%);
  z-index: -1;
  animation: show-bottom 3s infinite linear;
}

.link2-bottom {
  position: relative;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 3px;
  background: #ffd64f;
  transform: translate(-270%, 3800%);
  z-index: -1;
  animation: show-bottom 3s infinite linear;
}

.link3-bottom {
  position: absolute;
  left: 50%;
  top: 0%;
  width: 3px;
  height: 52px;
  background: #ffd64f;
  border-radius: 8px;
  transform: translate(-1040%, 134%);
  animation: show-bottom 3s infinite linear;
}

.link4-bottom {
  position: relative;
  left: 50%;
  top: 50%;
  width: 49px;
  height: 3px;
  background: #ffd64f;
  transform: translate(-60%, 2850%);
  z-index: -1;
  animation: show-bottom 3s infinite linear;
}

.click > a > img {
  color: #000000;
  
}

@keyframes border-select {
  0% {
  }
  40% {
    opacity: 1;
    transform: translate(-200%, -300%);
  }
  100% {
    opacity: 1;
    transform: translate(-200%, -300%);
  }
}

@keyframes cursor-click {
  0%,
  49% {
    opacity: 0;
    transform: translate(-218%, -630%);
  }
  50%,
  100% {
    opacity: 1;
    transform: translate(-218%, -630%);
  }
}

@keyframes subject-select {
  0% {
    background:rgb(138, 138, 138);
    box-shadow: -2px 0px 0px #575757 inset;
  }
  88% {
    background: rgb(71, 71, 71);
    border-color: #f44336;
    box-shadow: -2px 0px 0px #575757 inset;
  }
  91%,
  100% {
    background: rgb(138, 138, 138);
    border-color: #f44336;
    box-shadow: -2px 0px 0px #575757 inset;
  }
}

@keyframes change-link {
  0%{
    
  }90%{
    background: #f44336;
  }
  91%,100% {
    background: #f44336;
  }
}

@keyframes show-bottom {
  0%,59%{
    opacity: 0;
  }
  60%,
  100% {
    opacity: 1;
  }
}

@keyframes showbutton-click {
  0%,59%{
    opacity: 0;
  }
  60%,
  100% {
    border-color: #cf3126;
    opacity: 1;
  }
}
</style>
