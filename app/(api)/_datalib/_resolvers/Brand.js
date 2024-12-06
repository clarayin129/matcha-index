/* eslint-disable no-dupe-keys */
import Brands from '../_services/Brands.js';

const resolvers = {
  Brand: {
    powders: ({ name }) => Brands.getPowders({ name }),
  },
  Query: {
    brand: (_, { id }) => Brands.findById({ id }),
    brand: (_, { name }) => Brands.findByName({ name }),
    brands: () => Brands.findAll(),
  },
  Mutation: {
    createBrand: (_, { id, input }) => Brands.create({ id, input }),
    addPowder: (_, { brandId, powderId }) =>
      Brands.addPowder({ brandId, powderId }),
  },
};
export default resolvers;
