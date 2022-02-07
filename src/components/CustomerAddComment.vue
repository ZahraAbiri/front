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

          <vs-th sort-key="orderproposedPrice" style="font-size: medium ;background-color: #c6f7ff" dir="rtl">
            orderproposedPrice
          </vs-th>

          <vs-th sort-key="description" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
            description
          </vs-th>
          <vs-th sort-key="expert.credit" style="font-size: medium ; background-color: #c6f7ff" dir="rtl">
            add comment
          </vs-th>

        </template>
        <template slot-scope="{data : order}" class="td">
          <vs-tr :orders="tr" :key="orderid" v-for="(tr, orderid) in order">
            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                   dir="rtl">
              {{ order[orderid].proposedPrice }}
            </vs-td>

            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                   dir="rtl">
              {{ order[orderid].jobDescription}}
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
                          placeholder="score"
                          v-model="commentDto.score"
                          label-placeholder="description"
                          :maxlength="12"></vs-input>
                <vs-input type="text"
                          primary
                          color="rgb(59,222,200)"
                          required
                          placeholder="durationOfWork"
                          v-model="commentDto.desciption"
                          label-placeholder="description"
                          :maxlength="12"></vs-input>
                <vs-button @click="saveComment">add</vs-button>
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
import CommentDataService from "@/service/CommentDataService";

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
      commentDto: {
        Orderid: '',
        Expertid:'',
        customerid:'',
        score:'',
        desciption:'',
      },
      idexp: '',
      idcus:'',

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
      commentDtos:[],
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
      console.log(this.exid+"exid")
    }, exIdget(eid) {
      this.idexp = eid[0].expert.id
      this.idcus = eid[0].customer.id
      console.log(eid[0].expert.id + "expert")
      console.log(eid[0].customer.id + "eid[0].customer.id")
    },
    getorderhis() {
      console.log("get menue")
      OrderDataService.getAllOrders().then((response) => {
        console.log("2222")
        this.orders = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    }, saveComment() {
      console.log("errorpppppppppppppp");
      this.commentDto.Expertid =this.idexp
      this.commentDto.customerid =this.idcus
      this.commentDto.Orderid=this.exid
      var data = {
        Orderid:this.commentDto.Orderid,
        Expertid:this.commentDto.Expertid,
        customerid:this.commentDto.customerid,
        score:this.commentDto.score,
        desciption:this.commentDto.desciption,


      };
      CommentDataService.createComment(data).then(response => {
        console.log("wwwwww")
        this.commentDtos = response.data;
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