function hasTargetSum(array, target) {
for (const num of array) {
  if (num === target.length) return true;
}
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/ //for every number in the array, if 
// number + number = 10; return true

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
