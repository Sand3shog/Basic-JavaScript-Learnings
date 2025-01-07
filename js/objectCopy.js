// const Student1 ={
//     firstName: 'Suxil',
//     lastName: 'Thakur',
// }

    // const Student2 = Student1;   //shallow copy which is wrong method of copying

    // Student1.firstName = 'Sandesh';
    // console.log(Student2)    //here student2 must give suxil as output but it gives updated one i.e sandesh which is wrong

// ? another method is spread operator
// const Student2 = {...Student1}; //only copys object //creates new object but it;s also a shallow copy //does not work in  nested object

// ? StructuredClone

const laptopDetails1 = {
    brand: 'Dell',
    price: 200000,
    storage: {
        memory: 16,
        ssd: 512,
    }
}

console.log(laptopDetails1);
const laptopDetails2 = structuredClone(laptopDetails1);
laptopDetails1.storage.ssd = 1;
console.log(laptopDetails1);
console.log(laptopDetails2);

