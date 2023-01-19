
// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected result of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code

export function concatArrays(arr1, arr2) {
  // let concatedArrays = arr1;
  // console.log('concatedArrays before', concatedArrays)
  // arr2.forEach(element => {
  //   concatedArrays.push(element)
  // });
  // return [concatedArrays]
  // console.log('concatedArrays after', concatedArrays)

  // !The above should work but doesn't. Not sure what is wrong, please explain. I logged the 'concatedArrays' and I get some really weird behavior, like it isn't being reinitialized after every call. 

  return [...arr1, ...arr2]
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
