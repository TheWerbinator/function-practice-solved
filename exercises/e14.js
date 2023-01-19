
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let clientsWithWrongBalance = [];
  for (let j = 0; j < array.length; j++) {
    let depositTotal = 0;
    let withdrawalTotal = 0;
    if (array[j].deposits) {
      for (let i = 0; i < array[j].deposits.length; i++) {
        depositTotal += array[j].deposits[i]
      }
    }
    if (array[j].withdrawals) {
      for (let i = 0; i < array[j].withdrawals.length; i++) {
        withdrawalTotal += array[j].withdrawals[i]
      }
    }
    if (depositTotal - withdrawalTotal !== array[j].balance) {
      clientsWithWrongBalance.push(array[j]);
    }
  }
  return clientsWithWrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
