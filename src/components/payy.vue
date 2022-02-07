<template>
<div>
  <vue-paycard :value-fields="valueFields"  @change="testt">

  </vue-paycard>
  <vs-input v-model="valueFields.cardName" maxlength="20"></vs-input>
  <vs-input v-model="valueFields.cardNumber" maxlength="20"></vs-input>
  <vs-input v-model="valueFields.cardMonth" maxlength="20"></vs-input>
  <vs-input v-model="valueFields.cardYear" maxlength="20"></vs-input>
  <vs-input v-model="valueFields.cardCvv" maxlength="40"></vs-input>
</div>
</template>

<script>
import { VuePaycard } from 'vue-paycard'
export default {
  name: "payy",
  components: {
    VuePaycard
  },  data: () => ({
    valueFields: {
      cardName: '',
      cardNumber: '',
      cardMonth: '',
      cardYear: '',
      cardCvv: ''
    }
  }),
  methods:{
    testt(){
      console.log(this.cardName+" _--"+
          this.cardNumber+"-----"+
          this.cardMonth+"0000"+
          this.cardYear+"----"+
          this.cardCvv)
    }
  }
}
</script>

<style scoped>

</style>