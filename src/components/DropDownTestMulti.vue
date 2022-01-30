<template lang="html" id="page">
    <div>
        <div class="example">
            <vs-dropdown>
                <a class="a-icon">
                    expert information
                    <vs-icon class="" icon="expand_more"></vs-icon>
                </a>
                <vs-dropdown-menu>
                    <vs-dropdown-group vs-collapse vs-label="firstName">
                        <vs-dropdown-item v-if="flag">
                            {{person.firstname}}
                        </vs-dropdown-item>
                        <vs-dropdown-item v-else v-for="employee in employees" :key="employee.id"
                                          @click="showInfo(employee)">
                            {{employee.firstname}}
                        </vs-dropdown-item>
                        <vs-dropdown-group vs-collapse vs-label="lastName" vs-icon="add">
                            <vs-dropdown-item v-if="flag">
                                {{person.lastname}}
                            </vs-dropdown-item>
                            <vs-dropdown-item v-else v-for="employee in employees" :key="employee.id">
                                {{employee.lastname}}
                            </vs-dropdown-item>
                            <vs-dropdown-group vs-label="EMAI">
                                <vs-dropdown-group vs-collapse vs-label="email">
                                    <vs-dropdown-item v-if="flag">
                                        {{person.email}}
                                    </vs-dropdown-item>
                                    <vs-dropdown-item v-else vs-label="email" v-for="employee in employees"
                                                      :key="employee.id">
                                        {{employee.email}}
                                    </vs-dropdown-item>
                                </vs-dropdown-group>
                            </vs-dropdown-group>
                        </vs-dropdown-group>
                    </vs-dropdown-group>
                    <vs-dropdown-item divider @click="flag=false">
                        refresh
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
        </div>
        <template v-if="person.firstname!==employee.firstname">
<!--            show like select-->
<!--            <div>-->
<!--                <vs-select multiple-->
<!--                           class="selectExample"-->
<!--                           label="Multiple"-->
<!--                           v-model="select2">-->
<!--                    <div v-if="flag">{{person.email}},{{person.firstname}},{{person.lastname}}</div>-->
<!--                    <div v-else v-for="employee in employees" :key="employee.id">-->
<!--                    </div>-->
<!--                </vs-select>-->
<!--            </div>-->
<!--            show as table-->
            <table>
                <vs-th>first</vs-th>
                <vs-th>last</vs-th>
                <vs-th>email</vs-th>
                <vs-tr>
                    <vs-td>{{person.firstname}}</vs-td>
                    <vs-td>{{person.lastname}}</vs-td>
                    <vs-td>{{person.email}}</vs-td>
                </vs-tr>
            </table>

        </template>
    </div>
</template>

<script>
    import EmployeeDataService from "../services/EmployeeDataService";

    export default {
        name: "DropDownTestMulti",
        data() {
            return {
                select1: false,
                // select2: false,
                select3: false,
                select4: false,
                select2: [6],

                employees: [{id: 1, firstname: 'sara', lastname: 'mohamadi', email: 'sara@g.com'},
                    {id: 2, firstname: 'tara', lastname: 'ahmadi', email: 'tara@g.com'},
                    {id: 3, firstname: 'sara', lastname: 'asad', email: 'sara@g.com'},
                    {id: 4, firstname: 'yasi', lastname: 'moradi', email: 'yasi@g.com'}],
                employee: {
                    id: null,
                    firstname: "",
                    lastname: "",
                    email: "",
                    plate: "",
                    published: false
                },
                person: {
                    id: null,
                    firstname: "",
                    lastname: "",
                    email: "",
                    plate: "",
                    published: false
                },

                flag: false,
            }
        }, methods: {
            getEmployees() {

                EmployeeDataService.getEmployees().then((response) => {
                    this.$vs.loading.close();
                    this.employees = response.data;
                });
            }, showInfo(employee) {
                console.log(employee.id + " " + employee.lastname);
                this.flag = true;
                this.person.lastname = employee.lastname;
                this.person = employee

            }

        }, created() {
            this.getEmployees();
        }

    }
</script>

<style scoped>
    .example {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #a-icon {
        background-color: lightblue;
    }

    .a-icon {
        outline: none;
        text-decoration: none !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>