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
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 8px 0;
`;

const Copy = styled.h3`
    width: 160px;
    height: auto;
    color: #004aad;
`;
