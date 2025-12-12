// Object type declaration in ts
//* In TypeScript, you can declare the shape of an object (its property names, types, and structure) before assigning it any data.

//Example
let food: {
    name: string;
    price: number;
    fried: boolean;
}
// Data filling in Objects
//* If any property is missing, TS gives an error.
food = {
    name: "Chicken",
    price: 450,
    fried: true
}
//TYPE ALIAS (Reusable Object Type)
//* A shortcut name for a structure.
type Food = {
    name: string;
    price: number;
    ingredients: string[];
}
const fish: Food = {
    name : "fish",
    price : 400,
    ingredients : ["masala","banaspati ghee","salt"]
}
 // duck typing
 //* Only the required structure matters, not the variable’s original type name.
 type pot = {size: string}
 let smallPot:pot = {
    size : "500 ml"
 }
 let BigPot = {
    size : "1000 ml",
    material : "Steel"
 }
 /* Why allowed?

Because BigPot has at least the required property: size: string.

Extra properties do NOT matter.
TypeScript compares shapes, not type names.*/
smallPot = BigPot

// ASSIGNING A LARGER OBJECT TO A SMALLER TYPE
//* coffee fulfills all required fields of brew.
 type brew = {
    brewTime : number
 }
 const coffee = {
    brewTime : 56,
    beans : "arabica"
 }
 const chaibrew : brew = coffee


 type User = {
    username : string;
    password : string
    
 }
 const user: User = {
    username : "shahzad ahmad",
    password : "khan123",
 }

 type Item = {name :string, quantity : number}
 type Address = {street : string , pincode : number}

 type order = {
    id :string;
    item : Item[];
    adress : Address
 }
// PARTIAL<T>
// Make all properties optional.

 type Chai = {
    name : string;
    price : number;
    isHot : boolean
}
// When updating only some fields of an object.
const updateChai = (updates : Partial<Chai>) =>{
    console.log("Updating Chai with ", updates)
}
updateChai({price : 450})
updateChai({isHot : true})
updateChai({});

// REQUIRED<T>
//Make all optional fields become mandatory. Although it is typed as optional
type chaiOrder = {
    name? : string;
    quantity? : number
}

const orderChai = (order: Required<chaiOrder>) =>{
    console.log("Input data")
}
orderChai ({
    name : "Masala Chai",
    quantity  : 5
})
//PICK<T, K>
type student = {
    name : string;
    fname : string;
    roll_no : number;
}
/*Select small pieces from a large type.

Example: */
type pickData = Pick<student,  "name" | "fname">

const addstd : pickData = {
    name : "shahid",
    fname : "gulkhan",
}
// OMIT<T, K>
// Remove specific fields from a type.
type newChai = {
    name : string;
    price : number;
    ready : boolean;
    ingredients : string[]
}

type onlyChai = Omit<newChai, "ready">

const nayaChai : onlyChai = {
    name : "qahwa",
    price :67,
    // ready :false, this is omitted
    ingredients : ["blacktea","greentea"]
}
