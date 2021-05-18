<template>
  <div class="container">
    <div class="icons">
      <div class="iconItem">
        <i class="fa fa-shopping-basket fa-2x active" aria-hidden="true"></i>
        <!-- <span>Choose</span> -->
        <span class="cursor current"></span>
      </div>
      <div class="iconItem">
        <i class="fa fa-credit-card fa-2x" aria-hidden="true"></i>
        <!-- <span>Pay</span> -->
        <span class="cursor"></span>
      </div>
      <div class="iconItem">
        <i class="fa fa-gift fa-2x" aria-hidden="true"></i>
        <span class="cursor"></span>
      </div>
      <div class="iconItem">
        <i class="fa fa-cube fa-2x" aria-hidden="true"></i>
        <span class="cursor"></span>
      </div>
    </div>

    <div class="vl"></div>

    <div class="slides">
      <div class="slide current">
        <div>
          <i class="fa fa-shopping-basket fa-3x" aria-hidden="true"></i>
          <h2>Choose Your Gift</h2>
          <p>
            Lorem ipsum dolor sit amet cons ectetur, adip isfdra icingn bud
            exlmoit. Vensveoniam, maiores ea odit earum cupiditate labore sequi.
            Neque laborum distuo consequuntur, magnam saepe quis!
          </p>
        </div>
      </div>
      <div class="slide">
        <div>
          <i class="fa fa-credit-card fa-3x" aria-hidden="true"></i>
          <h2>Pay For It</h2>
          <p>
            Lorem ipsum dolor sit amet cons ectetur, adip isfdra icingn bud
            exlmoit. Vensveoniam, maiores ea odit earum cupiditate labore sequi.
            Neque laborum distuo consequuntur, magnam saepe quis!
          </p>
        </div>
      </div>
      <div class="slide">
        <div>
          <i class="fa fa-gift fa-4x" aria-hidden="true"></i>
          <h2>We Will Wrap It</h2>
          <p>
            Lorem ipsum dolor sit amet cons ectetur, adip isfdra icingn bud
            exlmoit. Vensveoniam, maiores ea odit earum cupiditate labore sequi.
            Neque laborum distuo consequuntur, magnam saepe quis!
          </p>
        </div>
      </div>
      <div class="slide">
        <div>
          <i class="fa fa-cube fa-4x" aria-hidden="true"></i>
          <h2>Ship It</h2>
          <p>
            Lorem ipsum dolor sit amet cons ectetur, adip isfdra icingn bud
            exlmoit. Vensveoniam, maiores ea odit earum cupiditate labore sequi.
            Neque laborum distuo consequuntur, magnam saepe quis!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudyPlan",
  methods: function() {
    var icons = document.querySelectorAll(".icons .iconItem i");
    var iconArray = Array.from(icons);

    var slides = document.querySelectorAll(".slides .slide");
    var slidesArray = Array.from(slides);

    var cusror = document.querySelectorAll(".iconItem .cursor");
    var cursorArray = Array.from(cusror);

    for (let i = 0; i < iconArray.length; i++) {
      iconArray[i].onclick = function() {
        if (iconArray[i].classList.contains("active")) {
          return;
        }

        for (var c = 0; c < iconArray.length; c++) {
          iconArray[c].classList.remove("active");
          iconArray[i].classList.add("active");

          cursorArray[c].classList.remove("current");
          cursorArray[i].classList.add("current");

          slidesArray[c].classList.remove("current");
          slidesArray[i].classList.add("current");
        }
      };
    }
  },
};
</script>

<style scoped>
.container {
  width: 800px;
  margin: 100px auto;
  background-color: rgba(248, 236, 236, 0.493);
  padding: 50px 40px;
  overflow: hidden;
  box-shadow: 0 0 3px 1px #00000078;
}

.icons {
  float: left;
  width: 25%;
  color: rgb(148, 136, 136);
}

.icons .iconItem {
  margin-bottom: 20px;
  height: 50px;
  position: relative;
}

.icons .iconItem i {
  display: inline-block;
  margin: 20px;
  cursor: pointer;
}

.icons .iconItem i.active {
  color: red;
}

.icons .iconItem span {
  display: inline-block;
  position: absolute;
  top: 25px;
  left: 80px;
  font-size: 18px;
}

.icons .iconItem .cursor {
  display: inline-block;
  background-color: red;
  width: 5px;
  height: 50px;
  position: absolute;
  top: 15px;
  left: 178px;
  opacity: 0;
}

.icons .iconItem .cursor.current {
  opacity: 1;
}

.vl {
  float: left;
  height: 300px;
  border-left: 1px solid rgb(192, 194, 192);
}

.slides {
  float: left;
  width: 74%;
  height: 300px;
  position: relative;
}

.slide {
  padding: 20px 0px 40px 30px;
  position: absolute;
  opacity: 0;
  margin-top: -100%;
  transition: all 0.7s ease-in-out;
}

.slide i {
  display: block;
  text-align: center;
  color: rgb(148, 136, 136);
}

.slide h2 {
  text-align: center;
  font-size: 26px;
  margin-bottom: 20px;
}

.slide p {
  font-size: 16px;
}

.slide.current {
  opacity: 1;
  margin-top: 0;
}
</style>
