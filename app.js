'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8am'];
//array of hours cookies are sold
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
    for (var i = 0; i < hours.length; i++)
    //loop to return variable hours
     {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      //generate random customer per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++)
      //Loop to return variable hours
     {
      this.totalCookiesSoldPerHour.push(Math.floor(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
      //generate random cookie sold per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  totalDailySales: function () {
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++) {
      this.totalDailyCookies += this.totalCookiesSoldPerHour[i];
      // generate total daily cookies, store in totalCookiesSoldPerHour array,
    }
  },

  render: function() {
    //storing calcCustomersPerHour, calcCookiesSoldPerHour, totalDailySales
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.totalDailySales();

    var wrapper = document.getElementById('wrapper');
    //naming wrapper so that ul can attach to something
    var hourlySalesUlEl = document.createElement('ul');
    //creating ul
    wrapper.appendChild(hourlySalesUlEl);
    //appending variable hourlySalesUlEl to wrapper
    for (var i = 0; i < hours.length; i++){
      //loop to return variable hours
      var totalDailySales = document.createElement('li');
      //create li for totalDailySales
      totalDailySales.textContent = hours[i] + ' ' + this.totalCookiesSoldPerHour[i] + ' ' + this.randomCustPerHour[i];
      //call hours, totalCookiesSoldPerHour, and randomCustPerHour
      console.log(totalDailySales);
      //log totalDailySales
      hourlySalesUlEl.appendChild(totalDailySales);
      //append totalDailySales to hourlySalesUlEl variable
    }

  },
};
firstAndPike.render(); {
// use render tool to display firstAndPike
}

var seaTac = {
//properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  aveCookiesPerHour: 1.2,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookies: 0,
  storeLocation: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],

//methods
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++)
    //loop to return variable hours
     {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      //generate random customer per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++)
      //Loop to return variable hours
     {
      this.totalCookiesSoldPerHour.push(Math.floor(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
      //generate random cookie sold per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  totalDailySales: function () {
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++) {
      this.totalDailyCookies += this.totalCookiesSoldPerHour[i];
      //generate total daily cookies, store in totalCookiesSoldPerHour array,
    }
  },

  render: function() {
    //storing calcCustomersPerHour, calcCookiesSoldPerHour, totalDailySales
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.totalDailySales();

    var wrapper = document.getElementById('wrapper');
    //naming wrapper so that ul can attach to something
    var hourlySalesUlEl = document.createElement('ul');
    //creating ul
    wrapper.appendChild(hourlySalesUlEl);
    //appending variable hourlySalesUlEl to wrapper
    for (var i = 0; i < hours.length; i++){
      //loop to return variable hours
      var totalDailySales = document.createElement('li');
      //create li for totalDailySales
      totalDailySales.textContent = hours[i] + ' ' + this.totalCookiesSoldPerHour[i] + ' ' + this.randomCustPerHour[i];
      //call hours, totalCookiesSoldPerHour, and randomCustPerHour
      console.log(totalDailySales);
      //log totalDailySales
      hourlySalesUlEl.appendChild(totalDailySales);
      //append totalDailySales to hourlySalesUlEl variable
    }

  },
};
seaTac.render();
// use render tool to display firstAndPike

var seattleCenter = {
//properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  aveCookiesPerHour: 1.2,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookies: 0,
  storeLocation: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],

//methods
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++)
    //loop to return variable hours
     {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      //generate random customer per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++)
      //Loop to return variable hours
     {
      this.totalCookiesSoldPerHour.push(Math.floor(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
      //generate random cookie sold per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  totalDailySales: function () {
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++) {
      this.totalDailyCookies += this.totalCookiesSoldPerHour[i];
      //generate total daily cookies, store in totalCookiesSoldPerHour array,
    }
  },

  render: function() {
    //storing calcCustomersPerHour, calcCookiesSoldPerHour, totalDailySales
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.totalDailySales();

    var wrapper = document.getElementById('wrapper');
    //naming wrapper so that ul can attach to something
    var hourlySalesUlEl = document.createElement('ul');
    //creating ul
    wrapper.appendChild(hourlySalesUlEl);
    //appending variable hourlySalesUlEl to wrapper
    for (var i = 0; i < hours.length; i++){
      //loop to return variable hours
      var totalDailySales = document.createElement('li');
      //create li for totalDailySales
      totalDailySales.textContent = hours[i] + ' ' + this.totalCookiesSoldPerHour[i] + ' ' + this.randomCustPerHour[i];
      //call hours, totalCookiesSoldPerHour, and randomCustPerHour
      console.log(totalDailySales);
      //log totalDailySales
      hourlySalesUlEl.appendChild(totalDailySales);
      //append totalDailySales to hourlySalesUlEl variable
    }

  },
};
seattleCenter.render();
// use render tool to display firstAndPike

var capHill = {
//properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  aveCookiesPerHour: 1.2,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookies: 0,
  storeLocation: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],

//methods
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++)
    //loop to return variable hours
     {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      //generate random customer per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++)
      //Loop to return variable hours
     {
      this.totalCookiesSoldPerHour.push(Math.floor(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
      //generate random cookie sold per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  totalDailySales: function () {
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++) {
      this.totalDailyCookies += this.totalCookiesSoldPerHour[i];
      //generate total daily cookies, store in totalCookiesSoldPerHour array,
    }
  },

  render: function() {
    //storing calcCustomersPerHour, calcCookiesSoldPerHour, totalDailySales
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.totalDailySales();

    var wrapper = document.getElementById('wrapper');
    //naming wrapper so that ul can attach to something
    var hourlySalesUlEl = document.createElement('ul');
    //creating ul
    wrapper.appendChild(hourlySalesUlEl);
    //appending variable hourlySalesUlEl to wrapper
    for (var i = 0; i < hours.length; i++){
      //loop to return variable hours
      var totalDailySales = document.createElement('li');
      //create li for totalDailySales
      totalDailySales.textContent = hours[i] + ' ' + this.totalCookiesSoldPerHour[i] + ' ' + this.randomCustPerHour[i];
      //call hours, totalCookiesSoldPerHour, and randomCustPerHour
      console.log(totalDailySales);
      //log totalDailySales
      hourlySalesUlEl.appendChild(totalDailySales);
      //append totalDailySales to hourlySalesUlEl variable
    }

  },
};
capHill.render();
// use render tool to display firstAndPike

var alki = {
//properties
  minCustPerHour: 3,
  maxCustPerHour: 24,
  aveCookiesPerHour: 1.2,
  randomCustPerHour: [],
  totalCookiesSoldPerHour: [],
  totalDailyCookies: 0,
  storeLocation: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],

//methods
  calcCustomersPerHour: function () {
    for (var i = 0; i < hours.length; i++)
    //loop to return variable hours
     {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      //generate random customer per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  calcCookiesSoldPerHour: function () {
    for (var i = 0; i < hours.length; i++)
      //Loop to return variable hours
     {
      this.totalCookiesSoldPerHour.push(Math.floor(Math.random() * (this.minCustPerHour - this.maxCustPerHour + 1)) + this.minCustPerHour);
      //generate random cookie sold per hour, push to calcCustomersPerHour, difference between max customer and min customer + 1 for each loop
    }
  },
  totalDailySales: function () {
    for (var i = 0; i < this.totalCookiesSoldPerHour.length; i++) {
      this.totalDailyCookies += this.totalCookiesSoldPerHour[i];
      //generate total daily cookies, store in totalCookiesSoldPerHour array,
    }
  },

  render: function() {
    //storing calcCustomersPerHour, calcCookiesSoldPerHour, totalDailySales
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.totalDailySales();

    var wrapper = document.getElementById('wrapper');
    //naming wrapper so that ul can attach to something
    var hourlySalesUlEl = document.createElement('ul');
    //creating ul
    wrapper.appendChild(hourlySalesUlEl);
    //appending variable hourlySalesUlEl to wrapper
    for (var i = 0; i < hours.length; i++){
      //loop to return variable hours
      var totalDailySales = document.createElement('li');
      //create li for totalDailySales
      totalDailySales.textContent = hours[i] + ' ' + this.totalCookiesSoldPerHour[i] + ' ' + this.randomCustPerHour[i];
      //call hours, totalCookiesSoldPerHour, and randomCustPerHour
      console.log(totalDailySales);
      //log totalDailySales
      hourlySalesUlEl.appendChild(totalDailySales);
      //append totalDailySales to hourlySalesUlEl variable
    }

  },
};
alki.render();
// use render tool to display firstAndPike
