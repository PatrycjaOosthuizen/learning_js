// Find the Largest Number
const nums = [10, 25, 8, 99, 47];
let max = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}

console.log("Largest number:", max);
