<template>
    <div>
        <div class="parent container submit-form" dir="ltr">
            <div class="center content-inputs" v-if="!submitted" id="forminput">
                <br>
                <!--                <div style="width: 50%;float:left">-->
                <!--
                                  <div class="center content-inputs">-->

                <vs-input
                        style="width: 80%"
                        primary
                        color="rgb(59,222,200)"
                        required
                        class="child col-8 col-sm-6"
                        v-model="employee.firstname"
                        label-placeholder="نام"
                        :maxlength="12"
                ></vs-input>

                <!--                <h6 v-if="invalidName" style="color:red"></h6>-->
                <!--                    </div>-->
                <!--                    <div class="center content-inputs">-->
                <!--                <h6 v-if="invalidFamily" style="color:red"></h6>-->
                <vs-input style="width: 80%;"

                          primary
                          color="green"
                          required
                          class="child col-8 col-sm-6"
                          v-model="employee.lastname"
                          label-placeholder="نام خانوادگی"
                          :maxlength="12"
                ></vs-input>

                <!--                    </div>-->
                <!--                    <div class="center content-inputs">-->
                <vs-input
                        style="width:80%"
                        class="child col-8 col-sm-6"
                        primary
                        color="#8c33ff"
                        required
                        v-model="employee.email"
                        label-placeholder="ایمیل"
                        icon="email">
                </vs-input>

<!--                <div>-->
<!--                    <b-button-->
<!--                            :class="visible ? null :'collapse'"-->
<!--                            :aria-expanded="visible ? 'true':'false'"-->
<!--                            aria-controls="collapse-4"-->
<!--                            @click="visible=!visible"-->
<!--                    >toggle</b-button>-->
<!--                    <b-collapse v-model="visible" class="mt-2" id="collapse-4">-->
<!--                        <b-card>test aaaaaaaa</b-card>-->
<!--                    </b-collapse>-->
<!--                </div>-->

                                <h6 v-if="(validEmail || invalidEmail) "
                                >The mail is valid</h6>
                                <h6 v-else style="color: #d33c40">Email Invalid</h6>


                <!--                    </div>-->
                <!--                <div style="margin-top:10px">-->

                <!--                </div>-->
                <!--                <div class="center content-inputs">-->
                <!--             -->

                <!--                </div>-->
                <div style="width: 900px">
                <plt @changeTiltle="ChangeT" style="margin-left:-60%"></plt>
              </div>
                <div style="margin-left: 40px">
                <ImgSave3 @changeImage="ChangeImg" ></ImgSave3>
                </div>
                <vs-button
                        color="orangered"
                        :active=0
                        style="margin-left:400px"
                        @click="saveEmployee">
                    تایید
                </vs-button>



                <div style="margin-top:100px;width: 30%" dir="rtl" >
                    <date-picker v-model="date" format="jYYYY-jMM-jDD" display-format="jYYYY-jMM-jDD"></date-picker>
<!--                    <date-picker v-model="date" format="YYYY-MM-DD" ></date-picker>-->
                </div>
<!--<div>-->
<!--    <b-alert show variant="danger">danger</b-alert>-->
<!--</div>-->
            </div>
            <div v-else>
                <h4>کاربر با موفقیت اضافه شد !</h4>
                <vs-button dir="ltr"
                           color="pink"
                           :active=1
                           @click="newEmployee">
                    اضافه کردن
                </vs-button>
            </div>
        </div>
        <!-- v-responsive="middleSize"
        v-responsive.lg.xl
        v-responsive.md (tablet)
        v-responsive.sm.xs (phone)
        -->

        <vs-button radius size="small" class="btnclose" @click="close" color="red" icon="close" type="filled">
        </vs-button>
    </div>
