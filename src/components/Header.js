import React from "react";
import styled from "styled-components";
import Button from "./Button";

const HeaderWrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  color: white;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 480px) {
    height: 70px; /* 모바일에서 헤더 높이 증가 */
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 100;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    padding: 0.2rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  img {
    height: 30px;
    width: auto;
    transition: opacity 0.2s;
  }

  &:hover img {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    img {
      height: 26px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 24px;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openKakaoChat = () => {
    // 카카오 오픈 채팅방 URL을 여기에 설정하세요
    window.open("https://open.kakao.com/o/your-chat-room-url", "_blank");
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LeftSection>
          {/* <MenuButton>☰</MenuButton> */}
          <Logo onClick={scrollToTop}>
            <img src="/image/logo/logo.png" alt="GUSIMJUM 로고" />
          </Logo>
        </LeftSection>

        <RightSection>
          <Button onClick={openKakaoChat}>문의하기</Button>
          <Button onClick={scrollToAbout}>예약하기</Button>
        </RightSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
