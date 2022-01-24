<template>
    <div>
        <vs-table dir="rtl"
                  multiple
                  v-model="selected"
                  max-items="3"
                  search
                  :data="customers"
                  style="background-color: #c6f7ff"

        >
            <template slot="header" id="border">

            </template>
            <template slot="thead" dir="rtl">
                <vs-td sort-key="id" style="background-color: #8ef5ff;text-align: center">
                    <h4>شماره</h4>
                </vs-td>
                <vs-td sort-key="email" style="background-color: #8ef5ff">
                    <h4> ایمیل</h4>
                </vs-td>
                <vs-td sort-key="firstname" style="background-color: #8ef5ff">
                    <h4>نام</h4>
                </vs-td>
                <vs-td sort-key="lastname" style="background-color: #8ef5ff">
                    <h4>نام خانوادگی</h4>
                </vs-td>
                <vs-td sort-key="plate" style="background-color: #8ef5ff;text-align: center;width:fit-content!important"
                       class="ttd">
                    <h4>پلاک</h4>
                </vs-td>
                <vs-td sort-key="image" style="background-color: #8ef5ff;text-align: center">
                    <h4>عکس</h4>
                </vs-td>
                <vs-td sort-key="date" style="text-align: center">
                    <h4>date</h4>
                </vs-td>
            </template>
            <template slot-scope="{data : customer}" class="td">
                <vs-tr :customers="tr" :key="customerid" v-for="(tr, customerid) in customer">
                    <vs-td>
                        <h3>{{ customerid+1}}</h3>
                    </vs-td>
                    <vs-td v-if="(editing ===customer[customerid].id)">
                        <vs-input v-model="customer[customerid].email" class="input" color="red"
                                  label-placeholder="ایمیل" style="width: 90%;font-size:large"/>
                        <h6 v-if="(validEmail(customer[customerid].email)) " style="width: 90%;font-size:large"
                        ></h6>
                        <h6 v-else style="color: #d33c40">Email Invalid</h6>
                    </vs-td>
                    <vs-td v-else color="blue">
                        <h3> {{ customer[customerid].email }}</h3>
                    </vs-td>

                    <vs-td v-if="editing ===customer[customerid].id" style="width: 90%;font-size:large">
                        <vs-input v-model="customer[customerid].firstname" class="input" label-placeholder="name"/>
                    </vs-td>
                    <vs-td v-else>
                        <h3> {{ customer[customerid].firstname }}</h3>
                    </vs-td>
                    <vs-td v-if="editing ===customer[customerid].id" style="width: 90%;font-size:large">
                        <vs-input v-model="customer[customerid].lastname" class="input" primary color="#8c33ff" required
                                  label-placeholder="family"/>
                    </vs-td>
                    <vs-td v-else>
                        <h3>{{ customer[customerid].lastname }}</h3>
                    </vs-td>

                    <!--                    <vs-td v-if="editing ===customer[customerid].id" style="width: 90%;!important">-->
                    <!--                                                <vs-button @click="popupActive2=true" color="orange" icon="edit"-->
                    <!--                                                           style="margin-left: 45%"-->
                    <!--                                                           type="border">add-->
                    <!--                                                </vs-button>-->
                    <!--                                                 @accept="updatecustomer(customer[customerid].id,customer[customerid])"-->
<!--                                                                    <vs-prompt-->
<!--                                                                            color="red"-->

<!--                                                                            @close="close"-->
<!--                                                                            :active.sync="popupActive2">-->
<!--                                                                        <div class="con-example-prompt" id="vsinput"-->
<!--                                                                             dir="ltr"-->
<!--                                                                             style="width: 900px">-->
<!--                                                                            <pl style="margin-left:-50%" :val="(customer[customerid].plate)"></pl>-->
<!--                                                                            &lt;!&ndash;                                <adda-emp @close:clickme="sendplt">&ndash;&gt;-->

<!--                                                                        </div>-->

<!--                                                                    </vs-prompt>-->

                    <!--                    </vs-td>-->
