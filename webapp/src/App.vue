<template>
  <v-app id="inspire" style="background-color: #fff1f4;">

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


      <h2 style="margin-top:25px;margin-left:17px;margin-right:17px;font-weight:normal;font-size:16px;text-align:center;margin-bottom:10px">
        Departure date</h2>
      <!--
      <v-text-field
            label="Departure date"
            
            style="margin-top:15px;margin-left:17px;margin-right:17px;"
            disabled="true"
          >
      </v-text-field>
      -->

      <v-date-picker 
      v-model="dateSelected" 
      scrollable 
      show-current="false"
      first-day-of-week="1" 
      no-title width="180" 
      :allowed-dates="allowedDates"
      style="padding-left:17px;margin-left:17px;margin-right:20px;padding-right:20px;"
      >
            
            <v-btn style="padding-left:20px;" flat icon 
            small color="primary" @click="dateSelected = null;filterAppliedHandler()">Clear date</v-btn>
            <v-spacer></v-spacer>
            <v-btn style="padding-right:20px;"
            flat icon small color="primary" @click="filterAppliedHandler()">Filter date</v-btn>
      </v-date-picker>

      <v-list style="padding-top:5px;">
        <!--
        <v-list-tile>
          <-- Departure Week Filter --

          
            <v-select
            label="Departure Week"
            prepend-icon="date_range"
            item-text="fText"
            item-value="fval"
            :items="filterDepartureWeek"
            v-model="filterDepartureWeekSelected"
            v-on:input="filterAppliedHandler()"
            >
            </v-select>
            

        </v-list-tile>

        <v-list-tile style="padding-top:20px;">
          <-- Departure Weekday Filter --
            <v-select
            label="Departure Weekday"
            prepend-icon="today"
            item-text="fText"
            item-value="fval"
            :items="filterDepartureWeekday"
            v-model="filterDepartureWeekdaySelected"
            v-on:input="filterAppliedHandler()"
            >
            </v-select>
        </v-list-tile>
        -->

        <v-list-tile style="padding-top:30px;">
          <!-- Departure Filter -->
            <v-select
            label="Departure city"
            prepend-icon="flight_takeoff"
            item-text="fText"
            item-value="fval"
            :items="filterDeparture"
            v-model="filterDepartureSelected"
            v-on:input="filterAppliedHandler()"
            >
            </v-select>
        </v-list-tile>
        <v-list-tile style="padding-top:20px;">
          <!-- Destination Filter -->
            <v-select
            label="Destination city"
            prepend-icon="flight_land"
            item-text="fText"
            item-value="fval"
            :items="filterDestinations"
            v-model="filterDestinationSelected"
            v-on:input="filterAppliedHandler()"
            >
            </v-select>
        </v-list-tile>
        
        <v-list-tile style="padding-top:30px;">
            <!-- Accommodation Class Filter -->
            <v-select
            label="Accommodation class"
            prepend-icon="hotel"
            item-text="fText"
            item-value="fval"
            :items="filterStars"
            v-model="filterStarsSelected"
            v-on:input="filterAppliedHandler()"
            >
            </v-select>
        </v-list-tile>
        <v-list-tile style="padding-top:20px;">
            <!-- Traveller number  Filter -->
            <v-select
            label="Number of travellers"
            prepend-icon="person"
            item-text="fText"
            item-value="fval"
            :items="filterAdult"
            v-model="filterAdultSelected"
            v-on:input="filterAppliedHandler()"
            >
            </v-select>
        </v-list-tile>
        
        <v-list-tile style="padding-top:30px;">
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

      <div class="text-xs-center text-sm-center text-lg-center text-xl-center hidden-lg-and-up">
            <v-btn large color="primary" dark @click.stop="drawer = !drawer">Done</v-btn>           
      </div>

    </v-navigation-drawer>
    <!-- START Nav panel (filters) -->


    <!-- START header -->
    <v-toolbar color="primary" dark fixed app>
      
      <a href="https://rosian.org" target="_blank" rel="noopener">
        <v-img src="https://rosian.org/images/rosian-logo-with-text-horizontal.gif" max-width="130" min-width="80"></v-img>
      </a>

      <v-toolbar-title>Weekends</v-toolbar-title>
      
      <div>
        &nbsp;&nbsp;(Beta)
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <v-icon>filter_list</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <!-- END header -->
    
    
    <!-- START Main content -->
    <v-content>
      <v-container fluid grid-list-lg>
        <v-layout row wrap justify-center align-center>
          
          <dealcardv1 v-for="item in dealsToShow" :key="item.dealId" v-bind:deal="item"></dealcardv1>

        </v-layout>

        <!-- START Load more button -->
        <v-layout row wrap justify-center align-center style="padding-top:30px;">
          <v-btn large :class="showAllDealsCss" @click="displayMoreDeals">
            <v-icon>expand_more</v-icon> Display more deals (we have {{deals.length}} deals)
          </v-btn>
        </v-layout>
        <!-- END Load more button -->

        <!-- START overfiltering message -->
        <v-layout row wrap justify-center align-center style="padding-top:50px;">
        
          <h1 large :class="overFilteringCsss" >
            <v-icon>beach_access</v-icon>
             Sorry, but we don't have a deal matching your search. Try removing some of the filters. 
             <v-icon>beach_access</v-icon>
          </h1>

              <br><br>
             <v-btn large :class="overFilteringCsss" @click="removeAllFilters" justify-center align-center>
              <v-icon>highlight_off</v-icon> Remove all filters
            </v-btn>
        </v-layout>
        <!-- END overfiltering message -->

      </v-container>
    </v-content>
    <!-- END Main content -->
  


    <!-- START Footer -->
    <!--
    <v-footer color="primary" app>
      <span class="white--text" style="padding-left:10px;">Travel the World over the weekends!</span>
    </v-footer> -->
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
      filterDeparture : [{"fId": 0, "fval" : "Any", "fText": "Any" }, {"fId": 1, "fval" : "Glasgow", "fText": "Glasgow" } ],
      filterDepartureWeekday : [{"fId": 0, "fval" : "Any", "fText": "Any" }, {"fId": 1, "fval" : "Thu", "fText": "Thu" } ],
      filterStars : [{"fId": 0, "fval" : "Any", "fText": "Any" }],
      filterDepartureWeek : [{"fId": 0, "fval" : "Any", "fText": "Any" }, 
                              {"fId": 1, "fval" : "This week", "fText": "This week" },
                              {"fId": 2, "fval" : "Next week", "fText": "Next week" },
                              {"fId": 3, "fval" : "Two weeks ahead", "fText": "Two weeks ahead"},
                              {"fId": 4, "fval" : "Three weeks ahead", "fText": "Three weeks ahead" }],
      filterAdult : ["Any"],
      filterDepWeek : ["Any"],
      //filterDestinations : ["Any"],
      filterDestinationSelected : "Any",
      filterDepartureSelected : "Any",
      filterDepartureWeekdaySelected : "Any",
      filterStarsSelected : "Any",
      filterAdultSelected : "Any",
      filterDepWeekSelected: "Any",
      filterDepartureWeekSelected: "Any",

      filterBudget : [{"fId": 0, "fval" : 0, "fText": "Any" },
                        {"fId": 1, "fval" : 1, "fText": "£" },
                        {"fId": 2, "fval" : 2, "fText": "££" },
                        {"fId": 3, "fval" : 3, "fText": "£££" },
                        {"fId": 4, "fval" : 4, "fText": "££££" },
                        {"fId": 5, "fval" : 5, "fText": "£££££" }],
      filterBudgetSelected : 0,


      numberOfDealsToShowOnFirstPageLoad : 14,
      numDealsToShowNow : 14,
      defaultDealsNumberPerPage : 14,
      showAllDeals : false,
      showAllDealsCss: "", //set to "d-none" to hide the "how more deals" button. Should be in sync with "showAllDeals" boolean.
      overFilteringCsss : "d-none", //hides the overfiltering message if contains "d-none" 

      calendarDepDates : ["2019-03-08", "2019-03-14", "2019-03-15"],
      dateSelected: null,


      /*temp for calendar test
      menu: false,
      modal: false,
      menu2: false*/

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

                /* Now that we have the deals loaded, lets display some of them */
                if(this.showAllDeals === true)
                {
                    this.dealsToShow = JSON.parse(JSON.stringify(data));
                }
                else
                {
                    var x = JSON.parse(JSON.stringify(data));
                    this.dealsToShow = x.slice(0,this.numberOfDealsToShowOnFirstPageLoad);
                }


                this.refreshDestinationFilterOptions();
                this.refreshDepartureFilterOptions();
                //this.refreshDepartureWeekdayFilterOptions();
                this.refreshAccommodationClassFilterOptions();
                this.refreshAdultFilterOptions();
                this.refreshDepartureCalendarOptions();
                
                //this.refreshDepWeekFilterOptions();

                this.calculateDealPriceCategories();
                //console.log('see data:' , data)
                //console.log('see displayed data: ', this.dealsToShow)
            })
    },


   methods: 
   {

        refreshDepartureCalendarOptions : function()
        {
            var depdates = new Set()

            for (var i in this.deals) {
                depdates.add(this.deals[i].departDateYYYYMMDD);
            }

            this.calendarDepDates = Array.from(depdates);
        },

        /*Returns true if the date is allowed for departure date selection */
        allowedDates: function(val)
        {
            return this.calendarDepDates.indexOf(val) !== -1;
        },

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
            var budgetValue = 0;

            for (var i in this.deals) {
                this.deals[i].budgetBucket = currentbucket;
                bucketcounter++;
                if(bucketcounter == (bucketsize - 1))
                {
                    //Adding label for the filter ranges
                    this.filterBudget[currentbucket]['fText'] = "£" + budgetValue.toString() + " - £" + this.deals[i].priceTotalAllInclusive.toString();
                    budgetValue = this.deals[i].priceTotalAllInclusive;
                  
                    currentbucket++;
                    bucketcounter = 0;
                }
                //console.log(currentbucket + " - " + bucketcounter + " --- " + this.deals[i].budgetBucket + " ---" + this.deals[i].priceTotalAllInclusive)
            }

        },

        refreshDestinationFilterOptions : function()
        {
            var dests = new Set()
            //dests.add("Any")

            for (var i in this.deals) {
                dests.add(this.deals[i].destinationCity)
            }

            //Sorting alphabetically, adds "Any" at the beginning
            var x = Array.from(dests).sort();
            x.unshift("Any");
            dests = new Set(x);

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

        refreshDepartureFilterOptions : function()
        {
            var deps = new Set()
            deps.add("Any")

            for (var i in this.deals) {
                deps.add(this.deals[i].departureCity)
            }

            //Sorting alphabetically
            deps = new Set(Array.from(deps).sort());

            var newFiltDeps = [];
            i = 0;
            for (let item of deps)
            {
                newFiltDeps.push({"fId":i, "fval": item, "fText" : item});
                //newFiltDests.push(item);
                i++;
            }

            this.filterDeparture = newFiltDeps;
        },

        refreshAccommodationClassFilterOptions : function()
        {
            var stars = new Set()
            stars.add("Any")

            for (var i in this.deals) {
                stars.add(this.deals[i].accommodationStarRating)
            }

            //Sorting alphabetically, adds "Any" at the beginning
            var x = Array.from(stars).sort();
            x.unshift("Any");
            stars = new Set(x);

            var newFiltStars = [];
            i = 0;
            for (let item of stars)
            {
                newFiltStars.push({"fId":i, "fval": item, "fText" : item});
                //newFiltDests.push(item);
                i++;
            }

            this.filterStars = newFiltStars;
        },



        refreshDepartureWeekdayFilterOptions : function()
        {
            var days = new Set()

            for (var i in this.deals) {
                days.add(this.deals[i].departureDayEn)
            }

            //Sorting as Any-Thu-Fri-Sat
            var x = ["Any"]
            if(days.has("Thu"))
                x.push("Thu")
            if(days.has("Fri"))
                x.push("Fri")
            if(days.has("Sat"))
                x.push("Sat")
            
            days = new Set(x);

            var newFiltDays = [];
            i = 0;
            for (let item of days)
            {
                newFiltDays.push({"fId":i, "fval": item, "fText" : item});
                i++;
            }

            this.filterDepartureWeekday = newFiltDays;
        },

        refreshAdultFilterOptions : function()
        {
            var adults = new Set()

            for (var i in this.deals) {
                adults.add(this.deals[i].numberOfAdults)
            }

            //Sorting as Any-Thu-Fri-Sat
            var x = ["Any"]
            if(adults.has("1"))
                x.push("1")
            if(adults.has("2"))
                x.push("2")
            
            adults = new Set(x);

            var newFiltAdults = [];
            i = 0;
            for (let item of adults)
            {
                newFiltAdults.push({"fId":i, "fval": item, "fText" : item});
                i++;
            }

            this.filterAdult= newFiltAdults;
        },
        

        //Called when user presses "show all deals" button. It will display all deals stored. 
        displayAllDealsOnPage : function()
        {
          this.showAllDeals = true;
          this.showAllDealsCss = "d-none";
          this.dealsToShow = JSON.parse(JSON.stringify(this.deals));
        },

        filterAppliedHandler : function(setPageNumberToDefault=true)
        {
            
            if(setPageNumberToDefault == true)
            {
              this.numDealsToShowNow = this.defaultDealsNumberPerPage;
            }

            let newdisp = this.deals.slice();

            /*
            Filtering based on the selected destination
             */
            //console.log("Filter handler called. Value: ", this.filterDestinationSelected);
            /*
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
            }*/

            /* Filtering based on destination city */
            if(this.filterDestinationSelected!== "Any")
            {
              newdisp = newdisp.filter(a => a.destinationCity == this.filterDestinationSelected);
            }

            /* Filtering based on departure city */
            if(this.filterDepartureSelected!== "Any")
            {
              newdisp = newdisp.filter(a => a.departureCity == this.filterDepartureSelected);
            }

            /*
            Filtering based on budget.
            Deals grouped into 5 equal size bucket based on their total price.
            */
            if(this.filterBudgetSelected !== 0) //Check for "Any"
            {
                newdisp = newdisp.filter(a => a.budgetBucket == this.filterBudgetSelected);
            }

            /* Filtering based on accommodation class (stars) */
            if(this.filterStarsSelected !== "Any") //Check for "Any"
            {
                newdisp = newdisp.filter(a => a.accommodationStarRating == this.filterStarsSelected);
            }

            /* Filtering based on departure weekday (e.g Fri) */
            /*
            if(this.filterDepartureWeekdaySelected !== "Any") //Check for "Any"
            {
                newdisp = newdisp.filter(a => a.departureDayEn == this.filterDepartureWeekdaySelected);
            }
            */

           //Filtering based on departure DATE
           if(this.dateSelected !== null) //Check for "Any"
            {
                newdisp = newdisp.filter(a => a.departDateYYYYMMDD == this.dateSelected);
            }


            /* Filtering based on number of travellers */
            if(this.filterAdultSelected !== "Any") //Check for "Any"
            {
                newdisp = newdisp.filter(a => a.numberOfAdults == this.filterAdultSelected);
            }


            //Expects input as "1" for day and "Jan" for month
            // Returns the week of the year
            // This may have a bug around new year time
            /*
            function getWeekOfYear(day, month, currentWeek=false)
            {
                var d;
                var thisyear = (new Date()).getFullYear();
                if(currentWeek == false)
                {
                  //d = Date(Date.parse(month +" "+ day +", " + thisyear.toString() ) );
                  var s = month + " " + day + ", " + thisyear.toString();
                  d = new Date(s);
                }
                else
                {
                    d = new Date();
                }
                  

                var onejan = new Date(thisyear,0,1);
                var result = Math.ceil((((d - onejan) / 86400000) + onejan.getDay()+1)/7);

                //console.log('WeekOfTheYear: ', day,"-",month," ",currentWeek," - result: ", result, "; d=", d);
                return result
            }*/

            /* Filtering based on departure week */
            /*
            if(this.filterDepartureWeekSelected !== "Any") //Check for "Any"
            {
                if(this.filterDepartureWeekSelected == "This week")
                  newdisp = newdisp.filter(a => getWeekOfYear(a.departureDay,a.departureMonthShort,false) == getWeekOfYear(0,0,true) );
                if(this.filterDepartureWeekSelected == "Next week")
                  newdisp = newdisp.filter(a => getWeekOfYear(a.departureDay,a.departureMonthShort,false) == (getWeekOfYear(0,0,true)+1) );
                if(this.filterDepartureWeekSelected == "Two weeks ahead")
                  newdisp = newdisp.filter(a => getWeekOfYear(a.departureDay,a.departureMonthShort,false) == (getWeekOfYear(0,0,true)+2) );
                if(this.filterDepartureWeekSelected == "Three weeks ahead")
                  newdisp = newdisp.filter(a => getWeekOfYear(a.departureDay,a.departureMonthShort,false) == (getWeekOfYear(0,0,true)+3) );
            }*/


            //!!!!! SORTING START !!!!!!!!/
            //Applying basic sorting: each destination's cheapest option first
            var de = []
            this.filterDestinations.forEach(function(e) 
            {
                if(e['fText'] !== "Any"){
                de.push(e['fText']);
                }
            });
            var orig_length = de.length;
            for(var ix=0;ix<orig_length;ix++)
            {
                //Is this destination available in the current results
                if(newdisp.filter(a => a.destinationCity == de[ix]).length>0)
                {
                    //console.log('Search for:  ', de[ix]);
                    //FIND THE CHEAPEST AND MOVE IT TO THE FIRST PLACE
                    // We know that items are already sorted by price right now
                    for(var z=ix;z<newdisp.length;z++)
                    {
                      if(newdisp[z].destinationCity == de[ix])
                      {
                        //console.log('Found ', de[ix]);
                        //Found it, let's swap with what we have now
                        var stemp = newdisp[ix];
                        newdisp[ix] = newdisp[z];
                        newdisp[z] = stemp;
                        break;
                      }
                    }
                }
                else
                {
                  continue;
                }
            }
            /*
            for(var i=0;i<orig_length-1;i++)
              //Sorry for bubbling, this is very little N though :)
            {
                for(var j=i+1;j<orig_length;j++)
                {
                  if(newdisp[j].priceTotalAllInclusive < newdisp[i].priceTotalAllInclusive)
                  {
                        stemp = newdisp[i];
                        newdisp[i] = newdisp[j];
                        newdisp[j] = stemp;
                  }
                }
              }*/
            //!!!!! SORTING END !!!!!!!!/

            /* Update visible list of deals and Apply pagination */
            //console.log("Newdisp length: ", newdisp.length)
            //console.log("Newdisp spliced length: ", newdisp.slice(0,this.numDealsToShowNow).length);
            this.dealsToShow = newdisp.slice(0,this.numDealsToShowNow);

            /* Handle if no deals suit the filtering */
            if(this.dealsToShow.length == 0)
            {
                this.showAllDealsCss = "d-none"; // Hide the "show more buttons"
                this.overFilteringCsss = ""; //Display the overfiltering message
            }
            else
            {
                this.showAllDealsCss = "";
                this.overFilteringCsss = "d-none"
            }

            /* Handle display or hide pagination button */
            if(this.numDealsToShowNow >= (newdisp.length-1))
            {
                this.showAllDealsCss = "d-none";
            }
            else
            {
                this.showAllDealsCss = "";
            }
        },

        removeAllFilters : function()
        {
          /*
            this.filterAdultSelected = this.filterAdult[0];
            this.filterDestinationSelected = this.filterDestinations[0];
            this.filterDepartureSelected = this.filterDeparture[0];
            this.filterDepartureWeekdaySelected = this.filterDepartureWeekday[0];
            this.filterStarsSelected = this.filterStars[0];
            this.filterDepWeekSelected = this.filterDepWeek[0];
            this.filterDepartureWeekSelected = this.filterDepartureWeek[0];
            this.filterBudgetSelected = this.filterBudget[0];
          */

            this.filterAdultSelected = "Any";
            this.filterDestinationSelected = "Any";
            this.filterDepartureSelected = "Any";
            this.filterDepartureWeekdaySelected = "Any";
            this.filterStarsSelected = "Any";
            this.filterDepWeekSelected = "Any";
            this.filterDepartureWeekSelected = "Any";
            this.filterBudgetSelected = 0;


            this.filterAppliedHandler();
        },


        /* Displays 20 more deals on the screen */
        displayMoreDeals : function()
        {
          this.numDealsToShowNow += 20;
          var x = JSON.parse(JSON.stringify(this.deals));
          //console.log("x length: ", x.length);
          if(this.numDealsToShowNow > (x.length-1))
          {
            this.numDealsToShowNow = (x.length-1);
            this.showAllDeals = true;
            this.showAllDealsCss = "d-none";
          }
          else
          {
            this.showAllDeals = false;
            this.showAllDealsCss = "";
          }

          this.filterAppliedHandler(false);
        }

   },




    props: {
      source: String
    }

    
}
</script>
