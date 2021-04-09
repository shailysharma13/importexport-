//import

const myClass  = require("./exportclass")//current directory
console.log(myClass);

let obj = new myClass();
console.log(obj);
let x= obj.getMyName();
console.log(x);