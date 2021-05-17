<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" id="logo-text">regGuide</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          aria-controls="#navbarResponsive"
        >
          <a id="icon-menu" href="javascript:void(0)" aria-hidden="true"
            ><i class="fa fa-bars" aria-hidden="true"></i
          ></a>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul id="ul-underline" class="navbar-nav ml-auto">
            <router-link
              to="/"
              id="text-underline"
              class="nav-link"
              active-class
              >หน้าแรก</router-link
            >
            <router-link
              to="/newsAll"
              id="text-underline"
              class="nav-link"
              active-class
              >ข่าวสาร</router-link
            >

            <router-link
              v-if="this.$store.getters.getLogin === 'true'"
              to="/about_subject"
              id="text-underline"
              class="nav-link"
              active-class
              >วิชาเลือก</router-link
            >
            <div v-if="this.$store.getters.getDepartment === 'วิทยาการข้อมูล'">
              <router-link
                v-if="this.$store.getters.getLogin === 'true'"
                to="/studyplan"
                id="text-underline"
                class="nav-link"
                active-class
                >วางแผนหลักสูตร</router-link
              >
            </div>
            <div v-else>
              <router-link
                v-if="this.$store.getters.getLogin === 'true'"
                to="/subject_selected"
                id="text-underline"
                class="nav-link"
                active-class
                >วางแผนหลักสูตร</router-link
              >
            </div>

            <div v-if="this.$store.getters.getLogin === 'true'">
              <div class="dropdown show">
                <a
                  class="btn btn-danger dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ this.username }}
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div>
                    <router-link
                      to="/profile"
                      id="text-underline"
                      class="nav-link"
                      active-class
                      >ข้อมูลส่วนตัว</router-link
                    >
                  </div>

                  <div
                    @click="logOut()"
                    id="text-underline"
                    class="nav-link"
                    style="cursor: pointer;"
                  >
                    ออกจากระบบ
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div
                @click="Login()"
                id="text-underline"
                class="nav-link"
                style="cursor: pointer;"
              >
                เข้าสู่ระบบ
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "app",
  data() {
    return {
      session_key: "",
      username: "",
    };
  },
  methods: {
    sessionRandom() {
      this.session_key = Date.parse(new Date()) + this.makeid(8);
      console.log(this.session_key);
      return this.session_key;
    },
    makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    redirect(link) {
      window.open(link + this.sessionRandom());
    },
    async Login() {
      this.session_key = this.sessionRandom();
      this.$store.dispatch("setSession", this.session_key);
      await Axios.get(
        this.$store.getters.getApi +
          "api/ssoapi/?url=https://127.0.0.1:8080/&session=" +
          this.session_key
      ).then((r) => {
        console.log(r + "dddd");
        window.location = r.data.url;
      });
    },
    ValidateToken() {
      if (this.$store.getters.getToken != "") {
        //console.log(this.$store.getters.getToken);
        //alert("1")
        Axios.post(this.$store.getters.getApi + "api/validatetoken/", {
          token: this.$store.getters.getToken,
        }).then((res) => {
          if (res.data.state == "200") {
            this.$store.dispatch("setLogin", "true");
            //alert("-----> " + this.$store.getters.getLogin);
            Axios.post(this.$store.getters.getApi + "api/getuser/", {
              token: this.$store.getters.getToken,
            }).then((res1) => {
              this.username = res1.data.name;
              this.$store.dispatch("setDepartment", res1.data.choose)
              console.log(this.$store.getters.getDepartment);
            });
          }
        });
      }
    },
    logOut() {
      this.$store.dispatch("setToken", "");
      this.$store.dispatch("setLogin", "");
      this.$store.dispatch("setSession", "");
      this.$router.push({ path: "/" });
      location.reload();
    },
  },
  async created() {
    await this.ValidateToken();
    if (this.$store.getters.getSession != "") {
      //   alert("2")
      console.log("-->" + this.$store.getters.getSession);
      Axios.post(this.$store.getters.getApi + "api/sessiontotoken/", {
        session: this.$store.getters.getSession,
      }).then((res) => {
        // alert("3")
        this.$store.dispatch("setToken", res.data.token);
        console.log("********************" + res.data.token);
        this.ValidateToken();
      });
    }
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: "Kanit";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#logo-text {
  font-size: 26px;
  font-weight: bold;
  color: #da694b;
}
.navbar {
  padding-left: 0px;
}

.nav-link {
  font-size: 16px;
  color: rgb(133, 133, 133);
  margin: 0 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  display: inline-block;
  position: relative;
}
@media screen and (max-height: 300px) {
  ul {
    margin-top: 40px;
  }
}

a.nav-link.text-icon {
  font-size: 20px;
}

#ul-underline {
  margin: 0px 0px 0;
  padding: 0;
  list-style: none;
  display: flex;
  text-align: center;
}
li.nav-item {
  display: table-cell;
  position: relative;
}

a#icon-menu {
  text-decoration: none;
  display: inline-block;
  color: #da694b;
}

a#icon-menu:hover {
  text-decoration: underline;
  color: #e28d76;
}

.back-to-top {
  width: 70px;
  height: 47px;
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: none;
}
.router-link-exact-active:hover,
.router-link-active:hover,
.nav-link:hover {
  color: #d42e00;
}
.router-link-exact-active {
  color: #da694b;
}
.router-link-active {
  color: #da694b;
}

/* ---------------footer ----------------- */
</style>
