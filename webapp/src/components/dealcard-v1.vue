
<!-- Represents one weekend holiday deal card -->
<template>


    
  <!-- <v-layout> -->
    <v-flex xs12 sm6 m4 lg4 xl3>
      <v-card max-width="450" min-width="300">
        <v-img
          :src="'destination-images/' + deal.destinationCity + '.jpg'"
          alt="placeholder"
        >
                <v-layout fill-height column ma-0 style="background-image: linear-gradient(to top, rgba(0, 0, 0, 1) 4%, transparent 72px);">
                    <v-spacer></v-spacer>
                    <v-flex class="text-xs-right" shrink >
                         <h2 class="headline mb-0" style="color: #FFEBEE;margin-bottom:0px; " >{{deal.destCountry}}</h2>
                    </v-flex>
                </v-layout>
            
        </v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ deal.destinationCity }}</h3>
          </div>
        </v-card-title>

        
            <!-- START Trip details -->
            <v-list>

                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>event</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        {{deal.departureDay}} {{deal.departureMonthShort}}  - 
                        {{deal.returnDay}} {{deal.returnMonthShort}} 
                        ({{deal.departureDayEn}} - {{deal.returnDayEn}})
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>flight</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        {{deal.departureCity}}  - 
                        {{deal.destinationCity}} ({{deal.departureAirportCode}} - {{deal.destinationAirportCode}})
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>hotel</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        {{deal.accommodationName}} ({{deal.accommodationStarRating}})
                    </v-list-tile-content>
                </v-list-tile>

                
                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>{{travellerIcon}}</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <div>{{deal.numberOfAdults}} Adult {{travellerString}}</div>
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>local_offer</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <div class="font-weight-bold">£{{deal.priceTotalAllInclusive}} - Total trip price</div>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
            <!-- END Trip details -->

            <!-- START search modul -->
            <!-- General search button 
            <div class="text-xs-center text-sm-center text-lg-center text-xl-center">
                    <a href="https://rosian.org" target="_blank" rel="noopener">
                        <v-btn large color="primary" dark>Search on Rosian</v-btn>
                    </a>
                
            </div> -->
            <div class="text-xs-center text-sm-center text-lg-center text-xl-center">
                    <a :href="`${deal.flightBookingLink}`" target="_blank" rel="noopener">
                        <v-btn large color="primary" dark>Book flights (£{{deal.flightTotalPrice}})</v-btn>
                    </a>
                    <a :href="`${deal.hotelBookingLink}`" target="_blank" rel="noopener">
                        <v-btn large color="primary" dark>Book Accommodation (£{{deal.priceAccommodation}})</v-btn>
                    </a>
            </div>
            <!-- END search modul -->

      </v-card>
    </v-flex>
  <!-- </v-layout> -->


</template>

<script>


    export default {
        props: ['deal'],
        components: {

        },
        methods: {
        },

        computed : {
            travellerString : function()
            {
                if(this.deal.numberOfAdults.toString() == "1")
                    return "traveller"
                else
                    return "travellers"
            },
            travellerIcon : function()
            {
                if(this.deal.numberOfAdults.toString() == "1")
                    return "person"
                else
                    return "people"
            }

        },


        name: "dealcardv1"
    }
</script>

<style scoped>
    .md-card {
        width: 320px;
        margin-bottom: 20px;

    display: inline-block;
        display: inline-grid;

        vertical-align: top;



    }
    .md-subhead
    {
        text-align: left;
    }
    .md-card-header
    {
        text-align: left;
    }
    .md-card-content
    {
        text-align: right;
    }
    .expcont
    {
        text-align: left;
    }
    .expandbtn
    {
        text-align: right;
    }

    #treeplantmsg{
        color: darkgreen;
        font-weight: bold;
        padding-top: 3px;

    }
    #treeIcon{
        color: green;
    }
</style>