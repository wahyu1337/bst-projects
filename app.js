import Tree from "./tree.js";
import { prettyPrint as logs } from "./pretty.js";

let node = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
node.sort();
logs(node.root);
console.log("Includes: 7, " + node.includes(7));
console.log("Includes: 99, " + node.includes(99));
node.insert(99);
node.sort();
logs(node.root);
console.log("Includes: 99, " + node.includes(99));
