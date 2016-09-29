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


//Variables for DOM access

var locationForm = document.getElementById('new-location-form');
//var allLocations = [];

//Constructor function


//Function Declarations


//};
// This function is the event handler for the submission of comments
function handleNewLocationFormSubmit(event) {

  event.preventDefault();

  if (!event.target.locationName.value || !event.target.minCustPerHour.value || !event.target.maxCustPerHour.value || !event.target.avgCookiesPerCust.value) {
    return alert('Fields cannot be empty!');
  }

  var locationE = event.target.locationName.value;
  var minCustE = parseInt(event.target.minCustPerHour.value);
  var maxCustE = parseInt(event.target.maxCustPerHour.value);
  var avePerCustE = parseInt(event.target.avgCookiesPerCust.value);

  event.target.locationName.value = null;
  event.target.minCustPerHour.value = null;
  event.target.maxCustPerHour.value = null;
  event.target.avgCookiesPerCust.value = null;
  console.log(locationE,minCustE,maxCustE,avePerCustE);


  new CookieStand(locationE, minCustE, maxCustE, avePerCustE);

  salesDataTable.innerHTML = '';
  makeHeaderRow();
  renderAllLocations();
  makeFooterRow();

};
locationForm.addEventListener('submit', handleNewLocationFormSubmit);
// locationForm.appendChild(liEl);

//appendChild
