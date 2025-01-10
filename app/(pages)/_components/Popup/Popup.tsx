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

        <h4>Add Your Review:</h4>
        <form onSubmit={handleSubmit} className={styles.reviewForm}>
          <div>
            <label htmlFor="user">Name:</label>
            <input
              type="text"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="text">Review:</label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
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

          <button type="submit">Submit Review</button>
        </form>

        {reviewStatus && <p>{reviewStatus}</p>}
      </div>
    </div>
  );
};

export default Popup;
