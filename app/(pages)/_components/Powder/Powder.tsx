import React from 'react';
import styles from './Powder.module.scss';

export type PowderProps = {
  id: string;
  name: string;
  strength: string;
  pricePerGram: number;
  usage: string[];
  brand: { name: string };
};

const Powder: React.FC<{ powder: PowderProps }> = ({ powder }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h3>{powder.name}</h3>
        <p>
          <strong>Brand:</strong> {powder.brand.name}{' '}
        </p>
        <p>Strength: {powder.strength}</p>
        <p>
          <strong>Price Per Gram:</strong> ${powder.pricePerGram.toFixed(2)}
        </p>
        <p>
          <strong>Usage:</strong> {powder.usage.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default Powder;
