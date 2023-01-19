// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  let clientWithLeastBalance = [array[0]];
  array.forEach((client) => {
    if (client.balance < clientWithLeastBalance[0].balance && client.balance !== 0) {
      clientWithLeastBalance.splice(0, 1, client);
    }
  });
  return clientWithLeastBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
