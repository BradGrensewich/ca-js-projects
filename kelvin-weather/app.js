//forecast in kelvin
const kelvin = 293;
//celsius conversion
const celsius = kelvin - 273;
//conversion to f
let fahrenheit = celsius * (9/5) + 32;
//conversion to integer
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);