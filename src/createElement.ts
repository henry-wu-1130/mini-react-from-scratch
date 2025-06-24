// mini-react/src/createElement.ts
// Stage 1: createElement stub
import { VNode } from './types';

function createTextElement(text: string): VNode {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export function createElement(
  type: string,
  props: Record<string, any> | null,
  ...children: any[]
): VNode {
  return {
    type,
    props: {
      ...(props || {}),
      children: children
        .flat()
        .map((c) => (typeof c === 'object' ? c : createTextElement(c))),
    },
  };
}
