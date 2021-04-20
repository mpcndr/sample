<template>
  <div class="container show-grid">
    <h1 class="head-title">ตารางเรียน</h1>
    <div class="row">
      <div class="col-sm-1"></div>
      <div v-for="hour in setTime().tpm" :key="hour">
        <div class="col-sm-1">{{ hour }}</div>
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
        </tr>
      </thead>
      <tbody>
        <tr v-for="day in setDay()" :key="day">
          <th id="days">{{ day.substr(0, 3) }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "student-timetable",
  data() {
    return {
      hours_start: 6,
      hours_end: 21,
      tmp: []
    };
  },
  methods: {
    setTime: function() {
      var usehalfHour = true;
      this.hours_start = getHours();

      function getHours() {
        for(var i = this.hours_start; i <= this.hours_end; i++) {
          this.tmp.push(i + ":00");
          if(usehalfHour && i < this.hours_end) {
            this.tmp.push(i + ':30');
          }
        }
        return this.tmp;
      }
    },
    checkTime: function(time) {
      if (time < 10) {
        time = "0" + time;
      }
      return time;
    },
    setDay: function() {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return days;
    },
  },
};
</script>

<style scoped>
#days {
  width: 30px;
}
#time_study {
  border: none;
  border-spacing: 0;
  border-collapse: collapse;
}
td > #time_study {
  width: 0px;
}
</style>
