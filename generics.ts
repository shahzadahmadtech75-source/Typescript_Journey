interface Car{
    name : string;
    numberPlate : number | string;
}
const bike : Car = {name : "Zymco" , numberPlate : 455443,}

interface Vehicle {
    readonly id : number;
    category : string
    rent? : number
}

const motor : Vehicle = {id : 43 , category : "Cars"}
// motor.id = 345 , not mutable readonly properties

interface Sale {
    (price : number) : number
}

const newSale : Sale = (p)=>{
    return 678
}

// interface methods
interface Transport {
    start():void;
    stop():void;
}
const car : Transport = {
    start(){
        console.log("start")
    },
    stop(){
        console.log("stop")
    }
}
// index signature : An index signature allows objects to have dynamic(any) property names with a fixed value type.
interface Rating {
    [fiveStar : string] : number
}

const rate : Rating = {
    liyari : 54,
    bihari : 4.3,
    //* In JavaScript, object keys are always strings, so TypeScript allows number keys for string index signatures.
    50 : 400
}

// merging interfaces
interface User {
    name: string
}

interface User {
    age : number
}

const newUser : User ={
    name : "Gulbadeen",
    age : 67 // properties from both interfaces are must to be decclared and used
}

// Extends of interfaces
interface Patient {
        temperature : number
}
interface Patient1 {
    medicines : string[]
}

interface doctor extends Patient , Patient1{} // this works same as merging but doing manually
const nurse : doctor = {
    temperature : 104,
    medicines : ["Brufen","Calpol","Hydrallin","Double Poston"]
}
// generic functions
/**Generics TypeScript mein ek mechanism hai jo type parameters ke zariye
functions, interfaces, aur classes ko multiple types ke sath reuse karne deta hai
without losing type safety. */
function getValue<T>(x:T): T{
    return x
}
getValue<string>("shah")
getValue<number>(10)
getValue<boolean>(true)


// Generic interfaces (general interface)
interface buy<Y> {
        value : Y
}
const news:buy<number> = {value : 54}
const newss:buy<string> = {value : "shies"}