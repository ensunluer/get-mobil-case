import { Footer } from './common';
import { Header } from './common';
import styled from 'styled-components';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Root>
      <Header />
      {children}
      <Footer />
    </Root>
  );
}

const Root = styled.section`
    max-width: 1200px;
    padding: 0 24px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet || '768px'}) {
        padding: 0 2px;
    }
`;
