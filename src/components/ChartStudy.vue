<template>
  <div>
    <div class="grade">
      <p class="text-grade">เกรดเฉลี่ย</p>
      <div class="progress">
        <div
          id="grade_pg"
          class="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ this.studyCase.gpax }}
        </div>
      </div>
    </div>
    <div class="credit">
      <p class="text-credit">หน่วยกิตที่ผ่าน</p>
      <div class="progress">
        <div
          id="credit_pg"
          class="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ this.studyCase.credit + "/" + this.credit_total }}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      studyCase: [],
      Grade: "",
      Credit: "",
      Total: "",
      credit_total: "137",
      content: "",
    };
  },
  methods: {
    ProgressBar_Grade() {
      var g = Math.round((this.studyCase.gpax / 4) * 100);
      return g;
    },
    ProgressBar_Credit() {
      if (this.studyCase.credit > this.credit_total) {
        return 100;
      }
      var c = Math.round((this.studyCase.credit / this.credit_total) * 100);
      return c;
    },
    changeColor_Gr() {
      if (this.ProgressBar_Grade() <= 25) {
        document.getElementById("grade_pg").className += " bg-danger";
      } else if (this.ProgressBar_Grade() <= 50) {
        document.getElementById("grade_pg").className += " bg-warning";
      } else if (this.ProgressBar_Grade() <= 75) {
        document.getElementById("grade_pg").className += " bg-info";
      } else {
        document.getElementById("grade_pg").className += " bg-success";
      }
      if (this.ProgressBar_Credit() <= 25) {
        document.getElementById("credit_pg").className += " bg-danger";
      } else if (this.ProgressBar_Credit() <= 50) {
        document.getElementById("credit_pg").className += " bg-warning";
      } else if (this.ProgressBar_Credit() <= 75) {
        document.getElementById("credit_pg").className += " bg-info";
      } else {
        document.getElementById("credit_pg").className += " bg-success";
      }
    },
    hoverProgressbar() {
      var t;
      if (this.ProgressBar_Grade() <= 25) {
        this.content = "ติดโปร";
        t = "พยายามเข้าอีกนิดนึงนะ";
        return t;
      } else if (this.ProgressBar_Grade() <= 50) {
        this.content = "ติดโปร1";
        t = "พยายามเข้าอีกนิดนึงนะ";
        return t;
      } else if (this.ProgressBar_Grade() <= 75) {
        this.content = "ติดโปร2";
        t = "พยายามเข้าอีกนิดนึงนะ";
        return t;
      } else {
        this.content = "ติดโปร3";
        t = "พยายามเข้าอีกนิดนึงนะ";
        return t;
      }
    },
  },
  async created() {
    await Axios.post(this.$store.getters.getApi + "api/getinfostudent/", {
      token: this.$store.getters.getToken,
    }).then((res1) => {
      this.studyCase = res1.data.student[0];
    });
    var gpax = document.getElementById("grade_pg");
    gpax.style.width = this.ProgressBar_Grade() + "%";
    var credit = document.getElementById("credit_pg");
    credit.style.width = this.ProgressBar_Credit() + "%";
    this.changeColor_Gr();
  },
  mounted() {
    $("#grade_pg").popover({
      title: this.hoverProgressbar(),
      trigger: "hover",
      placement: "top",
      html: true,
      content: function() {
        return $("#info").html();
      },
    });
  },
};
</script>

<style scoped>
p.text-grade,
.text-credit,
.text-total {
  color: #000;
  text-align: left;
}

.progress {
  margin-bottom: 15px;
}

.popover-title {
  font-size: 14px;
  text-align: center;
}
/* Popover Body */
.popover-content {
  font-size: 10px;
  text-align: center;
}
</style>
