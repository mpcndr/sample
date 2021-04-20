<template>
  <div class="card-calendar container">
    <div class="container">
      <div class="row">
        <div class="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <h1 class="cal">ปฏิทินนักศึกษา</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6 col-md-6 col-lg-6 col-xl-6">
          <!-- <h4>Countdown Time</h4> -->
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
        <div class="col">
          <div class="table-responsive">
            <table
              id="dtBasicExample"
              class="table table-dark table-bordered table-sm table-hover"
              cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th class="th-sm1">รายการ</th>
                  <th class="th-sm1">วันที่</th>
                </tr>
              </thead>
              <tbody id="tableList">
                <tr
                  v-for="date in dates"
                  :key="date.no"
                  :id="'date'+date.no"
                  v-on:click="selectCalendar(date)"
                >
                  <td id="chk">
                    {{ date.event }}
                  </td>
                  <td>{{ date.date_start }} - {{ date.date_end }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calendar-data",
  data() {
    return {
      totals: 0,
      event_data: "",
      dates: [
        {
          no: 1,
          date_start: "12 เม.ย. 2564 8:30 น.",
          date_end: "18 เม.ย. 2564 23:59 น.",
          event: "เปิดให้ลงทะเบียน",
          start_date: "2021-04-12T08:30:00Z",
          end_date: "2021-04-18T23:59:59Z",
        },
        {
          no: 2,
          date_start: "19 เม.ย. 2564 0:00 น.",
          date_end: "26 เม.ย. 2564 16:30 น",
          event: "ช่วงวันทำการเพิ่ม/ถอน",
          start_date: "2021-04-19T00:00:00Z",
          end_date: "2021-04-12T23:59:59Z",
        },
        {
          no: 3,
          date_start: "19 เม.ย. 2564 8:30 น.",
          date_end: "20 มิ.ย. 2564 16:30 น.",
          event: "วันเปิดภาคเรียน",
          start_date: "2021-04-19T08:30:00Z",
          end_date: "2021-06-20T16:30:00Z",
        },
        {
          no: 4,
          date_start: "19 พ.ค. 2564 8:30 น.",
          date_end: "26 พ.ค. 2564 16:30 น.",
          event: "สอบกลางภาค",
          start_date: "2021-05-03T08:30:00Z",
          end_date: "2021-05-26T16:30:00Z",
        },
        {
          no: 5,
          date_start: "14 มิ.ย. 2564 8:30 น.",
          date_end: "19 มิ.ย. 2564 16:30 น.",
          event: "สอบปลายภาค",
          start_date: "2021-06-14T08:30:00Z",
          end_date: "2021-06-19T16:30:00Z",
        },
      ],
      date: [],
    };
  },
  created() {
    
    // const day = new Date();
    // for (var i = 0; i < this.dates.length; i++) {
    //   if(Date.parse(day) < Date.parse(new Date(this.dates[i].start_date))){
    //     this.end_dates = this.dates[i].start_date;
    //     this.event_data = this.dates[i].event;
    //     break;
    //   }
    //   else {
    //     document.getElementById('date'+this.dates[i].no).style = "background: #fff"
    //   }
    // }
  },

  methods: {
    // countdownTime: function() {

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
      // }

      // updateClock();
      // const timeinterval = setInterval(updateClock, 10);
    },

    // const deadline = new Date(
    //   Date.parse(new Date()) + 18 * 24 * 60 * 60 * 1000
    // );
    // initializeClock("clockdiv", deadline);

    // },
    selectCalendar(event) {

      clearInterval(this.timeinterval);
      this.event_data = event.event;
      this.end_dates = event.start_date;
      this.timeinterval = null;
      this.timeinterval = setInterval(this.initializeClock, 100);
    },
  },
  mounted: function() {
    this.timeinterval = setInterval(this.initializeClock, 100);
     const day = new Date();
    for (var i = 0; i < this.dates.length; i++) {
      if(Date.parse(day) < Date.parse(new Date(this.dates[i].start_date))){
        this.end_dates = this.dates[i].start_date;
        this.event_data = this.dates[i].event;
        break;
      }
      else {
        document.getElementById('date'+this.dates[i].no).style = "pointer-events: none; text-decoration: line-through;"
      }
    }
    
  },
  destroyed() {
    clearInterval(this.timeinterval)
  }

};
</script>

<style scoped>
h1.cal {
  color: #26384e;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  padding: auto 0px;
}
h2 {
  color: #fff;
  font-weight: 200;
}
.text-cal {
  color: #000000;
  font-weight: bold;
}
.text-span {
  color: #fff;
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

.card-calendar {
  margin: 30px auto;
  background: #f37f5f;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 10px #f37f5f, 3px 5px 20px #e28d76;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0px auto;
}
</style>
