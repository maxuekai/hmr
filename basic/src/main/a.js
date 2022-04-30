import { getA } from '../components/a_1';

const div = document.createElement('div');
div.id = 'a';
div.innerHTML = getA();

document.body.appendChild(div);

if (module.hot) {
  module.hot.accept();
}
