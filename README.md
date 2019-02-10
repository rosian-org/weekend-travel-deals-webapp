# Rosian Weekends
Rosian Weekends allows you to browse 'weekend city break' type holidays. 

# Screenshot
<img src="https://weekend.rosian.org/screenshot-git.png" width="350">

# Tech stack & Features
- Progressive Web App (PWA), Single page
- Vue.JS
- Vuetify (Material Design)
- Babel
- Filters: Departure week/weekday, origin, destination, accommodation class, number of travellers, budget


# Assets
- The project uses public domain images from commons.wikimedia.org and wikipedia.org for the destination images.
- Rosian's logo also included in the source code, but we do not provide you license to use it. (it serves as a placeholder for your logo)

# Status
Under active development (as of Feb 2019). Your contribution is welcomed!


# Data source
- The travel deals data is provided by www.rosian.org .
- We are in the process of open-sourcing the deal generator algorithm, watch this space.
- Example data source you can use:

```json
[
{"accommodationStarRating": "0 stars",
"destinationCity": "Barcelona",
"departureCity": "London", 
"accommodationName": "Urbany Hostels Barcelona", 
"priceAccommodation": "27", 
"priceFlightBack": "30", 
"priceFlightOut": "33", 
"flightTotalPrice": "63", 
"returnMonthShort": "Mar", 
"priceTotalAllInclusive": "90", 
"departureMonthShort": "Mar", 
"returnDay": "4", 
"returnDayEn": "Mon", 
"departureDay": "2", 
"departureDayEn": "Sat", 
"lengthOfStay": "2", 
"departureAirportCode": "LTN", 
"destinationAirportCode": "BCN", 
"numberOfAdults": "1", 
"destCountry": "Spain", 
"flightBookingLink": "https://travel.rosian.org/flights/LON0203BCN04031", 
"hotelBookingLink": "https://travel.rosian.org/hotels?checkIn=2019-03-02&checkOut=2019-03-04&adults=1&children=&destination=Barcelona&cityId=3196&language=en_us&currency=gbp&locale=en&marker=206786%%26s%%3Dprice",
"dealId": "LON0203BCN04031-90"
}, 
{...}]
```
