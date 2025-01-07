// function getSum(x, y){
//     console.log(x + y)
// }

// getSum(10, 20);

//write a function which determines a number is odd or even

    // function number(x){
    //     if (x % 2 === 0){
    //         console.log('even');
    //     }else{
    //         console.log('odd');
    //     }
    // }

    // number(11);

//write a function to calcuulate product of two numbers

// function product(x, y){
//     let result = x * y;
//     return result;
// }

// const result = product(10, 20);
// console.log(result);      //we can store the result in a variable without directly console log inside scope{}

//write a function to calculate factorial of a number

    // function getFactorial(x){
    //     let result = 1;
    //     for (let i = x; i >=1; i--){        //5*4*3*2*1
    //         result = result * i;
    //     }
    //     return result;
    // }   

    // const result = getFactorial(5); 
    // console.log(result);


    //arrow function

    // const greetUser = (Username) => {
    //     console.log('Good Morning'+ " " + Username)
    // };


    // greetUser('Sandesh'); //call function

    //concatinate      
    // let firstName = 'sandesh';
    // let lastName = 'mrz';
    // let fullName = firstName + " " + lastName;
    // console.log(fullName);

    // let fullName = `${firstName} ${lastName}`  //alternative method
    // console.log(fullName);

//write an arrow function which calculates whether a number is positive, negative or zero

const isPolarity = (x) => {
    //
    if( x > 0){
        return 'positive';
    } else if ( x < 0){
        return 'negative';
    } else {
        return 'zero';
    }  
};

const num = isPolarity(0);
console.log(num);




