var line = (msg='msg') => {
    return {
        pre: () => console.log(`------------ ${msg} ---------------`),
        after: () => console.log(`++++++++++++ ${msg} +++++++++++++++`)
    };
};

let defaultParamTest = () => {

    function temp(x = 0, y = 'hello') {
        console.log(x, y);
    }

    line('Temp').pre();

    temp();
    temp(false, false);
    temp('dadss', '');
    temp(2, 'world');

    line('Temp').after();
};

let constructParamTest = () => {
    function Person(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.song = function () {
            console.log(this.x, this.y);
        };
        console.log(this);
    }

    Person.prototype.sayHello = function () {
        console.log(this.x, this.y);
    };

    line('Person').pre();

    const p = new Person();
    p.sayHello();
    p.song();

    line('Person').after();
};

let funcDefaultParamsTest = () => {
    function m1({x=0, y=0} = {}) {
        console.log(x, y);
    }

    function m2({x, y} = {x:0, y:0}) {
        console.log(x, y);
    }

    line('funcDefaultParams').pre();

    m1();
    m2();

    m1({x:1, y:1});
    m2({x:1, y:1});

    m1({x:1});
    m2({x:1});

    line('funcDefaultParams').after();
};

// 普通的function里面含有默认的this对象，如果该函数作为对象的方法，则this指向对象，否则指向全局对象
// 箭头函数里面根本没有自己的this，而是引用外层的this。
let thisObjTest = () => {
    line('thisObjectTest').pre();

    function foo() {
        setTimeout(() => {
            console.log('id: ', this.id);
        }, 100);
    }
    var id = 21;
    foo.call({id: 42});


    function Timer() {
        this.s1 = 0;
        this.s2 = 0;

        setInterval(() => {
            this.s1++;
        }, 1000);

        setInterval(function() {
            this.s2++;
        }, 1000);
    }

    var timer = new Timer();

    setTimeout(() => {
        console.log('s1: ', timer.s1);
    }, 3100);

    setTimeout(function() {
        console.log('s2: ', timer.s2);
    }, 3100);


    function yoo() {
        return () => {
            return () => {
                return () => {
                    console.log('id', this.id);
                };
            };
        };
    }

    line('thisObjectTest').after();



};

defaultParamTest();
constructParamTest();

funcDefaultParamsTest();
thisObjTest();

(function temp() {
    for(let i = 0; i < 100; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
})();