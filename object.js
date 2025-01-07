//key value pair: inside curly bracket
 //usecase of object is arrangement of code
//prmitive datatype : number, string, boolean, null, undefined
//non primitive datatype: object

// let x = {};
// console.log(x, typeof x);

// let user1 = {
//     firstName: 'sujan',
//     lastName: 'magar',
//     isMarried: true,
// };

// let user2 = {
//     firstName: 'shirish',
//     lastName: 'sthapit',
//     isMarried: false,
// };

// console.log(user2);

// //CRUD
// let laptopDetails = {
//     brand: 'Dell',
//     price: 2000,
//     isNew: true,
// }

//create/insert add color of laptop
//object bhitra xirnai lai dot operator use garne

//this is read operation
// console.log(laptopDetails.brand);      // use dot operator
// console.log(laptopDetails['price']);   //use sqaure bracket


//this create operation
// laptopDetails.color = 'green';       //dot operator
// console.log(laptopDetails);
// // laptopDetails['color'] = 'green';   // sqaure braceket


// // ? UPSERT (UPDATE OR INSERT)
// //update the object
// laptopDetails.brand = 'Apple';
// console.log(laptopDetails);

// // delete
// delete laptopDetails.isNew;
// console.log(laptopDetails);

//create an object named myhousedetails and add following properties

// let myhouseDetails = {
//     numberOfRooms: 9,
//     numberofMembers: 10,
//     colorOfHouse: 'Green',
//     builtYear: 2003,
//     numberOfStorey: 4,
// }

//delete
// delete myhouseDetails.numberofMembers;
// console.log(myhouseDetails);

//update 
// myhouseDetails.numberOfRooms = 5;
// console.log(myhouseDetails);

//insert
// myhouseDetails.estimatedPriceOfHouse = 200000;
// console.log(myhouseDetails);

// console.log('I have ' + myhouseDetails.colorOfHouse + ' coloured house with ' + 
//     myhouseDetails.numberOfRooms + ' where ' + myhouseDetails.numberofMembers + 
//     ' people are living. ' + 'The house is ' + myhouseDetails.numberOfStorey + ' and built in ' + 
//     myhouseDetails.builtYear + ' with an estimated budget of ' + myhouseDetails.estimatedPriceOfHouse + ' dollars.');

//write a function that takes 5 numbers and calculate the average of the provided numbers

function getAverage(a, b, c, d, e){
    return Average = (a + b + c + d + e) / 5;
}

console.log(getAverage(10, 20, 30, 40, 50));


    // const averageCalculator = (a, b, c, d, e) => {
    //     let sum = a + b + c + d + e;

    //     let avg = sum / 5;
    //     return avg;
    // }

    // const average = averageCalculator(10, 20, 30, 40, 50);
    // console.log(average);


//write a function that takes a number as a parameter and returns a sum from 0 to that number.
// Eg. if number is 5 then function should return 0+1+2+3+4+5 = 15

function getSum(x){
    let sum = 0;
    for(let i = 0; i <= x; i++){
        sum += i;
    }
    return sum;
}
console.log(getSum(5));

//write a function which converts rupees to paisa

function rupeesToPaisa(rupees){
    return rupees * 100;
}   

console.log(rupeesToPaisa(5));

// ? or we can do

const rupeestoPaisa = (rupees) => (rupees *100);

const convert = rupeesToPaisa(5);
console.log(convert);

//waf that converts dollar to cents

const dollarsToCents = (dollars) => (dollars * 100);

const conversion = dollarsToCents(10);
console.log(conversion);


//write a function that checks whether a number is prime or not

function isPrime(x){
    for(let i = 2; i < x; i++){
        if(x % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));


//write a function that prints largest of two different numbers

function getLargest(x, y){
    if(x > y ){
        return 'x is largest';
    }else{
        return 'y is largest';
    }
}
console.log(getLargest(10, 20));






