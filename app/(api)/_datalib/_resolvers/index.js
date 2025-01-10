import { mergeResolvers } from '@graphql-tools/merge';

import Brand from './Brand.js';
import Powder from './Powder.js';

const allResolvers = [];

const modules = [Brand, Powder];
modules.forEach((module) => {
  allResolvers.push(module);
});

const resolvers = mergeResolvers(allResolvers);

export default resolvers;
