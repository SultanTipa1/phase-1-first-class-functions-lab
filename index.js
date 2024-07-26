// Code your solution in this file!
// returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

// const returnFirstTwoDrivers = function(drivers) {
//     let driver = ['Antonia', 'Nuru', 'Amari', 'Mo']
//     return drivers.slice(0, 1);
// };
 
// returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

// const returnLastTwoDrivers = function(drivers) {
//     let driver = ['Antonia', 'Nuru', 'Amari', 'Mo']
//     return drivers.slice(2, 3);
// };

// Previously defined functions
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(drivers);
  };
  
 
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
  console.log(selectingDrivers[0](drivers)); // ['Antonia', 'Nuru']
  console.log(selectingDrivers[1](drivers)); // ['Amari', 'Mo']
  
  const fare = 10;
  console.log(fareDoubler(fare)); // 20
  console.log(fareTripler(fare)); // 30
  
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Amari', 'Mo']
  