import React, { useState } from "react";
import styled from "styled-components";

const AboutWrapper = styled.main`
  width: 100vw;
  overflow-x: hidden;
  padding-top: 60px;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);

  @media (max-width: 768px) {
    padding-top: 65px;
  }

  @media (max-width: 480px) {
    padding-top: 70px;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 3rem 2rem;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
  }

  @media (max-width: 320px) {
    padding: 1rem 0.3rem;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 1.7rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #7f8c8d;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
    padding: 0 0.5rem;
    br {
      display: none;
    }
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const ContentSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(45deg, #3498db, #9b59b6);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CollapsibleSection = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  margin-bottom: 2rem;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const CollapsibleHeader = styled.div`
  padding: 1.5rem 2rem;
  background: linear-gradient(45deg, #f8f9fa, #e9ecef);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #e9ecef, #dee2e6);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;

    h3 {
      font-size: 1.3rem;
    }
  }
`;

const ExpandButton = styled.span`
  font-size: 1.5rem;
  color: #3498db;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0deg)")};
`;

const CollapsibleContent = styled.div`
  padding: ${(props) => (props.isOpen ? "2rem" : "0")};
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};

  @media (max-width: 768px) {
    padding: ${(props) => (props.isOpen ? "1.5rem" : "0")};
  }
`;

const TextBlock = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  line-height: 1.8;
  color: #34495e;
  font-size: 1.1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);

  p {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 1rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #3498db, #9b59b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    .icon {
      font-size: 2.5rem;
    }

    h4 {
      font-size: 1.2rem;
    }
  }
`;

const OptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const OptionCard = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #3498db;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .price {
    color: #e74c3c;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;

    h4 {
      font-size: 1.1rem;
    }
  }
`;

const PriceTable = styled.div`
  background: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

const TableHeader = styled.div`
  background: linear-gradient(45deg, #3498db, #9b59b6);
  color: white;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem;
  }
`;

const TableRow = styled.div`
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  border-bottom: 1px solid #ecf0f1;
  align-items: center;
  text-align: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8f9fa;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem;
  }
`;

const GuideSection = styled.div`
  margin-bottom: 2rem;
`;

const GuideTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  padding-left: 1rem;
  border-left: 4px solid #3498db;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GuideItem = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  color: #34495e;
  line-height: 1.6;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const CheckboxWrapper = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
    /* padding: 0.1rem; */
    border-radius: 8px;
    /* margin: 0.1rem 0; */
  }

  input[type="checkbox"] {
    margin-right: 1rem;
    margin-top: 0.2rem;
    transform: scale(1.2);
    accent-color: #3498db;
  }

  span {
    color: #34495e;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    input[type="checkbox"] {
      margin-right: 0.8rem;
      transform: scale(1.1);
    }

    span {
      font-size: 0.9rem;
    }
  }
`;

const ReservationButton = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: ${(props) =>
    props.disabled
      ? "linear-gradient(45deg, #bdc3c7, #95a5a6)"
      : "linear-gradient(135deg, #2c7a8c 0%, #1e5266 100%)"};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(props) =>
      props.disabled
        ? "0 8px 25px rgba(0, 0, 0, 0.15)"
        : "0 12px 35px rgba(52, 152, 219, 0.3)"};
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "translateY(0)")};
  }

  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    font-size: 1.1rem;
  }
`;

const LocationInfo = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  text-align: center;

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .coordinates {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    font-family: monospace;
    color: #34495e;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h4 {
      font-size: 1.2rem;
    }
  }
