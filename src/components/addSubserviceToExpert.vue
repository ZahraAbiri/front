<template>
  <div>
    <vs-table
        search
        dir="rtl"
        :data="subServices"
        style="background-color: #c6f7ff"
    >
      <template slot="thead" style="">
        <vs-th sort-key="name" style="font-size: x-large;background-color: #c6f7ff " dir="rtl">
          name
        </vs-th>
        <vs-th sort-key="basePrice" style="font-size: x-large ;background-color: #c6f7ff" dir="rtl">
          basePrice
        </vs-th>
        <vs-th sort-key="description" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
          description
        </vs-th>


      </template>
      <template slot-scope="{data : subservice}" class="td">
        <vs-tr :subService="tr" :key="subserviceid" v-for="(tr, subserviceid) in subservice">
          <vs-td style="background-image: linear-gradient(#90dec3, #1db6de);;font-size: large"
                 dir="rtl">

            {{ subservice[subserviceid].name }}
          </vs-td>

          <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                 dir="rtl">
            {{ subservice[subserviceid].basePrice }}
          </vs-td>
          <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                 dir="rtl">
            {{ subservice[subserviceid].description }}
          </vs-td>


        </vs-tr>


      </template>


    </vs-table>
    <input type="text" v-model="expert.firstname" placeholder="Enter your name" required>
<vs-button @click="saveexpert"></vs-button>
  </div>
</template>

<script>

import SubServiceDataService from "@/service/SubServicerDataService";
import ExpertDataService from "@/service/ExpertDataService";

export default {
  name: "addSubserviceTosubservice",
  data() {
    return {
      subServices:[],
      subservice: {
        id:null,
        name: '',
        basePrice:'',
        description:'',
        experts: [],
        expert: {
          id: null,
          firstname: "",
          lastname: "",
          emailAddress: "",
          password: '',
          personStatuse: '',
          registrationDate:null,
          credit: '',
          photo:Array,
          score:null,
          role:null,
          services:'',

        },
      },
    }
  }, methods: {
    saveexpert() {
      this.expert.services=[{id:this.subService[0].id,name:this.subService[0].name,
        basePrice: this.subService[0].basePrice,description: this.subService[0].description}]
      console.log("errorpppppppppppppp");
      var data = {
        firstname: this.expert.firstname,
        lastname: this.expert.lastname,
        emailAddress: this.expert.emailAddress,
        password: this.expert.password,
        personStatuse: this.expert.personStatuse,
        registrationDate: this.expert.registrationDate,
        credit: this.expert.credit,
        photo:this.expert.photo,
        role:this.expert.role,
        score: this.expert.score,
        services: this.expert.services

      };
      console.log(data.firstname + "dllllllllllllllllllllata")
      ExpertDataService.createExpert(data).then(response => {
        console.log("wwwwww")
        this.expert.id = response.data.id;
        console.log(response.data);

      })
          .catch(e => {
            console.log(e);
          });
    },
    getAllsubservice() {
      SubServiceDataService.getSubService.then((response) => {
        this.subService = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },
  }, created() {
    this.getAllsubservice();

  }
}
</script>

<style scoped>

</style>