<template>
  <div class="home">
    <header>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox" >
          <div class="carousel-item active">
            <img class="img-top img-fluid" src="../assets/Untitled-3.jpg" />
            <!-- <div class="carousel-caption d-none d-md-block">
              <h2 class="display-4" style="color: #fff">ยินดีตอนรับ!</h2>
              <p class="lead">ให้เราช่วยเหลือคุณในการลงทะเบียน</p> 
            </div> -->
          </div>
          <div class="carousel-item">
            <img
            class="img-top img-fluid"
              src="../assets/cal.jpg"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
            class="img-top img-fluid"
              src="../assets/comit.jpg"
              alt=""
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
    <!-- <aboutReg/>
    <themePublic/> -->

    <CalendarHome />

    <NewsEvent />
  </div>
</template>

<script>
// @ is an alias to /src
import CalendarHome from "../components/CalendarHome.vue";
import NewsEvent from "../components/NewsEvent.vue";

export default {
  name: "Home",
  components: {
    CalendarHome,
    NewsEvent,
  },
};
</script>
<style scoped>

.carousel-item {
  /* width: 100%; */
  height: 93vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.card-event {
  margin: 50px auto;
  background: #f5e0da;
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 15px;
}

.carousel img {
  width: auto;
  height: 100%;
}

@media screen and (max-width: 960px) {
  .carousel-item {
    height: 40vh;
    min-height: 30vh;
  }
}
@media screen and (max-width: 320px) {
  .carousel-item {
    height: 30vh;
    min-height: 30vh;
  }
}
@media screen and (max-width: 375px) {
  .carousel-item {
    height: 35vh;
    min-height: 30vh;
  }
}
</style>
