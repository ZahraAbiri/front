<template>
    <div>
        <div dir="rtl">
<!--                                    <Navbar2 style="width: 100%!important;font-family: sans-serif" :msg="this.$route.name"/>-->


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
                          label-placeholder="firstname"
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

                          label-placeholder="lastname"
                          :maxlength="12"></vs-input>
                <vs-input
                        type="text" style="margin-right: 10%; width: 40%"
                        primary

                        color="rgb(59,222,200)"
                        required
                        multiple
                        search
                        :data="customers"
                        v-model="filterEmail"
                        placeholder="email"
                        label-placeholder="email"
                        :maxlength="12">

                </vs-input>


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

                          placeholder="Q"
                          label-placeholder="E"
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

                          label-placeholder="X"
                          :maxlength="12"></vs-input>
                <vs-input type="text"
                          style="margin-right: 50%; width: 40%"
                          primary
                          color="rgb(59,222,200)"
                          required
                          multiple
                          search
                          :data="customers"

                          label-placeholder="A"
                          :maxlength="12"></vs-input>


            </div>
            <div style="text-align: center">
                <vs-button v-if="filterName||filterEmail||filterFamily " @click="search()"
                           style="margin-right: 1%"> search
                </vs-button>

                <vs-button
                        v-if="filterName===customer.firstname && filterFamily===customer.lastname && filterEmail===customer.emailAddress"
                        @click="showAll();poping()" style="margin-right: 1%"> searchall
                </vs-button>

            </div>

            <div style="width: 80%;margin-right: 10%">
                <vs-table v-if="num===1"
                          dir="rtl"
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

                    </template>
                    <template slot-scope="{data : customer}" class="td">
                        <vs-tr :customers="tr" :key="customerid" v-for="(tr, customerid) in customer">
                            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                                   dir="rtl">

                                {{customer[customerid].firstname}}
                            </vs-td>

                            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                                   dir="rtl">
                                {{customer[customerid].lastname}}
                            </vs-td>
                            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                                   dir="rtl">
                                {{customer[customerid].emailAddress}}
                            </vs-td>


                        </vs-tr>
                    </template>


                </vs-table>

            </div>
            <div style="width: 80%;margin-right: 10%">
                <vs-table v-if="num===2"

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

                    </template>
                    <template slot-scope="{data : customer}" class="td">
                        <vs-tr :customers="tr" :key="customerid" v-for="(tr, customerid) in customer">
                            <vs-td style="background-image: linear-gradient(#90dec3, #1db6de);;font-size: large"
                                   dir="rtl">

                                {{customer[customerid].firstname}}
                            </vs-td>

                            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                                   dir="rtl">
                                {{customer[customerid].lastname}}
                            </vs-td>
                            <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                                   dir="rtl">
                                {{customer[customerid].emailAddress}}
                            </vs-td>


                        </vs-tr>


                    </template>


                </vs-table>

            </div>

        </div>
        <div  class="testdiv">
        <div dir="ltr" style="margin-left:480px;margin-bottom:10%" >
<!--                    <pp style="height: 10px"></pp>-->
        </div>
        </div>
        <div style="margin-right:60%;margin-bottom: 10%">
<!--           <Drop/>-->
        </div>
    </div>

</template>

<script>
    // import Navbar2 from './Navbar2';
    // import EmployeeDataService from "../services/EmployeeDataService";
    // import pp from './child/platetwoparcham'
    // import pp from '../components/child/plateWithLogo'
    //
    // import Drop from './backUpDropDownTestMulti';


    import CustomerDataService from "@/service/CustomerDataService";

    export default {

        name: "FormInput",
        components: {
            // Navbar2,
            // pp,
            // Drop,
        },
        data() {
            return {
                Array: [],
                selected: [],
              customersa: [],
                // employees: [],
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


                },
                num: 0,
                a: 3,
                filterName: '',
                filterFamily: '',
                filterEmail: '',
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
            getEmployees() {
                // this.$vs.loading();
                // EmployeeDataService.getEmployees().then((response) => {
                //     this.$vs.loading.close();
                //     this.employees = response.data;
                // });
            }
            , userSearch() {
                // console.log("sssssss");
                // console.log(empid + "empid");
                // this.employee = empid;
                // this.num = empid;
                // this.$myem = this.num;
                // console.log(this.$myem);
                // console.log(this.num + "num")


            },
            employeesFilter() {
                return this.customers.filter(i => i.firstname === this.filterName);


            }, employeesFilterFullName() {
                return this.customers.filter(i => i.firstname === this.filterName && i.lastname === this.filterFamily);


            }
            , employeesFamily() {
                return this.customers.filter(i => i.lastname === this.filterFamily)
            }, employeesEmail() {

                return this.customers.filter(i => i.emailAddress === this.filterEmail)

            }, showAll() {
                this.num = 2;
                this.poping();
                this.customersa.push(this.customers.forEach());


            },
            search() {
                this.poping();


                if (this.filterName && this.filterFamily) {
                    var r = this.employeesFilterFullName();
                    r.forEach(r => this.customersa.push(r));
                } else if (this.filterName) {
                    var x = this.employeesFilter();
                    x.forEach(x => this.customersa.push(x));
                } else if (this.filterFamily) {
                    var y = this.employeesFamily();
                    y.forEach(y => this.customersa.push(y));

                } else if (this.filterEmail) {
                    // this.poping();
                    if (this.employeesFilter() !== this.customer.firstname)
                        var z = this.employeesEmail();
                    z.forEach(z => this.customersa.push(z));
                }
                this.num = 1;
                return this.customersa = [...new Set(this.customersa)];


            }, poping() {
                this.customersa = [];
                // var p = this.employeesa;
                // this.employeesa.splice(p)

            }
        }
        , created() {
        this.getAllcustomer();
            // this.getEmployees();
        },
        computed: {
            // employeesFilter() {
            //     return this.employees.filter(i =>i.firstname === this.filterName && i.lastname===this.filterFamily && i.email === this.filterEmail)
            //
            // }
            // , employeesFamily() {
            //     return this.employees.filter(i => i.lastname === this.filterFamily)
            // }, employeesEmail() {
            //
            //     return this.employees.filter(i => i.email === this.filterEmail )
            //
            // },
            // employeesFilter(empid) {
            //     console.log("employeesFilter");
            //     console.log(empid);
            //     return this.employees.filter(i => i.id === empid)
        },

        // mounted() {
        //     console.log(this.userSearch+"user search")
        //     console.log(this.employees.id+"employeeid")
        //     this.$root.$on("FormInput",()=> {return this.employees.id},this.userSearch(this.employee.id));
        //
        //
        //
        // }


    }


</script>

<style scoped>
    html,body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    body {
        background-color: #7c7bcc !important;

        /*background-image: linear-gradient(#5bb9b9, #4b99a4) !important;*/
    }

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 480px;
        margin-left: 10%;
        margin-right: 10%;

    }.testdiv{
        width: 40px;
        height: 25px;
         }

    /*.rowA {*/
    /*    width: 190px;*/
    /*    border: 1px solid #7c7bcc;*/
    /*}*/

    /*.A:nth-child(2n+1) {*/
    /*}*/

    /*body {*/
    /*    background-color: lightsteelblue;*/
    /*}*/
    * {
        box-sizing: border-box;
    }

    input:required:invalid {
        border-color: red;
    }
</style>