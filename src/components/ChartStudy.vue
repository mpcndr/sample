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
          {{ this.Grade }}
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
          {{ this.Credit + "/" + this.credit_total }}
        </div>
      </div>
    </div>
    <div class="total">
      <p class="text-total">เรียนคิดเป็นเปอร์เซ็น</p>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 25%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Grade: 2.38,
      Credit: 139,
      Total: "",
      credit_total: 137,
    };
  },
  methods: {
    ProgressBar_Grade() {
      var g = Math.round((this.Grade / 4) * 100);
      return g;
    },
    ProgressBar_Credit() {
      if (this.Credit > this.credit_total) {
        return 100;
      }
      var c = Math.round((this.Credit / this.credit_total) * 100);
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
      }else if (this.ProgressBar_Credit() <= 50) {
        document.getElementById("credit_pg").className += " bg-warning";
      } else if (this.ProgressBar_Credit() <= 75) {
        document.getElementById("credit_pg").className += " bg-info";
      } else {
        document.getElementById("credit_pg").className += " bg-success";
      }
    },
  },
  mounted() {
    var gpax = document.getElementById("grade_pg");
    gpax.style.width = this.ProgressBar_Grade() + "%";
    var credit = document.getElementById("credit_pg");
    credit.style.width = this.ProgressBar_Credit() + "%";
    this.changeColor_Gr();
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
</style>
