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
          <vs-th sort-key="proposedPrice" style="font-size: medium;background-color: #c6f7ff " dir="rtl">
            proposedPrice
          </vs-th>
          <vs-th sort-key="orderStatus" style="font-size: medium ;background-color: #c6f7ff" dir="rtl">
            orderStatus
          </vs-th>
          <vs-th sort-key="subService.name" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
            subService.name
          </vs-th>
          <vs-th sort-key="customer.credit" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
            jobDescription
          </vs-th>

        </template>
        <template slot-scope="{data : order}" class="td">
          <vs-tr :orders="tr" :key="orderid" v-for="(tr, orderid) in order">
            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                   dir="rtl">

              {{ order[orderid].proposedPrice }}
            </vs-td>

            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                   dir="rtl">
              {{ order[orderid].orderStatus }}
            </vs-td>
            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                   dir="rtl">
              {{ order[orderid].subService.name }}
            </vs-td>
            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                   dir="rtl">
              {{ order[orderid].jobDescription }}
            </vs-td>
            <vs-td>
              <vs-button @click="payCredit((order[orderid].customer.id),(orderid+1),(order[orderid].proposedPrice),(order[orderid].customer.credit),
              (order[orderid].expert.id))">pay credit
              </vs-button>
            </vs-td>
            <vs-td>
              <vs-button @click="payCard((order[orderid].customer.id),(orderid+1),(order[orderid].proposedPrice),(order[orderid].customer.credit),
              (order[orderid].expert.id),popup=true)">pay card
              </vs-button>
              <vs-popup :active.sync="popup">
                cardNumber<vs-input maxlength="16" v-model="paymentDto.cardNumber"></vs-input>
                dataeExpire<vs-input maxlength="16" v-model="dateCard"></vs-input>
                cvv<vs-input maxlength="16" v-model="cvv"></vs-input>
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
import PaymentServiceData from "../service/PaymentDataService";

export default {
  name: "paypage",
  data() {
    return {
      popup:false,
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
        expert: '',
      },
      customer: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        role: '',
        credit: ''
      },
      subService: {
        id: null,
        name: '',
        basePrice: null,
        description: '',
        mainService: ''
      },

      dateCard:'',
      cvv:'',
      orders: [],
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
      }, paymentDto: {
        customerId: null,
        orderId: null,
        expertId: null,
        payment: null,
        cardNumber:''
      }, paymentDtos: [],

    }
  }, methods: {
    getorderhis() {
      console.log("get menue")
      OrderDataService.getAllOrders().then((response) => {
        console.log("2222")
        this.orders = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },
    payCard(ci, oi, p, cc, ei) {
      this.paymentDto.customerId=ci
      console.log(ci)
          this.paymentDto.orderId=oi
      console.log(oi)
          this.paymentDto.expertId=ei
      console.log(ei)
          this.paymentDto.payment=p
      console.log(p)

      var data = {
        customerId: this.paymentDto.customerId,
        orderId: this.paymentDto.orderId,
        expertId: this.paymentDto.expertId,
        payment: this.paymentDto.payment,
        cardNumber:this.paymentDto.cardNumber
      }
      console.log(data.customerId)

      PaymentServiceData.payc(data).then(response => {
        console.log("wwwwww")
        this.paymentDto = response.data;
        console.log(response.data);
        this.submitted = true;

      })
          .catch(e => {
            console.log(e);
          });


    },
    payCredit(ci, oi, p, cc, ei) {
      this.paymentDto.customerId=ci
      console.log(this.paymentDto.customerId);
      this.paymentDto.orderId=oi
      console.log(this.paymentDto.orderId);
      this.paymentDto.expertId=ei
      console.log(this.paymentDto.expertId);

      this.paymentDto.payment=p
      console.log(this.paymentDto.payment);

      if(cc<p){
        alert("your balance not enough")
      }
      var datas = {
        customerId: this.paymentDto.customerId,
        orderId: this.paymentDto.orderId,
        expertId: this.paymentDto.expertId,
        payment: this.paymentDto.payment,
      }
      PaymentServiceData.paycr(datas).then(response => {
        console.log("wwwwww")
        this.paymentDto = response.data;
        console.log(response.data);
        this.submitted = true;

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