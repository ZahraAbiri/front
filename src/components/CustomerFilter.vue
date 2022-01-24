<template>
  <div>
    <div dir="rtl">
      <div style="width: 50%;float:left">
        <vs-input type="text"
                  style=" margin-top:10%; margin-right: 10%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  multiple
                  :data="customers"
                  v-model="filterName"
                  placeholder="filterName"
                  :maxlength="12"></vs-input>
        <vs-input type="text" style=" margin-right: 10%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  multiple
                  search
                  :data="customers"
                  v-model="filterFamily"
                  placeholder="filterFamily"
                  :maxlength="12"></vs-input>
      </div>
      <div style="width:50%;float:left">
        <vs-input type="text"
                  style="margin-top:10%;margin-right: 50%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  multiple
                  search
                  :data="customers"
                  v-model="filterRole"
                  placeholder="filterRole"
                  label-placeholder="E"
                  :maxlength="12">
        </vs-input>
        <vs-input
            type="text" style="margin-right: 50%; width: 40%"
            primary
            color="rgb(59,222,200)"
            required
            multiple
            search
            :data="customers"
            v-model="filterEmail"
            placeholder="email"
            label-placeholder="filterEmail"
            :maxlength="12">

        </vs-input>
      </div>
      <vs-button  @click="showAll();poping()" >show</vs-button>

          <vs-button v-if="filterName||filterEmail||filterFamily||filterRole " @click="search()"
                     style="margin-right: 1%"> search
          </vs-button>

          <vs-button
              v-if="filterName===customer.firstname && filterFamily===customer.lastname && filterEmail===customer.email
                 || filterRole===customer.role"
              @click="showAll();poping()" style="margin-right: 1%"> searchall
          </vs-button>

<!--        </div>-->
<!--      </div>-->

      <div style="width: 80%;margin-right: 10%">
        <vs-table v-if="num===1"
                  dir="rtl"
                  search
                  :data="customersa"
                  style="background-color: #c6f7ff"
        >
          <template slot="thead" dir="rtl">
            <vs-th sort-key="firstname" style="font-size: x-large;background-color: #c6f7ff " dir="rtl">
              name
            </vs-th>
            <vs-th sort-key="lastname" style="font-size: x-large ;background-color: #c6f7ff" dir="rtl">
              family
            </vs-th>
            <vs-th sort-key="emailAddress" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
              email
            </vs-th>
            <vs-th sort-key="role" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
              role
            </vs-th>
          </template>
          <template slot-scope="{data : customer}" class="td">
            <vs-tr :customers="tr" :key="customerid" v-for="(tr, customerid) in customer">
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">

                {{ customer[customerid].firstname }}
              </vs-td>

              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">
                {{ customer[customerid].lastname }}
              </vs-td>
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                     dir="rtl">
                {{ customer[customerid].emailAddress }}
              </vs-td>
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                     dir="rtl">
                {{ customer[customerid].role }}
              </vs-td>


            </vs-tr>
          </template>


        </vs-table>

      </div>
      <div style="width: 80%;margin-right: 10%">
        <vs-table v-if="num===2"
                  search
                  dir="rtl"
                  :data="customers"
                  style="background-color: #c6f7ff"
        >
          <template slot="thead" style="">
            <vs-th sort-key="firstname" style="font-size: x-large;background-color: #c6f7ff " dir="rtl">
              name
            </vs-th>
            <vs-th sort-key="lastname" style="font-size: x-large ;background-color: #c6f7ff" dir="rtl">
              family
            </vs-th>
            <vs-th sort-key="emailAddress" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
              email
            </vs-th>
            <vs-th sort-key="role" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
              role
            </vs-th>

          </template>
          <template slot-scope="{data : customer}" class="td">
            <vs-tr :customers="tr" :key="customerid" v-for="(tr, customerid) in customer">
              <vs-td style="background-image: linear-gradient(#90dec3, #1db6de);;font-size: large"
                     dir="rtl">

                {{ customer[customerid].firstname }}
              </vs-td>

              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">
                {{ customer[customerid].lastname }}
              </vs-td>
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">
                {{ customer[customerid].emailAddress }}
              </vs-td>
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">
                {{ customer[customerid].role }}
              </vs-td>


            </vs-tr>


          </template>


        </vs-table>

      </div>

    </div>


  </div>

</template>

<script>
import CustomerDataService from "@/service/CustomerDataService";

export default {
  name: "CustomerFilter",
  data() {
    return {
      num: 0,
      selected: [],
      customersa: [],
      filterName: '',
      filterFamily: '',
      filterEmail: '',
      filterRole: '',
      customers: [],
      customer: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        password: '',
        personStatuse: '',
        registrationDate: Date(),
        credit: '',
      },
    }
  },
  methods: {
    getAllcustomer() {
      CustomerDataService.getAllCustomer().then((response) => {
        this.customers = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    }, customerFilter() {
      console.log(this.customers.filter(i => i.firstname === this.filterName)+"lllllll")
      return this.customers.filter(i => i.firstname === this.filterName);


    }, customerFilterFullName() {
      return this.customers.filter(i => i.firstname === this.filterName && i.lastname === this.filterFamily);


    }
    , customerFamily() {
      return this.customers.filter(i => i.lastname === this.filterFamily)
    }, customerEmail() {

      return this.customers.filter(i => i.emailAddress === this.filterEmail)

    }, customerRole() {

      return this.customers.filter(i => i.role === this.filterRole)

    }, showAll() {
      this.num = 2;
      this.poping();
      this.customera.push(this.customers.forEach());


    },
    search() {
      this.poping();


      if (this.filterName && this.filterFamily) {
        var r = this.customerFilterFullName();
        r.forEach(r => this.customera.push(r));
      } else if (this.filterName) {
        var x = this.customerFilter();
        x.forEach(x => this.customera.push(x));
      } else if (this.filterFamily) {
        var y = this.customerFamily();
        y.forEach(y => this.customera.push(y));

      } else if (this.filterEmail) {
        if (this.customerFilter() !== this.customer.firstname)
          var z = this.customerEmail();
        z.forEach(z => this.customera.push(z));
      }
      // else if (this.filterRole) {
      //   if (this.customerFilter() !== this.customer.firstname)
      //     var d = this.customerRole();
      //   d.forEach(d => this.customera.push(d));
      // }
      this.num = 1;
      return this.customera = [...new Set(this.customera)];
    }, poping() {
      this.customera = [];
    }
  }, created() {
    this.getAllcustomer();

  }
}
</script>

<style scoped>

</style>