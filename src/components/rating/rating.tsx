import styled from 'styled-components';
import { FC } from 'react';

interface RatingProps {
  rating: number;
}

const Rating: FC<RatingProps> = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <StarsContainer>
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < roundedRating ? 'true' : 'false'}>
          ★
        </Star>
      ))}
      <span>{rating.toFixed(1)}</span>
    </StarsContainer>
  );
};

// Style
const StarsContainer = styled.div`
    display: flex;
    align-items: baseline;

    span {
        font-size: 16px;
        display: block;
        text-decoration: revert !important;
    }
`;

const Star = styled.div<{ filled: string }>`
    width: 16px;
    height: 16px;
    display: block;
    margin-right: 4px;
    color: ${(props) => (props.filled === 'true' ? '#ff8000' : '#e0e0e0')};
`;

export default Rating;