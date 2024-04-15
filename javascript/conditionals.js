console.log("conditionals in JS");

let age = 45 
if (age>18){
    console.log("you can drive");
}
else if(age == 0){
    console.log("no joke");
}
else {
    console.log("you can not drive");
}
a2 = 8 ,b2=9
//ternary operator is used to put if else in a single line ,syntax is below 
console.log(a2>b2 ?a2+b2:a2-b2)

const info = {
    firstName: "Karan",
    lastName: "Verma",
    marks: 19,
    isFailedInMaths: true
}
/*
if(info.isFailedInMaths == true || info.marks < 15){
    console.log("pdhle bhai kb tk fail hoga");
}
else {
    console.log("Very good");
} */

//using ternary operator 
//info.isFailedInMaths == true && info.marks<20?console.log("pdle bhai"):console.log("ok")
/*
let age1= 75

if(age1>= 10 && age1<=20){
    console.log("You are a tennager");
}
else if(age1<10){
    console.log("You are a kid");
}
else{
    console.log("You are a boomer");
}
*/
/*
let number = 9
if(number % 2 == 0 || number % 3 == 0){
    console.log("The no is divisible by 2 and 3");
}
else{
    console.log("The no is divisible by some other no");
}

let age1 = 1

age1 >= 18 ?console.log("you can drive"):console.log("you can not drive");
*/






