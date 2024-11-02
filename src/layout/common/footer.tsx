import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper>
      <Copy>Enes Unluer</Copy>
    </FooterWrapper>
  );
}

// Style
const FooterWrapper = styled.header`
    display: flex;
    margin-top: 12px;
    justify-content: center;
    border-top: 1px solid #ccc;
`;

const Copy = styled.h1`
    font-size: 1em;
    margin: 0.6em 0;
    display: inline-block;
`;
