<template>
  <div class="study-result">
    <div v-for="subject in Subject.subject_items" :key="subject">
      <h1>{{ subject.term }}</h1>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">รหัสวิชา</th>
            <th scope="col">ชื่อรายวิชา</th>
            <th scope="col">หน่วยกิต</th>
            <th scope="col">เกรด</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in subject.id_subject" :key="item">
            <td>
              {{ item.id }}
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.credit }}</td>
            <td>{{ item.grade }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "studyresult",
  data: function() {
    return {
      Subject: {
        subject_items: [
          {
            term: "1/2560",
            id_subject: [
              {
                id: "081102",
                name: "ENGLISH FOR EVERYDAY USE",
                credit: 3,
                grade: "C+",
              },
              {
                id: "471302",
                name: "HEALTH EDUCATION IN THE ELEMENTARY SCHOOL",
                credit: 2,
                grade: "A",
              },
              { id: "511100", name: "PRECALCULUS", credit: 3, grade: "S" },
              {
                id: "511108",
                name: "CALCULUS FOR COMPUTATIONAL SCIENTISTS I",
                credit: 3,
                grade: "F",
              },
              {
                id: "514107",
                name: "FUNDAMENTAL PHYSICS",
                credit: 4,
                grade: "D",
              },
              {
                id: "517121",
                name: "COMPUTER PROGRAMMING SKILL I",
                credit: 4,
                grade: "W",
              },
              {
                id: "520101",
                name: "FOUNDATION OF COMPUTER AND INFORMATICS",
                credit: 3,
                grade: "C",
              },
            ],
          },
          {
            term: "2/2560",
            id_subject: [
              {
                id: "081103",
                name: "ENGLISH",
                credit: 3,
                grade: "C+",
              },
              {
                id: "083104",
                name: "SPORT EDU",
                credit: 2,
                grade: "A",
              },
              {
                id: "084108",
                name: "EARTH&ASTRONOMY",
                credit: 3,
                grade: "A",
              },
              {
                id: "085101",
                name: "CREATIVE",
                credit: 3,
                grade: "A",
              },
              {
                id: "515201",
                name: "STATIC",
                credit: 3,
                grade: "C",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.study-result {
  padding-top: 30px;
  padding-left: 20px;
}
.head-table {
  text-align: center;
}
</style>
