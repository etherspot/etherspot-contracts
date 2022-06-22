import { Contract } from 'ethers';
export declare function getSelectors(contract: Contract): string[];
export declare const FacetCutAction: {
    Add: number;
    Replace: number;
    Remove: number;
};
export declare function addOrReplaceFacets(facets: Contract[], diamondAddress: string, initContract?: string, initData?: string): Promise<void>;
export declare function addFacets(facets: Contract[], diamondAddress: string, initContract?: string, initData?: string): Promise<void>;
export declare function removeFacet(selectors: string[], diamondAddress: string): Promise<void>;
export declare function replaceFacet(facet: Contract, diamondAddress: string, initContract?: string, initData?: string): Promise<void>;
