const movements = [20, -40, 44, -51, 66, -86, 120];

const deposits = movements.filter((mov) => mov > 0);
console.log(deposits);

const widthdrew = movements.filter((mov) => mov < 0);
console.log(widthdrew);
