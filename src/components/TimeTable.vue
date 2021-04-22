<template>
  <div id="app">
    <Schedule
      :time-ground="['09:00', '18:00']"
      :week-ground="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']"
      :task-detail="[
        [
          {
            dateStart: '09:30',
            dateEnd: '10:30',
            title: '开会',
          },
          {
            dateStart: '11:30',
            dateEnd: '13:50',
            title: '开会',
          },
        ],
      ]"
    >
    </Schedule>
  </div>
</template>

