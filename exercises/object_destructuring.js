// Object with x, y, z properties
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

// Traditional way
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// Using destructuring
const { x: a, y: b, z: c } = voxel;

// Test both methods
console.log("Traditional way:", x, y, z); //Traditional way: x = 3.6, y = 7.4, z = 6.54
console.log("Destructuring way:", a, b, c); // Destructuring way: a = 3.6, b = 7.4, c = 6.54
// Another object
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

// Traditional way
function getTempOfTmrwTraditional(avgTemperatures) {
  "use strict";

  // Access the property directly
  const tempOfTomorrow = avgTemperatures.tomorrow;

  return tempOfTomorrow;
}

// Destructuring way
function getTempOfTmrwDestructuring(avgTemperatures) {
  "use strict";

  // Using destructuring to get "tomorrow" from the object
  const { tomorrow: tempOfTomorrow } = avgTemperatures;

  return tempOfTomorrow;
}

// Test both functions
console.log("Traditional way:", getTempOfTmrwTraditional(AVG_TEMPERATURES)); // Traditional way: 79
console.log("Destructuring way:", getTempOfTmrwDestructuring(AVG_TEMPERATURES)); // Destructuring way: 79
