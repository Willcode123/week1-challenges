/* let orderCount = 0;

const takeOrder = (topping1, topping2) => {
  console.log(`Pizza with ${topping1} and ${topping2}`);
  orderCount++;
  console.log(`Order number ${orderCount}`);
}

takeOrder("pineapple", "ham");
takeOrder("mushrooms", "peppers"); */

const cashMachine = (pin, balance, amount) => {
  if (pin === 1234 && balance >= amount) {
    console.log(`Dispensing cash: ${amount}`);
    return balance - amount;
  } else if (pin !== 1234) {
    console.log("Incorrect pin entered");
    return balance;
  } else {
    console.log("Insufficient funds");
    return balance;
  }
};

// Example usage:
let currentBalance = 1000;
console.log(`Current balance: ${currentBalance}`);
currentBalance = cashMachine(1234, currentBalance, 500);
console.log(`New balance: ${currentBalance}`);
currentBalance = cashMachine(1111, currentBalance, 200);
console.log(`New balance: ${currentBalance}`);
currentBalance = cashMachine(1234, currentBalance, 800);
console.log(`New balance: ${currentBalance}`);

