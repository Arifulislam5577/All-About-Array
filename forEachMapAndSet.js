//========MAP
const allSchool = new Map([
    ['Baroicha', 'BRMS'],
    ['Dhukondi', 'DAHS'],
    ['Charabug', 'CIHS'],
    ['Dewanechar', 'DAHS']
])


allSchool.forEach((value, key) => {
    console.log(`${key} School's short name is ${value}`);
});



//========SET

const years = new Set([2013, 1975, 1975, 2009, 2010, 2008, 2008, 1968]);
const friendName = new Set(['Abul', 'Babul', 'Cabul', 'Dabul', 'Ebul', 'Abul', true, true, false, false, false]);

const schoolYear = [];
const friends = [];

//SET এর forEach এর ক্ষেত্রে কোনো ইন্ডেক্স নাম্বার থাকে না। এটা শুধু value দিয়ে থাকে। 

friendName.forEach((friend,key) => {
  friends.push(`Number: ${key} ${friend}`);
});

console.log(schoolYear);
console.log(friends);