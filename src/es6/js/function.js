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
        }
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


defaultParamTest();
constructParamTest();
funcDefaultParamsTest();

