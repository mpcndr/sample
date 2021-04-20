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
            <router-link to="/" id="text-underline" class="nav-link active"
              >หน้าแรก</router-link
            >
            <router-link
              to="/about_subject"
              id="text-underline"
              class="nav-link"
              >วิชาเลือก</router-link
            >
            <router-link
              to="/Hello"
              id="text-underline"
              class="nav-link"
              >หลักสูตร</router-link
            >
            <!-- <router-link to="/login" id="text-underline" class="nav-link">
              เข้าสู่ระบบ
            </router-link> -->
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
                  <a class="dropdown-item"
                    ><router-link
                      to="/profile"
                      style="text-decoration: none; color: #000"
                      >ข้อมูลส่วนตัว</router-link
                    ></a
                  >

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

            <!-- <button
              type="button"
              class="btn btn-danger"
              data-mdb-toggle="modal"
              data-mdb-target="#login_id"
            >
            <router-link to="/profile" style="text-decoration: none; color: #fff">เข้าสู่ระบบ</router-link>
              
            </button> -->
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
      await Axios.get(this.$store.getters.getApi +
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
            this.$store.dispatch("setLogin", 'true');
            //alert("-----> " + this.$store.getters.getLogin);
            Axios.post(this.$store.getters.getApi + "api/getuser/", {
              token: this.$store.getters.getToken,
            }).then((res1) => {
              this.username = res1.data.name;
            });
          }
        });
      }
    },
    logOut() {
      this.$store.dispatch("setToken", "");
      this.$store.dispatch("setLogin", "");
      this.$store.dispatch("setSession", "");
      //alert(this.$store.getters.getSession)
      this.$router.push({ path: "/" });
      location.reload();
    },
  },
  async created() {
    //
    //alert("--------------------------------------------->" +this.$store.getters.getLogin)
    await this.ValidateToken();
    // alert(this.$store.getters.getSession )
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
};
</script>

<style>
#app {
  font-family: "Kanit";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo-text {
  font-size: 26px;
  font-weight: bold;
  color: #da694b;
}
.navbar {
  padding-left: 0px;
}

#text-underline {
  font-size: 16px;
  color: rgb(133, 133, 133);
  margin: 0 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  display: inline-block;
  position: relative;
  /* font-weight: bold; */
}
#text-underline:after {
  background: none repeat scroll 0 0 transparent;
  bottom: -2;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #da694b;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
#text-underline:hover:after {
  width: 60%;
  left: 18%;
}
@media screen and (max-height: 300px) {
  ul {
    margin-top: 40px;
  }
}

li > a#text-underline:hover {
  color: #da694b;
}
a#text-underline.text-icon {
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
</style>
