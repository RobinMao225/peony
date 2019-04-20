let [a, ...b] = [1, 2, 3, 4];

console.log(a);
console.log(b);

let [c, d] = [5, 6, 7, 8];
console.log(c);
console.log(d);

let [foo = false] = [];
console.log(foo);

let { f } = {f : 'dads', b: false};
console.log(f);

let { log } = console;
log('test');