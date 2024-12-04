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
    brand(id: ID!): Brand
    powders: [Powder!]!
    strength: String
    usage: [String]
    pricePerGram: Float
  }

  type Mutation {
    createPowder(input: PowderInput!): Powder
  }
`;
export default typeDefs;
