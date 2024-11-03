import styled from 'styled-components';
import { useRouter } from '../../hooks';
import logo from '../../assets/logo.svg'

export default function Header() {
  const router = useRouter();

  const goHome = () => router.push('/');

  return (
    <Wrapper>
      <LogoWrapper onClick={goHome} >
      <Logo src={logo} alt='logo' />
      </LogoWrapper>
    </Wrapper>
  );
}

// Style
const Wrapper = styled.header`
    display: flex;
    margin-bottom: 12px;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
`;

const LogoWrapper = styled.div`
    padding: 16px 0;
    &:hover {
      cursor: pointer;  
    }
`;

const Logo = styled.img`
    width: 160px;
    height: auto;
`;