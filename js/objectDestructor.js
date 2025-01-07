// object destructive
// dot hatauna use hunxa. object vitra ko properties access garda dot rakhna maan lagena vney, code left ko right ma right ko left ma

    // let user1 = {
    //     firstName : 'Shirish',
    //     lastName: 'Sthapit',
    //     address: 'sandesh_ko_under',
    // };

    // let user2 = {
    //     firstName : 'susxil',
    //     lastName: 'Sthapit',
    //     address: 'sandesh_ko_under',
    // };

    // let {firstName, lastName, address} = user1;
    // let {firstName: first, lastName: last, address: Address } = user2;
    // console.log(firstName);
    // console.log(first);

//nested object
let studentDetails = {
    firstName : 'sujana',
    lastName: 'magar',
    address: {
        temporary: 'ekantakuna',
        permanent: 'sandesh_ko_under',
    }
};

console.log(studentDetails.address.permanent);
console.log(studentDetails['address'].permanent);

