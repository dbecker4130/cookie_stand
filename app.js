'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// //array of hours cookies are sold

// var firstAndPike = {
// //properties
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   aveCookiesPerHour: 6.3,
//   randomCustPerHour: [],
//   totalCookiesSoldPerHour: [],
//   totalDailyCookies: 0,
var storeLocation = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];


//cnstructor functions
function SalmonCookies (minCustPerHour, maxCustPerHour, aveCookiesPerHour, storeLocation) {
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.aveCookiesPerHour = aveCookiesPerHour;
  this.totalCookiesSoldPerHour = [];
  this.totalDailyCookies = [0];
  this.storeLocation = storeLocation;


//methods
  this.calcCustomersPerHour = function () {
    for (var i = 0; i < hours.length; i++)
    //loop to return variable hours
     {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      //generate random customer per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  this.calcCookiesSoldPerHour = function () {
    for (var i = 0; i < hours.length; i++)
      //Loop to return variable hours
     {
      this.totalCookiesSoldPerHour.push(Math.ceil(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
      //generate random cookie sold per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  this.totalDailySales = function () {
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++) {
      this.totalDailyCookies += this.totalCookiesSoldPerHour[i];
      // generate total daily cookies, store in totalCookiesSoldPerHour array,
    }
  };
  this.render = function() {
    this.calcCookiesSoldPerHour();

    var storeLocationsEl = document.getElementById('salmon-cookies-round-two');
    var tableLocationRows = document.createElement('tr');
    storeLocationsEl.appendChild(tableLocationRows);
    var tableLocationsEl = document.createElement('td');
    tableLocationsEl.textContent = this.storeLocation;
    tableLocationRows.appendChild(tableLocationsEl);

    //for (var i = 0); i < hours.length, i++) {

    //}
  };
}
//render();
var firstAndPike = new SalmonCookies(23, 65, 6.3, '1st and Pike');
var seaTac = new SalmonCookies(3, 24, 1.2, 'SeaTac');
var seattleCenter = new SalmonCookies(4, 38, 3.7, 'Seattle Center');
var capHill = new SalmonCookies(20, 38, 2.3, 'Capitol Hill');
var alki = new SalmonCookies(2, 16, 4.6, 'Alki');

function makeTableHeader(){

  var tableEl = document.getElementById('salmon-cookies-round-two');
  var tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);

  for (var i = 0; i < hours.length; i++) {
    var tableHoursEL = document.createElement('th');
    tableHoursEL.textContent = hours[i - 1];
    tableRow.appendChild(tableHoursEL);
    console.log(hours[i - 1]);
    console.log(tableHoursEL);
  }
}
makeTableHeader();

function makeTableRow(){

  for (var i = 0; i < storeLocation.length; i++) {
  }
}
makeTableRow();

firstAndPike.render();
seaTac.render();
seattleCenter.render();
capHill.render();
alki.render();



//   render: function() {
//     //storing calcCustomersPerHour, calcCookiesSoldPerHour, totalDailySales
//     this.calcCustomersPerHour();
//     this.calcCookiesSoldPerHour();
//     this.totalDailySales();
//
//     var wrapper = document.getElementById('wrapper');
//     //naming wrapper so that ul can attach to something
//     var hourlySalesUlEl = document.createElement('ul');
//     //creating ul
//     wrapper.appendChild(hourlySalesUlEl);
//     //appending variable hourlySalesUlEl to wrapper
//     for (var i = 0; i < hours.length; i++){
//       //loop to return variable hours
//       var totalDailySales = document.createElement('li');
//       //create li for totalDailySales
//       totalDailySales.textContent = hours[i] + ' ' + this.totalCookiesSoldPerHour[i] + ' cookies' + this.randomCustPerHour[i];
//       //call hours, totalCookiesSoldPerHour, and randomCustPerHour
//       console.log(totalDailySales);
//       //log totalDailySales
//       hourlySalesUlEl.appendChild(totalDailySales);
//       //append totalDailySales to hourlySalesUlEl variable
//     }
//
//   },
