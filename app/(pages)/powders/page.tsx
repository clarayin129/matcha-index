import { gql } from 'graphql-tag';
import sendApolloRequest from '@utils/sendApolloRequest';
import styles from './page.module.scss';
import { Suspense } from 'react';
import SearchBar from './_components/Example/SearchBar';
import PowderList from './_components/Example/PowderList';
import { PowderProps } from '../_components/Powder/Powder';
import { revalidatePath } from 'next/cache';

const powderQuery = gql`
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

const fetchPowders = async (): Promise<PowderProps[]> => {
  const { data } = await sendApolloRequest(powderQuery, {}, { path: '/' });
  return data?.powders || [];
};

export default async function PowdersPage() {
  revalidatePath('/');
  const powders = await fetchPowders();

  return (
    <main className={styles.body}>
      <SearchBar />
      <Suspense fallback={<div>Loading powders...</div>}>
        <PowderList powders={powders} />
      </Suspense>
    </main>
  );
}
