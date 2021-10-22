const arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//=======SLICE - it cann't change our main array
// console.log(arrOne.slice(4,-2));
// console.log(arrOne.slice(1,3));
// console.log(arrOne.slice(4,-1));
// console.log(arrOne.slice(3, 4));

//========SPLICE - it change our main array

// const arrTwo = arrOne.splice(2, 4);
// console.log([...arrTwo,...arrOne]);


// console.log(arrOne.pop());
// console.log(arrOne);


//========REVERSE - it change our main array

// console.log(arrOne.reverse());
// console.log(arrOne);



//========CONCAT - it cann't change our main array

const arrThree = ['a', 'b', 'c'];
const arrFour = ['d', 'e', 'f', 'g'];
// console.log(arrThree.concat(arrFour));
// console.log([...arrThree,...arrFour]);


//========JOIN - it cann't change our main array

// console.log(arrThree.join(' / '));
// console.log(arrThree.join(' * '));
// console.log(arrThree.join(' ... '));



//==========push/pop/shift/unshift/indexOf etc....