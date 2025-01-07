// array
// ? Map, filter, find, findindex, reduce, sort, every, some

//user map
// const numList = [10, 11, 12, 13, 14];

// numList.map((item, index, array) => {
//     console.log(item, index, array);   //we can write numList instead of array here
// });


// ? map => change keyword
// ? returns a new array
// ? original array length === returned array length

// const numList = [10, 11, 12, 13, 14];
// const newArray = numList.map((item, index, array) => { //map is a function itself and inside it another function is called i.e callback function
//     let newItem = item + 10;                           //original initial item is 10 so 10+10 = 20 in newArray
//     return newItem;
// });
// console.log(newArray);

//decrease value of each item by 5 and return new array
// const numList = [10, 11, 12, 13, 14];
// const newArray = numList.map((item, index, array) =>{
//     let newItem = item - 5;
//     return newItem;
// }
// );
// console.log(newArray);


    // let numbers = [5, 7, 9, 10, 12, 14, 17];

    // //print each number is odd or even from above array

    // numbers.forEach((item) =>{                           //forEach only for loop and map is changing the item inside array
    //     if(item % 2 === 0){
    //         console.log(item + ' is even');
    //     }else{
    //         console.log(item + ' is odd')
    //     }
    // });


    // let isGraduated = [true, false, false, true];

    // ? change true to false and false to true

    // const newArray = isGraduated.map((item, index, array) =>{
    //     let newItem = !item;
    //     return newItem;
    // }
    // );
    // console.log(newArray);

//simplest method
// const newArray = isGraduated.map((item) => !item);


// let marks = [25, 55, 60, 21, 20];

// ? add five marks to each item which is less than 32 and return new Array

    // const newArray = marks.map((item) => {
    //     if (item >= 32){
    //     return item;
    //     }else{
    //         return item + 5;
    //     };
    // }
    // );

    // console.log(newArray);


//or we can use ternary
// const newArray = marks.map((item) => (item >= 32 ? item : item+5));

// ? array filter
// filter item based upon condition
// return array size is more likely to be different from original size
// different from original array size

let numList = [15, 25, 55, -100, -25];

// filter positive numList only and remove negative 

// const newArray = numList.filter((item, index, array) => {   
//     if(item>0){
//         return item;
//     }
// });
// console.log(newArray)


// let marksList = [32, 55, 60, 70];
// generate a new array with marks greater than 55

// const newArray = marksList.filter((item) => item >55);

// console.log(newArray);


const studentList = [
    {
        id:1,
        username: 'suxil',
        isGraduated: false,
    },
    {
        id:2,
        username: 'shirisha',
        isGraduated: true,
    },
    {
        id:3,
        username: 'sujanma',
        isGraduated: true,
    }
]

// add id of each student by 100


// const newArray = studentList.map((item) =>{
//     let newItem = item.id + 100
//       item.id = newItem;
//     return newItem;
// }

// );
// console.log(newArray);

//get all students who are graduated
    // const newArray = studentList.filter((item) => {
    //     if(item.isGraduated === true){
    //         return item;
    //     }
    // }
    // );
    // console.log(newArray);

const newArray = studentList.filter((item) => (item.isGraduated));
console.log(newArray);