import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <Logo>e-Soup</Logo>
    </Wrapper>
  );
}

// Style
const Wrapper = styled.header`
    display: flex;
    margin-bottom: 12px;
    justify-content: center;
    border-bottom: 1px solid #ccc;
`;

const Logo = styled.h1`
    font-size: 2em;
    margin: 0.6em 0;
    display: inline-block;
`;
