import React, { useState } from 'react';
import styles from './Powder.module.scss';
import Popup from '../Popup/Popup';

export type Review = {
  id: string;
  text: string;
  user: string;
  rating: number;
};

export type PowderProps = {
  id: string;
  name: string;
  strength: string;
  pricePerGram: number;
  usage: string[];
  brand: { name: string };
  reviews?: Review[];
};

const Powder: React.FC<{ powder: PowderProps }> = ({ powder }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className={styles.card} onClick={handleCardClick}>
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

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} powder={powder} />
    </div>
  );
};

export default Powder;
