export interface Node {
  name: string;
  labelHash: string;
  node: string;
}

export interface NodeFactory extends Node {
  createSubNode(): Node;
}
