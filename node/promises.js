//something that happens in future

//3 stages: pending, success, rejected
//await: blocking the non blocking code

try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');     //await keyword is used to wait for the promise //mostly for api call and data fetch
    const data = await res.json();      //this is data fetch 
    console.log(data);
} catch (error) {
    console.log(error.message);
}

