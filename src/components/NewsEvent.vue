<template>
  <div class="container" style="margin-top: 10px">
    <div class="row">
      <div class="index-panel">
        <div class="index-panel-header clearfloat">
          <h3>บทความ</h3>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list" id="list"></div>
      <div class="pagenumbers" id="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#news-event",
  data() {
    return {
      current_page: 1,
      rows: 5,
    };
  },
  methods: {
    DisplayList(items, wrapper, rows_perpage, page) {
      (wrapper.innerHTML = ""), page--;

      let start = rows_perpage * page;
      let end = start + rows_perpage;
      let paginatedItem = items.slice(start, end);

      for (let i = 0; i < paginatedItem.lenght; i++) {
        let item = item[i];
        let item_el = document.createElement("div");
        item_el.classList.add("item");
        item_el.innerHTML = item;

        wrapper.appendChild(item_el);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
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
  margin-top: 45px;
  width: 200px;
  border-top: 2px solid #da694b;
}

/* ---------------------- */

.list {
  max-width: 768px;
  background-color: #fff;
  border: 1px solid #ccc;
  margin-top: 25px;
}

.list, .item {
  padding: 15px;
  border-bottom: 1px solid #ccc;
}

.list, .item:last-of-type {
  border-bottom: none;
}
.list, .item:hover {
  background: rgba(0, 0, 0, 0.05);
}
</style>
