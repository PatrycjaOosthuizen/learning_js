const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

(function () {
  arr2 = [...arr1]; // make a copy using the spread operator
  arr1[0] = "potato";
})();

console.log(arr1); // ['potato', 'FEB', 'MAR', 'APR', 'MAY']

console.log(arr2); // ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
