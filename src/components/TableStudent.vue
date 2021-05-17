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
import tippy from "tippy.js";
import 'tippy.js/dist/tippy.css';
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
        initialView: "listWeek",
        dateClick: this.handleDateClick,
        events: [
         
        ],
        eventMouseEnter: function(info) {
          tippy(info.el, {
            title: "ห้องสอบ",
            content: info.event.extendedProps.description
          })
        },
        eventDidMount: function(info) {
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fc-event-title {
  font-size: 22px;
}
</style>
