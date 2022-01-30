<template>
  <div>
    <div class="menu-container">

      <div class="hex-wrapper">
        <div class="hex-row shift">


          <div class="hexagon"  :mainservices="tr" :key="mainserviceid" v-for="(tr, mainserviceid) in mainservice" id="nav-home">
            {{ mainservice[mainserviceid].name }}
            <div class="face1"></div>
            <div class="face2"></div>
          </div>
        </div>
        <div class="hex-row">
          <div class="hexagon" v-for="mainservice in filter2" :key="mainservice.id" id="nav-about">
            {{ mainservice.name }}
            <div class="face1"></div>
            <div class="face2"></div>
          </div>
          <!--          <div class="hexagon" v-for="menu in filter2" :key="menu.id" id="nav-work">-->
          <!--            {{ menu.faTitle }}-->
          <!--            <div class="face1"></div>-->
          <!--            <div class="face2"></div>-->
          <!--          </div>-->
        </div>
        <div class="hex-row shift">
          <div class="hexagon" id="nav-contact">
            <!--          <vs-button class="btncadd rt" type="relief" style="margin-left:12%;margin-top:2%;height: 250px;width: 250px;-->
            <!--                                             background-image: linear-gradient(#789adc, #34bcc0)"-->
            <!--                     radius-->
            <!--                     :href="{url:'/num'}"-->
            <!--                     v-for="menu in menus" :key="menu.id"><h1>{{menu.faTitle}}</h1>-->
            <!--&lt;!&ndash;            <img src="../assets/carlogin.jpg" alt="a" style="height: 20px;width: 20px">&ndash;&gt;-->
            <!--          </vs-button>-->
            <div class="face1"></div>
            <div class="face2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainServiceDataService from "@/service/MainServicerDataService";

export default {
  name: "MainService",
  data() {
    return {

      mainservice: {
        id: null,
        name: '',

      },

      mainservices: [
      ],
    }
  }, methods: {
    getmService() {
      console.log("get menue")
      MainServiceDataService.getMainService().then((response) => {
        console.log("2222")
        this.mainservices = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },

  },
  computed: {
    filter1() {
      this.mainservices.slice(1, 4).forEach(i=>console.log(i.name))
      return this.mainservices.slice(1, 4).forEach(i=>i.name);
    },
    filter2() {
      this.mainservices.slice(4, 8).forEach(i=>console.log(i.name))
      return this.mainservices.slice(4, 8);
    }
  }, created() {

    this.getmService();


  }
}
</script>

<style scoped>
body {
  margin: 0;
  background-color: #e18a8a;
}

.menu-container {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.hex-wrapper {
  display: inline-block;
}

.hex-row {
  clear: left;
}

.shift {
  margin-left: 98px;
}

.hexagon {
  float: left;
  position: relative;
  margin: 30px 3px;
  width: 190px;
  height: 110px;
  background-color: #de7a7a;
  background-position: center center;
  z-index: 1;
  /* Text styling */
  line-height: 110px;
  text-align: center;
  font-family: sans-serif;
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 6px;
  color: #170101;
  color: rgba(227, 10, 10, 0.5);
  cursor: pointer;
  transition: color 500ms ease, text-shadow 500ms ease, background-color 500ms ease, -webkit-transform 1s ease-in-out;
}

.hexagon:hover {
  color: #fff;
  text-shadow: 0 0 10px white;
  background-color: #ce3434;
}

.hexagon .face1,
.hexagon .face2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: inherit;
  z-index: -1;
  /* Keeps borders smooth in webkit */
  backface-visibility: hidden;
}

.hexagon .face1:before,
.hexagon .face2:before {
  content: '';
  position: absolute;
  width: 220px;
  height: 220px;
  background: inherit;
}

.hexagon .face1 {
  transform: rotate(60deg);
}

.hexagon .face1:before {
  left: 0;
  transform-origin: left top;
  transform: rotate(-60deg) translate(-110px, 0);
}

.hexagon .face2 {
  transform: rotate(-60deg);
}

.hexagon .face2:before {
  right: 0;
  transform-origin: right top;
  transform: rotate(60deg) translate(110px, 0);
}
</style>