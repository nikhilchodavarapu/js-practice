// Javascript program to perform some arithematic, comparison, logical and assignment operators.
// Train Tickets Booking

let availableSeats = 3
let requiredTickets = 5
const priceOfATicket = 450

let totalAmount = requiredTickets * priceOfATicket
console.log("Waiting for payment.......");
if (availableSeats > 0){
  if (requiredTickets > availableSeats){
    let waitingList = requiredTickets - availableSeats;
    let confirmedTickets = requiredTickets - waitingList;
    console.log(confirmedTickets, "tickets are confirmed");
    console.log(waitingList, "tickets are in waiting list");
  }
  else{
    console.log(requiredTickets, "tickets are confirmed");
  }
}
else{
  console.log(requiredTickets, "tickets are in waiting list");
}
