// mini-react/examples/01-basic-render.ts
import { createElement } from '../src/createElement';
import { render } from '../src/render';

const vnode = createElement(
  'div',
  { id: 'root' },
  createElement('h1', null, 'Hello, mini-react!'),
  createElement('p', null, 'This is a minimal React clone.')
);

render(vnode, document.getElementById('root')!);
