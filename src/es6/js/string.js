let strFromCharCodeTest = () => {
    console.log(String.fromCharCode(0x78, 0x1f680, 0x79));
};

let iteratorStringTest = (str) => {
    for (let codePoint of str) {
        console.log(codePoint);
    }
};

let forOfTest = () => {
    let array = [1, 2, 3, 4];
    for (let item of array) {
        console.log(item);
    }
    array.forEach(ele => console.log(ele));
};

let forInTest = () => {
    let obj = {foo: 'foo', tested: true};
    for (const key in obj) {
        console.log(key, obj[key]);
    }
};

let subStrTest = (str) => {
    console.log(str.repeat(3));
    console.log(str.padStart(5, 'PAD'));
    console.log(str.padEnd(8, 'PAD'));
};

let trimTest = () => {
    const s = '  abc  ';
    console.log(s.trim());
    console.log(s.trimLeft());
    console.log(s.trimRight());
};

let templateStrTest = (str) => {
    console.log(`Log -- ${str}`);
};

let tplCompline = (id, person) => {
    const tmpl = `
    <table>
    ${person.map(per => `
        <tr><td>${per.name}</td><td>${per.age}</td></tr>
    `).join('')}
    </table>
    `;
    console.log(tmpl);
    console.log(id);
    document.getElementById(id).innerHTML = tmpl;
};



// strFromCharCodeTest();
// iteratorStringTest('foo');
// forOfTest();
// forInTest();

subStrTest('a');
trimTest();
templateStrTest('help');
tplCompline('result', [{name:'mhp',age:25},{name:'tem',age:23}]);