"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union is used for combining different datatypes to a single variable as any of the mentioned datatype can be assigned.
// it is flexible but stay in rules and provide safety.
var anyNumber;
anyNumber = 67;
anyNumber = "Shahzad";
anyNumber = true;
var orders = ['12', '23', '34', '45', '56', '67'];
var countOrder;
var order;
for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
    order = orders_1[_i];
    if (order === '45') {
        countOrder = order;
    }
    console.log(countOrder);
}
// anyNumber = undefined  This is not assignable as not mentionedd in union .
// On the other hand use of any provides no safety and can be assigned any type of value
var num;
num = 56;
num = "khan";
num = undefined;
num = false;
// so this donot show any warning and thus any has no safety 
