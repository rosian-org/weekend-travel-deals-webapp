(function(e){function t(t){for(var r,n,s=t[0],o=t[1],d=t[2],f=0,u=[];f<s.length;f++)n=s[f],l[n]&&u.push(l[n][0]),l[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);c&&c(t);while(u.length)u.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var o=a[s];0!==l[o]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},l={app:0},i=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"19b2":function(e,t,a){},"549a":function(e,t,a){"use strict";var r=a("19b2"),l=a.n(r);l.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),l=a("bb71");a("da64");r["a"].use(l["a"],{iconfont:"md",theme:{primary:"#ca125a",secondary:"#FFEBEE",accent:"#ca125a",error:"#ca125a"}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{"background-color":"#fff1f4"},attrs:{id:"inspire"}},[a("v-navigation-drawer",{staticStyle:{"background-color":"#FFEBEE"},attrs:{width:"250",fixed:"",right:"","clipped-right":"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-toolbar",{staticStyle:{"background-color":"#ca125a"},attrs:{dark:""}},[a("v-list",[a("v-list-tile",[a("v-list-tile-title",{staticClass:"title"},[e._v("\n          Filters\n        ")])],1)],1)],1),a("h2",{staticStyle:{"margin-top":"25px","margin-left":"17px","margin-right":"17px","font-weight":"normal","font-size":"16px","text-align":"center","margin-bottom":"10px"}},[e._v("\n      Departure date")]),a("v-date-picker",{staticStyle:{"padding-left":"17px","margin-left":"17px","margin-right":"20px","padding-right":"20px"},attrs:{scrollable:"","show-current":"false","first-day-of-week":"1","no-title":"",width:"180","allowed-dates":e.allowedDates},model:{value:e.dateSelected,callback:function(t){e.dateSelected=t},expression:"dateSelected"}},[a("v-btn",{staticStyle:{"padding-left":"20px"},attrs:{flat:"",icon:"",small:"",color:"primary"},on:{click:function(t){e.dateSelected=null,e.filterAppliedHandler()}}},[e._v("Clear date")]),a("v-spacer"),a("v-btn",{staticStyle:{"padding-right":"20px"},attrs:{flat:"",icon:"",small:"",color:"primary"},on:{click:function(t){e.filterAppliedHandler()}}},[e._v("Filter date")])],1),a("v-list",{staticStyle:{"padding-top":"5px"}},[a("v-list-tile",{staticStyle:{"padding-top":"30px"}},[a("v-select",{attrs:{label:"Departure city","prepend-icon":"flight_takeoff","item-text":"fText","item-value":"fval",items:e.filterDeparture},on:{input:function(t){e.filterAppliedHandler()}},model:{value:e.filterDepartureSelected,callback:function(t){e.filterDepartureSelected=t},expression:"filterDepartureSelected"}})],1),a("v-list-tile",{staticStyle:{"padding-top":"20px"}},[a("v-select",{attrs:{label:"Destination city","prepend-icon":"flight_land","item-text":"fText","item-value":"fval",items:e.filterDestinations},on:{input:function(t){e.filterAppliedHandler()}},model:{value:e.filterDestinationSelected,callback:function(t){e.filterDestinationSelected=t},expression:"filterDestinationSelected"}})],1),a("v-list-tile",{staticStyle:{"padding-top":"30px"}},[a("v-select",{attrs:{label:"Accommodation class","prepend-icon":"hotel","item-text":"fText","item-value":"fval",items:e.filterStars},on:{input:function(t){e.filterAppliedHandler()}},model:{value:e.filterStarsSelected,callback:function(t){e.filterStarsSelected=t},expression:"filterStarsSelected"}})],1),a("v-list-tile",{staticStyle:{"padding-top":"20px"}},[a("v-select",{attrs:{label:"Number of travellers","prepend-icon":"person","item-text":"fText","item-value":"fval",items:e.filterAdult},on:{input:function(t){e.filterAppliedHandler()}},model:{value:e.filterAdultSelected,callback:function(t){e.filterAdultSelected=t},expression:"filterAdultSelected"}})],1),a("v-list-tile",{staticStyle:{"padding-top":"30px"}},[a("v-select",{attrs:{label:"Budget","prepend-icon":"local_offer","item-text":"fText","item-value":"fval",items:e.filterBudget},on:{input:function(t){e.filterAppliedHandler()}},model:{value:e.filterBudgetSelected,callback:function(t){e.filterBudgetSelected=t},expression:"filterBudgetSelected"}})],1)],1),a("div",{staticClass:"text-xs-center text-sm-center text-lg-center text-xl-center hidden-lg-and-up"},[a("v-btn",{attrs:{large:"",color:"primary",dark:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("Done")])],1)],1),a("v-toolbar",{attrs:{color:"primary",dark:"",fixed:"",app:""}},[a("a",{attrs:{href:"https://rosian.org",target:"_blank",rel:"noopener"}},[a("v-img",{attrs:{src:"https://rosian.org/images/rosian-logo-with-text-horizontal.gif","max-width":"130","min-width":"80"}})],1),a("v-toolbar-title",[e._v("Weekends")]),a("div",[e._v("\n        (Beta)\n    ")]),a("v-spacer"),a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[a("v-icon",[e._v("filter_list")])],1)],1),a("v-content",[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},e._l(e.dealsToShow,function(e){return a("dealcardv1",{key:e.dealId,attrs:{deal:e}})}),1),a("v-layout",{staticStyle:{"padding-top":"30px"},attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[a("v-btn",{class:e.showAllDealsCss,attrs:{large:""},on:{click:e.displayMoreDeals}},[a("v-icon",[e._v("expand_more")]),e._v(" Display more deals (we have "+e._s(e.deals.length)+" deals)\n        ")],1)],1),a("v-layout",{staticStyle:{"padding-top":"50px"},attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[a("h1",{class:e.overFilteringCsss,attrs:{large:""}},[a("v-icon",[e._v("beach_access")]),e._v("\n           Sorry, but we don't have a deal matching your search. Try removing some of the filters. \n           "),a("v-icon",[e._v("beach_access")])],1),a("br"),a("br"),a("v-btn",{class:e.overFilteringCsss,attrs:{large:"","justify-center":"","align-center":""},on:{click:e.removeAllFilters}},[a("v-icon",[e._v("highlight_off")]),e._v(" Remove all filters\n          ")],1)],1)],1)],1)],1)},n=[],s=(a("ac6a"),a("5d73")),o=a.n(s),d=(a("6b54"),a("55dd"),a("774e")),c=a.n(d),f=a("b6d0"),u=a.n(f),p=a("f499"),v=a.n(p),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs12:"",sm6:"",m4:"",lg4:"",xl3:""}},[a("v-card",{attrs:{"max-width":"450","min-width":"300"}},[a("v-img",{attrs:{src:"destination-images/"+e.deal.destinationCity+".jpg",alt:"placeholder"}},[a("v-layout",{staticStyle:{"background-image":"linear-gradient(to top, rgba(0, 0, 0, 1) 4%, transparent 72px)"},attrs:{"fill-height":"",column:"","ma-0":""}},[a("v-spacer"),a("v-flex",{staticClass:"text-xs-right",attrs:{shrink:""}},[a("h2",{staticClass:"headline mb-0",staticStyle:{color:"#FFEBEE","margin-bottom":"0px"}},[e._v(e._s(e.deal.destCountry))])])],1)],1),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("\n              \n                      "+e._s(e.deal.departureCity)+"\n                      "),a("v-icon",[e._v("compare_arrows")]),e._v("\n                      "+e._s(e.deal.destinationCity)+"\n          ")],1)])]),a("v-list",{attrs:{dense:""}},[a("v-list-tile",{staticStyle:{"margin-bottom":"10px"}},[a("v-list-tile-avatar",[a("v-icon",[e._v("flight_takeoff")])],1),a("v-list-tile-content",{staticStyle:{"font-size":"14px"}},[e._v("\n                       "+e._s(e.deal.departureDay)+" "+e._s(e.deal.departureMonthShort)+",\n                       "+e._s(e.deal.departTimeLeave)+" - "+e._s(e.deal.departTimeArrive)+" \n                       ("+e._s(e.deal.departureDayEn)+"), "),a("br"),e._v(e._s(e.deal.departureCity)+" ("+e._s(e.deal.departureAirportCode)+")\n                  ")])],1),a("v-list-tile",{staticStyle:{"margin-bottom":"10px"}},[a("v-list-tile-avatar",[a("v-icon",{staticStyle:{transform:"scaleX(-1)"}},[e._v("flight_takeoff")])],1),a("v-list-tile-content",{staticStyle:{"font-size":"14px"}},[e._v("\n                      "+e._s(e.deal.returnDay)+" "+e._s(e.deal.returnMonthShort)+", \n                      "+e._s(e.deal.arriveTimeLeave)+" - "+e._s(e.deal.arriveTimeArrive)+" \n                      ("+e._s(e.deal.returnDayEn)+"), "),a("br"),e._v(e._s(e.deal.destinationCity)+" ("+e._s(e.deal.destinationAirportCode)+")\n                  ")])],1),a("v-list-tile",{staticStyle:{"margin-bottom":"10px"}},[a("v-list-tile-avatar",[a("v-icon",[e._v("hotel")])],1),a("v-list-tile-content",{staticClass:"text-truncate",staticStyle:{"font-size":"14px"}},[e._v("\n                      "+e._s(e.deal.accommodationName)),a("br"),e._v("("+e._s(e.deal.accommodationStarRating)+")\n                  ")])],1),a("v-list-tile",[a("v-list-tile-avatar",[a("v-icon",[e._v(e._s(e.travellerIcon))])],1),a("v-list-tile-content",{staticStyle:{"font-size":"14px"}},[a("div",[e._v(e._s(e.deal.numberOfAdults)+" Adult "+e._s(e.travellerString))])])],1),a("v-divider"),a("v-list-tile",[a("v-list-tile-avatar",[a("v-icon",[e._v("local_offer")])],1),a("v-list-tile-content",[a("div",{staticClass:"font-weight-bold"},[e._v("£"+e._s(e.deal.priceTotalAllInclusive)+" - Total trip price")])])],1)],1),a("div",{staticClass:"text-xs-center text-sm-center text-lg-center text-xl-center"},[a("a",{attrs:{href:""+e.deal.flightBookingLink,target:"_blank",rel:"noopener"}},[a("v-btn",{attrs:{large:"",color:"primary",dark:""}},[e._v("Book flights (£"+e._s(e.deal.flightTotalPrice)+")")])],1),a("a",{attrs:{href:""+e.deal.hotelBookingLink,target:"_blank",rel:"noopener"}},[a("v-btn",{attrs:{large:"",color:"primary",dark:""}},[e._v("Book Accommodation (£"+e._s(e.deal.priceAccommodation)+")")])],1)])],1)],1)},g=[],y={props:["deal"],components:{},methods:{},computed:{travellerString:function(){return"1"==this.deal.numberOfAdults.toString()?"traveller":"travellers"},travellerIcon:function(){return"1"==this.deal.numberOfAdults.toString()?"person":"people"}},name:"dealcardv1"},m=y,S=(a("549a"),a("2877")),x=a("6544"),w=a.n(x),A=a("8336"),b=a("b0af"),D=a("12b2"),_=a("ce7e"),T=a("0e8f"),k=a("132d"),C=a("adda"),O=a("a722"),I=a("8860"),V=a("ba95"),F=a("c954"),B=a("5d23"),E=a("9910"),P=Object(S["a"])(m,h,g,!1,null,"5ef20de2",null),N=P.exports;w()(P,{VBtn:A["a"],VCard:b["a"],VCardTitle:D["a"],VDivider:_["a"],VFlex:T["a"],VIcon:k["a"],VImg:C["a"],VLayout:O["a"],VList:I["a"],VListTile:V["a"],VListTileAvatar:F["a"],VListTileContent:B["a"],VSpacer:E["a"]});var j={name:"App",components:{dealcardv1:N},data:function(){return{drawer:null,deals:[],dealsToShow:[],filterDestinations:[{fId:0,fval:"Any",fText:"Any"},{fId:1,fval:"Budapest",fText:"Budapest"}],filterDeparture:[{fId:0,fval:"Any",fText:"Any"},{fId:1,fval:"Glasgow",fText:"Glasgow"}],filterDepartureWeekday:[{fId:0,fval:"Any",fText:"Any"},{fId:1,fval:"Thu",fText:"Thu"}],filterStars:[{fId:0,fval:"Any",fText:"Any"}],filterDepartureWeek:[{fId:0,fval:"Any",fText:"Any"},{fId:1,fval:"This week",fText:"This week"},{fId:2,fval:"Next week",fText:"Next week"},{fId:3,fval:"Two weeks ahead",fText:"Two weeks ahead"},{fId:4,fval:"Three weeks ahead",fText:"Three weeks ahead"}],filterAdult:["Any"],filterDepWeek:["Any"],filterDestinationSelected:"Any",filterDepartureSelected:"Any",filterDepartureWeekdaySelected:"Any",filterStarsSelected:"Any",filterAdultSelected:"Any",filterDepWeekSelected:"Any",filterDepartureWeekSelected:"Any",filterBudget:[{fId:0,fval:0,fText:"Any"},{fId:1,fval:1,fText:"£"},{fId:2,fval:2,fText:"££"},{fId:3,fval:3,fText:"£££"},{fId:4,fval:4,fText:"££££"},{fId:5,fval:5,fText:"£££££"}],filterBudgetSelected:0,numberOfDealsToShowOnFirstPageLoad:14,numDealsToShowNow:14,defaultDealsNumberPerPage:14,showAllDeals:!1,showAllDealsCss:"",overFilteringCsss:"d-none",calendarDepDates:["2019-03-08","2019-03-14","2019-03-15"],dateSelected:null}},created:function(){var e=this,t=new Headers;t.has("Accept-Encoding")?t.set("Accept-Encoding","deflate"):t.append("Accept-Encoding","deflate");var a={method:"GET",headers:t,mode:"cors",cache:"default"},r=new Request("https://weekend.rosian.org/deals.default.json",a);fetch(r).then(function(e){return e.json()}).then(function(t){if(e.deals=t,!0===e.showAllDeals)e.dealsToShow=JSON.parse(v()(t));else{var a=JSON.parse(v()(t));e.dealsToShow=a.slice(0,e.numberOfDealsToShowOnFirstPageLoad)}e.refreshDestinationFilterOptions(),e.refreshDepartureFilterOptions(),e.refreshAccommodationClassFilterOptions(),e.refreshAdultFilterOptions(),e.refreshDepartureCalendarOptions(),e.calculateDealPriceCategories()})},methods:{refreshDepartureCalendarOptions:function(){var e=new u.a;for(var t in this.deals)e.add(this.deals[t].departDateYYYYMMDD);this.calendarDepDates=c()(e)},allowedDates:function(e){return-1!==this.calendarDepDates.indexOf(e)},calculateDealPriceCategories:function(){this.deals.sort(function(e,t){return e.priceTotalAllInclusive-t.priceTotalAllInclusive});var e=this.deals.length,t=this.filterBudget.length-1,a=Math.round(e/t),r=1,l=0,i=0;for(var n in this.deals)this.deals[n].budgetBucket=r,l++,l==a-1&&(this.filterBudget[r]["fText"]="£"+i.toString()+" - £"+this.deals[n].priceTotalAllInclusive.toString(),i=this.deals[n].priceTotalAllInclusive,r++,l=0)},refreshDestinationFilterOptions:function(){var e=new u.a;for(var t in this.deals)e.add(this.deals[t].destinationCity);var a=c()(e).sort();a.unshift("Any"),e=new u.a(a);var r=[];t=0;var l=!0,i=!1,n=void 0;try{for(var s,d=o()(e);!(l=(s=d.next()).done);l=!0){var f=s.value;r.push({fId:t,fval:f,fText:f}),t++}}catch(p){i=!0,n=p}finally{try{l||null==d.return||d.return()}finally{if(i)throw n}}this.filterDestinations=r},refreshDepartureFilterOptions:function(){var e=new u.a;for(var t in e.add("Any"),this.deals)e.add(this.deals[t].departureCity);e=new u.a(c()(e).sort());var a=[];t=0;var r=!0,l=!1,i=void 0;try{for(var n,s=o()(e);!(r=(n=s.next()).done);r=!0){var d=n.value;a.push({fId:t,fval:d,fText:d}),t++}}catch(f){l=!0,i=f}finally{try{r||null==s.return||s.return()}finally{if(l)throw i}}this.filterDeparture=a},refreshAccommodationClassFilterOptions:function(){var e=new u.a;for(var t in e.add("Any"),this.deals)e.add(this.deals[t].accommodationStarRating);var a=c()(e).sort();a.unshift("Any"),e=new u.a(a);var r=[];t=0;var l=!0,i=!1,n=void 0;try{for(var s,d=o()(e);!(l=(s=d.next()).done);l=!0){var f=s.value;r.push({fId:t,fval:f,fText:f}),t++}}catch(p){i=!0,n=p}finally{try{l||null==d.return||d.return()}finally{if(i)throw n}}this.filterStars=r},refreshDepartureWeekdayFilterOptions:function(){var e=new u.a;for(var t in this.deals)e.add(this.deals[t].departureDayEn);var a=["Any"];e.has("Thu")&&a.push("Thu"),e.has("Fri")&&a.push("Fri"),e.has("Sat")&&a.push("Sat"),e=new u.a(a);var r=[];t=0;var l=!0,i=!1,n=void 0;try{for(var s,d=o()(e);!(l=(s=d.next()).done);l=!0){var c=s.value;r.push({fId:t,fval:c,fText:c}),t++}}catch(f){i=!0,n=f}finally{try{l||null==d.return||d.return()}finally{if(i)throw n}}this.filterDepartureWeekday=r},refreshAdultFilterOptions:function(){var e=new u.a;for(var t in this.deals)e.add(this.deals[t].numberOfAdults);var a=["Any"];e.has("1")&&a.push("1"),e.has("2")&&a.push("2"),e=new u.a(a);var r=[];t=0;var l=!0,i=!1,n=void 0;try{for(var s,d=o()(e);!(l=(s=d.next()).done);l=!0){var c=s.value;r.push({fId:t,fval:c,fText:c}),t++}}catch(f){i=!0,n=f}finally{try{l||null==d.return||d.return()}finally{if(i)throw n}}this.filterAdult=r},displayAllDealsOnPage:function(){this.showAllDeals=!0,this.showAllDealsCss="d-none",this.dealsToShow=JSON.parse(v()(this.deals))},filterAppliedHandler:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];1==t&&(this.numDealsToShowNow=this.defaultDealsNumberPerPage);var a=this.deals.slice();"Any"!==this.filterDestinationSelected&&(a=a.filter(function(t){return t.destinationCity==e.filterDestinationSelected})),"Any"!==this.filterDepartureSelected&&(a=a.filter(function(t){return t.departureCity==e.filterDepartureSelected})),0!==this.filterBudgetSelected&&(a=a.filter(function(t){return t.budgetBucket==e.filterBudgetSelected})),"Any"!==this.filterStarsSelected&&(a=a.filter(function(t){return t.accommodationStarRating==e.filterStarsSelected})),null!==this.dateSelected&&(a=a.filter(function(t){return t.departDateYYYYMMDD==e.dateSelected})),"Any"!==this.filterAdultSelected&&(a=a.filter(function(t){return t.numberOfAdults==e.filterAdultSelected}));
//!!!!! SORTING START !!!!!!!!/
var r=[];this.filterDestinations.forEach(function(e){"Any"!==e["fText"]&&r.push(e["fText"])});for(var l=r.length,i=0;i<l;i++)if(a.filter(function(e){return e.destinationCity==r[i]}).length>0)for(var n=i;n<a.length;n++)if(a[n].destinationCity==r[i]){var s=a[i];a[i]=a[n],a[n]=s;break}
//!!!!! SORTING END !!!!!!!!/
this.dealsToShow=a.slice(0,this.numDealsToShowNow),0==this.dealsToShow.length?(this.showAllDealsCss="d-none",this.overFilteringCsss=""):(this.showAllDealsCss="",this.overFilteringCsss="d-none"),this.numDealsToShowNow>=a.length-1?this.showAllDealsCss="d-none":this.showAllDealsCss=""},removeAllFilters:function(){this.filterAdultSelected="Any",this.filterDestinationSelected="Any",this.filterDepartureSelected="Any",this.filterDepartureWeekdaySelected="Any",this.filterStarsSelected="Any",this.filterDepWeekSelected="Any",this.filterDepartureWeekSelected="Any",this.filterBudgetSelected=0,this.filterAppliedHandler()},displayMoreDeals:function(){this.numDealsToShowNow+=20;var e=JSON.parse(v()(this.deals));this.numDealsToShowNow>e.length-1?(this.numDealsToShowNow=e.length-1,this.showAllDeals=!0,this.showAllDealsCss="d-none"):(this.showAllDeals=!1,this.showAllDealsCss=""),this.filterAppliedHandler(!1)}},props:{source:String}},L=j,M=a("7496"),W=a("a523"),H=a("549c"),Y=a("2e4b"),z=a("f774"),J=a("b56d"),R=a("71d9"),G=a("706c"),$=a("2a7f"),q=Object(S["a"])(L,i,n,!1,null,null,null),X=q.exports;w()(q,{VApp:M["a"],VBtn:A["a"],VContainer:W["a"],VContent:H["a"],VDatePicker:Y["a"],VIcon:k["a"],VImg:C["a"],VLayout:O["a"],VList:I["a"],VListTile:V["a"],VListTileTitle:B["b"],VNavigationDrawer:z["a"],VSelect:J["a"],VSpacer:E["a"],VToolbar:R["a"],VToolbarSideIcon:G["a"],VToolbarTitle:$["a"]}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(X)}}).$mount("#app")}});
//# sourceMappingURL=app.1059a649.js.map