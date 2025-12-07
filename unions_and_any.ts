export{};
// Union is used for combining different datatypes to a single variable as any of the mentioned datatype can be assigned.
// it is flexible but stay in rules and provide safety.
let anyNumber: string | number | boolean 
anyNumber = 67;
anyNumber = "Shahzad"
anyNumber = true

// We cann also use union to make customm datatypes
let status: 'pending' | 'success' | 'error'
status = "error"// We can only assigne the three value defined in the union nothing else can be assigned to status
// anyNumber = undefined  This is not assignable as not mentionedd in union .


// On the other hand use of any provides no safety and can be assigned any type of value
let num :any
num = 56
num = "khan"
num = undefined 
num = false 

// so this donot show any warning and thus any has no safety 