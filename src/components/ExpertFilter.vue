<template>
  <div>
    <div dir="rtl">
      <div style="width: 50%;float:left">
        <vs-input type="text"
                  style=" margin-top:10%; margin-right: 10%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  placeholder="name"
                  multiple
                  :data="experts"
                  v-model="filterName"
                  label-placeholder="filterName"
                  :maxlength="12"></vs-input>
        <vs-input type="text" style=" margin-right: 10%; width: 40%"
                  primary
                  placeholder="family"
                  color="rgb(59,222,200)"
                  required
                  multiple
                  search
                  :data="experts"
                  v-model="filterFamily"
                  label-placeholder="filterFamily"
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

                  v-model="filterscore"
                  placeholder="score"
                  label-placeholder="score"
                  :maxlength="12">
        </vs-input>
        <vs-input type="text"
                  style="margin-right: 50%; width: 40%"
                  primary
                  color="rgb(59,222,200)"
                  required
                  multiple
                  search
                  :data="experts"
                  v-model="filterEmail"
                  label-placeholder="Email"
                  :maxlength="12"></vs-input>

      </div>
      <div style="text-align: center">
        <vs-button v-if="filterName||filterEmail||filterFamily||filterscore " @click="search()"
                   style="margin-right: 1%"> search
        </vs-button>

        <vs-button
            v-if="filterName===expert.firstname && filterFamily===expert.lastname && filterEmail===expert.emailAddress && filterscore===expert.score"
            @click="showAll();poping()" style="margin-right: 1%"> searchall
        </vs-button>

      </div>

      <div style="width: 80%;margin-right: 10%">
        <vs-table v-if="num===1"
                  dir="rtl"
                  pagination
                  max-items="3"
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
              emailAddress
            </vs-th>
            <vs-th sort-key="score" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
              score
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
                {{ expert[expertid].score }}
              </vs-td>


            </vs-tr>
          </template>


        </vs-table>

      </div>
      <div style="width: 80%;margin-right: 10%">
        <vs-table v-if="num===2"
                  pagination
                  max-items="3"
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
              emailAddress
            </vs-th>
            <vs-th sort-key="score" style="font-size: x-large ; background-color: #c6f7ff" dir="rtl">
              score
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
                {{ expert[expertid].score }}
              </vs-td>


            </vs-tr>


          </template>


        </vs-table>

      </div>

    </div>


  </div>

</template>

<script>


import ExpertDataService from "@/service/ExpertDataService";

export default {

  name: "FormInput",
  components: {},
  data() {
    return {
      Array: [],
      selected: [],
      expertsa: [],
      experts: [
      ],
      expert: {
        id: null,
        firstname: "",
        lastname: "",
        emailAddress: "",
        score:''
      },
      num: 0,
      a: 3,
      filterName: '',
      filterFamily: '',
      filterEmail: '',
      filterscore: '',
    }
  }, methods: {
    getAllexpert() {
      ExpertDataService.getAllexperts().then((response) => {
        this.experts = response.data;
        console.log(JSON.stringify(response) + "--------")
      });
    },
    adding() {
      this.Array.add('sa');
      console.log(Array.length);
    },

    expertsFilter() {
      return this.experts.filter(i => i.firstname === this.filterName);


    }, expertsFilterFullName() {
      return this.experts.filter(i => i.firstname === this.filterName && i.lastname === this.filterFamily);


    }
    , expertsFamily() {
      return this.experts.filter(i => i.lastname === this.filterFamily)
    }, expertsscore() {
      return this.experts.filter(i => i.score === this.filterscore)
    }, expertsEmail() {

      return this.experts.filter(i => i.emailAddress === this.filterEmail)

    }, showAll() {
      this.num = 2;
      this.poping();
      this.expertsa.push(this.experts.forEach());


    },
    search() {
      this.poping();
      // this.showAll();

      if (this.filterName && this.filterFamily) {
        var r = this.expertsFilterFullName();
        r.forEach(r => this.expertsa.push(r));
      } else if (this.filterName) {
        var x = this.expertsFilter();
        x.forEach(x => this.expertsa.push(x));
      } else if (this.filterFamily) {
        var y = this.expertsFamily();
        y.forEach(y => this.expertsa.push(y));

      } else if (this.filterEmail) {
        // this.poping();
        if (this.expertsFilter() !== this.expert.firstname)
          var z = this.expertsEmail();
        z.forEach(z => this.expertsa.push(z));
      } else if (this.filterscore) {
        // this.poping();
        if (this.expertsFilter() !== this.expert.firstname)
          var w = this.expertsscore();
        w.forEach(w => this.expertsa.push(w));
      }
      this.num = 1;
      return this.expertsa = [...new Set(this.expertsa)];


    }, poping() {
      this.expertsa = [];

    }
  }
  , created() {
    this.getAllexpert();

  },
  computed: {},


}


</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #7c7bcc !important;

}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 480px;
  margin-left: 10%;
  margin-right: 10%;

}

.testdiv {
  width: 40px;
  height: 25px;
}

* {
  box-sizing: border-box;
}

input:required:invalid {
  border-color: red;
}
</style>