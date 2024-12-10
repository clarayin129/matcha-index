/* eslint-disable no-dupe-keys */
import Brands from '../_services/Brands.js';

const resolvers = {
  Brand: {
    powders: ({ name }) => Brands.getPowders({ name }),
  },
  Query: {
    brand: (_, args) => {
      if (args.id) {
        return Brands.findById({ id: args.id });
      }
      if (args.name) {
        return Brands.findByName({ name: args.name });
      }
    },
    brands: () => Brands.findAll(),
  },
};
export default resolvers;
