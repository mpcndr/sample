<template>
  <div class="container">
    <div class="row">
      <div class="index-panel">
        <div class="index-panel-header clearfloat">
          <i class="far fa-calendar-alt"></i>
          <h3>
            ปฏิทินนักศึกษา
          </h3>
          <div class="line"></div>
        </div>
      </div>
    </div>

    <div class="col2">
      <div id="clockdiv">
        <h2>เหลือเวลา</h2>
        <div>
          <span class="days"></span>
          <div class="smalltext">Days</div>
        </div>
        <div>
          <span class="hours"></span>
          <div class="smalltext">Hours</div>
        </div>
        <div>
          <span class="minutes"></span>
          <div class="smalltext">Minutes</div>
        </div>
        <div>
          <span class="seconds"></span>
          <div class="smalltext">Seconds</div>
        </div>
        <h4 class="text-cal">
          ถึง <span class="text-span">{{ this.event_data }}</span>
        </h4>
      </div>
    </div>
    <!-- sdfdsf -->
    <div class="col1">
      <div class="table-responsive">
        <table
          id="dtBasicExample"
          class="table table-default table-bordered table-sm table-hover"
          cellspacing="0"
          width="100%"
        >
          <thead class="thead-light">
            <tr>
              <th class="th-sm1">รายการ</th>
              <th class="th-sm1">วันที่</th>
            </tr>
          </thead>
          <tbody id="tableList">
            <tr
              v-for="date in dates"
              :key="date.id"
              :id="'date' + date.id"
              v-on:click="selectCalendar(date)"
            >
              <td id="chk">
                {{ date.title }}
              </td>
              <td>{{ formatDatetime(date.start_date) }} - {{ formatDatetime(date.end_date) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "calendar-data",
  data() {
    return {
      totals: 0,
      event_data: "",
      dates: [],
    };
  },

  methods: {
    formatDatetime(x) {
      const date = new Date(x);
      const result = date.toLocaleDateString("th-TH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return result
    },
    getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      this.totals = total;
      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    },

    initializeClock() {
      const clock = document.getElementById("clockdiv");
      const daysSpan = clock.querySelector(".days");
      const hoursSpan = clock.querySelector(".hours");
      const minutesSpan = clock.querySelector(".minutes");
      const secondsSpan = clock.querySelector(".seconds");

      // function updateClock() {
      const t = this.getTimeRemaining(this.end_dates);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(this.timeinterval);
        this.timeinterval = null;
      }
    },
    selectCalendar(event) {
      clearInterval(this.timeinterval);
      this.event_data = event.title;
      this.end_dates = event.start_date;
      this.timeinterval = null;
      this.timeinterval = setInterval(this.initializeClock, 100);
    },
  },
  mounted: function() {},
  destroyed() {
    clearInterval(this.timeinterval);
  },
  async created() {
    await Axios.get(this.$store.getters.getApi + "api/getcalender/").then(
      (res1) => {
        this.dates = res1.data.date;
      }
    );
    this.timeinterval = setInterval(this.initializeClock, 100);
    const day = new Date();

    for (var i = 0; i < this.dates.length; i++) {
      if (Date.parse(day) < Date.parse(new Date(this.dates[i].start_date))) {
        this.end_dates = this.dates[i].start_date;
        this.event_data = this.dates[i].title;

        break;
      } else {
        document.getElementById("date" + this.dates[i].id).style =
          "pointer-events: none; text-decoration: line-through;";
      }
    }
  },
};
</script>

<style scoped>
h2 {
  color: #3b3b3b;
  font-weight: 200;
}
.text-cal {
  color: #3b3b3b;
  font-weight: bold;
}
.text-span {
  color: #da694b;
  font-size: 28px;
  font-weight: initial;
}
#clockdiv {
  font-family: "Kanit";
  color: #fff;
  display: inline-block;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
}

#clockdiv > div {
  padding: 5px;
  display: inline-block;
}

#clockdiv div > span {
  padding: 20px;
  border-radius: 12px;
  background: #000;
  width: 85px;
  display: inline-block;
}

.smalltext {
  padding-top: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #444;
}

.index-panel-header > h3 {
  margin-top: 35px;
  float: left;
  margin-right: 36px;
  font-size: 20px;
  color: #3b3b3b;
  font-weight: normal;
}

.index-panel-header .line {
  float: left;
  margin-top: 48px;
  width: 200px;
  border-top: 2px solid #da694b;
}

.col2 {
  margin-right: 42px;
  margin-left: 26px;
}

.row {
  margin-top: 15px;
}
.active {
  color: #da694b;
}

i {
  margin-top: 36px;
  float: left;
  margin-left: 10px;
  margin-right: 12px;
  font-size: 24px;
  font-weight: normal;
}
</style>
