<template>
  <div>
    <div dir="rtl">
      <div style="width: 50%;float:left">
        <vs-input type="text"
                  style=" margin-top:10%; margin-right: 10%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  multiple
                  :data="experts"
                  v-model="filterName"
                  placeholder="filterName"
                  :maxlength="12"></vs-input>
        <vs-input type="text" style=" margin-right: 10%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  multiple
                  search
                  :data="experts"
                  v-model="filterFamily"
                  placeholder="filterFamily"
                  :maxlength="12"></vs-input>
      </div>
      <div style="width:50%;float:left">
        <vs-input type="text"
                  style="margin-top:10%;margin-right: 50%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  multiple
                  search
                  :data="experts"
                  v-model="filterRole"
                  placeholder="filterRole"
                  label-placeholder="E"
                  :maxlength="12">
        </vs-input>
        <vs-input
            type="text" style="margin-right: 50%; width: 40%"
            primary
            color="rgb(59,222,200)"
            required
            multiple
            search
            :data="experts"
            v-model="filterEmail"
            placeholder="email"
            label-placeholder="filterEmail"
            :maxlength="12">

        </vs-input>
      </div>
      <vs-button  @click="showAll();poping()" >show</vs-button>

      <vs-button v-if="filterName||filterEmail||filterFamily||filterRole " @click="search()"
                 style="margin-right: 1%"> search
      </vs-button>

      <vs-button
          v-if="filterName===expert.firstname && filterFamily===expert.lastname && filterEmail===expert.email
                 || filterRole===expert.role"
          @click="showAll();poping()" style="margin-right: 1%"> searchall
      </vs-button>

      <!--        </div>-->
      <!--      </div>-->

      <div style="width: 80%;margin-right: 10%">
        <vs-table v-if="num===1"
                  dir="rtl"
                  search
                  :data="expertsa"
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
              email
            </vs-th>
            <vs-th sort-key="role" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
              role
            </vs-th>
          </template>
          <template slot-scope="{data : expert}" class="td">
            <vs-tr :experts="tr" :key="expertid" v-for="(tr, expertid) in expert">
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">

                {{ expert[expertid].firstname }}
              </vs-td>

              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">
                {{ expert[expertid].lastname }}
              </vs-td>
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                     dir="rtl">
                {{ expert[expertid].emailAddress }}
              </vs-td>
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);;font-size: large"
                     dir="rtl">
                {{ expert[expertid].role }}
              </vs-td>


            </vs-tr>
          </template>


        </vs-table>

      </div>
      <div style="width: 80%;margin-right: 10%">
        <vs-table v-if="num===2"
                  search
                  dir="rtl"
                  :data="experts"
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
              email
            </vs-th>
            <vs-th sort-key="role" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
              role
            </vs-th>

          </template>
          <template slot-scope="{data : expert}" class="td">
            <vs-tr :experts="tr" :key="expertid" v-for="(tr, expertid) in expert">
              <vs-td style="background-image: linear-gradient(#90dec3, #1db6de);;font-size: large"
                     dir="rtl">

                {{ expert[expertid].firstname }}
              </vs-td>

              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">
                {{ expert[expertid].lastname }}
              </vs-td>
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">
                {{ expert[expertid].emailAddress }}
              </vs-td>
              <vs-td style="background-image: linear-gradient(#a9ded5, #5abbf9);font-size: large"
                     dir="rtl">
                {{ expert[expertid].role }}
              </vs-td>


            </vs-tr>


          </template>


        </vs-table>

      </div>

    </div>


  </div>

</template>

<script>
import expertDataService from "@/service/expertDataService";

export default {
  name: "expertFilter",
  data() {
    return {
      num: 0,
      selected: [],
      expertsa: [],
      filterName: '',
      filterFamily: '',
      filterEmail: '',
      filterRole: '',
      experts: [],
      expert: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        password: '',
        personStatuse: '',
        registrationDate: Date(),
        credit: '',
      },
    }
  },
  methods: {
    getAllexpert() {
      expertDataService.getAllexpert().then((response) => {
        this.experts = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    }, expertFilter() {
      console.log(this.experts.filter(i => i.firstname === this.filterName)+"lllllll")
      return this.experts.filter(i => i.firstname === this.filterName);


    }, expertFilterFullName() {
      return this.experts.filter(i => i.firstname === this.filterName && i.lastname === this.filterFamily);


    }
    , expertFamily() {
      return this.experts.filter(i => i.lastname === this.filterFamily)
    }, expertEmail() {

      return this.experts.filter(i => i.emailAddress === this.filterEmail)

    }, expertRole() {

      return this.experts.filter(i => i.role === this.filterRole)

    }, showAll() {
      this.num = 2;
      this.poping();
      this.experta.push(this.experts.forEach());


    },
    search() {
      this.poping();


      if (this.filterName && this.filterFamily) {
        var r = this.expertFilterFullName();
        r.forEach(r => this.experta.push(r));
      } else if (this.filterName) {
        var x = this.expertFilter();
        x.forEach(x => this.experta.push(x));
      } else if (this.filterFamily) {
        var y = this.expertFamily();
        y.forEach(y => this.experta.push(y));

      } else if (this.filterEmail) {
        if (this.expertFilter() !== this.expert.firstname)
          var z = this.expertEmail();
        z.forEach(z => this.experta.push(z));
      }
      // else if (this.filterRole) {
      //   if (this.expertFilter() !== this.expert.firstname)
      //     var d = this.expertRole();
      //   d.forEach(d => this.experta.push(d));
      // }
      this.num = 1;
      return this.experta = [...new Set(this.experta)];
    }, poping() {
      this.experta = [];
    }
  }, created() {
    this.getAllexpert();

  }
}
</script>

<style scoped>

</style>