// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(array.length -2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
  const fareMultiplier = function(fare) {
    return integer * fare
  }
  return fareMultiplier
}

const fareDoubler = function(createFareMultiplier) {
  return createFareMultiplier * 2
}

const fareTripler = function(createFareMultiplier){
  return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, returnFunction) {
  return returnFunction(drivers)
}