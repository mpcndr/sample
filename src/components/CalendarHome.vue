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

    <div>
      <label class="text-selectCal">เลือกรายการปฏิทิน : </label>

      <select
        id="selectDate"
        aria-label="Defualt select example"
        v-on:change="selectCalendar2()"
      >
        <option
          v-for="date in dates"
          :key="date.id"
          :id="'date' + date.id"
          :value="date.id"
          :selected="date == d"
          >{{ date.title }}</option
        >
      </select>
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
          ถึง <span class="text-span">{{ event_data }}</span>
        </h4>
        <h5 class="text-cal2">
          วันที่ <span class="text-span2">{{ time_now }}</span>
        </h5>
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
      d: null,
      time_now: "",
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
      return result;
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
    // selectCalendar(event) {
    //   console.log(event);
    //   clearInterval(this.timeinterval);
    //   this.event_data = event.title;
    //   this.end_dates = event.start_date;
    //   this.timeinterval = null;
    //   this.timeinterval = setInterval(this.initializeClock, 100);
    // },
    selectCalendar2() {
      var d = document.getElementById("selectDate").value;
      console.log();
      for (var i = 0; i < this.dates.length; i++) {
        if (this.dates[i].id == d) {
          this.event_data = this.dates[i].title;
          this.end_dates = this.dates[i].start_date;
          this.timeinterval = null;
          this.timeinterval = setInterval(this.initializeClock, 100);
        }
      }
      // clearInterval(this.timeinterval)
      // this.event_data = d
      // this.end_dates = d.
      // this.timeinterval = null
      // this.timeinterval = setInterval(this.initializeClock, 100)
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

    for (let i = 0; i < this.dates.length; i++) {
      // console.log("--> " + Date.parse(day) + " < " + Date.parse(new Date(this.dates[i].start_date)));
      if (Date.parse(day) < Date.parse(new Date(this.dates[i].start_date))) {
        this.d = this.dates[i];
        console.log("3333");
        this.end_dates = this.dates[i].start_date;
        this.event_data = this.dates[i].title;
        this.time_now =
          this.formatDatetime(this.dates[i].start_date) +
          " - " +
          this.formatDatetime(this.dates[i].end_date);
        console.log(this.event_data);
        // document.getElementsByTagName("option")[0].setAttribute("selected", "selected")
        break;
      } else {
        document.getElementById("selectDate").options[i].disabled = true;
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
.text-cal2 {
  color: #3b3b3b;
  font-size: 18px;
}
.text-span {
  color: #da694b;
  font-size: 28px;
  font-weight: initial;
}

.text-span2 {
  color: #000;
  font-size: 20px;
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

/* .thead {
  background: #d3d3d3;
  color: rgb(59, 57, 57);
  letter-spacing: 3px;
} */

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

.text-selectCal {
  margin-right: 12px;
  font-size: 22px;
}

@media screen and (max-width: 375px) {
  .index-panel-header .line {
    margin-top: 46px;
    float: left;
    width: 150px;
    border-top: 2px solid #da694b;
  }
  .index-panel-header > h3 {
    margin-top: 35px;
    float: left;
    margin-right: 20px;
    font-size: 18px;
    color: #3b3b3b;
    font-weight: normal;
  }
  i {
    margin-top: 36px;
    float: left;
    margin-left: 10px;
    margin-right: 8px;
    font-size: 20px;
    font-weight: normal;
  }
  .text-selectCal {
    /* margin-right: 4px; */
    font-size: 22px;
  }
  #selectDate {
    margin-bottom: 3%;
  }
  .text-cal2 {
    color: #3b3b3b;
    font-size: 14px;
  }
  .text-span2 {
    color: #000;
    font-size: 16px;
    font-weight: initial;
  }
  #clockdiv div > span {
    padding: 15px;
    border-radius: 12px;
    background: #000;
    width: 85px;
    display: inline-block;
  }
  @media screen and (max-width: 320px) {
    .index-panel-header .line {
      margin-top: 46px;
      float: left;
      width: 120px;
      border-top: 2px solid #da694b;
    }
    .index-panel-header > h3 {
      margin-top: 35px;
      float: left;
      margin-right: 20px;
      font-size: 18px;
      color: #3b3b3b;
      font-weight: normal;
    }
    i {
      margin-top: 36px;
      float: left;
      margin-left: 10px;
      margin-right: 12px;
      font-size: 22px;
      font-weight: normal;
    }
    #clockdiv div > span {
      padding: 10px;
      border-radius: 12px;
      background: #000;
      width: 65px;
      display: inline-block;
    }
  }
}
</style>
