var temp = () => {
    console.log(...'adfcda');
    let x = 1;
    const array = ['a', ...(x > 0 ? ['b'] : [])];
    console.log(...array);
};

var applyTest = () => {
    function hello([a = 0, b = 0, c = 0] = []) {
        console.log(a);
        console.log(b);
        console.log(c);
    }
    hello();
    hello.apply(null, ...['a','d','s','f','a']);
};

var extendApplyTest = () => {
    let a1 = [1,2]
    let a2 = [...a1];
    let a3 = [...a1, ...a2];
    console.log(a2);
    console.log(a3);
};

// applyTest();
extendApplyTest();
