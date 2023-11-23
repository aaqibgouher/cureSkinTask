// 1. Travelling seating arrangement problem

// Input: First line of input will consist of a single integer T denoting number of test-cases. Each test-case consists of a single integer N denoting the seat-number.
// Output: For each test case, print the facing seat-number and the seat-type, separated by a single space in a new line.

const prompt = require("prompt-sync")();

let test = parseInt(prompt("Enter test case count: "));
let result = [];

// seat mapping array which stores mapping between seat with type & front seat no
const seatMap = {
  1: { seatType: "WS", frontSeat: 12 },
  2: { seatType: "MS", frontSeat: 11 },
  3: { seatType: "AS", frontSeat: 10 },
  4: { seatType: "AS", frontSeat: 9 },
  5: { seatType: "MS", frontSeat: 8 },
  6: { seatType: "WS", frontSeat: 7 },
  7: { seatType: "WS", frontSeat: 6 },
  8: { seatType: "MS", frontSeat: 5 },
  9: { seatType: "AS", frontSeat: 4 },
  10: { seatType: "AS", frontSeat: 3 },
  11: { seatType: "MS", frontSeat: 2 },
  12: { seatType: "WS", frontSeat: 1 },
};

while (test) {
  // taking input
  const seatNo = parseInt(prompt("Enter Seat No: "));

  // dividing by 12
  const modSeatNo = seatNo % 12;

  // pushing into result array
  result.push(
    `${seatMap[modSeatNo].frontSeat + (seatNo - modSeatNo)} ${
      seatMap[modSeatNo].seatType
    }`
  );

  test--;
}

// looping & showing output
result.forEach((ele) => console.log(ele));
