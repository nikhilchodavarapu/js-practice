function addNNumbers(limit){
  let sum = 0;
  
  for (let currentNumber = 1; currentNumber <= limit; currentNumber++){
    sum += currentNumber;
  }

  return sum;
}

const limit = 20;
console.log("Sum of first", limit, "natural numbers is", addNNumbers(limit));
