<template>
  <div class="body">
    <div class="container">
      <div class="row">
        <div class="col-md-3 profile">
          <div class="profile-sidebar">
            <!-- SIDEBAR USERPIC -->
            <div class="profile-userpic">
              <img
                :src="this.data_student.image_student"
                class="img-responsive"
                alt=""
              />
            </div>
            <!-- END SIDEBAR USERPIC -->
            <!-- SIDEBAR USER TITLE -->
            <div class="profile-usertitle">
              <h2 class="profile-name" style="color: #000">
                {{
                  this.data_student.student_name +
                    " " +
                    this.data_student.student_surname
                }}
              </h2>
              <h5 class="profile-faculty">
                {{ this.data_student.faculty }}
                <br />
                <small>{{ this.data_student.deparment }}</small>
              </h5>
            </div>
            <!-- END SIDEBAR USER TITLE -->
            <!-- SIDEBAR BUTTONS -->
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
              style="padding-top: 18px"
            >
              <a
                class="menu-item active"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#profiledata"
                role="tab"
                aria-controls="profiledata"
                aria-selected="true"
                v-on:click="soloveDisplay(1)"
              >
                <i class="fa fa-address-card-o" aria-hidden="true"></i>
                <span>ประวัตินักศึกษา</span></a
              >
              <a
                class="menu-item"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#studyresult"
                role="tab"
                aria-controls="studyresult"
                aria-selected="false"
                v-on:click="soloveDisplay(2)"
                ><i class="fa fa-graduation-cap" aria-hidden="true"></i
                ><span>ผลการเรียน</span></a
              >
              <a
                class="menu-item"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#midtermfinal"
                role="tab"
                aria-controls="midtermfinal"
                aria-selected="false"
                v-on:click="soloveDisplay(3)"
                ><i class="fa fa-table" aria-hidden="true"></i
                ><span>ตารางเรียน</span></a
              >
              <a
                class="menu-item"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#tablestudent"
                role="tab"
                aria-controls="tablestudent"
                aria-selected="false"
                v-on:click="soloveDisplay(4)"
                ><i class="fa fa-file-text-o" aria-hidden="true"></i
                ><span>ตารางสอบ</span></a
              >
            </div>
            <!-- END MENU -->
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content" id="v-pills-tabContent">
            <ProfileData
              class="tab-pane fade show active"
              id="profiledata"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
            </ProfileData>
            <StudyResult
              class="tab-pane fade"
              id="studyresult"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
            </StudyResult>
            <MidtermFinal
              class="tab-pane fade"
              id="midtermfinal"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
            </MidtermFinal>
            <TableStudent
              class="tab-pane fade"
              id="tablestudent"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
            </TableStudent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileData from "../components/Profile_data.vue";
import StudyResult from "../components/StudyResult.vue";
import MidtermFinal from "../components/CalendarEvents.vue";
import TableStudent from "../components/TableStudent.vue";
import Axios from "axios";

export default {
  name: "profile_user",
  data() {
    return {
      data_student: {},
      select: 1,
    };
  },
  components: {
    ProfileData,
    StudyResult,
    MidtermFinal,
    TableStudent,
  },
  methods: {
    soloveDisplay(el) {
      if (el == 1) {
        this.select = el;
        document.getElementById("profiledata").style.display = "block";
        document.getElementById("studyresult").style.display = "none";
        document.getElementById("midtermfinal").style.display = "none";
        document.getElementById("tablestudent").style.display = "none";
      } else if (el == 2) {
        this.select = el;
        document.getElementById("studyresult").style.display = "block";
        document.getElementById("profiledata").style.display = "none";
        document.getElementById("midtermfinal").style.display = "none";
        document.getElementById("tablestudent").style.display = "none";
      } else if (el == 3) {
        this.select = el;
        document.getElementById("profiledata").style.display = "none";
        document.getElementById("studyresult").style.display = "none";
        document.getElementById("midtermfinal").style.display = "block";
        document.getElementById("tablestudent").style.display = "none";
      } else {
        this.select = el;
        document.getElementById("profiledata").style.display = "none";
        document.getElementById("studyresult").style.display = "none";
        document.getElementById("midtermfinal").style.display = "none";
        document.getElementById("tablestudent").style.display = "block";
      }
    },
  },
  async created() {
    await Axios.post(this.$store.getters.getApi + "api/getinfostudent/", {
      token: this.$store.getters.getToken,
    }).then((res1) => {
      this.data_student = res1.data.student[0];
      console.log(this.data_student);
    });
    var el = document.getElementById("midtermfinal");
    el.style.display = "none";
    var el2 = document.getElementById("tablestudent");
    el2.style.display = "none";
  },
};
</script>

<style scoped>
.profile {
  margin: 50px 0;
  background-color: #e6e6fa;
}
.profile-name {
  font-size: 24px;
}
/* Profile sidebar */
.profile-sidebar {
  padding: 20px 0 20px 0;
  background: #ffff;
}

.profile-userpic img {
  float: none;
  margin: 0 auto;
  width: 200px;
  height: 240px;
  -webkit-border-radius: 50% !important;
  -moz-border-radius: 50% !important;
  border-radius: 15% !important;
}

.profile-usertitle {
  text-align: center;
  margin-top: 20px;
  size: 30px;
}

.profile-usertitle-name {
  color: #5a7391;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 7px;
}

/* Profile Content */
.profile-content {
  padding: 20px;
  background: rgb(230, 229, 229);
  min-height: 460px;
}

div.profile-usermenu {
  display: block;
  padding-top: 20px;
}

a.menu-item {
  color: #5a7391;
  text-decoration: none;
  padding-top: 10px;
  font-size: 18px;
}
a.menu-item:hover {
  color: #26384e;
}
a.menu-item:focus {
  color: #26384e;
}
i.fa {
  padding-right: 6px;
}
div.menu {
  padding-bottom: 8px;
}
.body {
  background-color: #e6e6fa;
  height: 100vh;
}
.nav a.active {
  color: #7f00ff;
  font-weight: bold;
  font-size: 22px;
}
div > .tab-pane,
.show,
.active {
  height: 100%;
}
</style>
