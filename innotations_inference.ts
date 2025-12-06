export{};
// Typescript annotations means the instructions about the specification of data types

let num: number = 45;
let userName: string = "Shahzad Ahmad";
let bool: boolean = true;

// num = "45" // ❌ This would be a type error

// in functions
function product(a: number, b: number): number {
  return a * b;
}

let p = product(5, 5);
console.log(p);

// in objects
type Data = {
  username: string;
  age: number;
  address: string | number;
};

let userData: Data = {
  username: "Shahzad",
  age: 67,
  address: "city_town" + 66
};

console.table(userData);
