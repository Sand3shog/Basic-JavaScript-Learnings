// console.log('hello world!');

// let num1 = 5;
// let num2 = 10;

// if(false){
//     console.log(num1 + num2);
// }                             //only prints if condition is true

// console.log('HI');

//syntax of if and else
// if(condition){
    //code
//} else {
    //code
//}
    // let x = 9;
    // let condition = 15 >9;
    // if(condition){
    //     console.log('first condition is true');
    // } 

//if else
    // const condition1 = 2 ** 4 > 16;

    // if(condition1){
    //     console.log('first condition1 is true');
    // }else{
    //     console.log('first condition1 is false');
    // }


//check if the number is even or odd
    // let num = 25;
    // if(num % 2 === 0){
    //     console.log('number is even');
    // }else{
    //     console.log('number is odd');
    // }

//check the largest number between two
    // let num1 = 20;
    // let num2 = 25;
    // if(num1 > num2){
    //     console.log('num1 is greater than num2');
    // }else{
    //     console.log('num2 is greater than num1');
    // }

//syntax if, elseif and else
    //determine whether number is positive, negative or zero
    // let num = 0;
    // if(num > 0){
    //     console.log('number is positive');
    // }else if(num < 0){
    //     console.log('number is negative');
    // }else{
    //     console.log('number is zero');
    // }

//find largest number among three numbers
    // let num1 = 5;
    // let num2 = 9;
    // let num3 = 11;
    // if(num1 > num2 && num1 > num3 ){
    //     console.log('num1 is greater than num2 and num3');
    // }else if(num2 > num1 && num2 > num3){
    //     console.log('num2 is greater than num1 and num3');
    // }else{
    //     console.log('num3 is greater than num1 and num2');
    // }

//ternary operator
//syntax : condition ? trueExpression: falseExpression
//    let num = 11;
//    num >10 ? console.log("hello") : console.log("bye");

   //in short cut
//    console.log(num>10 ? "hello" : "bye");  //it states if greater then hello if not then bye

// let x = 55;
// console.log( x % 2 === 0 ? "even" : "odd");  //short form of if else

// switch

// let day = 1;

// switch(day){
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     default:
//         console.log('Invalid day');
// }


//Exercises
//Question1:Check if a number is odd or even.

let num = 10;
if (num % 2 === 0){
    console.log('number is even');}
else{
    console.log('number is odd');
};

//Question2: Check if input variable is a number or not 

let input = 'hello';
if (typeof input === 'number'){
    console.log('input is a number');
}else{
    console.log('string');
}

//question3: Find the largest of three numbers.

let num1 = 22;
let num2 = 34;
let num3 = 9;

if (num1 > num2 && num1 > num3){
    console.log('num1 is largest');
}else if(num2 > num1 && num2 > num3) {
    console.log('num2 is largest');
}else {
    console.log('num3 is largest')
}


//QUESTION4: Perform arithmetic operation based on the option provided. 
// Set two variables with numbers. Create another variable called “option” which can be add/subtract/multiply/divide/power. 
// Based upon the value of the option. Perform appropriate operation. 
// e.g. if option is “add”, perform num1+num2

let numb1 = 10;
let numb2 = 20;
let option = 'add';
if (option === 'add'){
    console.log(numb1 + numb2);
}else if (option === 'subtract'){
    console.log(numb1 - numb2);
}else if (option === 'multiply'){
    console.log(numb1 * numb2);
}else if (option === 'divide'){
    console.log(numb1 / numb2);
}else if (option === 'power'){
    console.log(numb1 ** numb2);
}else{
    console.log('invalid option');
}

console.log('the operation is ' + option);

//question5: Find grades for student marks. 
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.  
// “F” for marks  less than 60.

let mark = 50;
if (mark >= 90){
    console.log('Your grade is A+');
}else if (mark >=80){
    console.log('your gade is A');
}else if (mark >= 70){
    console.log('your grade is B');
}else if (mark >= 60){
    console.log('your grade is C');
}else{
    console.log('your grade is F');
}


