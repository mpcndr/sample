<template>
  <calendar style="height: 800px;" />
</template>

<script>
import Calendartui from "tui-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
export default {
  name: "TuiCalendar",
  data() {
    return {
      data_Cal: [
        {
          id: "1",
          calendarId: "1",
          title: "my schedule",
          category: "time",
          dueDateClass: "",
          start: "2021-04-18T22:30:00+09:00",
          end: "2021-04-19T02:30:00+09:00",
        },
      ],
    };
  },
  methods: {
    calendarTui() {
      var cal = new Calendartui("#calendar", {
        defaultView: "month",
        taskView: true,
        template: {
          monthDayname: function(dayname) {
            return (
              '<span class="calendar-week-dayname-name">' +
              dayname.label +
              "</span>"
            );
          },
        },
      });
      cal.createSchedules(this.data_Cal);
      return cal;
    },
  },
  created() {
    this.calendarTui();
  },
};
</script>

<style scoped>
#calendar {
  width: 50%;
}
</style>
