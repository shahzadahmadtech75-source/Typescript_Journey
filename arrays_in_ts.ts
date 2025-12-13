// Array type annotations
const colours: string[] = ["red", "black", "green", "white", "yellow"]
const integers: number[] = [1, 2, 3, 4, 5, 6, 7]

const names: Array<string> = ["shah", "gulkhan", "sadeer", "faser"]

// array of objects
type login = {
    name: string;
    pinCode: number
}
const signup: login[] = [
    { name: "shahzad", pinCode: 4656 },
    { name: "khanzada", pinCode: 7654 },
    { name: "sahibzada", pinCode: 8344 }
]


// Readonly arrays : unmutable arrays , can be defined as much but cant be modified
const cities: readonly string[] = [""]
//multidimensional arrays
const multiArr: number[][] = [
    [12, 23, 34],
    [95, 34, 23],
    [34, 43, 23]
]

//tuple annotation
type TupleArray = [string, number] // sequence is must
const info: TupleArray = ["Shahzad", 34]
const moreInfo: TupleArray = [23, "David"] // wrong squence ,error

// adding optional value
let courseInfo: [string, number, boolean?];
courseInfo = ["Programming", 12,]
courseInfo = ["Mathematics", 43, false] // true false is optional

//readonly tuple
const marks: readonly [number, number] = [150, 499]

// naming tuples
const orderfood: [name: string, price: number] = ["Fried Fish",500]

// Enum annotation
enum cupSize {
    LARGE,
    SMALL,
    MEDIUM,
}
const orderCup = cupSize.MEDIUM

// enum automatic incrementation
enum Status {
    PENDING = 100, // if assigned to a value
    SUCCESS, // automatically 101
    CANCEL // automatically 102
}

// enum in functions 
enum foodMenu {
    FISH = "FRIED FISH",
    CHICKEN = "WHITE CHICKEN",
    CHAI = "BALCK TEA SPECIAL"
}
function menu(order:foodMenu){
    console.log(`Serving your favourite ${order}`)
}

// calling the function
menu(foodMenu.CHICKEN) // only the enum values are accepted
// menu("chicken") // wrong not assignable

// heterogenous enum values
enum man {
    NAME = "KHAN ACADEMY WALA",
    AGE = 34
} // THIS IS ALLOWED BUT NOT  A GOOD AND STANDARD PRACTICE

// CONSTANT ENUMS CAN ALSO BE DEFINED AS THEIR VALUES CAN BE CHANGED LATER
const enum salary{
    JUNIOR = 20000,
    SENIOR = 100000,
    MANAGER = 300000
}
let mySalary = salary.SENIOR

// tuples care
const t:[string,number] = ["fan",45]
t.push("ceiling") // this works because tuple is also an array extension so this can be possible, be careful

