<template>
  <v-app id="inspire" style="background-color: #FFEBEE;">

    <!-- START Nav panel (filters) -->
    <v-navigation-drawer v-model="drawer" width="250" fixed right clipped-right app style="background-color: #FFEBEE;">     
      
      <v-toolbar  dark style="background-color: #ca125a;">
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Filters
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

      <v-list style="padding-top:20px;">
        <v-list-tile>
          <!-- Destination Filter -->
            <v-select
            label="Destination"
            prepend-icon="flight"
            item-text="fText"
            item-value="fval"
            :items="filterDestinations"
            v-model="filterDestinationSelected"
            v-on:input="filterAppliedHandler()"
            >
            </v-select>
        </v-list-tile>
        <v-list-tile style="padding-top:20px;">
            <!-- Budget Filter -->
            <v-select
            label="Budget"
            prepend-icon="local_offer"
            item-text="fText"
            item-value="fval"
            :items="filterBudget"
            v-model="filterBudgetSelected"
            v-on:input="filterAppliedHandler()"
            >
            </v-select>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <!-- START Nav panel (filters) -->


    <!-- START header -->
    <v-toolbar color="primary" dark fixed app>
      
      
      <v-img src="https://rosian.org/images/rosian-logo-with-text-horizontal.gif" max-width="130" min-width="80"></v-img>
      
      <v-toolbar-title>Weekends</v-toolbar-title>
      
      <div>
        &nbsp;&nbsp;(Beta)
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <!-- END header -->
    
    
    <!-- START Main content -->
    <v-content>
      <v-container fluid grid-list-lg>
        <v-layout row wrap justify-center align-center>
          
          <dealcardv1 v-for="item in dealsToShow" :key="item.dealId" v-bind:deal="item"></dealcardv1>
          
        </v-layout>
      </v-container>
    </v-content>
    <!-- END Main content -->



    <!-- START Footer -->
    <v-footer color="primary" app>
      <span class="white--text">Travel the World over the weekends!</span>
    </v-footer>
    <!-- END Footer -->

  </v-app>
</template>



<!-- SCRIPT -->
<script>


import dealcardv1 from "./components/dealcard-v1";

export default {
  name: 'App',
  components: {
    dealcardv1
  },


  data: () => ({
      drawer: null,
      "deals": [],
      "dealsToShow" : [],
      filterDestinations :  [{"fId": 0, "fval" : "Any", "fText": "Any" }, {"fId": 1, "fval" : "Budapest", "fText": "Budapest" } ],
      //filterDestinations : ["Any"],
      filterDestinationSelected : "Any",

      filterBudget : [{"fId": 0, "fval" : 0, "fText": "Any" },
                        {"fId": 1, "fval" : 1, "fText": "£" },
                        {"fId": 2, "fval" : 2, "fText": "££" },
                        {"fId": 3, "fval" : 3, "fText": "£££" },
                        {"fId": 4, "fval" : 4, "fText": "££££" },
                        {"fId": 5, "fval" : 5, "fText": "£££££" }],
      filterBudgetSelected : 0,
    }),

      created(){

        var myHeaders = new Headers();
        //Asking for content compression. This does not work with safari as it does not support
        //changing the header content in the request.
        if(myHeaders.has('Accept-Encoding'))
        {
            myHeaders.set('Accept-Encoding', 'deflate')
        }
        else
        {
            myHeaders.append('Accept-Encoding', 'deflate');
        }

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        var myRequest = new Request('https://weekend.rosian.org/deals.default.json', myInit);
        
        fetch(myRequest)
            .then(response => response.json())
            .then((data) => {
                this.deals = data;
                this.dealsToShow = JSON.parse(JSON.stringify(data));

                this.refreshDestinationFilterOptions()
                this.calculateDealPriceCategories()
                //console.log('see data:' , data)
                //console.log('see displayed data: ', this.dealsToShow)
            })
    },


   methods: 
   {

        /*
         Assigns a budget category for each trip which the user can apply filter to
        */
        calculateDealPriceCategories: function()
        {
            //Sort deals by total price ascending
            this.deals.sort((a,b) => a.priceTotalAllInclusive - b.priceTotalAllInclusive)

            var dealcount = this.deals.length;
            var bucketcount = this.filterBudget.length - 1; //discounting "Any" category

            var bucketsize = Math.round(dealcount/bucketcount)

            var currentbucket = 1;
            var bucketcounter = 0;
            for (var i in this.deals) {
                this.deals[i].budgetBucket = currentbucket;
                bucketcounter++;
                if(bucketcounter == bucketsize)
                {
                    currentbucket++;
                    bucketcounter = 0;
                }
                //console.log(currentbucket + " - " + bucketcounter + " --- " + this.deals[i].budgetBucket + " ---" + this.deals[i].priceTotalAllInclusive)
            }

        },

        refreshDestinationFilterOptions : function()
        {
            var dests = new Set()
            dests.add("Any")

            for (var i in this.deals) {
                dests.add(this.deals[i].tripDestination)
            }


            var newFiltDests = [];
            i = 0;
            for (let item of dests)
            {
                newFiltDests.push({"fId":i, "fval": item, "fText" : item});
                //newFiltDests.push(item);
                i++;
            }

            this.filterDestinations = newFiltDests;
        },

        filterAppliedHandler : function()
        {

            let newdisp = [];

            /*
            Filtering based on the selected destination
             */
            //console.log("Filter handler called. Value: ", this.filterDestinationSelected);
            if(this.filterDestinationSelected !== "Any")
            {
                for (let i in this.deals) {
                    if (this.deals[i].tripDestination === this.filterDestinationSelected) {
                        newdisp.push(this.deals[i]);
                    }
                }
            } else
            {
                newdisp = this.deals
            }

            /*
            Filtering based on budget.
            Deals grouped into 5 equal size bucket based on their total price.
            */
            if(this.filterBudgetSelected !== 0) //Check for "Any"
            {
                newdisp = newdisp.filter(a => a.budgetBucket == this.filterBudgetSelected);
            }

            this.dealsToShow = newdisp;
        }

   },




    props: {
      source: String
    }

    
}
</script>
