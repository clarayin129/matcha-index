import { mergeTypeDefs } from '@graphql-tools/merge';

import Brand from './Brand.js';
import Powder from './Powder.js';
import Review from './Review.js';

const allTypeDefs = [];

const modules = [Brand, Powder, Review];

modules.forEach((module) => {
  allTypeDefs.push(module);
});

const typeDefs = mergeTypeDefs(allTypeDefs);

export default typeDefs;
