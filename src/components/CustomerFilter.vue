<template>
  <div>
    <div dir="rtl">
      <div style="width: 50%;float:left">
        <vs-input type="text"
                  style=" margin-top:10%; margin-right: 10%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  placeholder="name"
                  multiple
                  :data="customers"
                  v-model="filterName"
                  label-placeholder="filterName"
                  :maxlength="12"></vs-input>
        <vs-input type="text" style=" margin-right: 10%; width: 40%"
                  primary
                  placeholder="family"
                  color="rgb(59,222,200)"
                  required
                  multiple
                  search
                  :data="customers"
                  v-model="filterFamily"
                  label-placeholder="filterFamily"
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
                  placeholder="role"
                  label-placeholder="role"
                  :maxlength="12">
        </vs-input>
        <vs-input type="text"
                  style="margin-right: 50%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  multiple
                  search
                  :data="customers"
                  v-model="filterEmail"
                  label-placeholder="Email"
                  :maxlength="12"></vs-input>

      </div>
      <div style="text-align: center">
        <vs-button v-if="filterName||filterEmail||filterFamily||filterRole " @click="search()"
                   style="margin-right: 1%"> search
        </vs-button>

        <vs-button
            v-if="filterName===customer.firstname && filterFamily===customer.lastname && filterEmail===customer.emailAddress && filterRole===customer.role"
            @click="showAll();poping()" style="margin-right: 1%"> searchall
        </vs-button>

      </div>

      <div style="width: 80%;margin-right: 10%">
        <vs-table v-if="num===1"
                  dir="rtl"
                  pagination
                  max-items="3"
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
              emailAddress
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
                  pagination
                  max-items="3"
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
              emailAddress
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

  name: "FormInput",
  components: {},
  data() {
    return {
      Array: [],
      selected: [],
      customersa: [],
      customers: [
        // {id: 1, firstname: 'sara', lastname: 'mohamadi', emailAddress: 'sara@g.com'},
        //   {id: 2, firstname: 'tara', lastname: 'ahmadi', emailAddress: 'tara@g.com'},
        //   {id: 3, firstname: 'sara', lastname: 'asad', emailAddress: 'sara@g.com'},
        //   {id: 4, firstname: 'yasi', lastname: 'moradi', emailAddress: 'yasi@g.com'}
      ],
      customer: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        role: ''
      },
      num: 0,
      a: 3,
      filterName: '',
      filterFamily: '',
      filterEmail: '',
      filterRole: '',
    }
  }, methods: {
    getAllcustomer() {
      CustomerDataService.getAllCustomer().then((response) => {
        this.customers = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },
    adding() {
      this.Array.add('sa');
      console.log(Array.length);
    },

    customersFilter() {
      return this.customers.filter(i => i.firstname === this.filterName);


    }, customersFilterFullName() {
      return this.customers.filter(i => i.firstname === this.filterName && i.lastname === this.filterFamily);


    }
    , customersFamily() {
      return this.customers.filter(i => i.lastname === this.filterFamily)
    }, customersRole() {
      return this.customers.filter(i => i.role === this.filterRole)
    }, customersEmail() {

      return this.customers.filter(i => i.emailAddress === this.filterEmail)

    }, showAll() {
      this.num = 2;
      this.poping();
      this.customersa.push(this.customers.forEach());


    },
    search() {
      this.poping();
      // this.showAll();

      if (this.filterName && this.filterFamily) {
        var r = this.customersFilterFullName();
        r.forEach(r => this.customersa.push(r));
      } else if (this.filterName) {
        var x = this.customersFilter();
        x.forEach(x => this.customersa.push(x));
      } else if (this.filterFamily) {
        var y = this.customersFamily();
        y.forEach(y => this.customersa.push(y));

      } else if (this.filterEmail) {
        // this.poping();
        if (this.customersFilter() !== this.customer.firstname)
          var z = this.customersEmail();
        z.forEach(z => this.customersa.push(z));
      } else if (this.filterRole) {
        // this.poping();
        if (this.customersFilter() !== this.customer.firstname)
          var w = this.customersRole();
        w.forEach(w => this.customersa.push(w));
      }
      this.num = 1;
      return this.customersa = [...new Set(this.customersa)];


    }, poping() {
      this.customersa = [];

    }
  }
  , created() {
    this.getAllcustomer();

  },
  computed: {},


}


</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #7c7bcc !important;

}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 480px;
  margin-left: 10%;
  margin-right: 10%;

}

.testdiv {
  width: 40px;
  height: 25px;
}

* {
  box-sizing: border-box;
}

input:required:invalid {
  border-color: red;
}
</style>