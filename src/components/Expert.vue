<template>
  <div>
    <html lang="en" dir="ltr">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <div class="container">
      <div class="title">Registration expert</div>
      <div class="content">
        <form>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Name</span>
              <input type="text" v-model="expert.firstname" placeholder="Enter your name" required>
            </div>
            <div class="input-box">
              <span class="details">Family</span>
              <input type="text" v-model="expert.lastname" placeholder="Enter your family" required>
            </div>
            <div class="input-box">
              <span class="details">emailAddress</span>
              <input type="text" v-model="expert.emailAddress" placeholder="Enter your username" required>
            </div>
<!--            <div class="input-box">-->
<!--              <span class="details">password</span>-->
<!--              <input type="text" v-model="expert.password" placeholder="Enter your username" required>-->
<!--            </div>-->
            <div class="input-box">
              <span class="details">credit</span>
              <input type="text" v-model="expert.credit" placeholder="Enter your username" required>
            </div>
<!--            <div class="input-box">-->
<!--              <span class="details">personal statuse</span>-->
<!--              <input type="text" v-model="expert.personStatuse" placeholder="Enter your username" required>-->
<!--            </div>-->
            <div class="input-box">
              <span class="details">score</span>
              <input type="text" v-model="expert.score" placeholder="Enter your username" required>
            </div>
<!--            <div class="input-box">-->
<!--              <span class="details">role</span>-->
<!--              <input type="text" v-model="expert.role" placeholder="Enter your username" required>-->
<!--            </div>-->
            <div class="input-box">
              <span class="details">registrationDate</span>
              <date-picker v-model="expert.registrationDate" format="jYYYY-jMM-jDD" display-format="jYYYY-jMM-jDD" required></date-picker>
            </div>
            <div class="input-box">
              <span class="details">photo upload</span>
<!--              <ImgSave3 @changephoto="ChangeImg"  v-model="expert.photo" required></ImgSave3>-->
              <div class="row">
                <div class="col-8">
                  <label class="btn btn-default p-0">
                    <input
                        type="file"
                        accept="image/*"
                        ref="file"
                        @change="selectImage"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <vs-button @click="saveexpert">save</vs-button>
          </div>
        </form>
      </div>
    </div>
    </body>
    </html>


  </div>
</template>
<script>
import ExpertDataService from "@/service/ExpertDataService";
// import ImgSave3 from '../components/ImgSave3'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
export default {
  name: 'expertRegister',
  components:{
    // ImgSave3,
    datePicker: VuePersianDatetimePicker
  },
  data() {
    return {
      value: 54,
      currentStep: null,

      message: '',
      currentImage: undefined,
      previewImage: undefined,
      prototype: 0,
      imageInfoes: [],
      experts: [],
      bt: [],
      expert: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        password: '',
        personStatuse: '',
        registrationDate:null,
        credit: '',
        photo:Array,
        score:null,
        role:null,
        // services:'',

      },
    }
  },methods:{
    // ChangeImg(mes) {
    //   console.log(mes);
    //   console.log(mes + "change 88photo");
    //
    //   this.expert.photo = mes
    // },
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
      let formData = new FormData();
      formData.append("file", this.currentImage);
      console.log("formData")
      // console.log(formData)
      var reader = new FileReader();
      var filebyteArray = [];
      reader.readAsArrayBuffer(this.currentImage)
      reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) {
          var arrayBufer = evt.target.result;
          let array = new Uint8Array(arrayBufer)
          for (var i = 0; i < array.length; i++) {
            filebyteArray.push(array[i])
          }
        // return filebyteArray;
        //   this.expert.photo=filebyteArray
          // console.log(this.expert.photo)
          this.bt=filebyteArray
          console.log(filebyteArray)
        }

      }

      // this.$emit('changeImage', filebyteArray)

    },
    saveexpert() {
      this.selectImage();
      console.log()
      console.log("errorpppppppppppppp");

      var data = {
        firstname: this.expert.firstname,
        lastname: this.expert.lastname,
        emailAddress: this.expert.emailAddress,
        // password: this.expert.password,
        personStatuse: 'NEW',
        registrationDate: this.expert.registrationDate,
        credit: this.expert.credit,
        photo:this.expert.photo,
        role:'EXPERT',
        score: this.expert.score,
        // services: this.expert.services

      };
      console.log(data.photo + "dllllllllllllllllllllata")
      ExpertDataService.createExpert(data).then(response => {
        console.log("wwwwww")
        this.expert.id = response.data.id;
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