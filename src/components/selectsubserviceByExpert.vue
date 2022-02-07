<template>
  <div>
    <vs-table :data="experts">
      <template slot="thead">
        <vs-th>
          name
        </vs-th>
        <vs-th>
          family
        </vs-th>
        <!--        <vs-th>-->
        <!--          description-->
        <!--        </vs-th>-->
        <vs-th>
          chose subservice
        </vs-th>
      </template>

      <template slot-scope="{data:expert}">
        <vs-tr :experts="tr" :key="expertid" v-for="(tr, expertid) in expert">
          <vs-td>
            {{ expert[expertid].firstname }}
          </vs-td>

          <vs-td>
            {{ expert[expertid].lastname }}

          </vs-td>

          <vs-td>

            <!--            <vs-button @click="popupActive3=true" color="purple" type="filled" icon="add"></vs-button>-->
            <!--            <vs-popup   title="inner popup" :active.sync="popupActive3"   >-->
            <!--&lt;!&ndash;              <p>some thing</p>&ndash;&gt;-->
            <!--&lt;!&ndash;              <vs-input type="text"&ndash;&gt;-->
            <!--&lt;!&ndash;                        primary&ndash;&gt;-->
            <!--&lt;!&ndash;                        color="rgb(59,222,200)"&ndash;&gt;-->
            <!--&lt;!&ndash;                        required&ndash;&gt;-->
            <!--&lt;!&ndash;                        placeholder="name"&ndash;&gt;-->
            <!--&lt;!&ndash;                        v-model="suvservice.name"&ndash;&gt;-->
            <!--&lt;!&ndash;                        label-placeholder="Name"&ndash;&gt;-->
            <!--&lt;!&ndash;                        :maxlength="12"></vs-input>&ndash;&gt;-->
            <!--&lt;!&ndash;              <vs-input type="text"&ndash;&gt;-->
            <!--&lt;!&ndash;                        primary&ndash;&gt;-->
            <!--&lt;!&ndash;                        color="rgb(59,222,200)"&ndash;&gt;-->
            <!--&lt;!&ndash;                        required&ndash;&gt;-->
            <!--&lt;!&ndash;                        placeholder="name"&ndash;&gt;-->
            <!--&lt;!&ndash;                        v-model="suvservice.description"&ndash;&gt;-->
            <!--&lt;!&ndash;                        label-placeholder="description"&ndash;&gt;-->
            <!--&lt;!&ndash;                        :maxlength="12">&ndash;&gt;-->

            <!--&lt;!&ndash;              </vs-input>&ndash;&gt;-->
            <!--&lt;!&ndash;              <vs-input type="text"&ndash;&gt;-->
            <!--&lt;!&ndash;                        primary&ndash;&gt;-->
            <!--&lt;!&ndash;                        color="rgb(59,222,200)"&ndash;&gt;-->
            <!--&lt;!&ndash;                        required&ndash;&gt;-->
            <!--&lt;!&ndash;                        placeholder="name"&ndash;&gt;-->
            <!--&lt;!&ndash;                        v-model="suvservice.basePrice"&ndash;&gt;-->
            <!--&lt;!&ndash;                        label-placeholder="basePrice"&ndash;&gt;-->
            <!--&lt;!&ndash;                        :maxlength="12"></vs-input>&ndash;&gt;-->
            <!--&lt;!&ndash;              <vs-button @click="saveNewSubservice">add </vs-button>&ndash;&gt;-->
            <!--            </vs-popup>-->
            <!--                          <vs-select-->
            <!--                              label="experts"-->
            <!--                              v-model="tr.id"-->
            <!--                          >-->
            <!--                            <vs-select-item @change="clicked(expert+1)"-->
            <!--                                            :experts="tr" :key="expertid" v-for="(tr, expertid) in expert"-->
            <!--                                           :vs-value="expert.id" :vs-text="expert.lastname" />-->
            <!--                          </vs-select>-->
            <vs-button @click="popupActive4=true;clicke(expertid+1)">
              +
            </vs-button>
            <vs-popup :active.sync="popupActive4">
              <div class="example">
                <vs-dropdown>
                  <a class="a-icon">
                    expert information
                    <!--                  <vs-icon class="" icon="expand_more"></vs-icon>-->
                  </a>
                  <vs-dropdown-menu>
                    <vs-dropdown-group vs-collapse vs-label="firstname">
                      <vs-dropdown-item v-if="flag">
                        {{ subservice.name }}
                      </vs-dropdown-item>
                      <vs-dropdown-item v-else v-for="subservice in subservices" :key="subservice.id"
                                        @click="showInfo(subservice)">
                        {{ subservice.name }}
                      </vs-dropdown-item>
                      <vs-dropdown-group vs-collapse vs-label="lastname">
                        <vs-dropdown-item v-if="flag">
                          {{ subservice.basePrice }}
                        </vs-dropdown-item>
                        <vs-dropdown-item v-else v-for="subservice in subservices" :key="subservice.id">
                          {{ subservice.basePrice }}
                        </vs-dropdown-item>
                        <vs-dropdown-group vs-label="EMAI">
                          <vs-dropdown-group vs-collapse vs-label="email">
                            <vs-dropdown-item v-if="flag">
                              {{ subservice.description }}
                            </vs-dropdown-item>
                            <vs-dropdown-item v-else vs-label="email" v-for="subservice in subservices"
                                              :key="subservice.id">
                              {{ subservice.description }}
                            </vs-dropdown-item>
                          </vs-dropdown-group>
                        </vs-dropdown-group>
                      </vs-dropdown-group>
                    </vs-dropdown-group>
                    <vs-dropdown-item divider @click="updatecustomer()">
                      add
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>
            </vs-popup>


          </vs-td>


        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import SubServiceDataService from "@/service/SubServicerDataService";
