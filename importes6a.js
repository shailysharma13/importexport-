//import
import {MyClass} from "./exportes6c.js";
let obj = new MyClass();
obj.getmyno();
console.log(obj.getmyno());
 
import { A } from "./exportes6a.js";
let h=A();
console.log(A());


import C  from "./exportes6b.js";
let z= C(40);
console.log(z);

import K from "./exportes6d.js";
console.log(K[0].getval());

//addition 
console.log(`the sum is :-${(+h)+(+z)+(+obj.getmyno())+(+K[0].getval())}`);