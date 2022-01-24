<template>
  <div>
    <vs-input v-model="manager.firstname"></vs-input>
    <vs-input v-model="manager.lastname"></vs-input>
    <vs-input v-model="manager.username"></vs-input>
    <vs-input v-model="customer.password"></vs-input>
<!--    <vs-input v-model="customer.personStatuse"></vs-input>-->
<!--    <date-picker v-model="customer.registrationDate" format="jYYYY-jMM-jDD" display-format="jYYYY-jMM-jDD">-->
<!--    </date-picker>-->
<!--    <vs-input v-model="customer.credit"></vs-input>-->
    <vs-button @click="saveManager">save</vs-button>
  </div>
</template>

<script>
// import VuePersianDatetimePicker from 'vue-persian-datetime-picker';

import CustomerDataService from "@/service/CustomerDataService";
import ManagerDataService from "@/service/ManagerDataService";

export default {
  name: "test",
  components: {
    // datePicker: VuePersianDatetimePicker
  },
  data() {
    return {
      manager:{
        id: null,
        firstname: "",
        lastname: "",
        username: "",
        password: '',
      },
      customer: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        password: '',
        personStatuse: '',
        registrationDate: Date(),
        credit: null,

      },
    }
  }, methods: {
    saveCustomer() {
      console.log("errorpppppppppppppp");
      var data = {
        firstname: this.customer.firstname,
        lastname: this.customer.lastname,
        emailAddress: this.customer.emailAddress,
        password: this.customer.password,
        personStatuse: (this.customer.personStatuse).toString(),
        registrationDate: this.customer.registrationDate,
        credit:parseFloat(this.customer.credit)
      };
      console.log(data.firstname + "dllllllllllllllllllllata")
      CustomerDataService.createCustomer(data).then(response => {
        console.log("wwwwww")
        this.customer.id = response.data.id;
        console.log(response.data);
        this.submitted = true;
      })
          .catch(e => {
            console.log(e);
          });
    }, saveManager() {
      console.log("errorpppppppppppppp");
      var data = {
        firstname: this.manager.firstname,
        lastname: this.manager.lastname,
        username: this.manager.username,
        password: this.customer.password,

      };
      console.log(data.firstname + "dllllllllllllllllllllata")
      ManagerDataService.createManager(data).then(response => {
        console.log("wwwwww")
        this.manager.id = response.data.id;
        console.log(response.data);
        this.submitted = true;
      })
          .catch(e => {
            console.log(e);
          });
    },
  }
}
</script>

<style scoped>

</style>