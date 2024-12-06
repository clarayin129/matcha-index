import gql from 'graphql-tag';

const typeDefs = gql`
  type Powder {
    id: ID!
    name: String!
    brand: Brand!
    strength: String!
    usage: [String]
    pricePerGram: Float
  }

  input PowderInput {
    name: String!
  }

  type Query {
    powder(name: String!): Powder
    powders: [Powder!]!
    brand(id: ID!): Brand
    strength: String
    usage: [String]
    pricePerGram: Float
  }

  type Mutation {
    createPowder(input: PowderInput!): Powder
  }
`;
export default typeDefs;
