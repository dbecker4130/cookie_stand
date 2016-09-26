'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8am'];


var firstAndPike = {
//properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  aveCookiesPerHour: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  storeLocation: 'storeLocation',

//methods
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  }
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldPerHour.push(Math.floor(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
    }
  }
