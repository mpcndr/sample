<template>
  <div class="row">
    <div class="contenedor">
      <div class="column">
        <div class="donut-grade bigger">
          <div class="pie-wrapper">
            <span class="label">
              <span class="grade">{{ 0 }}</span>
            </span>
            <div class="pie">
              <div class="left-side half-circle"></div>
              <div class="right-side half-circle"></div>
            </div>
            <div class="shadow"></div>
          </div>
          <p>เกรดเฉลี่ย</p>
        </div>
      </div>
      <div class="column">
        <div class="donut-size bigger">
          <div class="pie-wrapper">
            <span class="label">
              <span class="num">{{ percent_2 }}</span>
            </span>
            <div class="pie">
              <div class="left-side half-circle"></div>
              <div class="right-side half-circle"></div>
            </div>
            <div class="shadow"></div>
          </div>
          <p>หน่วยกิตที่ผ่าน</p>
        </div>
      </div>
      <div class="column">
        <div class="donut-size bigger">
          <div class="pie-wrapper">
            <span class="label">
              <span class="num">{{ percent_3 }}</span>
              <span class="smaller">%</span>
            </span>
            <div class="pie">
              <div class="left-side half-circle"></div>
              <div class="right-side half-circle"></div>
            </div>
            <div class="shadow"></div>
          </div>
          <p>เรียนคิดเป็นเปอร์เซ็น</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Axios from "axios";
export default {
  name: "chartpie",
  data: function() {
    return {
      percent_1: 0,
      percent_2: 0,
      percent_3: 0,
    };
  },
  methods: {
    Chart_pi: function() {
      var circles = $(".donut-size");
      $.each(circles, function(index, el) {
        updateDonutChart(el); // funciones.js
      });

      var grades = $(".donut-grade");
      $.each(grades, function(index, el) {
        updateGradeChart(el);
      });

      function updateGradeChart(el, donut = true) {
        var grade = $(el)
          .find(".grade")
          .text();
        grade = Math.round((grade / 4) * 100);
        if (grade > 100) {
          grade = 100;
        } else if (grade < 0) {
          grade = 0;
        }
        var cal = Math.round(360 * (grade / 100));
        if (grade > 50) {
          $(el)
            .find(".pie")
            .css("clip", "rect(auto, auto, auto, auto)");
          $(el)
            .find(".right-side")
            .css("transform", "rotate(180deg)");
        } else {
          $(el)
            .find(".pie")
            .css("clip", "rect(0, 1em, 1em, 0.5em)");
          $(el)
            .find(".right-side")
            .css("transform", "rotate(0deg)");
        }
        if (donut) {
          $(el)
            .find(".right-side")
            .css("border-width", "0.1em");
          $(el)
            .find(".left-side")
            .css("border-width", "0.1em");
          $(el)
            .find(".shadow")
            .css("border-width", "0.1em");
        } else {
          $(el)
            .find(".right-side")
            .css("border-width", "0.5em");
          $(el)
            .find(".left-side")
            .css("border-width", "0.5em");
          $(el)
            .find(".shadow")
            .css("border-width", "0.5em");
        }
        $(el)
          .find(".num")
          .text(grade);
        $(el)
          .find(".left-side")
          .css("transform", "rotate(" + cal + "deg)");

        $(el)
          .find(".half-circle")
          .removeClass("circle-red circle-orange circle-blue circle-green");

        if (grade <= 25) {
          $(el)
            .find(".half-circle")
            .addClass("circle-red");
        } else if (grade <= 50) {
          $(el)
            .find(".half-circle")
            .addClass("circle-orange");
        } else if (grade <= 75) {
          $(el)
            .find(".half-circle")
            .addClass("circle-blue");
        } else {
          $(el)
            .find(".half-circle")
            .addClass("circle-green");
        }
      }

      function updateDonutChart(el, donut = true) {
        var percent = $(el)
          .find(".num")
          .text();
        var p = (percent / 137) * 100;
        percent = Math.round(p);
        if (percent > 100) {
          percent = 100;
        } else if (percent < 0) {
          percent = 0;
        }
        var deg = Math.round(360 * (percent / 100));

        if (percent > 50) {
          $(el)
            .find(".pie")
            .css("clip", "rect(auto, auto, auto, auto)");
          $(el)
            .find(".right-side")
            .css("transform", "rotate(180deg)");
        } else {
          $(el)
            .find(".pie")
            .css("clip", "rect(0, 1em, 1em, 0.5em)");
          $(el)
            .find(".right-side")
            .css("transform", "rotate(0deg)");
        }
        if (donut) {
          $(el)
            .find(".right-side")
            .css("border-width", "0.1em");
          $(el)
            .find(".left-side")
            .css("border-width", "0.1em");
          $(el)
            .find(".shadow")
            .css("border-width", "0.1em");
        } else {
          $(el)
            .find(".right-side")
            .css("border-width", "0.5em");
          $(el)
            .find(".left-side")
            .css("border-width", "0.5em");
          $(el)
            .find(".shadow")
            .css("border-width", "0.5em");
        }
        $(el)
          .find(".num")
          .text(percent);
        $(el)
          .find(".left-side")
          .css("transform", "rotate(" + deg + "deg)");

        $(el)
          .find(".half-circle")
          .removeClass("circle-red circle-orange circle-blue circle-green");

        if (percent <= 25) {
          $(el)
            .find(".half-circle")
            .addClass("circle-red");
        } else if (percent <= 50) {
          $(el)
            .find(".half-circle")
            .addClass("circle-orange");
        } else if (percent <= 75) {
          $(el)
            .find(".half-circle")
            .addClass("circle-blue");
        } else {
          $(el)
            .find(".half-circle")
            .addClass("circle-green");
        }
      }
    },
  },
  created() {
    Axios.post(this.$store.getters.getApi + "api/getinfostudent/", {
      token: this.$store.getters.getToken,
    }).then((res1) => {
      this.percent_1 = res1.data.student[0].gpax;
      this.percent_2 = res1.data.student[0].credit;
      this.Chart_pi();
    });
  },
};
</script>

