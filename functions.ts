// function argumments checking
function person(name : string,age: number){
    return `Name of the person is ${name} and his age is ${age} years.`
}

person("Gulkhan",56)

//function returning checking

function noOfStudents():number{
    return 45
}

function studentName(name:string){
    if(!name) return null
    return name
}
//this is valid but annotating return type will show ts warning
function teacher(name:string) : string{
    if(!name){
        //return null error beacause return type is string
    }else{
        return name
    }
}
//void function
function show():void{
    console.log("The show is ready!")
    //return 78 not assignable
}

// optional parameter + type function
function language(type? : string){
    return type
}
language("English") //nothing else datatype is assignable

// default parameter value
function region(country :string = "Pakistan"){
    console.log(country)
}
region() // this is also a type of optional parameter


// complex parameter
function shoeShop(order: {
    name : string;
    size : number;
    newBrand:boolean;
}):number{
    return 45
}
