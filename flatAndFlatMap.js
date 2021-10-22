// const myArr = [1, [2, 3], 4, 5, [6, [7, 8]], 9];

// const oneArr = myArr.flat(Infinity);


// Sort()

const myArr = [200, 450, -400, 3000, -650, -130, 70, 1300];

const sortArr = myArr.sort((a, b) => a - b);



// console.log(sortArr);

// const overAllBalance = accounts.map(acc => acc.movements).flat().reduce((value, total) => value + total, 0);
// console.log(overAllBalance);



// const overAllBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((value, total) => value + total, 0);

// console.log(overAllBalance);












///================Fill method

const arr = new Array(7);

arr.fill(5);

console.log(arr);

const a = Array.from({ length: 10 }, () => 10);

console.log(a);