<style scoped>
p {
  font-size: 16px;
  color: #000;
  padding-top: 12px;
}
.column {
  float: left;
  padding-right: 10px;
  width: 33.33%;
}
.contenedor {
  padding-bottom: 6px;
  float: left;
}

/* Circle */
.donut-size,
.donut-grade {
  font-size: 5em;
  margin-bottom: 12px;
}
.donut-size.bigger,
.donut-grade.bigger {
  font-size: 7em;
  margin-bottom: 0px;
}
.donut-size.big,
.donut-grade.big {
  font-size: 7em;
  margin-bottom: 8px;
}
.donut-size.small,
.donut-grade.small {
  font-size: 4em;
  margin-bottom: 8px;
}

.pie-wrapper {
  position: relative;
  width: 1em;
  height: 1em;
  margin: 0px auto;
}
.pie-wrapper .pie {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  clip: rect(0, 1em, 1em, 0.5em);
}
.pie-wrapper .half-circle {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  clip: rect(0em, 0.5em, 1em, 0em);
}
.pie-wrapper .half-circle.circle-blue {
  border: 0.1em solid #3498db;
}
.pie-wrapper .half-circle.circle-red {
  border: 0.1em solid #cb4335;
}
.pie-wrapper .half-circle.circle-green {
  border: 0.1em solid #239b56;
}
.pie-wrapper .half-circle.circle-orange {
  border: 0.1em solid #f39c12;
}

.pie-wrapper .right-side {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.pie-wrapper .label,
.pie-wrapper .label {
  position: absolute;
  top: 0.5em;
  right: 0.4em;
  bottom: 0.4em;
  left: 0.4em;
  display: block;
  background: none;
  border-radius: 50%;
  color: #26384e;
  font-size: 0.25em;
  line-height: 2.6em;
  text-align: center;
  cursor: default;
  z-index: 2;
}
.pie-wrapper .smaller {
  padding-bottom: 0px;
  color: #26384e;
  font-size: 0.6em;
  vertical-align: super;
}
.pie-wrapper .shadow {
  width: 100%;
  height: 100%;
  border: 0.1em solid #dbdbdb;
  border-radius: 50%;
}
</style>
