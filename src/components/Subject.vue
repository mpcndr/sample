<template>
  <div class="container page2">
    <div class="row">
      <div class="index-panel">
        <div class="index-panel-header clearfloat">
          <div class="icon-book"><i class="fas fa-book"></i></div>
          <h2>วิชาเลือก</h2>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div
          class="nav flex-column"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            class="nav-link active"
            id="v-pills-1-tab"
            data-toggle="pill"
            href="#v-pills-1"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            @click="selectSubject('general')"
            >หมวดวิชาศึกษาทั่วไป</a
          >
          <a
            class="nav-link"
            id="v-pills-2-tab"
            data-toggle="pill"
            href="#v-pills-2"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
            @click="selectSubject('maj')"
            >หมวดวิชาเฉพาะ</a
          >
          <a
            class="nav-link"
            id="v-pills-3-tab"
            data-toggle="pill"
            href="#v-pills-3"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
            @click="selectSubject('free')"
            >หมวดวิชาเสรี</a
          >
          <a
            class="nav-link"
            id="v-pills-4-tab"
            data-toggle="pill"
            href="#v-pills-4"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
            @click="selectSubject('sci')"
            >หมวดวิชาศึกษาทั่วไปกำหนดโดยคณะวิทยาศาสตร์</a
          >
        </div>
      </div>

      <div class="col-8">
        <div class="tab-content" id="v-tabs-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-1"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <form class="form-inline active-cyan-4 mb-3 justify-content-end">
              <input
                class="form-control form-control-sm mr-2 w-45"
                type="text"
                id="tableSearch"
                placeholder="ค้นหาวิชาเลือกที่ต้องการค้น"
                v-on:keyup="searchData()"
              />
              <div class="icon-search"><i class="fas fa-search"></i></div>
            </form>
            <div class="table-responsive">
              <table
                id="dtBasicExample"
                class="table table-striped table-bordered table-sm"
                cellspacing="0"
                width="100%"
              >
                <thead>
                  <tr>
                    <th class="th-sm1">รหัสวิชา</th>
                    <th class="th-sm">ชื่อวิชา</th>
                    <th class="th-sm1">หน่วยกิต</th>
                  </tr>
                </thead>
                <tbody id="myTable" v-if="this.select == 'general'">
                  <tr v-for="subj in subject['general']" :key="subj.id">
                    <td class="th-sm1">
                      {{ subj.id }}
                    </td>
                    <td class="th-sm">
                      {{ subj.name }}
                    </td>
                    <td class="th-sm1">
                      {{ subj.credit }}
                    </td>
                  </tr>
                </tbody>
                <tbody id="myTable" v-if="this.select == 'free'">
                  <tr v-for="subj in subject['free']" :key="subj.id">
                    <td class="th-sm1">
                      {{ subj.id }}
                    </td>
                    <td class="th-sm">
                      {{ subj.name }}
                    </td>
                    <td class="th-sm1">
                      {{ subj.credit }}
                    </td>
                  </tr>
                </tbody>
                <tbody id="myTable" v-if="this.select == 'sci'">
                  <tr v-for="subj in subject['sci']" :key="subj.id">
                    <td class="th-sm1">
                      {{ subj.id }}
                    </td>
                    <td class="th-sm">
                      {{ subj.name }}
                    </td>
                    <td class="th-sm1">
                      {{ subj.credit }}
                    </td>
                  </tr>
                </tbody>
                <tbody id="myTable" v-if="this.select == 'maj'">
                  <tr v-for="subj in subject['maj']" :key="subj.id">
                    <td class="th-sm1">
                      {{ subj.id }}
                    </td>
                    <td class="th-sm">
                      {{ subj.name }}
                    </td>
                    <td class="th-sm1">
                      {{ subj.credit }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      select: "general",
      subject: [],
      subj:[],
    };
  },
  async created() {
    await Axios.post(this.$store.getters.getApi + "api/getoptionsubject/", {
      token: this.$store.getters.getToken,
    }).then((res1) => {
      this.subject = res1.data;
      console.log("========================>" + this.subject["general"]);
    });
  },
  methods: {
    selectSubject(select) {
      this.select = select;
    },
    searchData() {
      var input, filter, tb, tr, td, i, txtValue;
      input = document.getElementById("tableSearch");
      filter = input.value.toUpperCase();
      tb = document.getElementById("myTable");
      tr = tb.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    },
  },
};
</script>
<style scoped>
.page2 {
  margin-bottom: 18%;
}
.index-panel-header > h2 {
  margin-top: 35px;
  float: left;
  margin-right: 28px;
  font-size: 28px;
  color: #3b3b3b;
  font-weight: normal;
}

.index-panel {
  margin-left: 2%;
}

.index-panel-header .line {
  float: left;
  margin-top: 52px;
  width: 200px;
  border-top: 2px solid #da694b;
}

.nav {
  margin-top: 2%;
}

.th-sm {
  width: 350px;
}
.th-sm1 {
  width: 140px;
}
ul {
  display: block;
}
.nav > .nav-link {
  font-size: 18px;
  color: #000000;
  text-align: left;
}
.nav > a.active {
  color: #da694b;
  text-decoration: underline;
  text-decoration-color: #d42e00;
}
.nav-link:hover {
  color: #818589;
}
div > a {
  letter-spacing: 0px;
}
.icon-book {
  margin-top: 36px;
  float: left;
  margin-left: 10px;
  margin-right: 12px;
  font-size: 22px;
  font-weight: normal;
}
</style>
