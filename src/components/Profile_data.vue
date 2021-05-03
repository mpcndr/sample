<template>
  <div class="container-fluid profile-body">
    <div class="row">
      <div class="func">
        <div class="data-study">
          <h3 class="head-profile">
            <i class="fa fa-user" aria-hidden="true"></i>ข้อมูลนักศึกษา
          </h3>
          <p>
            รหัสนักศึกษา:
            <span class="data-backend">{{ this.students.id_student }}</span>
          </p>
          <p>
            เลขบัตรประชาชน:
            <span class="data-backend">{{ this.students.citizen_id }}</span>
          </p>
          <p>
            วัน/เดือน/ปีเกิด:
            <span class="data-backend">{{ this.students.birthday }}</span>
          </p>
          <p>
            ชื่อ:
            <span class="data-backend">{{
              this.students.student_name + " " + this.students.student_surname
            }}</span>
          </p>
          <p>
            คณะ: <span class="data-backend">{{ this.students.faculty }}</span>
          </p>
          <p>
            หลักสูตร:
            <span class="data-backend">{{ this.students.deparment }}</span>
          </p>
          <p>
            วิทยาเขต:
            <span class="data-backend">{{ this.students.campus }}</span>
          </p>
          <p>
            ระดับการศึกษา:
            <span class="data-backend">{{
              this.students.level_education
            }}</span>
          </p>
          <p>
            ชื่อปริญญา:
            <span class="data-backend">{{ this.students.name_education }}</span>
          </p>
          <p>
            อีเมลล์: <span class="data-backend">{{ this.students.email }}</span>
          </p>
        </div>
        <div class="edu">
          <h3><i class="fa fa-graduation-cap"></i>ประวัติการศึกษา</h3>
          <ul>
            <li>
              <span>Computer Science</span><small>Silpakorn University</small
              ><small>2560</small>
            </li>
            <li>
              <span>High School</span><small>Bangmodwittaya School</small
              ><small>2554</small>
            </li>
          </ul>
        </div>
        <div class="process" style="width: 100%">
          <h3 class="head-profile">
            <i class="fa fa-book" aria-hidden="true"></i>ผลการศึกษาโดยรวม
          </h3>
          <ChartPie></ChartPie>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartPie from "./ChartStudy.vue";
import Axios from "axios";
export default {
  components: {
    ChartPie,
  },
  data() {
    return {
      students: [],
    };
  },
  created() {
    Axios.post(this.$store.getters.getApi + "api/getinfostudent/", {
      token: this.$store.getters.getToken,
    }).then((res1) => {
      this.students = res1.data.student[0];
    });
  },
};
</script>

<style scoped>
.row {
  padding-top: 20px;
}
.head-profile,
h3 {
  padding-bottom: 20px;
  color: #26384e;
  text-align: left;
  font-weight: bold;
}
.head1 {
  text-align: right;
}

p {
  text-align: left;
  padding-left: 0px;
  margin: 0.5%;
  font-weight: bold;
  color: #da694b;
}
ul {
  list-style-type: none;
}
.data-backend {
  color: #26384e;
  font-size: 14px;
}
.func {
  box-sizing: border-box;
  float: left;
  margin-bottom: -30px;
}
.func > div {
  padding-bottom: 10px;
}
.func > div:last-of-type {
  padding-bottom: 0;
}
.func {
  width: 100%;
  padding: 30px;
}
.func:hover > div {
  transition-duration: 0.5s;
}
.func:hover > div:hover h3 i {
  transform: scale(1.25);
}
.func:hover > div:not(:hover) {
  opacity: 0.5;
}
.func h3 {
  transition-duration: 0.3s;
  margin-top: 0;
}
.func h3 i {
  color: #26384e;
  background: #fff;
  width: 42px;
  height: 42px;
  font-size: 20px;
  line-height: 42px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  margin-right: 8px;
  transition-duration: 0.3s;
}
.func .data-study,
.func .edu,
.func .process {
  float: left;
}
.func .data-study small,
.func .edu small {
  display: block;
  opacity: 0.7;
}
.func .data-study ul li,
.func .edu ul li,
.func .process {
  position: relative;
  margin-left: 15px;
  padding-left: 25px;
  padding-bottom: 15px;
}
.func .data-study ul li:hover::before,
.func .edu ul li:hover::before,
.func .process:hover::before {
  animation: circle 1.2s infinite;
}
.func .data-study ul li:hover span,
.func .edu ul li:hover span,
.func .process {
  color: #da694b;
}
@keyframes circle {
  from {
    box-shadow: 0 0 0 0px #da694b;
  }
  to {
    box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
  }
}
.func .data-study ul li:first-of-type::before,
.func .edu ul li:first-of-type::before {
  width: 10px;
  height: 10px;
  left: 1px;
}
.func .data-study ul li:last-of-type,
.func .edu ul li:last-of-type {
  padding-bottom: 3px;
}
.func .data-study ul li:last-of-type::after,
.func .edu ul li:last-of-type::after {
  border-radius: 1.5px;
}
.func .edu ul li::before,
.func .edu ul li::after {
  content: "";
  display: block;
  position: absolute;
}
.func .data-study ul li::before,
.func .edu ul li::before,
.func .process::before {
  width: 7px;
  height: 7px;
  border: 2.5px solid #26384e;
  background: orange;
  border-radius: 50%;
  left: 3px;
  z-index: 1;
}
.func .data-study ul li::after,
.func .edu ul li::after,
.func .process::after {
  width: 3px;
  height: 100%;
  background: #26384e;
  left: 5px;
  top: 0;
}
.func .data-study ul li span,
.func .edu ul li span,
.func .process {
  transition-duration: 0.3s;
}
.func .data-study,
.func .process {
  width: 48%;
  background: #fff;
  padding: 15px;
  margin: 0 4% 15px 0;
}
.func .edu {
  width: 48%;
  background: #fff;
  padding: 15px;
}
</style>
