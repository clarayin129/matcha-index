import Powders from '../_services/Powders.js';
import Brands from '../_services/Brands.js';

const resolvers = {
  Powder: {
    brand: async ({ brandId }) => {
      const brand = await Brands.findById({ id: brandId });
      if (brand) {
        return { name: brand.name };
      }
      throw new Error('Brand not found'); // You can also handle the error differently depending on your use case
    },
  },
  Query: {
    powder: (_, { name }) => Powders.find({ name }),
    powders: () => Powders.findAll(),
  },
  Mutation: {
    createPowder: (_, { input }) => Powders.create({ input }),
  },
};
export default resolvers;
