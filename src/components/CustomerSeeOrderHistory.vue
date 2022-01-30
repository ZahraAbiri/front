<template>
  <div>

    <div >
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
          <vs-th sort-key="expert.firstname" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
            expert.firstname
          </vs-th>
          <vs-th sort-key="subService.name" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
            subService.name
          </vs-th> <vs-th sort-key="customer.credit" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
          customer.credit
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
              {{ order[orderid].expert.firstname}}
            </vs-td>
            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                   dir="rtl">
              {{ order[orderid].subService.name }}
            </vs-td>
            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                   dir="rtl">
              {{ order[orderid].customer.credit }}
            </vs-td>


          </vs-tr>
        </template>


      </vs-table>

    </div>


  </div>
</template>

<script>
import OrderDataService from "@/service/OrderDataService";

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
        customer:'',
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
        credit:''
      },
      subService: {
        id:null,
        name: '',
        basePrice: null,
        description: '',
        mainService: ''
      },
      orders:[],
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

    }
  },methods:{
    getorderhis() {
      console.log("get menue")
      OrderDataService.getAllOrders().then((response) => {
        console.log("2222")
        this.orders = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },
  },created() {
    this.getorderhis();
  }
}
</script>

<style scoped>

</style>