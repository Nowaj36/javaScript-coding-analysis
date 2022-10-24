let a = 5;
let b = 7;
// console.log("before swap", "a =", a, "b =", b);
let temp = a;
a = b;
b = temp;
// console.log("after swap", "a =", a, "b =", b);

let x = 7;
let y = 5;
// console.log("before swap", "x =", x, "y =", y);
x = x + y;
y = x - y;
x = x - y;
// console.log("before swap", "x =", x, "y =", y);

let p = 11;
let q = 50;
[p, q] = [q, p]
console.log("before swap", "p =", p, "q =", q);