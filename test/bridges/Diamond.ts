import { ethers } from 'hardhat';
import { addFacets, addOrReplaceFacets, FacetCutAction, getSelectors } from '../../utils/diamond';
import { Diamond, DiamondCutFacet, DiamondLoupeFacet } from '../../typings';
import {
  SignerWithAddress,
  deployContract,
} from '../shared';

const { getSigners } = ethers;

describe.only('Diamond', () => {
  let signers: SignerWithAddress[];
  let diamond: Diamond;
  let diamondCutFacet: DiamondCutFacet;

  before(async () => {
    signers = await getSigners();

    diamondCutFacet = await deployContract('DiamondCutFacet');
    diamond = await deployContract(
      'Diamond',
      [signers[0].address, diamondCutFacet.address]
    );
  });

  it('should add facets', async () => {
    const facetsToAdd = [
      'DiamondLoupeFacet',
      'OwnershipFacet'
    ];
    const cut = {
      [diamondCutFacet.address]: getSelectors(diamondCutFacet),
    };

    for (let facet of facetsToAdd) {
      const facetContract = await deployContract(facet);
      cut[facetContract.address] = getSelectors(facetContract);
      await addFacets([facetContract], diamond.address);
    }

    const diamondLoupe: DiamondLoupeFacet = await ethers.getContractAt("DiamondLoupeFacet", diamond.address);
    const facets = await diamondLoupe.facets();
    for (const facet of facets) {
      expect(cut[facet.facetAddress]).toBeDefined();
      expect(facet.functionSelectors).toEqual(cut[facet.facetAddress]);
    }
  });
});
