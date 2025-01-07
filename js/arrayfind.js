// find
// return first item which satisfies the condition

// const numList = [55, 65, 70, 120, 115];

// ? find returns only the first element that satisfies the condition, so here in case of number greater than 100, it returns only 120
// ? filter returns all elements satisfying the condition whereas find returns only first element
// ? find return object or value not array

// const newArray = numList.find((item) => {       
//     return item >100;
// });

// console.log(newArray);

const userList = [{
        id: 1,
        email: 'user@gmail.com',
        username: 'suxil',
    },
    {
        id: 2,
        email: 'user2@gmail.com',
        username: 'shirish',
    },
    {
        id: 3,
        email: 'user3@gmail.com',
        username: 'sujana',
    },
    {
        id: 4,
        email: 'user4@gmail.com',
        username: 'presha',
    },
];


// find user with email user3@gmail.com

const newArray = userList.find((item) => {
    return item.email === 'user3@gmail.com';
})

console.log(newArray);