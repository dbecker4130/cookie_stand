'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allLocations = [];
var salesDataTable = document.getElementById('salmon-cookies-round-two');

function CookieStand(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randomCustPerHour = [];
  this.totalCookiesSoldEachHour = [];
  this.totalDailyCookieSales = 0;
  this.calcRandomCustPerHour = function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    // return console.log('Random hourly customers have been calculated');
  };
  this.calcTotalCookiesSoldEachHour = function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  };
  this.render = function() {
    this.calcTotalCookiesSoldEachHour();

    var rowElement = document.createElement('tr');

    var headerCell = document.createElement('th'); // far left cell
    headerCell.textContent = this.locationName;
    rowElement.appendChild(headerCell);

    for (var i = 0; i < hours.length; i++) { //all the ones in the middle
      var dataCell = document.createElement('td');
      dataCell.textContent = this.totalCookiesSoldEachHour[i];
      rowElement.appendChild(dataCell);
    }

    dataCell = document.createElement('td'); // far right cell
    dataCell.textContent = this.totalDailyCookieSales;
    rowElement.appendChild(dataCell);

    salesDataTable.appendChild(rowElement);

  };
  allLocations.push(this);
}

new CookieStand('Alki', 2, 16, 4.6);
new CookieStand('Seatac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('First and Pike', 23, 65, 6.3);


// DEFINE OUR ACTIONS

function makeHeaderRow() {
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th');
  headerCell.textContent = 'Locations';
  rowElement.appendChild(headerCell);

  for (var i = 0; i < hours.length; i++) {
    headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    rowElement.appendChild(headerCell);
  }

  headerCell = document.createElement('th');
  headerCell.textContent = 'Location Total';
  rowElement.appendChild(headerCell);

  salesDataTable.appendChild(rowElement);
}

function renderAllLocations() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}

function makeFooterRow() {
  var rowElement = document.createElement('tr');

  var headerCell = document.createElement('th'); //far left
  headerCell.textContent = 'Hourly Totals';
  rowElement.appendChild(headerCell);

  var dailyTotalAllLocations = 0;
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; j < allLocations.length; j++) { //allLocations
      total += allLocations[j].totalCookiesSoldEachHour[i];
    }
    headerCell = document.createElement('th');
    headerCell.textContent = total;
    rowElement.appendChild(headerCell);
    dailyTotalAllLocations += total;
  }

  headerCell = document.createElement('th');
  headerCell.textContent = dailyTotalAllLocations;
  rowElement.appendChild(headerCell);

  salesDataTable.appendChild(rowElement);
}


makeHeaderRow(); // list the times across the top
renderAllLocations(); // loop through the array of objects representing each store location and call the .render() method that each one has, so as to display its data in a row
makeFooterRow(); // make a row across the bottom of the table that sums each hour's total across all locations


// 'use strict';
//
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// // //array of hours cookies are sold
// var allLocations = [];
// var salesTable = document.getElementById('salmon-cookies-round-two');
// //Give function a way to attach to HTML
//
//
// //constructor functions
// function SalmonCookies (minCustPerHour, maxCustPerHour, aveCookiesPerHour, locationName) {
//   this.locationName = locationName;
//   this.minCustPerHour = minCustPerHour;
//   this.maxCustPerHour = maxCustPerHour;
//   this.aveCookiesPerHour = aveCookiesPerHour;
//   this.randomCustPerHour = [];
//   this.totalCookiesSoldPerHour = [];
//   this.totalDailyCookies = 0;
//   this.calcCustomersPerHour = function () {
//     for (var i = 0; i < hours.length; i++)
//     //loop to return variable hours
//       this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       //generate random customer per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop}
//   };
//   this.calcCookiesSoldPerHour = function () {
//     this.calcCookiesSoldPerHour();
//     for (var i = 0; i < hours.length; i++)
//         //Loop to return variable hours
//     {
//       this.totalCookiesSoldPerHour.push(Math.ceil(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
//           //generate random cookie sold per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
//       this.totalDailyCookies += this.totalCookiesSoldPerHour[i];
//     }
//   };
//   this.render = function() {
//     this.calcCookiesSoldPerHour();
//     var rowElement = document.createElement('tr');
//
//     var headerCell = document.createElement('th'); // far left cell
//     headerCell.textContent = this.locationName;
//     rowElement.appendChild(headerCell);
//
//     for (var i = 0; i < hours.length; i++) { //all the ones in the middle
//       var dataCell = document.createElement('td');
//       dataCell.textContent = this.totalCookiesSoldPerHour[i];
//       rowElement.appendChild(dataCell);
//     }
//
//     dataCell = document.createElement('td'); // far right cell
//     dataCell.textContent = this.totalDailyCookies;
//     rowElement.appendChild(dataCell);
//
//     salesTable.appendChild(rowElement);
//
//   };
//   allLocations.push(this);
//
// //Instances
//   new SalmonCookies(23, 65, 6.3, '1st and Pike');
//   new SalmonCookies(3, 24, 1.2, 'SeaTac');
//   new SalmonCookies(11, 38, 3.7, 'Seattle Center');
//   new SalmonCookies(20, 38, 2.3, 'Capitol Hill');
//   new SalmonCookies(2, 16, 4.6, 'Alki');
//
// //methods
//
//   // this.totalDailySales = function () {
//   //   for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++) {
//   //     // generate total daily cookies, store in totalCookiesSoldPerHour array,
//
//
//   function makeTableHeader(){
//     //function to create table header
//     var tableRow = document.createElement('tr');
//     //create an Element table row
//     var tableHoursEL = document.createElement('th');
//     tableHoursEL.textContent = 'Locations';
//     tableRow.appendChild(tableHoursEL);
//
//     for (var i = 0; i < hours.length; i++) {
//       //loop to add content
//       tableHoursEL = document.createElement('th');
//       tableHoursEL.textContent = hours[i];
//       tableRow.appendChild(tableHoursEL);
//       console.log(hours[i]);
//       console.log(tableHoursEL);
//       //give element content
//     }
//     tableHoursEL = document.createElement('th')
//     tableHoursEL.textContent = 'Total';
//     tableRow.appendChild(tableRow);
//       //append table row to the DOM
//     salesTable.appendChild(tableRow)
//   }
//
// function renderallLocations(){
//   for (var i = 0; i < allLocations.length; i++) {
//     allLocations[i].render();
//   }
// }
//
// function makeFooterRow (){
//   var tableRow = document.createElement('tr');
//     //create an Element table row
//   var tableHoursEL = document.createElement('th');
//   tableHoursEL.textContent = 'Hourly Totals';
//   tableRow.appendChild(tableHoursEL);
//     // Create one cell Location
//
//   var dailyTotalAllLocations = 0;
//   for (var i = 0; i < hours.length; i++) {
//     var total = 0;
//     for (var j =0; j < allLocations.length; j++) {
//       total += allLocations[j].totalCookiesSoldPerHour[i];
//     }
//
//     tableHoursEL = document.createElement('th')
//     tableHoursEL.textContent = 'Total';
//     tableEl.appendChild(tableRow);
//     dailyTotalAllLocations += total;
//   }
//   tableHoursEL = document.createElement('th')
//   tableHoursEL.textContent = 'Total';
//   tableEl.appendChild(tableRow);
//
//   salesTable.appendChild(tableRow);
// }
//
//   makeTableHeader();
//   renderallLocations();
//   makeFooterRow();
// };
// //render Instances to the DOM
