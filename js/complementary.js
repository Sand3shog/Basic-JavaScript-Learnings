// ? reverse
// => reverses an array

    // const numList = [44, 32, 56, 78, 4];
    // numList.reverse();
    // console.log(numList);

// ? sort
    // in string
    // const nameList = ["shirish", 'xushil', 'gujan', 'roshani', 'ashika' ];
    // nameList.sort();   //sorts in ascending
    // console.log(nameList);

    // nameList.reverse(); //sorts in descending
    // console.log(nameList);

    // in number
    const numList = [20, 1, 255, 50, 78, 5, 33];
    numList.sort((a, b) =>{
        return b - a;        //descending sort
    })
    console.log(numList);

    numList.sort((a, b) =>{
        return a - b;        //ascending sort
    })
    console.log(numList);

// ? split => string's function
    const userName = 'sandesh maharjan';
    const splittedValue = userName.split(' ');    //splits into two values and preserves in array
    console.log(splittedValue);

    const firstName = splittedValue[0];
    const lastName = splittedValue[1];
    console.log(firstName);
