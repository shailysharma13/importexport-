//import
import {MyClass} from "./exportes6c.js"
let obj = new MyClass();
obj.getmyno();
 
import { a } from "./exportes6a.js"
let h=  a();
console.log(h);

import { b } from "./exportes6b.js"
let z = b();
console.log(z);

import u from "./exportes6d.js"
console.log(u[0].getval());

//addition 
console.log(`the sum is :  ${(+obj.getmyno())+(+h)+(+z)+(+u[0].getval())}`);