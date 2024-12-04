import Brands from '../../../api/_services/Brands.js';

const resolvers = {
  Brand: {
    powders: ({ name }) => Brands.getPowders({ name }),
  },
  Query: {
    brand: (_, { name }) => Brands.find({ name }),
    brands: () => Brands.findAll(),
  },
  Mutation: {
    createBrand: (_, { id, input }) => Brands.create({ id, input }),
    addPowder: (_, { brandId, powderId }) =>
      Brands.addPowder({ brandId, powderId }),
  },
};
export default resolvers;
