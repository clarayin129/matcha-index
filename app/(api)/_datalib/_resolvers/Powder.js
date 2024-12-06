import Powders from '../_services/Powders.js';

const resolvers = {
  Query: {
    powder: (_, { name }) => Powders.find({ name }),
    powders: () => Powders.findAll(),
  },
  Mutation: {
    createPowder: (_, { input }) => Powders.create({ input }),
  },
};
export default resolvers;
