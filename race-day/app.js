let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = true;

let age = 19;

if (age > 18 && isEarly) {
  raceNumber += 1000;
}

if (age > 18 && isEarly) {
  console.log(`Runner ${raceNumber} will race at 9:30am`);
} else if (age > 18) {
  console.log(`Runner ${raceNumber} will race at 11:00am`);
} else if (age === 18) {
  console.log('Please see registration desk');
} else {
  console.log(`Runner ${raceNumber} will race at 12:30am`);
}
