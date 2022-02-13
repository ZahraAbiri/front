<template>
  <div>


    <v-container>

      <!--                        :msg="this.$route.name for change navbar name msg=this.$route.name-->


      <v-row>

        <vs-button class="btncadd rt" type="relief" style="margin-left:12%;margin-top:2%;height: 250px;width: 250px;
                                             background-image: linear-gradient(#789adc, #34bcc0)"
                   radius
                   :href="{url:'/num'}"
                   v-for="mainservice in mainservices" :key="mainservice.id"><h1>{{ mainservice.name }}</h1>

        </vs-button>


      </v-row>
    </v-container>


  </div>


</template>

<script>


import MainServiceDataService from "@/service/MainServicerDataService";

export default {
  name: "Home",

  data() {
    return {

      mainservice: {
        id: null,
        name: '',

      },

      mainservices: [],
      Title: 'testhome',
      menus: [
        {faTitle: 'شماره گذاری', enTitle: 'numbering', id: 1},
        {faTitle: 'لیست', enTitle: 'list', id: 2},
        {faTitle: 'لیست1', enTitle: 'list', id: 3},
        {faTitle: 'لیست2', enTitle: 'list', id: 4},
        {faTitle: 'لیست3', enTitle: 'list', id: 5},
        {faTitle: 'تست1', enTitle: 'test', id: 6}, {faTitle: 'asd', enTitle: 'asd', id: 7}
      ],
      colorx: '#1bdfc2',
      activeItem: 0,
    };
  }, methods: {
    getervice() {
      console.log("get menue")
      MainServiceDataService.getMainService().then((response) => {
        console.log("2222")
        this.mainservices = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },
  }, created() {
    this.getervice();
  }


}
</script>

<style scoped>

* {
  box-sizing: border-box;


}

html, body {
  background-color: #f2f2f2;
  margin: 0;

  min-height: 100%;
}


.rt {
  transition: transform .7s ease-in-out;
}

.rt:hover {
  transform: rotate(360deg);
}


footer {
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  overflow: hidden;
  margin-bottom: -20%
}

</style>