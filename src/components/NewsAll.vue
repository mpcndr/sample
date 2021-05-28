<template>
  <div id="newsall">
    <div class="container">
      <div class="row">
        <div class="index-panel">
          <div class="index-panel-header clearfloat">
            <i class="far fa-newspaper"></i>
            <h4>ข่าวสาร</h4>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="(n, index) in newsAll" :key="n._id">
            <div class="card">
              <img :src="n.img" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ n.title }}</h5>
                <p class="card-text">
                  {{ n.body }}
                </p>
              </div>
              <div class="d-grid gap-2">
                <button
                  @click="checkSelect(index)"
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >
                  อ่านต่อ
                </button>
                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                          {{ newsAll[selectAll]["title"] }}
                        </h5>
                      </div>
                      <div class="modal-body">
                        <img class="img-div" :src="newsAll[selectAll]['img']" />
                        <div class="text-body">
                          {{ newsAll[selectAll]["body"] }}
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-outline-danger"
                          data-dismiss="modal"
                        >
                          ปิด
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "newsall",
  data() {
    return {
      newsAll: [],
      selectAll: 0,
    };
  },
  methods: {
    checkSelect(x) {
      console.log("----> " + x);
      this.selectAll = x;
      return this.selectAll;
    },
  },
  created() {
    Axios.get("https://api.su.ac.th/news").then((res1) => {
      this.newsAll = res1.data;
      // console.log(this.news);
    });
  },
};
</script>

<style scoped>
#newsall {
  margin-bottom: 8%;
}
.index-panel-header > h4 {
  margin-top: 35px;
  float: left;
  margin-right: 22px;
  font-size: 20px;
  color: #3b3b3b;
  font-weight: normal;
}
i {
  margin-top: 36px;
  float: left;
  margin-left: 10px;
  margin-right: 12px;
  font-size: 20px;
  font-weight: normal;
}
.index-panel-header .line {
  float: left;
  margin-top: 48px;
  width: 200px;
  border-top: 2px solid #da694b;
}
/* -----------card------------- */

.card {
  margin-top: 8%;
  margin-bottom: 5%;
}

p.card-text {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-title {
  text-align: left;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn {
  margin-bottom: 8px;
}

.card-img-top {
  height: 12vw;
  object-fit: cover;
}
.img-div {
  margin-bottom: 15px;
  height: 32vw;
}
.text-body {
  margin-left: 2%;
  margin-right: 2%;
  text-align: justify;
}
.text-more {
  color: #3b3b3b;
  font-size: 18px;
  text-decoration: none;
}
.text-more:hover {
  color: #707070;
}
@media screen and (max-width: 768px) {
  .card-img-top {
    height: 25vw;
  }
  @media screen and (max-width: 540px) {
    .card-img-top {
      height: 40vh;
    }
  }
}
</style>
