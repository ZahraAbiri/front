<template>
  <div id="login">
    <div v-if="getToken === ''">
      <input type="text" v-model="user">
      <br>
      <input type="password" v-model="password">
      <br>
      <button @click="handleLogin">LOGIN</button>
    </div>
    <div v-else>
      {{getUserId}} with token: {{getToken}}
      <br>
      <button @click="handleLogout">LOGOUT</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "llog",
  data: () => ({
    user: "",
    password: ""
  }),
  computed: {
   ...mapGetters(["getToken", "getUserId"])
  },
  methods: {
    ...mapActions(["loginSession", "logoutSession"]),
    async handleLogin() {
      try {
        const { data } = await axios.post("http://js.gl/login", {
          user: this.user,
          password: this.password
        });
        this.loginSession(data);
      } catch (error) {
        console.log(error);
        alert("problems?");
      }
    },
    handleLogout() {
      this.logoutSession();
    }
  },
  created() {
    this.getSession();
  }
};

</script>

<style scoped>

</style>