<template>
  <div>

    <div>
      <vs-table
          dir="rtl"
          pagination
          max-items="3"
          search
          :data="orders"
          style="background-color: #c6f7ff"
      >
        <template slot="thead" dir="rtl">

          <vs-th sort-key="orderStatus" style="font-size: medium ;background-color: #c6f7ff" dir="rtl">
            orderStatus
          </vs-th>

          <vs-th sort-key="jobDescription" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
            jobDescription
          </vs-th>
          <vs-th sort-key="expert.credit" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
            add offer
          </vs-th>

        </template>
        <template slot-scope="{data : order}" class="td">
          <vs-tr :orders="tr" :key="orderid" v-for="(tr, orderid) in order">
            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                   dir="rtl">
              {{ order[orderid].orderStatus }}
            </vs-td>

            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                   dir="rtl">
              {{ order[orderid].jobDescription }}
            </vs-td>
            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                   dir="rtl">
              <vs-button @click="popupActive6=true;clickee(orderid+1);exIdget(order)">
                +
              </vs-button>
              <vs-popup :active.sync="popupActive6">
                <vs-input type="text"
                          primary
                          color="rgb(59,222,200)"
                          required
                          placeholder="proposedPrice"
                          v-model="offerDto.proposedPrice"
                          label-placeholder="proposedPrice"
                          :maxlength="12"></vs-input>
                <vs-input type="text"
                          primary
                          color="rgb(59,222,200)"
                          required
                          placeholder="durationOfWork"
                          v-model="offerDto.durationOfWork"
                          label-placeholder="durationOfWork"
                          :maxlength="12"></vs-input> <vs-input type="text"
                          primary
                          color="rgb(59,222,200)"
                          required
                          placeholder="durationOfWork"
                          v-model="offerDto.description"
                          label-placeholder="description"
                          :maxlength="12"></vs-input>
                <vs-button @click="saveOffer">add</vs-button>
              </vs-popup>
            </vs-td>


          </vs-tr>
        </template>


      </vs-table>

    </div>


  </div>
</template>

<script>
import OrderDataService from "@/service/OrderDataService";
import OfferDataService from "@/service/OfferDataService";

export default {
  name: "orderSeeOrderHistory",
  data() {
    return {
      order: {
        subService: '',
        proposedPrice: '',
        jobDescription: '',
        orderRegistrationDate: '',
        dateOfWorkPerformed: '',
        address: '',
        customer: '',
        orderStatus: '',
        offers: '',

      },
      popupActive6: false,
      offers: {
        expert: '',
        registrationDate: '',
        proposedPrice: '',
        durationOfWork: '',
        startTime: '',
        offerStatus: '',
        order: '',
        description: '',
      },
      subService: {
        id: null,
        name: '',
        basePrice: null,
        description: '',
        mainService: ''
      },
      offerDto: {
        expertEmailAddress: '',
        orderId: '',
        registrationDate: '',
        proposedPrice: '',
        durationOfWork: '',
        startTime: '',
        description: '',
      },
      idexp: '',
      expert:
    {
      id: null,
          firstname: "",
          lastname: "",
          emailAddress: "",
          password:'',
          personStatuse:'',
          registrationDate: null,
          credit:'',
          photo: Array,
          score:null,
          role:null,
          services:'',
    }
  ,
      offerDtos:[],
orders:[],
    customer: {
      id: null,
          firstname:"",
          lastname:"",
          emailAddress:"",
          role:''
    },
    exid:'',
        offerss:[],
  }
  }, methods: {
    clickee(row) {
      this.exid = row
    }, exIdget(eid) {
      this.idexp = eid[0].expert.emailAddress
      console.log(eid[0].expert.emailAddress + "eid")
    },
    getorderhis() {
      console.log("get menue")
      OrderDataService.getAllOrders().then((response) => {
        console.log("2222")
        this.orders = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    }, saveOffer() {
      console.log("errorpppppppppppppp");

      this.offerDto.orderId=this.exid
      this.offerDto.expertEmailAddress=this.idexp

      var data = {
        expertEmailAddress:this.offerDto.expertEmailAddress,
        orderId: this.offerDto.orderId,
        registrationDate:this.offerDto.registrationDate,
        proposedPrice:this.offerDto.proposedPrice,
        durationOfWork:this.offerDto.durationOfWork,
        startTime:this.offerDto.startTime,
        description:this.offerDto.description,

      };
      console.log(data.firstname + "dllllllllllllllllllllata")
      OfferDataService.createOffer(data).then(response => {
        console.log("wwwwww")
        this.offerDtos = response.data;
        console.log(response.data);

      })
          .catch(e => {
            console.log(e);
          });
    },
  }, created() {
    this.getorderhis();
  }
}
</script>

<style scoped>

</style>