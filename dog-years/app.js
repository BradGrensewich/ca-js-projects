//store my age
const myAge = 30;
//define early years of dog life
let earlyYears = 2;
earlyYears *= 10.5;

//age w/o early years
let laterYears = myAge - 2;

//convert to dog years
laterYears *= 4;

//dog year total
let myAgeInDogYears = earlyYears + laterYears;

//my name converted to lowercase
let myName = "Brad".toLowerCase();

//display age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
