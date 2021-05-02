<template>
  <div class="hello container" style="width: 100%; display : inline-block;">
    
    <FullCalendar ref="fullCalendar" :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
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
        plugins: [dayGridPlugin, interactionPlugin, listPlugin],
        initialView: "dayGridMonth",
        dateClick: this.handleDateClick,
        events: [
          {
            title: "event 1",
            date: "2021-04-19",
            url:
              "https://www.youtube.com/watch?v=WHXv40JFYmA&ab_channel=LOVEiS%2B",
            extendedProps: {
              department: "BioChemistry",
            },
            description: "Lecture",
          },
          { title: "event 2", date: "2021-04-20" },
        ],
        eventClick: function (info) {
          info.jsEvent.preventDefault(); // don't let the browser navigate

          if (info.event.url) {
            window.open(info.event.url);
          }
        },
        // eventDidMount: function (info) {
        //   console.log(info.event.extendedProps);
        //   // {description: "Lecture", department: "BioChemistry"}
        // },
      },
    };
  },
  methods: {
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
