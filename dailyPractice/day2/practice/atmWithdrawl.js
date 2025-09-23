// Javascript program to perform all arithematic, comparison, logical and assignment operators.
// ATM withdrawal 

const accountNumber = 45737;
const accountHolderName = "Sivaji";
let balance = 50095000;
let withdrawalAmmount = 95000;
const atmPin = 1234;
let enteredPin = 1234;

console.log("Account Number :", accountNumber);
console.log("Account Holder Name :", accountHolderName);
console.log("Current balance :", balance);
console.log();

console.log("Withdrawal ammount :", withdrawalAmmount);
if (withdrawalAmmount > balance) {
  console.log("Insufficient balance");
}
else {
  console.log("Enter pin :", enteredPin);
  if (enteredPin == atmPin) {
    console.log("Ammount Successfully withdrew");
    balance = balance - withdrawalAmmount;
  }
}
console.log("Current balance :", balance);
