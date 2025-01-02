import gql from 'graphql-tag';

const typeDefs = gql`
  type Powder {
    id: ID!
    name: String!
    brand: Brand
    strength: String!
    usage: [String]
    pricePerGram: Float
    reviews: [Review]
  }

  input PowderFilterInput {
    strength: String
    usage: [String]
    priceMin: Float
    priceMax: Float
  }

  type Query {
    powders(filter: PowderFilterInput): [Powder!]!
    powder(name: String!): Powder
    powders: [Powder!]!
    brand(id: ID!): Brand
    strength: String
    usage: [String]
    pricePerGram: Float
  }

  type Mutation {
    addReview(powderId: ID!, reviewId: ID!): Boolean
  }
`;
export default typeDefs;
