// [],

//collection of datas

// const temperature = [20, 18, 27];
//we can create array of mixed datatypes

// const personalDetails = ['sandesh', 20, true, {x:2}, undefined];
// console.log(personalDetails);
// ? data types of array is object because it has index which starts which 0

// const laptopDetails = [
//     {
//     brand: 'Dell',
//     price: 20000,
//     isNew: true,
//     }, 

//     {
//         brand: 'Apple',
//         price: 2000000,
//         isNew: false,
//     }
// ]

// console.log(laptopDetails[0])

//create an array called friendlist and add your friends name

const friendList = ['sujan', 'shirish', 'sushil', 'ram', 'akash', 'liz'];
console.log(friendList);

console.log(friendList.length);  //to check the length of array
// console.log(friendList[2]);

for (let i = 0; i <= 4; i++){
    console.log(friendList[i])
}

//if there is may users or friends so we cannot count so

for (let i = 0; i <= friendList.length - 1; i++){
    console.log(friendList[i])
}

//push => adds item to end of array
//syntax: array.push(item, item2, .. , itemn)

const userList = ['ram', 'sujan'];
// arrayList.push('marie', 'sita');
// console.log(arrayList);

let numList = [100, 200, 300, 400];
numList.pop();   //removes last item
console.log(numList);


// shift => removes first item
// unshift => adds first item


