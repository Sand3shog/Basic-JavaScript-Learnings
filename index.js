import { addNumber, multiplyNumber } from "./functions.js";

const res = addNumber(5, 6);
console.log(res);

const res1 = multiplyNumber(5, 6);
console.log(res1);

// ALT +SHIFT + O removes unnecessary imports

import greetUser from "./utils/greetUser.js";
// import sayGoodMorning from "./utils/greetUser.js";  //default export
greetUser();                                 // ctrl + space after greetUser