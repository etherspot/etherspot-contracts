import { SignerWithAddress } from '../shared';

export interface Node {
  name: string;
  labelHash: string;
  node: string;
}

export interface NodeFactory extends Node {
  owner: SignerWithAddress;
  createSubNode(): Node;
}