import ExpertDataService from "@/service/ExpertDataService";

export default {
  name: "selectsubserviceByExpert",
  data: () => ({

    subservice: {
      id: null,
      name: '',
      basePrice: '',
      description: '',
    },
    bp: '',
    dc: '',
    ne: '',
    popupActive4: false,
    experts: [],
    expert: {
      id: null,
      firstname: "",
      lastname: "",
      emailAddress: "",
      password: '',
      expertStatuse: '',
      registrationDate: null,
      credit: '',
      photo: Array,
      score: null,
      role: null,
      services: '',
    },
    flag:false,
    sid: '',
    subservices: [], num: '',
    exid: '',
  }), methods: {
    clicked(row) {
      this.sid = row[0].id
      this.ne = row[0].name
      this.bp = row[0].basePrice
      this.dc = row[0].description
      console.log(row[0].id + "[[[[[[[[[[")
      console.log(row[0].name)
      console.log(row[0].basePrice)
      console.log(row[0].description)
    }, clicke(row) {
      this.num = row

      console.log(row + "pppppppppp")

    },
    getAllsubservice() {
      SubServiceDataService.getSubService().then((response) => {
        this.subservices = response.data;
      });
    },
    getAllexpert() {
      ExpertDataService.getAllexperts().then((response) => {
        this.experts = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    }, showInfo(subservice) {
      console.log(subservice.id + " " + subservice.name);
      this.sid = subservice.id,
          this.ne = subservice.name
      this.bp = subservice.basePrice
      this.dc = subservice.description

      this.flag = true;


    },
    updatecustomer() {
      this.expert.services = [{
        id: this.sid,
        name: this.ne,
        basePrice: this.bp,
        description: this.dc
      }]
      var data = {
        services: this.expert.services
      }

      ExpertDataService.updateExpert(this.num, data)
          .then(response => {
            console.log(response.data.date + " in update mode in base64");

            this.message = ' was updated successfully!';
            console.log("The customer was updated successfully");
            window.location.reload();//reload page
            alert(this.message)
            return this.editing;


          }).catch(e => {
        alert(e)
        console.log(e);
      });


    }, editMode(id) {
      this.editing = id
      console.log(id + " : id emp")
    },
  }, created() {
    this.getAllsubservice();
    this.getAllexpert();

  }
}

</script>

<style scoped>

</style>