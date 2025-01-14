import React from 'react';
import styles from './PowderSearch.module.scss';
import Powder, { PowderProps } from '../../../_components/Powder/Powder';

interface PowderListProps {
  powders: PowderProps[];
}

export default function PowderList({ powders }: PowderListProps) {
  return (
    <div className={styles.powderContainer}>
      {powders.map((powder) => (
        // each Powder is a client component, but the list itself is server-side
        <Powder key={powder.id} powder={powder} />
      ))}
    </div>
  );
}
