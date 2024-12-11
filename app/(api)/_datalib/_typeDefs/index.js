import { mergeTypeDefs } from '@graphql-tools/merge';

import Brand from './Brand.js';
import Powder from './Powder.js';

const allTypeDefs = [];

const modules = [Brand, Powder];

modules.forEach((module) => {
  allTypeDefs.push(module);
});

const typeDefs = mergeTypeDefs(allTypeDefs);

export default typeDefs;