</template>
<script>
    import EmployeeDataServiceImage from '../../services/EmployeeDataServiceImage';
    import plt from '../child/plateWithLogo3'
    import ImgSave3 from '../child/ImgSave3'
    import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
    // import {BCollapse} from 'bootstrap-vue'
    // import {BCard} from 'bootstrap-vue'
    // import {BButton} from 'bootstrap-vue'
    // import {BAlert} from 'bootstrap-vue'


    export default {

        mounted: {},
        components: {
           // BButton,
           //  BCard,
           //  BCollapse,
           //  BAlert,
            plt,
            ImgSave3,
            datePicker: VuePersianDatetimePicker
        },

        data() {

            return {
                date:'',
                visible:true,
                message: '',
                value7: '',
                employee: {
                    id: null,
                    firstname: "",
                    lastname: "",
                    email: "",
                    plate: "",
                    image: Array,
                    date:'',

                },
                published: false,
                srt: '',
                submitted: false
            };
        },
        methods: {
            ChangeT(mess) {
                console.log("change plate");

                this.employee.plate = mess
                console.log(mess + "  : messsage plate");

            }, ChangeImg(mes) {
                console.log(mes);
                console.log(mes + "change 88image");

                this.employee.image = mes
            }
            , close() {
                console.log("close in loginpopup");
                this.$emit('close:clickme', false);
                console.log(this.date+" : dattttt")

                // this.popupActive3=false;
            },
            saveEmployee() {
                this.employee.date=this.date;
                console.log(this.employee.date+" : emp daaaa")
                var data = {

                    firstname: this.employee.firstname,
                    lastname: this.employee.lastname,
                    email: this.employee.email,
                    plate: this.employee.plate,
                    image: this.employee.image,
                    date:this.employee.date
                };

                console.log(data.image)
                console.log(data.plate + "save emp")
                console.log(data.firstname + "data")
                EmployeeDataServiceImage.createEmp(data)
                    .then(response => {
                        this.employee.id = response.data.id;
                        console.log(response.data);

                        this.submitted = true;

                    })
                    .catch(e => {
                        console.log(e);
                    });
            },

            newEmployee() {
                this.submitted = false;
                this.employee = {};
            }, updateEmployee(id, employee) {
                console.log("update : " + id + "  emp : ");
                EmployeeDataServiceImage.update(id, employee)
                    .then(response => {
                        console.log(response.data);
                        this.message = 'The employee was updated successfully!';
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        }, computed: {
            validEmail() {
                if (!/^\w+([[.]-]?\w+)*@\w+([[.]-]?\w+)*(\.\w{2,3})+$/.test(String(this.employee.email))) {
                    return false
                } else {
                    return true
                }
            }, invalidName() {
                return this.employee.firstname === ''
            }, invalidFamily() {
                return this.employee.lastname === ''
            }, invalidpassword() {
                return this.employee.email === ''
            }, invalidplate() {
                return this.employee.plate === ''
            },
        }
    }

</script>

<style>
    html, body {
        padding: 0;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    div {
        /*border-width: 0 1px;*/
        /*border-style: solid;*/
        /*position: fixed;*/
        /*top: 0;*/
        /*bottom: 0;*/
        /*right: 25px;*/
        /*left: 25px;*/
        /*z-index: -1;*/
    }

    * {
        box-sizing: border-box;
    }

    #forminput {
        /*width: auto;*/
        /*padding: 12px 20px;*/
        /*margin: 8px 0;*/
        /*display: inline-block;*/
        /*border: 1px solid #ccc;*/
        /*border-radius: 4px;*/
        /*box-sizing: border-box;*/
        /*flex-flow: row wrap;*/
        /*align-items: center;*/


    }

    .btnclose {
        position: absolute;
        right: 0;

        top: 0;
        width: 100vw;
        height: 100vh;
    }

    @media (max-width: 800px) {
        #forminput input {
        }
    }

    .parent {
        display: flex;
        justify-content: center;
    }

    .child {
        flex-grow: 1;
        text-align: center;
    }

    @media (max-width: 568px) {
        .parent {
            flex-direction: column
        }

        .child:first-child {
            order: 1
        }

        .child:last-child {
            order: -1
        }

    }

    .container .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 16px;
        padding: 16px 30px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
    }


</style>