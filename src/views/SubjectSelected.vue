<template>
  <div>
    <!-- Start Nav Section -->
    <nav id="navbar" class="navbar">
      <ul class="nav-menu">
        <li>
          <a data-scroll="home" href="#home" class="dot active">
            <span>คำนวณหลักสูตร</span>
          </a>
        </li>
        <li>
          <a data-scroll="about" href="#about" class="dot">
            <span>รายวิชาและตัวต่อ</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- End Nav Section -->

    <!-- Start Home Section -->
    <section id="home" class="section">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="content">
            <div class="text-center">
              <h1>วางแผนการเรียน</h1>
              <p>ด้วยการคำนวณหลักสูตรจาก</p>
              <h1 class="logo-text">regGuide</h1>
            </div>

            <a href="/subject_cal"
              ><button>
                คำนวณหลักสูตร
              </button></a
            >
          </div>
        </div>
        <div class="col-md-6">
          <TutorAnimation class="content"></TutorAnimation>
        </div>
      </div>
    </section>
    <!-- Start About Me Section -->
    <section id="about">
      <div class="container">
        <div>
          <div class="content" align="left">
            <h2 style="color: #2d3142">อยากรู้ว่าตัวต่อไปเรียนอะไรบ้าง?</h2>
            <p style="font-size: 26px">
              <span class="logo-text" style="font-size: 36px">regGuide</span>
              ทำแผนผังนี้เพื่อคุณ
            </p>
            <a href="/dataSubjectdiagram"
              ><button>
                รายวิชาและตัวต่อ
              </button></a
            >
          </div>
          <div class="content">
            <a>
              <img
                src="../assets/planning.png"
                alt=""
                style="width: 180px; height: 180px;"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TutorAnimation from "../components/TutorAnimation1.vue";
var $ = require("jquery");

export default {
  name: "subjec_selected",
  components: {
    TutorAnimation,
  },
};

$(function() {
  var link = $("#navbar a.dot");

  // Move to specific section when click on menu link
  link.on("click", function(e) {
    var target = $($(this).attr("href"));
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      600
    );
    $(this).addClass("active");
    e.preventDefault();
  });

  // Run the scrNav when scroll
  $(window).on("scroll", function() {
    scrNav();
  });

  // scrNav function
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $("section").each(function() {
      var id = $(this).attr("id"),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass("active");
        $("#navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  }
  scrNav();
});
</script>

<style scoped>
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translate(100px, 100px);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

.fa-mouse-pointer {
  text-align: center;
  animation: slideDown 5s ease 0s infinite normal none;
  transform-origin: center center;
  border-radius: 50%;
  height: 0px;
  width: 0px;
  vertical-align: middle;
  display: table-cell;
}

.fa-sitemap {
  text-align: center;
  transform-origin: center center;
  border-radius: 50%;
  font-size: 75px;
  height: 0px;
  width: 0px;
}

div > #tutor-cursor {
  position: absolute;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  color: #333;
}
h1 {
  font-size: 56px;
  color: #2d3142;
}
p {
  font-size: 32px;
  color: #565656;
  line-height: 28px;
}
.section {
  min-height: 100%;
}
.container,
.row {
  max-width: 100%;
  margin: 0 auto;
  height: 845px;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.content-wrapper {
  width: 80%;
  margin: 0 auto;
  display: table;
  min-height: 800px;
}
.content {
  display: table-cell;
  width: 40%;
  vertical-align: middle;
}
/* End Global Styles */

/* Start Nav Styles */
.navbar {
  position: fixed;
  z-index: 999;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
}
.navbar .nav-menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.navbar .nav-menu li {
  position: relative;
  min-width: 200px;
  text-align: right;
}
.navbar .nav-menu li .dot {
  display: block;
  color: #fff;
  padding: 5px 0;
}
.navbar .nav-menu li .dot::before,
.navbar .nav-menu li .dot::after {
  display: block;
  position: absolute;
  content: "";
  border-radius: 50%;
  top: 50%;
  transition: all 0.3s ease;
}
.navbar .nav-menu li .dot::before {
  width: 5px;
  height: 5px;
  right: 0;
  border: 2px solid #c0392b;
  transform: translateY(-50%);
}
.navbar .nav-menu li .dot::after {
  width: 15px;
  height: 15px;
  border: 2px solid #cb4335;
  right: -5px;
  transform: translateY(-50%) scale(0);
}
.navbar .nav-menu li .dot.active::before,
.navbar .nav-menu li:hover .dot::before {
  background: #fff;
  border-color: #cb4335;
}
.navbar .nav-menu li .dot.active::after,
.navbar .nav-menu li:hover .dot::after {
  transform: translateY(-50%) scale(1);
}
.navbar .nav-menu li .dot span {
  display: inline-block;
  opacity: 0;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  background-color: #ce0000;
  padding: 10px 20px;
  border-radius: 3px;
  margin-right: 30px;
  transform: translateX(20px);
  transition: all 0.3s ease;
}
.navbar .nav-menu li .dot span::before {
  display: block;
  position: absolute;
  content: "";
  border-left: 7px solid #ce0000;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  top: 50%;
  transform: translate(7px, -50%);
  right: 0;
  transition: all 0.3s ease;
}
.navbar .nav-menu li .dot.active span,
.navbar .nav-menu li:hover .dot span {
  transform: translateX(0px);
  opacity: 1;
}
/* End Nav Styles */

/* Start Home Styles */
#home {
  background-color: #eee;
}
#home button {
  border: 2px solid #4f5d75;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 12px 25px;
  font-weight: 700;
  transition: all 0.3s ease;
  margin-top: 20px;
}
#home button:hover {
  background-color: #4f5d75;
  color: #fff;
}
/* End Home Styles */

/* Start About Styles */
#about {
  background-color: #f6f6f6;
}
#about button {
  color: #2d3142;
  border: 2px solid #4f5d75;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 12px 25px;
  font-weight: 700;
  transition: all 0.3s ease;
  margin-top: 20px;
}
#about button:hover {
  background-color: #4f5d75;
  color: #fff;
}
/* End About Styles */

.logo-text {
  color: #da694b;
  font-weight: bold;
}
</style>
