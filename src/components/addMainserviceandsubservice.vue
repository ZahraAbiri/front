<template>
  <div>
    <vs-table
        multiple
        v-model="selected"
        pagination
        max-items="3"
        search
        :data="mainservices">
      <template slot="header">
        <h3>
          mainservice
        </h3>
      </template>
      <template slot="thead">
        <vs-th sort-key="name">
          name
        </vs-th>


      </template>

      <template slot-scope="{data:mainservice}">
        <vs-tr :mainservices="tr" :key="mainserviceid" v-for="(tr, mainserviceid) in mainservice">
          <vs-td>
            <h4> {{ mainservice[mainserviceid].name }}</h4>

          </vs-td>
          <vs-td >
            <vs-button @click="popupActive3=true;clicked(mainserviceid+1)" color="purple" type="filled" icon="add"></vs-button>
            <!--          <div class="centerx">-->
            <!--            <vs-button @click="popupActivo=true" color="primary" type="border">Open Default popup</vs-button>-->
            <!--            <vs-popup class="holamundo"  title="Lorem ipsum dolor sit amet" :active.sync="popupActivo">-->
            <!--              <p>-->
            <vs-popup   title="inner popup" :active.sync="popupActive3">
              <p>some thing</p>
              <vs-input type="text"
                        primary
                        color="rgb(59,222,200)"
                        required
                        placeholder="name"
                        v-model="suvservice.name"
                        label-placeholder="Name"
                        :maxlength="12"></vs-input>
              <vs-input type="text"
                        primary
                        color="rgb(59,222,200)"
                        required
                        placeholder="name"
                        v-model="suvservice.description"
                        label-placeholder="description"
                        :maxlength="12">

              </vs-input>
              <vs-input type="text"
                        primary
                        color="rgb(59,222,200)"
                        required
                        placeholder="name"
                        v-model="suvservice.basePrice"
                        label-placeholder="basePrice"
                        :maxlength="12"></vs-input>
              <vs-button @click="saveNewSubservice">add </vs-button>
            </vs-popup>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <pre>{{ selected }}</pre>
  </div>
</template>

<script>
import MainServiceDataService from "@/service/MainServicerDataService";
// import SubServicerDataService from "@/service/SubServicerDataService";

export default {
  name: "addMainserviceandsubservice",
  data() {
    return {
      selected: [],
      popupActive3: false,
      mainservice: {
        id: null,
        name: '',
        subServices: ''
      },
      suvservice: {
        id:null,
        name: '',
        basePrice: null,
        description: '',
        mainService: ''
    // {
    //       id: null,
    //       name: '',
    //     },
      },
      num:'',
      numid:'',
      suvservices: [],
      mainservices: [
        // {id:1,name:'home'},
        // {id:2,name:'test'},
        // {id:3,name:'home2'}
      ],
    }
  }, methods: {
    getAllmainServices() {
      console.log("get menue")
      MainServiceDataService.getMainService().then((response) => {
        console.log("2222")
        this.mainservices = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },saveNewSubservice() {
      this.mainservice.subServices=[{name:this.suvservice.name,
        description:this.suvservice.description,
        basePrice:this.suvservice.basePrice}]
      var data = {
        id:this.mainservice.id,
        name: this.mainservice.name,

        subServices:this.mainservice.subServices
      };
      MainServiceDataService.updateMainService(this.numid,data).then((response) => {
        console.log(JSON.stringify(response) + "--------")
      });
    },

    saveSubService() {
      console.log("lohhhh")
      // this.selected.forEach(i=>this.num=i.id)
      // data (vs-tr)
      console.log(this.num+"selectes")
      // this.mainservice.id=1
      this.suvservice.mainService={
       // id: 2
       id: this.num,
      }
      console.log("111111111111")
      // this.suvservice.mainService.id=1
      var data = {
        name: this.suvservice.name,
        description: this.suvservice.description,
        basePrice: this.suvservice.basePrice,
        mainService:this.suvservice.mainService
      };
      console.log(data + "dllllllllllllllllllllata")
      // SubServicerDataService.createsubservice(data).then(response => {
      //   console.log("wwwwww")
      //   this.suvservice.id = response.data.id;
      //   console.log(response.data);
      //
      // })
      //     .catch(e => {
      //       console.log(e);
      //     });
    },
    clicked(row){
      // this.num=row[0].name
      this.numid=row
      console.log(this.numid)
      // console.log(this.num)
    },
  }, created() {
    this.getAllmainServices();

  },
}
</script>

<style scoped>

</style>