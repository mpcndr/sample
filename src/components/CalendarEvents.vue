<template>
  <div class="hello container" style="width: 100%; display : inline-block;">
    <FullCalendar ref="fullCalendar" :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
// import Axios from 'axios'
// import Tooltip from 'tooltip.js'
// import $ from "jquery";
export default {
  name: "calendar-event",
  components: {
    FullCalendar,
  },
  props: {
    options: {
      type: Object,
    },
    preloader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin],
        initialView: "timeGridWeek",
        dateClick: this.handleDateClick,
        nowIndicator: true,
        navLinks: true,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listYear",
        },
        // eventMouseEnter: function(info) {
        //   console.log("hi");
        //   let tooltip = new Tooltip(info.el, {
        //     title: info.event.extendedProps.description,
        //     placement: "top",
        //     trigger: "hover",
        //     container: "div",
        //   },console.log("333")
          
        //   );
        //   console.log(tooltip);
        // },
        events: [
          // {
          //   title: "event 1",
          //   date: "2021-05-06",
          //   url:
          //     "https://www.youtube.com/watch?v=WHXv40JFYmA&ab_channel=LOVEiS%2B",
          //   extendedProps: {
          //     department: "BioChemistry",
          //   },
          //   description: "===>Lecture",
          // },
          // {
          //   title: "Long Event",
          //   start: "2021-05-07",
          //   end: "2021-05-10",
          //    description: "-->123456",
          // },
          // {
          //   title: "Meeting",
          //   start: "2021-05-07T10:30:00",
          //   end: "2021-05-07T12:30:00",
          //   description: "123456",
          // },
        ],
        eventClick: function(info) {
          info.jsEvent.preventDefault(); // don't let the browser navigate
          if (info.event.url) {
            window.open(info.event.url);
          }
        },eventMouseEnter: function (info) {
          let hover_item = document.createElement("div");
          hover_item.setAttribute("id", info.event.title + info.event.start);
          hover_item.setAttribute("class", "hover_event_item");
          hover_item.style.color = "#fff"
          hover_item.style.padding ="0"
          hover_item.style.margin = "0"
          hover_item.style.fontSize = "16px"
          hover_item.style.textAlign = "center"
          hover_item.style.position = "absolute"
          hover_item.style.bottom = "0"
          hover_item.style.width = "120px"
          hover_item.style.backgroundColor = "black"
          hover_item.style.opacity = "0.8"
          hover_item.style.marginLeft = "70px"
          hover_item.style.borderRadius = "6px"
          hover_item.style.padding = "5px 0"
          hover_item.style.zIndex = "1000"



          /**   padding: 0;
  margin: 0;
  font-size: 75%;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0.8;*/
        console.log(info.event);
          hover_item.innerHTML = info.event.extendedProps.description;

          info.el.append(hover_item);

          let parentEl = info.el.parentNode

          parentEl.insertBefore(hover_item, info.el)
        },
        eventMouseLeave: (info) => {
          document.getElementById(info.event.title + info.event.start).remove()
        },
        
        // eventDidMount: function(info) {
        //   console.log("asdfnkasdf");
        //   // console.log(info.event.extendedProps.department);
          
        //   // {description: "Lecture", department: "BioChemistry"}
        // },
      },
    };
  },
  methods: {
    handleDateClick: function(arg) {
      alert("date click! " + arg.dateStr);
    },
  },
  async created() {
    await fetch(this.$store.getters.getApi + "api/gettestsubject/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ token: this.$store.getters.getToken }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.calendarOptions.events = json.subject;
        console.log(this.calendarOptions.events);
      });
    // await Axios.post(this.$store.getters.getApi + "api/gettestsubject/", {
    //   token: this.$store.getters.getToken,
    // }).then((res1) => {
    //   this.events = res1.data.subject;
    //   console.log("========================>" + this.events);
    // });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
