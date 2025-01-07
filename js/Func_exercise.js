//write a function that checks if the provided number is odd or even.

// function number(x){
//     if(x % 2 === 0){
//         return 'even';
//     }else{
//         return 'odd';
//     }
// }

// const num = number(11);
// console.log(num);

//write a function that takes a number and prints value from 0 to that number (use while loop).

// function getNumber(x){
//     let i = 0;
//     while( i <= x){
//         console.log(i);
//         i++;
//     }
// }

// console.log(getNumber(11));


//Write a function that takes “add”/“subtract”/”multiply”/”divide” and two numbers 
// as parameters and perform appropriate operations.

function operation(x, y, z){
    if(x === 'add'){
        return y + z;
    }else if(x === 'subtract'){
        return y - z;
    }else if(x === 'multiply'){
        return y * z;
    }else if(x === 'divide'){
        return y / z;
    }
}

console.log(operation('multiply', 10, 20));


//Write a function that takes day of week as parameter and returns 1,2,3,4,5,6. 
// Example.. Provided sunday should return 1,monday returns 2

function day(x){
    if(x === 'sunday'){
        return 1;
    }else if(x === 'monday'){
        return 2;
    }else if(x === 'tuesday'){
        return 3;
    }else if(x === 'wednesday'){
        return 4;
    }else if(x === 'thursday'){
        return 5;
    }else if(x === 'friday'){
        return 6;
    }else if(x === 'saturday'){
        return 7;
    }else{
        return false;
    }
}
console.log(day('sunday'));

//Write a function that takes 5 numbers 
// and calculates the average of the provided numbers.

function getAverage(a, b, c, d,e){
    return Average = (a + b + c + d + e) / 5;
}

console.log(getAverage(10, 20, 30, 40, 50));


//Write a function that takes a number as a parameter and 
// returns a sum from 0 to that number. 
// E.g if number is 5 then function should return 0+1+2+3+4+5=15

function getSum(x){
    let sum = 0;
    for(let i = 0; i <= x; i++){
        sum += i;
    }
    return sum;
}

console.log(getSum(5));


//WAF that converts dollars into cents.

function dollarstoCents(dollars){
    return dollars * 100;
}

console.log(dollarstoCents(10));

//WAF that calculates the factorial of a number.

function factorial(x){
    let fact = 1;
    for(let i = x; i >= x; i--){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));


//prime or not

function isPrime(x){
    for(let i = 2; i < x; i++){
        if(x % i === 0){
            return 'is not prime';
    }
    }
    return 'is prime';
}   
console.log(isPrime(11));
