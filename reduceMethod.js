const usd = [20, 40, 44, 51, 66, 86, 120];

const totalBalance = usd.reduce((item, total) => {
  return item + total;
});

// console.log(totalBalance);

//====Finding Max value using reduce method...

const max = usd.reduce((value, total) => {
  if (value > total) return value;
  else return total;
}, usd[0]);

// console.log(max);

//====Finding Min value using reduce method...

const min = usd.reduce((value, total) => {
  if (value < total) return value;
  else return total;
}, usd[0]);

// console.log(min);

//36 + 32 + 76 + 48 + 28

let a = [36, 32, 76, 48, 28];

const t = a.reduce((value, total) => value + total);

// console.log(t / a.length);

const myArr = [200, 450, -400, 3000, -650, -130, 70, 1300];

//==========================

const usdtoUro = Number(
  myArr
    .filter((dollar) => dollar > 0)
    .map((uro) => uro * 1.1)
    .reduce((value, total) => value + total)
    .toFixed(2)
);

console.log(usdtoUro);
