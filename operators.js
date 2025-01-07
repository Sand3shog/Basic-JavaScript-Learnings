//symbols which performs specific tasks
// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators

// 1. Arithmetic operators
// +, -, *, /, %, ++, --

// console.log(5+5);
// console.log(5-5);   
// console.log(5*5);
// console.log(5/5);
// console.log(5%5);
// console.log(5**5); //power
// console.log(11%5); //remainder


// let num1 = 99;
// let num2 = 50;
// console.log(num1 % num2);

//or we can
//let res = num1 % num2
// console.log(res);


//2. Assignment operators
    // =, +=, -=, *=, /=, %=

//     let a = 10;
//     a += 5;    //a = a + 5 
//     console.log(a);

//     //same for %=
//     let num = 50;
//     num %= 5;
//     console.log(num);

// // 3. Comparison operators
// // ==, ===, !=, !==, <, >, <=, >
//     let user1 = 'John';
//     let user2 = 'sushil';
//     console.log(user1 == user2);     //comparsion of values only

//     let x = 2;
//     let y = '2';
//     console.log(x === y);   //comparison of values and datatypes both //strict comparison

//     console.log(x != y);  //not equal
//     console.log(x !== y);  //strict not equal

//    console.log(5>=6);  //compares which one is suitable is it greater or equal to or not and gives according to it


// 4. Logical operators
// &&, ||, !    //in boolean
// let condition1 = true;
// let condition2 = false;
// console.log(condition1 || condition2);   //or gate, if first condition true then it is true
// console.log(condition1 && condition2);   //and gate, if first condition false then it is false

    // let c1 = 'Nepal' === 'Nepal'; //true
    // let c2 = 5>9;   //false
    // let c3 = '10' !== 10;   //true

    // let res = c1 || c2 || c3;   //or gate
    // console.log(res);

    //AND GATE &&
    // let c1 = true;
    // let c2 = false;
    // let c3 = true;
    // let res = c1 && c2 && c3;   //and gate //one false then it is false
    // console.log(res);

    //NOT GATE
    let c1 = true;
    let c2 = false;
    let c3 = true;
    let res = !c1;   //not gate
    console.log(res);


//Exercises
//compute following using assignment operators\
//x = x +5,where x = 2

let x = 2;
x += 5;
console.log(x);

//b =b**2, where b =3
let b = 3;
b **= 2;
console.log(b);

//m = m%2,where m=3
let m = 3;
m %=2;
console.log(m);


//question2;
//Create a variable named totalAmount and store your number as a string. Convert it into a number type.

let totalAmount = '100';
totalAmount = Number(totalAmount);
console.log(typeof totalAmount);


//Question3:
//Convert string “20ebp” to number and print out the result

let str = '20ebp';
let str1 = Number(str);
console.log(typeof str1);

//Question4:
//Convert “nep10” to number and print out the result to console.Explain the result

let strng = 'nep10';
let strng1 = Number(strng);
console.log(typeof strng1); //the result will be number 

