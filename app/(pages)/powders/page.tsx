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
      description
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
  const { data } = await sendApolloRequest(query, {}, { path: '/powders' });
  return data?.powders || [];
};

export default async function PowderPage() {
  const powders = await fetchPowders();

  if (!powders || powders.length === 0) {
    return (
      <main>
        <div className={styles.body}>
          <p>No powders found</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className={styles.body}>
        <PowderSearch initialPowders={powders} />
      </div>
    </main>
  );
}
