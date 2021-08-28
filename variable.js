/*2021 7/19
 */

"use strict";

console.log("Hello World!");

let muneo = "쀑";

{
  let muneo = "뛣";
  console.log(muneo);
}
console.log(muneo);

let aa = " ";
if (aa) {
  console.log("true");
} else {
  console.log("false");
}
console.log(aa);

let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement);

counter = 2;
const postIncrement = counter++;
console.log(postIncrement);
console.log(counter);

let ellie1 = "ellie";
const ellie2 = "ellie";
const ellie3 = ellie1;
console.log(ellie1 == ellie2, ellie1 === ellie2, ellie1 === ellie3);
ellie1 = "hongkong";
console.log(ellie3);

let ellie11 = { name: "ellie" };
const ellie21 = { name: "ellie" };
const ellie31 = ellie11;
console.log(ellie11 == ellie21, ellie11 === ellie21, ellie11 === ellie31);
ellie11 = { name: "elliexxxx" };
console.log(ellie31.name);

let aaaa = undefined;
if (aaaa) {
  console.log("true");
} else {
  console.log("false");
}
console.log(aaaa);

let bb = "muneo";
console.log(bb === "muneo" ? "octopus" : bb === "eobu" ? "fisher" : "who");
