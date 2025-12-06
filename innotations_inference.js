// Typescript annotations means the instructions about the specification of data types
var num = 45;
var userName = "Shahzad Ahmad";
var bool = true;
// num = "45" // ❌ This would be a type error
// in functions
function product(a, b) {
    return a * b;
}
var p = product(5, 5);
console.log(p);
var userData = {
    username:123,
    age: 67,
    address: "city_town" + 66
};
console.table(userData);
