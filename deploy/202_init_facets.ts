import { ethers } from 'hardhat';
import { DeployFunction } from 'hardhat-deploy/types';
import { IDiamondLoupe } from '../typings';
import { addFacets, addOrReplaceFacets } from '../utils/diamond';

const func: DeployFunction = async function () {
  const diamondLoupeFacet = await ethers.getContract('DiamondLoupeFacet');
  const ownershipFacet = await ethers.getContract('OwnershipFacet');
  const diamond = await ethers.getContract('Diamond');

  const loupe = await ethers.getContractAt<IDiamondLoupe>(
    'IDiamondLoupe',
    diamond.address
  );

  try {
    await loupe.facets();
  } catch (e) {
    await addFacets([diamondLoupeFacet], diamond.address);
  }

  await addOrReplaceFacets([diamondLoupeFacet, ownershipFacet], diamond.address);
}

func.tags = ['bridges', 'init-facets'];
func.dependencies = ['initial-facets', 'diamond'];

export default func;
