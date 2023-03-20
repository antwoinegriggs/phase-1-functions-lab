// Code your solution in this file!
const toFeet = 264;

function distanceFromHqInBlocks(pickupLocation) {
  const locationHQ = 42;
  return Math.abs(pickupLocation - locationHQ);
}
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * toFeet;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return Math.abs(start - destination) * toFeet;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const freeFareDistance = 400;

  const distance = distanceTravelledInFeet(start, destination);

  const price = 0.02;
  const cost = (distance - freeFareDistance) * price;
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return cost;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

calculatesFarePrice(34, 32);
