<template>
  <div class="page2">
    <div class="card bg-dark text-white">
      <img class="card-img" src="../assets/IMG_2103.jpg" alt="Card image" style="height: 500px;">
    </div>
    <h1>{{ msg }}</h1>
    <section class="container">
      <div class="container">
        <div class="row hidden-xs">
          <div
            class="nav flex-column nav-pills mr-5"
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
              @click="selectSubject(1)"
              >หมวดศึกษาทั่วไป</a
            >
            <a
              class="nav-link"
              id="v-pills-2-tab"
              data-toggle="pill"
              href="#v-pills-2"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              @click="selectSubject(2)"
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
              @click="selectSubject(3)"
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
              @click="selectSubject(4)"
              >หมวดศึกษาทั่วไปกำหนดโดยคณะวิทยาศาสตร์</a
            >
          </div>
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
                />
                <i class="fas fa-search" aria-hidden="true"></i>
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
                  <tbody id="myTable">
                    <tr v-for="subject in subjects" :key="subject.id">
                      <td v-if="subject.name_group == select" class="th-sm1">
                        {{ subject.id_subject }}
                      </td>
                      <td v-if="subject.name_group == select" class="th-sm">
                        {{ subject.subjectName }}
                      </td>
                      <td v-if="subject.name_group == select" class="th-sm1">
                        {{ subject.credit }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </section>
    <br>
    <br>
  </div>
</template>
<script>
export default {
  name: "subject",
  data() {
    return {
      select: 1,
      subject: {
        id_subject: "",
        sujectName: "",
        credit: "",
      },
      subjects: [],
    };
  },
  async created() {
    var response = await fetch("http://127.0.0.1:8000/api/subjects/");
    this.subjects = await response.json();
  },
  methods: {
    selectSubject(select) {
      this.select = select;
    },
  },
};
</script>
<style scoped>
.th-sm{
  width: 350px;
}
.th-sm1{
  width: 140px;
}
section.container {
  padding-top: 40px;
}
ul {
  display: block;
}
.nav > .nav-link {
  font-size: 18px;
  color: #da694b;
}
.nav > a.active {
  color: #fff;
  background-color: #da694b;
}
.nav-link:hover {
  background-color: #f0b6a7;
  color: #fff;
}
li,
a.text-menu {
  padding-top: 15px;
}
div > a {

  letter-spacing: 0px;
}
</style>