<!--                    <vs-td>-->
<!--                        <template>-->
<!--                            <div class="codepen-wrapper">-->
<!--                                <div class="registration-ui">-->
<!--                                    <div class="plate_1">-->
<!--                                        <div style="" dir="ltr">-->
<!--                                            <img class="imgm" alt="pltlogo" src="./pltlogo.png"-->
<!--                                                 style="position:absolute;-->
<!--                                                 z-index:1!important;width: 15%;-->
<!--                                                 height:96%;margin-top: -2.5%;-->
<!--                                                 margin-left: -22%;-->
<!--                                                 border-top-left-radius: 3px;"/>-->
<!--                                        </div>-->
<!--                                        <span>{{(customer[customerid].plate).substring(0,2)}}</span>-->

<!--                                        &lt;!&ndash;&ndash;&gt;-->
<!--                                        <span v-if="(customer[customerid].plate).substring(2,4)==99">S</span>-->
<!--                                        <span v-else>D</span>-->
<!--                                        <span>{{(customer[customerid].plate).substring(4,7)}}</span>-->
<!--                                    </div>-->
<!--                                    <span class="plate_2">{{(customer[customerid].plate).substring(7,9)}}</span>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </template>-->
<!--                    </vs-td>-->
<!--                    <vs-td>-->
<!--                        <img :src="'data:image/jpg;base64,'+getIm(customer[customerid].image)" class="im">-->
<!--                    </vs-td>-->
<!--                    <vs-td v-if="editing ===customer[customerid].id">-->
<!--                        <date-picker v-model="customer[customerid].date" format="jYYYY-jMM-jDD" display-format="jYYYY-jMM-jDD">-->
<!--                        </date-picker>-->
<!--                        &lt;!&ndash;                        <div style="margin-top:100px;width: 30%" dir="rtl" >&ndash;&gt;-->


<!--                        &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                    </vs-td>-->
<!--                    <vs-td v-else>-->
<!--                        <h5> {{ customer[customerid].date }}</h5>-->

<!--                        &lt;!&ndash;                        {{customer[customerid].date=this.date}}&ndash;&gt;-->
<!--                    </vs-td>-->

<!--                    <vs-td v-if="editing ===customer[customerid].id">-->
<!--                        <vs-button @click="updatecustomer(customer[customerid].id,customer[customerid]);closebtn()"-->
<!--                                   class="muted-button"-->
<!--                                   color="goldenrod">Save-->
<!--                        </vs-button>-->
<!--                        <vs-button @click="editing = null" class="muted-button" color="orangered">Cancel</vs-button>-->
<!--                    </vs-td>-->
<!--                    <vs-td v-else>-->
<!--                        <vs-button @click="editMode(customer[customerid].id)" color="green" icon="edited"> </vs-button>-->

<!--                            <vs-prompt-->
<!--                                    color="red"-->

<!--                                    @close="close"-->
<!--                                    :active.sync="popupActive2">-->
<!--                                <div class="con-example-prompt" id="vsinput"-->
<!--                                     dir="ltr"-->
<!--                                     style="width: 900px">-->
<!--                                    <vs-input v-model="customer[customerid].email" class="input" color="red"-->
<!--                                              label-placeholder="ایمیل" style="width: 90%;font-size:large"/>-->
<!--                                    <vs-input v-model="customer[customerid].firstname" class="input" label-placeholder="name"/>-->


<!--                                </div>-->

<!--                            </vs-prompt>-->


<!--                        <vs-button @click="deletecustomer(customer[customerid].id)" color="red"-->
<!--                                   icon="delete"></vs-button>-->
<!--                    </vs-td>-->
                </vs-tr>
<!--                <vs-button @click="goback()" color="purple" type="filled" icon="reply"></vs-button>-->
<!--                <vs-button @click="popupActive3=true" color="purple" type="filled" icon="add"></vs-button>-->
<!--                <vs-popup button-close-hidden fullscreen title="inner popup" :active.sync="popupActive3"-->
<!--                          @close:clickme="onclickfalse">-->
<!--                    <p>some thing</p>-->
<!--                    <adda-emp @close:clickme="onclickfalse"></adda-emp>-->
<!--                </vs-popup>-->

            </template>

        </vs-table>
        <div>
        </div>
        <pre>{{selected}}</pre>
    </div>

</template>

