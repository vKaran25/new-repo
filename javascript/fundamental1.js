/*console.log("hello"):*/
/* variables = containers in the language*/
/*JS variables can be changed in runtime means it can firstly it can store a no but it can be made to store a array this is */ 
/*called dynamically typed language and static lang is just opp tp it*/

/*
let firstName = "karan"
console.log(firstName);
firstName = 19
console.log(firstName);
*/

/*          var vs const
 const datatype value can not be changed throughout the js program 
let is used for block scoped
var is global scoped it will be same inside and outside the block 
*****DO NOT USE VAR COZ  IT CAN INTRODUCE UNECCEARY BUGS****


const birthMonth = "april"
console.log(birthMonth); 
*/

/*
primitive datatypes = 7 primitive datatypes (means types type of data which is provided to variables)
string,symbol,number,null,boolean,bigint

let a ="karan"
let b = true
let d = BigInt("6787")
let e = Symbol("a symbol")
let f = undefined
let g = null    /*null will show object type
console.log(typeof(g));

non primitive datatypes = objects */

const information = {
    FirstName : "Karan",
    lastName : "Verma",
    age: 19,
    profession :"student",
    isLogggedIn : false
}

console.log(information["isLogggedIn"]);
console.log(information['karan']);   /* if thing entered which is not in object it will give undef */

































