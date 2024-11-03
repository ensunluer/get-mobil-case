import { useState } from 'react';
import styled from 'styled-components';
import { Product } from '../../product-list/types.ts';
import { Icon } from '@iconify/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import brokeImage from '../../../assets/broke.jpg';

type Props = {
  images: Product['images'];
};

export function Images({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleImageError = () => {
    setCurrentIndex(-1);
  };

  return (
    <>
      <CarouselContainer>
          <Image
            src={currentIndex === -1 ? brokeImage : images[currentIndex]}
            effect="blur"
            onError={handleImageError}
            alt={`Product image ${currentIndex + 1}`}
          />
      </CarouselContainer>
      {images.length && images.length > 1 && (
        <Navigation>
          <StyledIcon onClick={goToPrevious} width={24} icon="ic:baseline-keyboard-arrow-left" />
          <span>
            {currentIndex + 1} / {images.length}
          </span>
          <StyledIcon onClick={goToNext} width={24} icon="ic:baseline-keyboard-arrow-right" />
        </Navigation>
      )}
    </>
  );
}

// Style
const CarouselContainer = styled.div`
    display: flex;
    overflow: hidden;
    max-height: 400px;
    justify-content: center;
    width: 100%;
`;

const Image = styled(LazyLoadImage)`
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
    min-height: 400px;
`;

const Navigation = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: max-content;
    margin-left: auto;
    background: rgba(15, 78, 204, 0.05);
    padding: 8px 12px;
    border-radius: 4px;

    span {
        display: block;
        font-weight: 500;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet || '768px'}) {
        gap: 4px;
        padding: 4px 6px;
    }
`;

const StyledIcon = styled(Icon)`
    cursor: pointer;
    transition: all .2ms;

    &:hover {
        opacity: 0.7;
    }
`;
