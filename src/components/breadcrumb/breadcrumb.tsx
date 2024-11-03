import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Item = {
  label: string;
  href?: string;
};

interface Props {
  /**
   * An array of breadcrumb items, where each item represents a step in the navigation path.
   * @example
   * [
   *   { label: 'Home', href: '/' },
   *   { label: 'Products', href: '/products' },
   *   { label: 'Details' }
   * ]
   */
  items: Item[];

  /**
   * Defines the separator between breadcrumb items.
   * @default "/"
   * @example
   * <Breadcrumb items={items} separator=">" />
   */
  separator?: string;
}

/**
 * A breadcrumb navigation component displaying the user's location within the app hierarchy.
 * @param items - Array of breadcrumb items.
 * @param separator
 * @returns {JSX.Element} A styled breadcrumb component.
 * @example
 * <Breadcrumb items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Products', href: '/products' },
 *   { label: 'Details' }
 * ]} separator=">" />
 */
const Breadcrumb: FC<Props> = ({ items, separator = '/' }): JSX.Element => {
  return (
    <Container>
      {items.map((item, index) => (
        <Item key={index}>
          {item.href ? (
            <StyledLink to={item.href}>{item.label}</StyledLink>
          ) : (
            <CurrentItem>{item.label}</CurrentItem>
          )}
          {index < items.length - 1 && <Separator>{separator}</Separator>}
        </Item>
      ))}
    </Container>
  );
};

// Styled components
const Container = styled.nav`
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: #004aad;
    margin-bottom: 20px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    color: #004aad;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Separator = styled.span`
    margin: 0 8px;
    color: #888;
`;

const CurrentItem = styled.span`
    color: #555;
`;

export default Breadcrumb;