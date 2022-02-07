<template>
<div>

  <div>
    <vs-table
        dir="rtl"
        search
        :data="subservices"
        style="background-color: #c6f7ff"
    >
      <template slot="thead" dir="rtl">

        <vs-th sort-key="subservices.name" style="font-size: medium ;background-color: #c6f7ff" dir="rtl">
          subservice-name
        </vs-th>

        <vs-th sort-key="subservice.basePrice" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
          subservice.basePrice
        </vs-th>
        <vs-th sort-key="expert.credit" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
          add offer
        </vs-th>

      </template>
      <template slot-scope="{data : subservice}" class="td">
        <vs-tr :subservices="tr" :key="subserviceid" v-for="(tr, subserviceid) in subservice">
          <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                 dir="rtl">
            {{ subservice[subserviceid].name }}
          </vs-td>

          <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                 dir="rtl">
            {{ subservice[subserviceid].basePrice }}
          </vs-td>
          <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                 dir="rtl">
            <vs-button @click="popupActive6=true;clickee(subserviceid+1)">
              +
            </vs-button>
            <vs-popup :active.sync="popupActive6">
              <vs-input type="text"
                        primary
                        color="rgb(59,222,200)"
                        required
                        placeholder="streetAddress"
                        v-model="orderDto.streetAddress"
                        label-placeholder="description"
                        :maxlength="12">

              </vs-input> <vs-input type="text"
                        primary
                        color="rgb(59,222,200)"
                        required
                        placeholder="city"
                        v-model="orderDto.city"
                        label-placeholder="description"
                        :maxlength="12"></vs-input> <vs-input type="text"
                        primary
                        color="rgb(59,222,200)"
                        required
                        placeholder="zipCode"
                        v-model="orderDto.zipCode"
                        label-placeholder="description"
                        :maxlength="12"></vs-input> <vs-input type="text"
                        primary
                        color="rgb(59,222,200)"
                        required
                        placeholder="emailAddress"
                        v-model="customer.emailAddress"
                        label-placeholder="description"
                        :maxlength="50"></vs-input>
              <vs-button @click="saveOrder">add</vs-button>
            </vs-popup>
          </vs-td>


        </vs-tr>
      </template>


    </vs-table>

  </div>
</div>
</template>

<script>


import SubServicerDataService from "../service/SubServicerDataService";
import OrderDataService from "../service/OrderDataService";

export default {
  name: "customerAddsubservice",
  data() {
    return {
      orderDto: {


       city:'',
        streetAddress:'',
        houseNumber:'',
        zipCode:'',
        subServiceId: '',
        proposedPrice: '',
        jobDescription: '',
        subserviceRegistrationDate: '',
        customerEmailAddrress: '',



      },
      popupActive6:false,
      offers: {
        expert: '',
        registrationDate: '',
        proposedPrice: '',
        durationOfWork: '',
        startTime: '',
        offerStatus: '',
        subservice: '',
        description: '',
      },
      subservice: {
        id: null,
        name: '',
        basePrice: null,
        description: '',
        mainService: ''
      },
      idexp: '',
      expert: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        password: '',
        personStatuse: '',
        registrationDate: null,
        credit: '',
        photo: Array,
        score: null,
        role: null,
        services: '',
      },
nuum:'',
      customer: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        role: ''
      },
      exid: '',
      orderDtos:[],
      offerss:[],
      subservices:[],
    }
  }, methods: {
    clickee(row) {
      // this.exid = row
      this.nuum=row
      console.log(row + "eid")
    }, exIdget(eid) {
      this.idexp = eid[0].expert.id
      console.log(eid + "eid")
    },
    getsubservicehis() {
      console.log("get menue")
      SubServicerDataService.getSubService().then((response) => {
        console.log("2222")
        this.subservices = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },
    // saveOffer() {
    //   console.log("errorpppppppppppppp");
    //   this.offers.expert = [{id: this.idexp}]
    //   this.offers.subservice = [{id: this.exid}]
    //
    //
    //   var data = {
    //     expert: this.offers.expert,
    //     registrationDate: this.offers.registrationDate,
    //     proposedPrice: this.offers.proposedPrice,
    //     durationOfWork: this.offers.durationOfWork,
    //     startTime: this.offers.startTime,
    //     offerStatus: this.offers.offerStatus,
    //     subservice: this.offers.subservice,
    //     description: this.offers.description,
    //
    //   };
    //   console.log(data.firstname + "dllllllllllllllllllllata")
    //   OfferDataService.createOffer(data).then(response => {
    //     console.log("wwwwww")
    //     this.offerss.id = response.data.id;
    //     console.log(response.data);
    //
    //   })
    //       .catch(e => {
    //         console.log(e);
    //       });
    // },
    saveOrder() {
      console.log("errorpppppppppppppp");

         this.orderDto.subServiceId=this.nuum
        this.orderDto.customerEmailAddrress=this.customer.emailAddress


      var data = {
        streetAddress:this.orderDto.streetAddress,
        houseNumber:this.orderDto.houseNumber,
        zipCode:this.orderDto.zipCode,
        subServiceId: this.orderDto.subServiceId,
        proposedPrice:this.orderDto.proposedPrice,
        jobDescription:this.orderDto.jobDescription,
        subserviceRegistrationDate:this.orderDto.subserviceRegistrationDate,
        customerEmailAddrress:this.orderDto.customerEmailAddrress,


      };
      // console.log(data.firstname + "dllllllllllllllllllllata")
      OrderDataService.createOrder(data).then(response => {
        console.log("wwwwww")
        this.orderDtos.id = response.data.id;
        console.log(response.data);

      })
          .catch(e => {
            console.log(e);
          });
    },
  }, created() {
    this.getsubservicehis();
  }
}
</script>

<style scoped>

</style>