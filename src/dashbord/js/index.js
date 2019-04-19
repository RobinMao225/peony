import '../../common/css/main.css';
import '../css/dashbord.css';
import { note } from '../../common/data/note.xml';
import 'lodash';

console.log('This is in dashbord index\n');
console.log(note);

function component() {
    var element = document.createElement('div');
    // eslint-disable-next-line no-undef
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('bg');

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = () => {
        console.log('Click me and check the console!');
    };

    element.append(btn);
    return element;
}

document.body.appendChild(component());


