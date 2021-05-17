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
import Tooltip from 'tooltip.js'
export default {
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
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        events: [
          {
            title: "event 1",
            start: "2021-05-07T13:30:00",
            end: "2021-05-07T15:30:00",
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
          console.log("1=========> " + info.event.extendedProps.description);
          // if (info.event.url) {
          //   window.open(info.event.url);
          // }
          let tooltip = new Tooltip(info.el, {
            title: info.event.extendedProps.description,
            placement: "top",
            trigger: "hover",
            container: 'body',
            html: true
          });
          console.log(tooltip);
        },

        eventMouseEnter: function(info){
          console.log("2=========> " + info.event.extendedProps.description);
          let tooltip = new Tooltip(info.el, {
            title: info.event.extendedProps.description,
            placement: "top",
            trigger: "hover",
            container: 'body',
            html: true
          });
          console.log(tooltip);
        },
        // eventRender: function(info, element) {
        //   info.jsEvent.preventDefault();
        //   console.log("hover");
        //   element.popover({
        //     title: info.title,
        //     content: info.event.extendedProps.description,
        //     trigger: "hover",
        //     placement: "top",
        //     container: "body",
        //   });
        // },
        eventDidMount: function (info) {
          console.log(info.event.extendedProps.description);
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
<style scoped>
.fc-event-title {
  font-size: 22px;
}
</style>