<script>

    // import customerDataServiceImage from "../services/customerDataServiceImage";
    import customerdata from "../service/CustomerDataService";
    // import addaEmp from "./child/Inpuuut";
    // import VuePersianDatetimePicker from 'vue-persian-datetime-picker';

    export default {
        name: "imageLoadBase64",
        components: {

            // addaEmp,
            // datePicker: VuePersianDatetimePicker


        },
        data() {
            return {
                date:'',
                'fullWidthImage': false,
                logoMe: "",
                logoMeM: "",
                logo1: '',
                popupActive3: false,
                popupActive2: false,

                val: '',
                selected: [],
                customers: [
                    // {firstname: 'sara', lastname: 'asadi', id: 1, email: 'a@g.com', image: null, plate: '119987533'},
                    // {firstname: 'tara', lastname: 'asadi', id: 2, email: 't@g.com', image: null, plate: '119888537'},
                    // {firstname: 'mara', lastname: 'asadi', id: 3, email: 'm@g.com', image: null, plate: '119987839'},
                ],
                editing: null,
                value6: '',
                value7: '',
                value8: '',
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
                blobUrl: null,


            }
        }
        , methods: {
            acceptAlert() {
                this.$vs.notify({
                    color: 'success',
                    title: 'Accept Selected',
                    text: 'add success fully'
                })
            },
            close() {
                this.$vs.notify({
                    color: 'danger',
                    title: 'Closed',
                    text: 'closed'
                })
            },

            callfalse() {
                this.active = false;
                this.popupActive3 = false;
            },
            closebtn() {
                this.editing = null;
            },
            onclickfalse(value) {
                console.log(value + ' : onclickfalse');
                this.popupActive3 = value;

            },
            getIm(str) {
                // this.$router.go(0);reload page
                const B64B = (b64Data, contentType = '', slicesize = 12) => {
                    const byteCharacters = atob(b64Data);
                    const byteArrays = [];
                    for (let offset = 0; offset < byteCharacters.length; offset += slicesize) {
                        const slice = byteCharacters.slice(offset, offset + slicesize);
                        const byteNumber = new Array(slice.length);
                        for (let i = 0; i < slice.length; i++) {
                            byteNumber[i] = slice.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumber);
                        byteArrays.push(byteArray);
                    }
                    const blob = new Blob(byteArrays, {type: contentType});
                    return blob;
                };
                const contentType = 'image.jpg';
                const b64Data = str
                const blob = B64B(b64Data, contentType);
                const blobUrl = URL.createObjectURL(blob);
                const img = document.createElement('img');
                img.src = blobUrl;
                img.width = 60;
                img.height = 60;
                return b64Data;

            },


            getEmp() {
              customerdata.getAllCustomer().then((response) => {
                    this.customers = response.data;
                    console.log(JSON.stringify(response) + "--------")
                });
            }

            ,
            goinput() {
                this.$router.push('/add')
            },
            // getcustomers() {
            //     // this.$router.go(0);
            //     // this.$vs.loading();//
            //     customerDataServiceImage.getcustomers().then((response) => {
            //         // this.$vs.loading.close();
            //         this.customers = response.data;
            //         console.log(response.data + "====res data")
            //     });
            // }
            // , savecustomer() {
            //     // console.log("savecustomer");
            //     // console.log(this.customer.firstname + "error");
            //     var data = {
            //         firstname: this.customer.firstname,
            //         lastname: this.customer.lastname,
            //         email: this.customer.email,
            //         plate: this.customer.plate,
            //         image: this.customer.image,
            //     };
            //     console.log(data.firstname + "data")
            //     customerDataServiceImage.create(data)
            //         .then(response => {
            //             this.customer.id = response.data.id;
            //             // console.log(response.data);
            //             this.submitted = true;
            //             this.$router.go(0);
            //         })
            //         .catch(e => {
            //             console.log(e);
            //         });
            // },
            getpla(str) {
                // console.log(str+" getpla");
                return str;
                // this.value6=this.customers[0].plate ;
                // console.log(this.customers[0].plate+"emp pl")
            },
            // deletecustomer(id) {
            //     console.log("id@@@@@@@@" + id);
            //
            //     customerDataServiceImage.delete(id)
            //         .then(response => {
            //             console.log(response.data + " response data");
            //             window.location.reload();
            //             // this.$router.push({name: "customers"});
            //             // this.$router.go(0);
            //         })
            //         .catch(e => {
            //             console.log(e);
            //         });
            // },
            // updatecustomer(id, customer) {
            //     console.log("updatecustomer")
            //     // this.customer.date=this.date;
            //     // console.log(this.date +"date")
            //     console.log(customer.date + " emp update")
            //     console.log("update : " + id + "  emp : ");
            //     // customer.date=this.date;
            //     console.log(customer.date+"em ddddddddddddd")
            //     customerDataServiceImage.updateIm(id, customer)
            //         .then(response => {
            //             console.log(response.data.date + " in update mode in base64");
            //             console.log(customer.date + "  emp date")
            //             this.message = 'The customer was updated successfully!';
            //             console.log("The customer was updated successfully");
            //             window.location.reload();//reload page
            //             return this.editing;
            //
            //
            //         }).catch(e => {
            //         console.log(e);
            //     });
            //
            //
            // }, editMode(id) {
            //     this.editing = id
            //     console.log(id + " : id emp")
            // },
            editcustomer(customer) {
                console.log(customer.firstname + "emp edit method");
                this.updatecustomer(customer.id, customer);
                console.log("editemp in b64")
                if (customer.id === '' || customer.email === '' || customer.firstname === '' || customer.lastname === '') return
                this.$emit('edit:customer', customer.id, customer)
                this.editing = null;
                console.log(customer + "customer");
                this.$router.go(0);
            },

            cancelEdit(customer) {
                Object.assign(customer, this.cachedcustomer);
                this.editing = null;
                this.$router.go(0);
            }, newcustomer() {
                this.submitted = false;
                this.customer = {};
            },
            validEmail(email) {
                // console.log("email validation" + email);
                // console.log("email validation"+ email);
                if (!/^\w+([[.]-]?\w+)*@\w+([[.]-]?\w+)*(\.\w{2,3})+$/.test(String(email))) {
                    return false
                } else {
                    return true
                }
            }, invalidName() {
                return this.customer.firstname === ''
            }, invalidFamily() {
                return this.customer.lastname === ''
            }, invalidpassword(email) {
                return email === ''
            }, invalidplate() {
                return this.customer.plate === ''
            }, openLoading() {
                const loading = this.$vs.loading()
                setTimeout(() => {
                    loading.close()
                })
            }
        }
        ,
        created() {

            this.getEmp();
            // this.getpla(this.val)

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

    * {
        box-sizing: border-box;
    }


    image {
        vertical-align: middle;
        margin-left: 22px;
        border-radius: 20px;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
        transition: width 1s;
    }

    .imgm {
        width: 60px;
        height: 60px;
        border-radius: 1px;
    }

    .im {
        width: 60px;
        height: 60px;
        border-radius: 25px;
    }


    .codepen-wrapper {
        width: 250px;
        margin: 0 auto;
    }

    .registration-ui {
        background: lightblue;
        padding: .25em .5em .15em 1.75em;
        font-size: 24px;
        border-radius: 5px;
        border: 1px solid #000;
        position: relative;
        font-family: sans-serif;
        display: inline-block;
    }

    .registration-ui:before {
        content: 'IRAN';
        display: block;
        width: 30px;
        height: 100%;
        background: #3c7699;
        /*background-image: url(iran.jpg);*/
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px 0 0 5px;
        color: #ffffff;
        font-size: 10px;
        line-height: 60px;
        padding-left: 1px;
        background-position: 2px 6px;
        background-size: 27px;
        background-repeat: no-repeat;
    }

    .registration-ui:after {
        content: '.I.R';
        position: absolute;

        top: 0;
        left: 0;
        width: 20px;

        font-size: 10px;
        line-height: 35px;
        color: white;
        padding-left: 1px;
    }

    .plate_1 {
        float: left;
    }

    .plate_2 {

        float: right;
        padding-left: 10px;
        border-left: 1px solid black;
        margin-left: 10px;


    }

    .ttd {
        width: 300px;
        border: 5px solid blue;
        /*overflow: hidden;*/
        /*display: inline-block;*/
        /*white-space: nowrap;*/
        margin: 10%;
        padding: 10%;
    }

    .v-input .v-label {
        font-size: 1.2em;
    }

    input {
        width: 200px;
        padding: 0 20px;
    }

    input, input::-webkit-input-placeholder {
        font-size: 20px;
        line-height: 3;
    }


</style>