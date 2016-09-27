'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8am'];


var firstAndPike = {
//properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  aveCookiesPerHour: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookies: 0,
  storeLocation: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],


//methods
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldPerHour.push(Math.floor(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  totalDailySales: function () {
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++) {
      this.totalDailyCookies += this.totalCookiesSoldPerHour[i];
    }


      //.render()????

  },

  render: function() {
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.totalDailySales();


    var wrapper = document.getElementById('wrapper');
    //naming wrapper
    var hourlySalesUlEl = document.createElement('ul');
    //creating ul
    wrapper.appendChild(hourlySalesUlEl);
    //appending variable hourlySalesUlEl to wrapper
    for (var i =0; i < hours.length; i++){
      var totalDailySales = document.createElement('li');
      totalDailySales.textContent = hours[i] + ' ' + this.totalCookiesSoldPerHour[i] + ' ' + this.randomCustPerHour[i];
      console.log(totalDailySales);
      hourlySalesUlEl.appendChild(totalDailySales);
    }


  },
};
firstAndPike.render();
