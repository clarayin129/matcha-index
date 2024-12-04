import gql from 'graphql-tag';

const typeDefs = gql`
  type Powder {
    id: ID!
    name: String!
    brand: Brand!
    strength: String!
    pricePerGram: float
  }

  input PowderInput {
    name: String!
  }

  type Query {
    brand(id: ID!): Brand
    powders: [Powder!]!
    strength: String
  }

  type Mutation {
    createPowder(input: PowderInput!): Powder
  }
`;
export default typeDefs;
