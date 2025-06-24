// mini-react/src/types.ts

export interface VNode {
  type: any;
  props: {
    [key: string]: any;
    children: VNode[];
  };
}
