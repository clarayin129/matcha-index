import React from 'react';
import styles from './PowderList.module.scss';
import Powder, { PowderProps } from '../../../_components/Powder/Powder';

interface PowderListProps {
  powders: PowderProps[];
}

export default function PowderList({ powders }: PowderListProps) {
  return (
    <div className={styles.powderContainer}>
      {powders.map((powder) => (
        <Powder key={powder.id} powder={powder} />
      ))}
    </div>
  );
}
