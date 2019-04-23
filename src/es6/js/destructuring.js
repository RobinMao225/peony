// 数组的解构赋值
let [a, ...b] = [1, 2, 3, 4];

console.log(a);
console.log(b);

let [foo = false] = [];
console.log(foo);

let [x, y = 'b'] = ['a', undefined];
console.log(x);
console.log(y);


// 对象的解构赋值
let hello = {a : 'dads', g: false, c: (x) => {x = x + 1; x = x * x; return x;}};
let { f } = hello;
console.log(f);

let { g } = hello;
console.log(g);

let {c} = hello;
console.log(c(1));

const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};

let {loc, loc: { start }, loc: {start: {line}}} = node;
console.log(loc);
console.log(start);
console.log(line);

let ccddee;

({
    my: ccddee
} = {
    my: '---------->dddddddddd'
});
console.log(ccddee);

let [c1, c2, ...c3] = 'hello';
console.log(c1);
console.log(c2);
console.log(c3);
let {length: fs} = 'hello';
console.log(fs);

function add({k, l},[r, e]) {
    return k + l + r + e;
}

console.log(add({k: 12, l: 13}, [1, 2]));
console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));