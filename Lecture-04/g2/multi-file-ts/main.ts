import { add as add1, addHidden } from "./one";
import { add as add2 } from "./two";

add1(1, 2);

add2(1, 2);

const result = addHidden(10);
console.log(result);
