import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  margin-right: 50px;
`;

const TitleLogo = styled.div`
  display: block;
  margin-left: 28px;
  font-weight: 600;
`;

const Img = styled.img`
  height: 12rem;
  width: 15rem;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
      <TitleLogo>Al Hamra Inn</TitleLogo>
    </StyledLogo>
  );
}

export default Logo;
