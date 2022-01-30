<template>
  <div>
<!--    <!DOCTYPE html>-->
    <!-- Created By CodingLab - www.codinglabweb.com -->
    <html lang="en" dir="ltr">
    <head>
      <meta charset="UTF-8">
      <!---<title> Responsive Registration Form | CodingLab </title>--->
      <link rel="stylesheet" href="style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <div class="container">
      <div class="title">Registration Manager</div>
      <div class="content">
        <form>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Name</span>
              <input type="text" v-model="manager.firstname" placeholder="Enter your name" required>
            </div>
            <div class="input-box">
              <span class="details">Family</span>
              <input type="text" v-model="manager.lastname" placeholder="Enter your family" required>
            </div>
            <div class="input-box">
              <span class="details">Username</span>
              <input type="text" v-model="manager.username" placeholder="Enter your username" required>
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input type="text" v-model="manager.password" placeholder="Enter your password" required>
            </div>
          </div>
          <div class="gender-details">
            <input type="radio" name="Role" id="dot-1">

          </div>
          <div class="button">
            <vs-button @click="saveManager">save</vs-button>

<!--            <input type="submit" @click="saveManager" >-->
          </div>
        </form>
      </div>
    </div>

    </body>
    </html>


  </div>
</template>
<script>
import ManagerDataService from "@/service/ManagerDataService";

export default {
  name: 'ManagerRegister',
  data() {
    return {
      manager: {
        id: null,
        firstname: "",
        lastname: "",
        username: "",
        password: '',
      },
    }
  },methods:{
    saveManager() {
      console.log("errorpppppppppppppp");
      var data = {
        firstname: this.manager.firstname,
        lastname: this.manager.lastname,
        username: this.manager.username,
        password: this.manager.password,

      };
      console.log(data.firstname + "dllllllllllllllllllllata")
      ManagerDataService.createManager(data).then(response => {
        console.log("wwwwww")
        this.manager.id = response.data.id;
        console.log(response.data);

      })
          .catch(e => {
            console.log(e);
          });
    },
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container {
  max-width: 700px;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.container .title {
  font-size: 25px;
  font-weight: 500;
  position: relative;
}

.container .title::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 30px;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.content form .user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}

form .user-details .input-box {
  margin-bottom: 15px;
  width: calc(100% / 2 - 20px);
}

form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}

.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}

.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #9b59b6;
}

form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}

form .category {
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}

form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
  background: #9b59b6;
  border-color: #d9d9d9;
}

form input[type="radio"] {
  display: none;
}

form .button {
  height: 45px;
  margin: 35px 0
}

form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

form .button input:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}

@media (max-width: 584px) {
  .container {
    max-width: 100%;
  }

  form .user-details .input-box {
    margin-bottom: 15px;
    width: 100%;
  }

  form .category {
    width: 100%;
  }

  .content form .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }

  .user-details::-webkit-scrollbar {
    width: 5px;
  }
}

@media (max-width: 459px) {
  .container .content .category {
    flex-direction: column;
  }
}

</style>