import { gql } from 'graphql-tag';
import sendApolloRequest from '@utils/sendApolloRequest';
import PowderSearch from './_components/Example/PowderSearch';
import styles from './page.module.scss';

const query = gql`
  query getAllPowders {
    powders {
      id
      name
      strength
      pricePerGram
      usage
      brand {
        name
      }
      reviews {
        id
        rating
        text
        user
      }
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
      <div className={styles.body}>
        <PowderSearch initialPowders={powders} />
      </div>
    </main>
  );
}
