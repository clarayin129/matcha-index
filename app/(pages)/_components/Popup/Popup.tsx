import React, { useEffect, useState } from 'react';
import styles from './Popup.module.scss';
import { PowderProps, Review } from '../Powder/Powder';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  powder: PowderProps | null;
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, powder }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (powder && powder.reviews) {
      setReviews(powder.reviews);
    }
  }, [powder]);

  if (!isOpen || !powder) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        <h3>{powder.name}</h3>
        <p>Brand: {powder.brand.name}</p>
        <p>Strength: {powder.strength}</p>
        <p>Price Per Gram: ${powder.pricePerGram.toFixed(2)}</p>
        <p>Usage: {powder.usage.join(', ')}</p>
        <h4>Reviews:</h4>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className={styles.review}>
              <p>
                <strong>{review.user}:</strong> {review.text}
              </p>
              <p>Rating: {review.rating}/5</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default Popup;
