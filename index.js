function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n), where n is the length of the array.
*/

/* 
  Add your pseudocode here
  - Create an empty set to store seen numbers.
  - Iterate through the array.
    - Calculate the complement (target - current number).
    - If the complement is in the set, return true.
    - Otherwise, add the current number to the set.
  - If the loop completes, return false.
*/

/*
  Add written explanation of your solution here
  The function uses a set to keep track of numbers encountered while iterating through the array. For each number, it calculates the complement needed to reach the target sum. If the complement is found in the set, it means the current number, when added to a previously seen number, equals the target sum. The function returns true in this case. If no such pair is found in the array, the function returns false.
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
