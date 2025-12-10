type orderType = {
    type: string;
    sugar: number;
    milk: number;
    strong: boolean
}

function orderTea(order: orderType) {
    console.log(order)
}

function serveTea(order: orderType) {
    console.log(order)
}

//So if we have to use this order type again and again so we can make a separate type .

//* In TypeScript, type is used to create a named rule for any kind of data, such as objects, unions, functions, or values.
type chaiRecipe = {
    water: number;
    milk: number;
}
//implements is used by a class to follow the structure of an interface or type.
//It forces the class to define all required properties and methods.
class karakChai implements chaiRecipe {
    water = 100
    milk = 50

}

//An interface is used to define the structure (shape) of an object or class.
//It tells which properties and methods must exist, but it does not create any real data or code.
interface cupsize { // it makes the rules that must be followed by the implemented class

    size: "small" | "medium" | "large"; // an interface cant be itself a union , so here union is actually assigned to size which is a property of cupsize obj no interface itself
    count: number
}
class chaiCup implements cupsize {
    size: "small" | "medium" | "large" = "medium";
    count = 7
    show() {
        console.log("i am shown")
    }
}
// using interface in classes
interface response {
    responsevalue: { ok: true } | { ok: false }
}
class myresp implements response {
    responsevalue = { ok: true };
}

//using type union in function
type phone = "apple" | "samsung" | "nokia"
function orderPhone(order: phone) {
    console.log(`Your order for ${order} phone is submitted.`)
}

// using type intersection
type name = { name: string }
type Myphone = { phone: number }
type CNIC = name & Myphone// this is type intersection

const person: CNIC = {
    name: "shahzad",
    phone: 345
}

// optional properties use
type user = {
    username: string
    bio?: string // this means bio is optional
}
const user1: user = {
    username: "Gulgabeen",
    // bio : "I am adding my bio" , no affect
}
user1.username = "shahzad ahmad" // properties can be changed

// Now discuss readonly properties which must be assigned once and cant be changed

type config = {
    readonly appName: string;
    size: number | string
}
const cfg: config = {
    appName: "Kinemaster",
    size : "23 MB"
}
cfg.size = 45// this is allowed but :
//cfg.appName = "Capcut" //? this is not allowed because appname is readonly property
