import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #2c7a8c 0%, #1e5266 100%);
  color: #e8f4f8;
  padding: 3rem 0 1rem 0;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 2rem 0 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0 0.8rem 0;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #b8dde6;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid rgba(184, 221, 230, 0.3);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #d0eff5;
    text-decoration: underline;
    transition: color 0.2s;
    font-size: 0.95rem;

    &:hover {
      color: #b8dde6;
    }
  }

  p {
    color: #d0eff5;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.8rem;
    }

    ul {
      gap: 0.8rem;
      padding-bottom: 0.8rem;
      margin-bottom: 0.8rem;
    }

    a,
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }

    ul {
      gap: 0.6rem;
      flex-direction: column;
      align-items: flex-start;
    }

    a,
    p {
      font-size: 0.85rem;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(184, 221, 230, 0.3);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding-top: 0.8rem;
    gap: 0.8rem;
  }
`;

const Copyright = styled.p`
  color: #b8dde6;
  margin: 0;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: #d0eff5;
    text-decoration: none;
    border: 1px solid #d0eff5;
    border-radius: 25px;
    padding: 0.3rem 0.8rem;
    font-size: 0.85rem;
    transition: all 0.2s;
    white-space: nowrap;

    &:hover {
      color: #b8dde6;
      border-color: #b8dde6;
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;

    a {
      padding: 0.25rem 0.6rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 320px) {
    a {
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterSection>
            <h3>구심점[求心點]</h3>
            <ul>
              <li>
                <a href="#privacy">개인정보처리방침</a>
              </li>
              <li>
                <a href="#terms">이용약관</a>
              </li>
            </ul>
            <p>
              고품질 서비스를 제공하는 구심점이 되어 고객의 성공을 함께
              만들어갑니다.
            </p>
            <p>
              contact@gusimjum.com
              <br />
              02-1234-5678
            </p>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>© 2024 GUSIMJUM. All rights reserved.</Copyright>
          <SocialLinks>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.airbnb.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airbnb
            </a>
            <a
              href="https://www.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Naver
            </a>
            <a
              href="https://www.stayfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stayfolio
            </a>
          </SocialLinks>
        </FooterBottom>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
