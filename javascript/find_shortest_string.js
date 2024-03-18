function findShortestString(arr) {
  // type your code here
  let shortestString = arr[0]
  arr.forEach((string) => {
    if(string.length < shortestString.length) {
      shortestString = string
    }
  }); return shortestString


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// for each string in the array, we want to find the length. I'm creating a variable that selects the first string in the array, and as I iterate through each string, if the string.length is less than I'll replace the first string with the shortest string. After iterating through each string the first string variable should contain the shortest and first shortest string if there are multiple.
