<template>
  <div class="study-result">
    <div>
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item">
          <a class="nav-link" id="pills-ta"></a>
        </li>
      </ul>
    </div>

    <div class="tb" v-for="subject in Subject" :key="subject.year">
      <h1>{{ subject.year + "/" + subject.term }}</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">รหัสวิชา</th>
            <th scope="col">ชื่อรายวิชา</th>
            <th scope="col">หน่วยกิต</th>
            <th scope="col">เกรด</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in subject.id_subject" :key="item.id">
            <td>
              {{ item.id }}
            </td>
            <td class="nameSubj">{{ item.name }}</td>
            <td>{{ item.credit }}</td>
            <td>{{ item.grade }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import Axios from 'axios'
export default {
  name: "studyresult",
  data: function() {
    return {
      Subject: [],
    };
  },
  async created() {
    await fetch(this.$store.getters.getApi + "api/getstudyresults/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ token: this.$store.getters.getToken }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.Subject = json.subject;
        console.log(this.Subject);
      });
    // await Axios.post(this.$store.getters.getApi + "api/getstudyresults/", {
    //   token: this.$store.getters.getToken,
    // }).then((res1) => {
    //   this.Subject = res1.data.subject;
    //   console.log("========================>" + this.Subject);
    // });
  },
};
</script>

<style scoped>
.study-result {
  margin-top: 6%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: #fff;
}
.head-table {
  text-align: center;
}
.nameSubj {
  text-align: left;
}
</style>
