import PowderList from './_components/Example/PowderList';
import { gql } from 'graphql-tag';
import sendApolloRequest from '@utils/sendApolloRequest';
import { use } from 'react';

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

// server-side default
const fetchPowders = async () => {
  const { data } = await sendApolloRequest(query, {});
  return data?.powders || [];
};

export default function Example() {
  const powders = use(fetchPowders());

  return (
    <main>
      <PowderList powders={powders} /> {/* Pass the array directly here */}
    </main>
  );
}
