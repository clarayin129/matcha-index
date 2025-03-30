'use client';
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
  description: string;
};

const Powder: React.FC<{ powder: PowderProps }> = ({ powder }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const getStrengthColor = (strength: string) => {
    switch (strength.toLowerCase()) {
      case 'light':
        return styles.light;
      case 'medium':
        return styles.medium;
      case 'rich':
        return styles.rich;
    }
  };

  return (
    <div>
      <div className={styles.card} onClick={handleCardClick}>
        <div className={styles.cardContainer}>
          <div
            className={`${styles.bar} ${getStrengthColor(powder.strength)}`}
          ></div>
          <div className={styles.content}>
            <div className={styles.headText}>
              <div className={'brandText'}>{powder.brand.name} </div>
              <h3 className={'headText'}>{powder.name}</h3>
            </div>
            <div className={styles.tagContainer}>
              <div
                className={`${'infoTag'} ${getStrengthColor(powder.strength)}`}
              >
                {powder.strength}
              </div>
              <div className={'infoTag'}>
                ${powder.pricePerGram.toFixed(2)}/g
              </div>
              <div className={'infoTag'}> {powder.usage.join(', ')} </div>
            </div>
          </div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} powder={powder} />
    </div>
  );
};

export default Powder;
