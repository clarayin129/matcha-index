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

const addReview = gql`
  mutation addReview($powderId: ID!, $input: ReviewInput!) {
    addReview(powderId: $powderId, input: $input) {
      id
      user
      text
      rating
    }
  }
`;

const findReviews = gql`
  query powder($name: String!) {
    powder(name: $name) {
      reviews {
        id
        user
        text
        rating
      }
    }
  }
`;

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, powder }) => {
  const [user, setUser] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState(powder?.reviews || []);
  const [reviewStatus, setReviewStatus] = useState('');
  const [loading, setLoading] = useState(false);

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

  const refetchReviews = async (name: string) => {
    try {
      const { data } = await sendApolloRequest(
        findReviews,
        { name },
        { tag: `powder-${powder?.id}` }
      );
      setReviews(data.powder.reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendApolloRequest(
        addReview,
        {
          powderId: powder?.id,
          input: {
            user,
            text,
            rating,
          },
        },
        { tag: `powder-${powder?.id}` }
      );

      if (response.data.addReview) {
        setReviews((prevReviews) => [...prevReviews, response.data.addReview]);
        setUser('');
        setText('');
        setRating(1);
        setReviewStatus('Review submitted successfully!');
        await refetchReviews(powder?.name || '');
      }
    } catch (error) {
      console.error('Error creating review:', error);
      setReviewStatus('Error submitting review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !powder) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.top}>
          <div className={styles.topText}>
            <div className={'brandText'}>{powder.brand.name} </div>
            <h3 className={'headText'}>{powder.name}</h3>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            x
          </button>
        </div>

        <div className={styles.tagContainer}>
          <div className={`${'infoTag'} ${getStrengthColor(powder.strength)}`}>
            {powder.strength}
          </div>
          <div className={'infoTag'}>${powder.pricePerGram.toFixed(2)}/g</div>
          <div className={'infoTag'}>{powder.usage.join(', ')}</div>
        </div>

        <hr className={styles.divider}></hr>

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
                disabled={loading}
              />
            </div>

            <div className={styles.formElement}>
              <label htmlFor="rating">Rating:</label>
              <select
                className={styles.input}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                disabled={loading}
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
                disabled={loading}
              />
            </div>

            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Review'}
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
