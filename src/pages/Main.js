import React, { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 120px 0px;
  }

  @media (max-width: 480px) {
    padding: 120px 0px;
  }
`;

const SlideContainerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const HeroSection = styled.section`
  text-align: left;
  width: 100%;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;

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
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 650px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  touch-action: manipulation;
  user-select: none;

  @media (max-width: 768px) {
    height: auto;
    min-height: 500px;
    touch-action: manipulation;
  }

  @media (max-width: 480px) {
    height: auto;
    min-height: 400px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const SlidesContainer = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(-${(props) => props.currentSlide * 100}%);
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;

  @media (max-width: 768px) {
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  &:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }

  &:nth-child(3) {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }

  &:nth-child(4) {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    will-change: transform;
    loading: lazy;
    decoding: async;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex: 1;
    min-height: 200px;
  }

  @media (max-width: 480px) {
    min-height: 150px;
  }
`;

const TextBox = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 1.5rem;
    white-space: pre-line;
  }

  .tag {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    flex: 1;

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
`;

const QuoteBox = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  text-align: center;

  .quote {
    font-size: 1.8rem;
    font-style: italic;
    margin-bottom: 1.5rem;
    line-height: 1.4;
    position: relative;

    &::before {
      content: '"';
      font-size: 4rem;
      color: rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -1rem;
      left: -1rem;
    }
  }

  .author {
    font-size: 1rem;
    font-weight: bold;
    color: #666;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.8rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);

  ${(props) => (props.direction === "left" ? "left: 30px;" : "right: 30px;")}

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.3rem;
    ${(props) => (props.direction === "left" ? "left: 15px;" : "right: 15px;")}
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.1rem;
    ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
  }
`;

const Navigation = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 10;
`;

const NavDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: ${(props) =>
    props.isActive ? " rgba(0, 0, 0, 0.1)" : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// 슬라이드 데이터
const slideData = [
  {
    id: 1,
    mainImage: "/image/space/optimized/livingroom4.jpg",
    secondImage: "/image/space/optimized/outside1.jpg",
    title: "경기 양평, 고요함이 깃든 공간",
    description:
      "경기 양평, 고요함이 깃든 작은 마을에서는 도심에서 들리지 않던 소리들이 더욱 선명해집니다.\n나뭇잎이 부딪히는 소리, 창가를 스치는 바람 소리,그리고 새소리까지.자연이 조용히 공간을 채우면,머무는 이의 마음도 차분히 가라앉습니다.",
    tags: ["양평", "자연", "고요함"],
    quote:
      "자연이 조용히 공간을 채우면, 머무는 이의 마음도 차분히 가라앉습니다",
    author: "구심점",
  },
  {
    id: 2,
    mainImage: "/image/space/optimized/livingroom5.jpg",
    secondImage: "/image/space/optimized/bedroom1.jpg",
    title: "구심점, 중심을 찾는 공간",
    description:
      "'구심점(求心點)'은 흩어진 마음이 다시 중심을 찾길 바라는 마음을 담았습니다.\n불필요한 것들을 덜어낸 정제된 공간 속에서 자연이 채우는 감각을 온전히 누리며, 빠르게 흘러가는 일상에서 벗어나 자신에게 집중하는 시간을 가져보세요.",
    tags: ["구심점", "중심", "힐링"],
    quote: "단순한 쉼을 넘어 자신만의 구심력을 회복하고 소중한 추억을 담아가길",
    author: "구심점",
  },
  {
    id: 3,
    mainImage: "/image/space/optimized/livingroom6.jpg",
    secondImage: "/image/space/optimized/outside2.jpg",
    title: "자연과 하나되는 특별한 경험",
    description:
      "푸른 산과 하늘을 배경으로,'구심점'은 조용히 그 자리를 지키고 있습니다.\n거실의 넓은 창이 마치 한 폭의 병풍처럼 공간을 감싸며,계절과 날씨에 따라 끊임없이 변화하는 자연의 결을 담아냅니다.\n창을 통해 스테이 내부와 야외 공간의 경계를 흐려, 바람과 햇살이 머무는 자리를 따라가다 보면 어느새 자연과 한층 가까워진 자신을 발견하게 됩니다.",
    tags: ["자연", "경계", "변화"],
    quote:
      "바람과 햇살이 머무는 자리를 따라가다 보면 자연과 한층 가까워진 자신을 발견하게 됩니다",
    author: "구심점",
  },
  {
    id: 4,
    mainImage: "/image/space/optimized/bedroom2.jpg",
    secondImage: "/image/space/optimized/restroom.jpg",
    title: "온전한 쉼을 위한 정돈된 공간",
    description:
      "'구심점'의 내부 공간은 온전히 쉼에 집중할 수 있도록 정돈되어 있습니다.\n아일랜드형 주방은 머무는 이들이 자연스럽게 모이는 공간이 되고, 두 개의 침실과 욕실은 서로 독립적으로 머무를 수 있도록 하여 편안히 쉴 수 있도록 배려했습니다.\n외부로 나서면, '구심점'의 낮에는 햇살과 바람이, 밤에는 불빛과 나지막한 대화가 머물며, 공간이 전하는 온기와 추억이 차곡차곡 쌓여갑니다.",
    tags: ["내부공간", "편안함", "추억"],
    quote: "공간이 전하는 온기와 추억이 차곡차곡 쌓여갑니다",
    author: "구심점",
  },
];

const Main = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  const nextSlide = () => {
    if (currentSlide < slideData.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchEndY(null);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !touchStartY || !touchEndY) return;

    const distanceX = touchStart - touchEnd;
    const distanceY = touchStartY - touchEndY;
    const isLeftSwipe = distanceX > 50;
    const isRightSwipe = distanceX < -50;

    // 세로 스크롤이 가로 스와이프보다 큰 경우 스와이프 무시
    if (Math.abs(distanceY) > Math.abs(distanceX)) {
      setTouchStart(null);
      setTouchEnd(null);
      setTouchStartY(null);
      setTouchEndY(null);
      return;
    }

    if (isLeftSwipe && currentSlide < slideData.length - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }

    // 터치 상태 초기화
    setTouchStart(null);
    setTouchEnd(null);
    setTouchStartY(null);
    setTouchEndY(null);
  };

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <MainWrapper>
      <MainContent>
        <HeroSection>
          <Title>구심점[求心點]</Title>
          <Subtitle>
            경기 양평, 고요함이 깃든 작은 마을에서
            <br />
            자연과 함께하는 특별한 휴식
          </Subtitle>
        </HeroSection>
      </MainContent>

      <SlideContainerWrapper>
        {currentSlide > 0 && (
          <ArrowButton direction="left" onClick={prevSlide}>
            ←
          </ArrowButton>
        )}
        {currentSlide < slideData.length - 1 && (
          <ArrowButton direction="right" onClick={nextSlide}>
            →
          </ArrowButton>
        )}

        <Navigation>
          {slideData.map((_, index) => (
            <NavDot
              key={index}
              isActive={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Navigation>

        <MainContent>
          <SliderContainer
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <SliderWrapper>
              <SlidesContainer currentSlide={currentSlide}>
                {slideData.map((slide) => (
                  <Slide key={slide.id}>
                    {/* 큰 이미지 영역 */}
                    <ImageBox style={{ gridRow: isMobile ? "auto" : "1 / 3" }}>
                      <img src={slide.mainImage} alt={slide.title} />
                    </ImageBox>

                    {/* 텍스트 박스 */}
                    <TextBox>
                      <h2>{slide.title}</h2>
                      <br />
                      <p>{slide.description}</p>
                      {/* <div>
                        {slide.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div> */}
                    </TextBox>

                    {/* 작은 이미지 영역 */}
                    {!isMobile && (
                      <ImageBox>
                        <img
                          src={slide.secondImage}
                          alt={`${slide.title} 보조`}
                        />
                      </ImageBox>
                    )}
                  </Slide>
                ))}
              </SlidesContainer>
            </SliderWrapper>
          </SliderContainer>

          {children}
        </MainContent>
      </SlideContainerWrapper>
    </MainWrapper>
  );
};

export default Main;
