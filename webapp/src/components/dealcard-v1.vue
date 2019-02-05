
<!-- Represents one weekend holiday deal card -->
<template>


    
  <!-- <v-layout> -->
    <v-flex xs12 sm6 m4 lg4 xl3>
      <v-card max-width="450" min-width="300">
        <v-img
          :src="'destination-images/' + deal.tripDestination + '.jpg'"
          alt="placeholder"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ deal.tripDestination }}</h3>
          </div>
        </v-card-title>

        
            <!-- START Trip details -->
            <v-list>

                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>event</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        {{deal.departureDay}} {{deal.departureMonthShort}} - 
                        {{deal.returnDay}} {{deal.returnMonthShort}} 
                        ({{ deal.lengthOfStay}} days)
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>flight</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        {{deal.departureCity}} ({{deal.departureAirportCode}}) - 
                        {{deal.destinationCity}} ({{deal.destinationAirportCode}})
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>hotel</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        {{deal.accommodationName}}
                    </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>
                <v-list-tile>
                    <v-list-tile-avatar>
                        <v-icon>local_offer</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <div class="font-weight-bold">£{{deal.priceTotalAllInclusive}} - Total price for 1 adult</div>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
            <!-- END Trip details -->

            <!-- START search modul -->
            <div class="text-xs-center text-sm-center text-lg-center text-xl-center">
                    <a href="https://rosian.org" target="_blank" rel="noopener">
                        <v-btn large color="primary" dark>Search on Rosian</v-btn>
                    </a>
                
            </div>
            <!-- END search modul -->

      </v-card>
    </v-flex>
  <!-- </v-layout> -->

    <!--
    <md-card md-with-hover>
        <md-card-media>
            <img :src="deal.tripDestination + '.jpg'" alt="placeholder">
        </md-card-media>
        <md-card-content>
            <div class="md-title">{{ deal.tripDestination }}</div>
            <div class="md-subhead"><strong>{{ deal.lengthOfStay}} Days
            </strong> ({{deal.departureDay}} {{deal.departureMonthShort}} - {{deal.returnDay}} {{deal.returnMonthShort}})</div>
            <div class="md-subhead"><strong>{{deal.departureCity}} ({{deal.departureAirportCode}})</strong> to
                <strong>{{deal.destinationCity}} ({{deal.destinationAirportCode}})</strong></div>
            <div class="md-subhead">Staying at: {{deal.accommodationName}}</div>

                <strong class="md-headline">£{{deal.priceTotalAllInclusive}}</strong><br>
                Total price for 1 adult<br>
            <div id="treeplantmsg">
                <md-icon id="treeIcon">nature_people</md-icon> We plant {{ Math.floor(deal.priceTotalAllInclusive * 0.1)}} trees
            </div>

            
            <div class="flip-container">
                <div class="flipper">
                    <div class="front"> 
                        <md-button v-on:click="flipMe($event)">Reserve package</md-button>       
                    </div>
                    <div class="back">                 
                        <br>                    
                        <p align="left">You will need to make three separate bookings for your trip:</p>
                        <a target="_blank" :href="deal.urlReturnFlightBook">Flight out (£{{deal.priceFlightOut}})</a> <br>
                        <a target="_blank" :href="deal.urlDepartureFlightBook">Flight back (£{{deal.priceFlightBack}})</a> <br>
                        <a target="_blank" :href="deal.urlHotelBook">Accommodation (£{{deal.priceAccommodation}})</a> <br>
                    </div>
                </div>
            </div>
            

           </md-card-content>
    </md-card>
    -->


</template>

<script>


    export default {
        props: ['deal'],
        components: {

        },
        methods: {
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