`;

// 모달 관련 스타일 컴포넌트들
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: ${(props) => (props.isOpen ? "scale(1)" : "scale(0.8)")};
  transition: all 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 0.5rem;
  }
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  p {
    color: #7f8c8d;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PlatformButton = styled.button`
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    border-color: #3498db;
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 2rem;
    min-width: 50px;
    text-align: center;
  }

  .content {
    flex: 1;
  }

  .title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.3rem;
  }

  .description {
    font-size: 0.9rem;
    color: #7f8c8d;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;

    .icon {
      font-size: 1.5rem;
      min-width: 40px;
    }

    .title {
      font-size: 1.1rem;
    }

    .description {
      font-size: 0.85rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f8f9fa;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #7f8c8d;
  transition: all 0.3s ease;

  &:hover {
    background: #e9ecef;
    color: #2c3e50;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const About = () => {
  const [openSections, setOpenSections] = useState({});
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleAgreementChange = (type) => {
    setAgreements((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const allAgreed = Object.values(agreements).every((agreed) => agreed);

  const handleReservation = () => {
    if (allAgreed) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlatformSelect = (platform) => {
    let url = "";

    switch (platform) {
      case "airbnb":
        url = "https://www.airbnb.co.kr/";
        break;
      case "naver":
        url = "https://www.naver.com/";
        break;
      case "stayfolio":
        url = "https://www.stayfolio.com/";
        break;
      default:
        return;
    }

    window.open(url, "_blank");
    setIsModalOpen(false);
  };

  // ESC 키로 모달 닫기
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isModalOpen]);

  return (
    <AboutWrapper id="about">
      <AboutContent>
        <HeroSection>
          <Title>꼭! 확인해주세요.</Title>
          <Subtitle>
            예약 전 반드시 숙지해야 할 안내사항과 이용규정을 확인하세요.
            <br />
            모든 항목을 읽고 동의해주셔야 예약이 가능합니다.
          </Subtitle>
        </HeroSection>

        <ContentSection>
          <CollapsibleSection>
            <CollapsibleHeader onClick={() => toggleSection("guidelines")}>
              <h3>안내사항</h3>
              <ExpandButton isOpen={openSections.guidelines}>+</ExpandButton>
            </CollapsibleHeader>
            <CollapsibleContent isOpen={openSections.guidelines}>
              <GuideSection>
                <GuideTitle>기본 안내</GuideTitle>
                <GuideItem>체크인: 15:00 / 체크아웃: 11:00</GuideItem>
                <GuideItem>최대 인원: 6명 (기준 4명)</GuideItem>
                <GuideItem>주차: 최대 2대 가능</GuideItem>
                <GuideItem>반려동물: 동반 불가</GuideItem>
              </GuideSection>

              <GuideSection>
                <GuideTitle>시설 이용</GuideTitle>
                <GuideItem>와이파이 무료 제공</GuideItem>
                <GuideItem>취사 가능 (주방 시설 완비)</GuideItem>
                <GuideItem>세탁기, 건조기 이용 가능</GuideItem>
                <GuideItem>에어컨, 난방 시설 완비</GuideItem>
              </GuideSection>

              <GuideSection>
                <GuideTitle>주의사항</GuideTitle>
                <GuideItem>금연 (흡연 시 별도 구역 이용)</GuideItem>
                <GuideItem>22:00 이후 정숙 시간</GuideItem>
                <GuideItem>외부인 출입 금지</GuideItem>
                <GuideItem>시설 손상 시 변상 청구</GuideItem>
              </GuideSection>
            </CollapsibleContent>
          </CollapsibleSection>

          <CollapsibleSection>
            <CollapsibleHeader onClick={() => toggleSection("usage")}>
              <h3>이용안내</h3>
              <ExpandButton isOpen={openSections.usage}>+</ExpandButton>
            </CollapsibleHeader>
            <CollapsibleContent isOpen={openSections.usage}>
              <PriceTable>
                <TableHeader>
                  <div>구분</div>
                  <div>평일</div>
                  <div>주말/성수기</div>
                </TableHeader>
                <TableRow>
                  <div>기준 4인</div>
                  <div>150,000원</div>
                  <div>200,000원</div>
                </TableRow>
                <TableRow>
                  <div>추가 인원 (1인당)</div>
                  <div>20,000원</div>
                  <div>30,000원</div>
                </TableRow>
              </PriceTable>

              <GuideSection>
                <GuideTitle>예약 안내</GuideTitle>
                <GuideItem>예약금: 총 요금의 30%</GuideItem>
                <GuideItem>잔금: 체크인 시 현장 결제</GuideItem>
                <GuideItem>
                  취소 규정: 7일 전 100% 환불, 3일 전 50% 환불, 당일 환불 불가
                </GuideItem>
              </GuideSection>

              <GuideSection>
                <GuideTitle>준비물</GuideTitle>
                <GuideItem>개인 세면도구 (수건, 치약, 샴푸 등)</GuideItem>
                <GuideItem>여벌 옷 및 개인 용품</GuideItem>
                <GuideItem>바비큐 식재료 (선택사항)</GuideItem>
              </GuideSection>
            </CollapsibleContent>
          </CollapsibleSection>
        </ContentSection>

        <ContentSection>
          <CheckboxWrapper>
            <CheckboxItem>
              <input
                type="checkbox"
                checked={agreements.terms}
                onChange={() => handleAgreementChange("terms")}
              />
              <span>위 모든 내용을 확인 및 숙지하셨나요?</span>
            </CheckboxItem>
            <CheckboxItem>
              <input
                type="checkbox"
                checked={agreements.privacy}
                onChange={() => handleAgreementChange("privacy")}
              />
              <span>
                예, 본인은 위 모든 내용을 확인하였으며 강제 퇴실 및 변상 조치
                등에 동의하고 예약을 합니다.
              </span>
            </CheckboxItem>
          </CheckboxWrapper>

          <ReservationButton disabled={!allAgreed} onClick={handleReservation}>
            {allAgreed ? "예약하기" : "모든 항목에 동의해주세요"}
          </ReservationButton>
        </ContentSection>

        {/* <ContentSection>
          <SectionTitle>위치 정보</SectionTitle>
          <LocationInfo>
            <h4>📍 경기도 양평군</h4>
            <p>자연이 살아 숨쉬는 양평의 조용한 마을에 위치해 있습니다.</p>
            <p>서울에서 차로 약 1시간 거리로 접근성이 좋습니다.</p>
            <div className="coordinates">
              상세 주소는 예약 확정 후 개별 안내드립니다.
            </div>
          </LocationInfo>
        </ContentSection> */}
      </AboutContent>

      {isModalOpen && (
        <ModalOverlay isOpen={isModalOpen} onClick={closeModal}>
          <ModalContent
            isOpen={isModalOpen}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalHeader>
              <h3>예약 플랫폼 선택</h3>
              <p>원하시는 예약 플랫폼을 선택해주세요.</p>
            </ModalHeader>
            <PlatformGrid>
              <PlatformButton onClick={() => handlePlatformSelect("airbnb")}>
                <div className="icon">🏠</div>
                <div className="content">
                  <div className="title">Airbnb</div>
                  <div className="description">
                    다양한 숙소 및 경험을 제공하는 세계적인 예약 플랫폼
                  </div>
                </div>
              </PlatformButton>
              <PlatformButton onClick={() => handlePlatformSelect("naver")}>
                <div className="icon">🟢</div>
                <div className="content">
                  <div className="title">Naver</div>
                  <div className="description">
                    네이버 플랫폼을 통한 예약 및 호스팅 서비스
                  </div>
                </div>
              </PlatformButton>
              <PlatformButton onClick={() => handlePlatformSelect("stayfolio")}>
                <div className="icon">🏨</div>
                <div className="content">
                  <div className="title">Stayfolio</div>
                  <div className="description">
                    감성적인 숙소를 선별한 프리미엄 예약 플랫폼
                  </div>
                </div>
              </PlatformButton>
            </PlatformGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </AboutWrapper>
  );
};

export default About;
