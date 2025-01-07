// node => single threaded

// ? single threaded => one thing at a time
// node is not blocking

// ? synchronous => happening at same time
// ? asynchronous => not happening at same time

console.log('hello');

setTimeout(() =>{
    console.log('timeout of 5 sec');
}, 5000);                                //this will run after hi

console.log('hi');