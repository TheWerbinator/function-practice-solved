
// EXERCISE 20
// Return an array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let separateNamesArray = [[], []];
  array.forEach(name => {
    let counter = 0;
    name.split('').forEach((letter) => {
      if (letter === 'a') {
        counter++
      } 
    })    
    counter > 0 ? separateNamesArray[0].push(name) : separateNamesArray[1].push(name);
  });
  return separateNamesArray;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
