// as is a key which asserts the type of value to ts compiler .
// Used with any , unknown and union types of data
var response = "45"; // here we assign a string but with any type so it doesnt care about the type of data 

response = 345; // this can aslo be done in case of any as there is no safety check.
var responseLength = response.length; // So here we have to forcefully tell that length is coming from a string

var bookName = '{"name":"think and grow rich"}'; // take book object as a string 
var bookObject = JSON.parse(bookName); // The object is coming from Book type forcefully tell by using as keyword
console.log(bookObject.name);


// with dom elements
var inputElement = document.getElementById('input');
// Type is specified as html input and it is gauranteed for using html input methods

// any and unknown
var value = "shan";
value = 45;
value = true;
value = 43.5;
value.toUpperCase(); // as we know that any dont care about checking and do what you write 
var newvalue = "gulkhan";
newvalue = 543;
newvalue = 54.34;
// unknown also allows every type of value but :
// newvalue.toUpperCase();//? this shows on the spot error that this is unknown type so we have to specify the type of value before using it 


//! we will use type gaurd checking
if (typeof newvalue === "string") {
    newvalue.toUpperCase();
} // now ts compiler knows when i will use the uppercase methods and checks for that
// with try catch
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message); // shows ts error without checking because error is unknown ts doesnt gauranteed either its really from error class and have a property message or not so we have of check it also.
    }
}


// now let make a unknow variable 
var data = "Mydata";
//*const newdata : string = data // this shown error that string is not assignable to unknown so we have to assert (forcefully say to ts)
var newdata = data;
console.log(newdata);
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("Redirecting to admin panel");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user panel");
        return;
    }
    // const check:never = role; //* here on hovering it shows never type which means that all the cases are handeled so this role never be used for checking unhandled values
    //* but if assign a new value to Role and not handele it manually the value will automatically come to this role and thus we added superadmin and its showing it .
}
function neverReturn() {
    while (true) {
        // we should know this also exists which never return anything but came sometime in usecase
    }
}
