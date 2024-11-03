import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useRouter } from '../../../hooks';
import { paths } from '../../../routes/path.ts';

import brokeImage from '../../../assets/broke.jpg';
import { Product } from '../types.ts';
import { textLimit } from '../../../utils/text-limit.ts';

type Props = {
  product: Product
}

export const Items = ({ product }: Props) => {
  const { id, thumbnail, category, title, price, description, stock, discountPercentage } = product;
  const [imageSrc, setImageSrc] = useState(thumbnail);

  const router = useRouter();

  const openDetail = useCallback(() => {
    router.push(paths.product.details(category, id));
  }, [router, category, id]);

  const handleImageError = () => {
    setImageSrc(brokeImage);
  };

  const originalPrice = price / (1 - discountPercentage / 100);

  return (
    <ItemContainer onClick={openDetail} disabled={!stock} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && openDetail()} >
      {!stock && <OutOfStockMessage>Out of stock</OutOfStockMessage>}
      <ImageWrapper>
      <Image
        src={imageSrc}
        alt={title}
        width='100%'
        height='auto'
        placeholderSrc={brokeImage}
        visibleByDefault={imageSrc === brokeImage}
        effect="blur"
        onError={handleImageError}
      />
      </ImageWrapper>
      <Title>{title}</Title>
      <PriceContainer>
        <DiscountedPrice>${price}</DiscountedPrice>
        <OriginalPrice>${originalPrice.toFixed(2)}</OriginalPrice>
      </PriceContainer>
      <Description>{textLimit(description, 50)}</Description>
    </ItemContainer>
  );
};

// Styles
const ItemContainer = styled.div<{ disabled: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease all;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

    &:hover {
        bdi {
            transform: scale(1.05);
        }
    }
`;

const ImageWrapper = styled.bdi`
    width: 100%;
    height: auto;
    overflow: hidden;
    min-height: 254px;
    transition: all .2s;
    position: relative;

    span {
        display: revert !important;
    }
`

const Image = styled(LazyLoadImage)`
    width: 100%;
    height: auto;
    min-height: 254px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 16px;
    background-color: #f5f5f5;
`;

const Title = styled.h3`
    text-align: center;
    font-size: 1em;
    margin: 8px 0;
    color: #14161b;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 4px 0;
`;

const DiscountedPrice = styled.span`
    font-size: 1.5em;
    font-weight: 700;
    color: #004aad;
`;

const OriginalPrice = styled.span`
    font-size: 0.9em;
    color: #555;
    text-decoration: line-through;
`;

const Description = styled.p`
    font-size: 0.9em;
    text-align: center;
    margin: 8px 0;
    color: #555;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
`;

const OutOfStockMessage = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 9;
    background-color: #dc2020;
    text-align: center;
    color: white;
    padding: 4px 8px;
    border-radius: 8px;
`;