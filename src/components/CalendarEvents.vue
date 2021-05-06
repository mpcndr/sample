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
          right: "dayGridMonth,timeGridWeek,listWeek",
        },
        // eventRender: function(info) {
        //   var tooltip = new Tooltip(info.el, {
        //     title: info.event.extendedProps.description,
        //     placement: "top",
        //     trigger: "hover",
        //     container: "body",
        //   });
        // },
        events: [
          {
            title: "event 1",
            date: "2021-05-06",
            url:
              "https://www.youtube.com/watch?v=WHXv40JFYmA&ab_channel=LOVEiS%2B",
            extendedProps: {
              department: "BioChemistry",
            },
            description: "Lecture",
          },
          { title: "event 2", date: "2021-04-20" },
          {
            title: "Long Event",
            start: "2021-05-07",
            end: "2021-05-10",
          },
          {
            title: "Meeting",
            start: "2021-05-07T10:30:00",
            end: "2021-05-07T12:30:00",
            description: "123456",
          },
        ],
        eventClick: function(info) {
          info.jsEvent.preventDefault(); // don't let the browser navigate
          if (info.event.url) {
            window.open(info.event.url);
          }
        },
        eventDidMount: function(info) {
          console.log(info.event.extendedProps.department);
          // {description: "Lecture", department: "BioChemistry"}
        },
      },
    };
  },
  methods: {
    handleDateClick: function(arg) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
