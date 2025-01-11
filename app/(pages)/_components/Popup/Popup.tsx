'use client';

import { gql } from 'graphql-tag';
import sendApolloRequest from '@utils/sendApolloRequest';
import { useState } from 'react';
import styles from './Popup.module.scss';
import { PowderProps } from '../Powder/Powder';

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  powder: PowderProps | null;
};

const ADD_REVIEW_MUTATION = gql`
  mutation addReview($powderId: ID!, $input: ReviewInput!) {
    addReview(powderId: $powderId, input: $input) {
      id
      user
      text
      rating
    }
  }
`;

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, powder }) => {
  const [user, setUser] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1); // Default rating to 1
  const [reviews, setReviews] = useState(powder?.reviews || []);
  const [reviewStatus, setReviewStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await sendApolloRequest(ADD_REVIEW_MUTATION, {
        powderId: powder?.id,
        input: {
          user,
          text,
          rating,
        },
      });

      if (response.addReview) {
        setReviews([...reviews, response.createReview]);
        setUser('');
        setText('');
        setRating(1);
        setReviewStatus('Review submitted successfully!');
      }
    } catch (error) {
      console.error('Error creating review:', error);
      setReviewStatus('Error submitting review. Please try again.');
    }
  };

  if (!isOpen || !powder) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.top}>
          <h3 className={'headText'}>{powder.name}</h3>
          <button onClick={onClose} className={styles.closeButton}>
            X
          </button>
        </div>
        <div className={styles.tagContainer}>
          <div className={'brandTag'}>{powder.brand.name}</div>
          <div className={'infoTag'}>{powder.strength}</div>
          <div className={'infoTag'}>${powder.pricePerGram.toFixed(2)}/g</div>
          <div className={'infoTag'}>{powder.usage.join(', ')}</div>
        </div>

        <div className={styles.container}>
          <h4 className={'headText'}>{powder.brand.name} says:</h4>
          <p>{powder.description}</p>
        </div>

        <div className={styles.container}>
          <h4 className={'headText'}>Add Your Review:</h4>
          <form onSubmit={handleSubmit} className={styles.reviewForm}>
            <div className={styles.formElement}>
              <label htmlFor="user">Name:</label>
              <input
                className={styles.input}
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>

            <div className={styles.formElement}>
              <label htmlFor="rating">Rating:</label>
              <select
                className={styles.input}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>
                    {star} Star{star > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formElement}>
              <label htmlFor="text">Review:</label>
              <textarea
                className={styles.reviewBox}
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.button}>
              Submit Review
            </button>
          </form>

          {reviewStatus && <p>{reviewStatus}</p>}
        </div>

        <div className={styles.reviewContainer}>
          <h4 className={'headText'}>Reviews:</h4>
          <div className={styles.reviewList}>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className={styles.review}>
                  <div className={styles.reviewTop}>
                    <p className={styles.user}>{review.user}</p>
                    <div className={styles.rating}>{review.rating} ★</div>
                  </div>
                  <p className={styles.text}>{review.text}</p>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
