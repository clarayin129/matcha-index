import { gql } from 'graphql-tag';
import sendApolloRequest from '@utils/sendApolloRequest';
import MatchaSearch from './_components/Example/PowderSearch';

const query = gql`
  query GetAllPowders {
    powders {
      id
      name
      strength
      pricePerGram
      usage
    }
  }
`;

const fetchPowders = async () => {
  const { data } = await sendApolloRequest(query, {});
  return data?.powders || [];
};

export default async function Example() {
  const powders = await fetchPowders();

  return (
    <main>
      <h1>Powder List</h1>
      <MatchaSearch initialPowders={powders} />
    </main>
  );
}
