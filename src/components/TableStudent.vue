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
import allLocales from "@fullcalendar/core/locales-all";
// import tippy from "tippy.js";
// import 'tippy.js/dist/tippy.css';
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
        initialView: "listYear",
        dateClick: this.handleDateClick,
         locales: allLocales,
        locale: "th",
        // navLinks: true,
        events: [
         
        ],
        // eventMouseEnter: function(info) {
        //   tippy(info.el, {
        //     theme: "tomato",
        //     content: "ห้องสอบ: " + info.event.extendedProps.description
        //   })
        // },
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
.hello {
  margin-top: 8%;
  margin-bottom: 8%;
}
</style>
