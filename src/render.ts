// mini-react/src/render.ts
// Stage 1: render stub
import { VNode } from './types';

export function render(vnode: VNode, container: HTMLElement) {
  // TODO: Implement render logic
  // This will turn vnode into real DOM

  const dom =
    vnode.type === 'TEXT_ELEMENT'
      ? document.createTextNode(vnode.props.nodeValue)
      : document.createElement(vnode.type);

  for (const [key, value] of Object.entries(vnode.props)) {
    if (key !== 'children' && key !== 'nodeValue') {
      (dom as any)[key] = value;
    }
  }

  for (const child of vnode.props.children) {
    render(child, dom as HTMLElement);
  }

  container.appendChild(dom);
}
