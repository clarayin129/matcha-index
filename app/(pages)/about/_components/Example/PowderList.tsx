import React from 'react';
import Powder, { PowderProps } from '../../../_components/Powder/Powder';
import styles from './PowderList.module.scss';

const PowderList: React.FC<{ powders: PowderProps[] }> = ({ powders }) => {
  return (
    <div className={styles.container}>
      {powders.map((powder) => (
        <Powder key={powder.id} powder={powder} />
      ))}
    </div>
  );
};

export default PowderList;
