import React, { useState } from "react";
import styled from "styled-components";

const FeaturesWrapper = styled.main`
  width: 100vw;
  overflow-x: hidden;
  padding-top: 60px;
  background-color: white;
  min-height: 100vh;

  @media (max-width: 768px) {
    /* padding-top: 65px; */
  }

  @media (max-width: 480px) {
    /* padding-top: 70px; */
  }
`;

const FeaturesContent = styled.div`
  width: 100%;
  padding: 0rem 0;

  @media (max-width: 768px) {
    /* padding: 2rem 0; */
  }

  @media (max-width: 480px) {
    /* padding: 1rem 0; */
  }
`;

const HeroSection = styled.section`
  text-align: center;

  padding: 5rem 5rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: #2c7a8c;
  @media (max-width: 1200px) {
    padding: 4rem 2rem;
    /* margin-bottom: 4rem; */
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    /* margin-bottom: 3rem; */
  }

  @media (max-width: 480px) {
    padding: 4rem 2rem;
    /* margin-bottom: 2rem; */
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  color: white;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    br {
      display: none;
    }
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

const SpaceSection = styled.section`
  width: 100%;
  margin-bottom: 0;
  position: relative;
`;

const SpaceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
  /* border-radius: 10px;
  overflow: hidden; */
  @media (max-width: 1200px) {
    min-height: 500px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const ImageSection = styled.div`
  background: url(${(props) => props.bgImage}) center/cover;
  background-attachment: fixed;
  position: relative;
  min-height: 600px;
  cursor: pointer;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  /* &:hover::before {
    background: rgba(0, 0, 0, 0.1);
  } */

  /* &::after {
    content: "🔍";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: white;
    opacity: 0;
    transition: all 0.3s ease;
  } */

  /* &:hover::after {
    opacity: 1;
  } */

  @media (max-width: 1200px) {
    min-height: 500px;
  }

  @media (max-width: 768px) {
    min-height: 350px;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    min-height: 280px;
  }
`;

const ContentSection = styled.div`
  background: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 1200px) {
    padding: 3rem;
    border-bottom: 1px solid #2c7a8c;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 1.5rem 0.8rem;
  }
`;

const SpaceTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #2c7a8c;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SpaceDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const FeatureItem = styled.li`
  padding: 0.5rem 0;
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
  color: #34495e;
  display: flex;
  align-items: center;

  &::before {
    content: "✓";
    color: #27ae60;
    font-weight: bold;
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0;
    font-size: 0.85rem;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const GalleryImage = styled.div`
  height: 200px;
  background: url(${(props) => props.src}) center/cover;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s ease;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "🔍";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: white;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

// 모달 관련 스타일
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
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${(props) => (props.isOpen ? "scale(1)" : "scale(0.8)")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -3rem;
  right: 0rem;
  background: none;
  border: none;
  font-size: 3rem;
  font-weight: 100;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #2c3e50;
    transform: scale(1.1);
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) => (props.direction === "prev" ? "left: 1rem;" : "right: 1rem;")}

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 1.2rem;
  }
`;

// 공간별 데이터
const spacesData = [
  {
    id: 1,
    title: "거실",
    description:
      "가족과 친구들이 함께 모여 편안한 시간을 보낼 수 있는 넓고 아늑한 거실입니다. 대형 창문을 통해 들어오는 자연광과 함께 160인치 빔프로젝터로 특별한 영화 감상 시간을 즐기실 수 있습니다.",
    features: [
      "160인치 대형 빔프로젝터",
      "편안한 소파와 테이블",
      "대형 창문으로 자연광 유입",
      "에어컨 및 난방 시설 완비",
      "고속 와이파이 제공",
    ],
    bgImage: "/image/space/optimized/livingroom1.jpg",
    images: [
      "/image/space/optimized/livingroom2.jpg",
      "/image/space/optimized/livingroom3.jpg",
      "/image/space/optimized/livingroom4.jpg",
      "/image/space/optimized/livingroom5.jpg",
    ],
  },
  {
    id: 2,
    title: "침실",
    description:
      "숙면을 위한 최적의 환경을 제공하는 아늑한 침실입니다. 고급 침구와 함께 조용하고 편안한 휴식을 취하실 수 있으며, 개인 프라이버시가 보장되는 독립적인 공간입니다.",
    features: [
      "퀸사이즈 침대 (고급 매트리스)",
      "개별 에어컨 및 난방",
      "암막 커튼으로 숙면 보장",
      "개인 수납공간 제공",
      "독립적인 프라이빗 공간",
    ],
    bgImage: "/image/space/optimized/bedroom1.jpg",
    images: [
      "/image/space/optimized/bedroom2.jpg",
      "/image/space/optimized/livingroom6.jpg",
      "/image/space/optimized/restroom.jpg",
      "/image/space/optimized/restroom2.jpg",
    ],
  },
  {
    id: 3,
    title: "야외공간",
    description:
      "자연과 함께하는 특별한 시간을 만들어주는 야외 공간입니다. 바비큐를 즐기거나 중정에서 여유로운 시간을 보내며 일상의 스트레스를 해소하실 수 있습니다.",
    features: [
      "야외 바비큐 시설 (숯불/전기그릴)",
      "하늘이 열린 중정",
      "야외 테이블 및 의자",
      "자연 채광과 통풍",
      "조용한 프라이빗 공간",
    ],
    bgImage: "/image/space/optimized/outside1.jpg",
    images: [
      "/image/space/optimized/outside2.jpg",
      "/image/space/optimized/outside3.jpg",
      "/image/space/optimized/outside4.jpg",
      "/image/space/optimized/outside5.jpg",
    ],
  },
  {
    id: 4,
    title: "화장실",
    description:
      "깔끔하고 모던한 디자인의 화장실입니다. 충분한 공간과 편의시설을 갖추어 편안하게 이용하실 수 있으며, 청결하고 위생적인 환경을 제공합니다.",
    features: [
      "모던한 디자인의 세면대",
      "깔끔한 샤워 부스",
      "충분한 수납공간",
      "고급 어메니티 제공",
      "24시간 온수 공급",
    ],
    bgImage: "/image/space/optimized/restroom.jpg",
    images: [
      "/image/space/optimized/restroom2.jpg",
      "/image/space/optimized/restroom3.jpg",
      "/image/space/optimized/restroom4.jpg",
      "/image/space/optimized/bedroom1.jpg",
    ],
  },
];

const Features = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentSpace, setCurrentSpace] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const openModal = (imageSrc, spaceId) => {
    const space = spacesData.find((s) => s.id === spaceId);
    const imageData = {
      src: imageSrc,
      title: space.title,
      description: space.description,
    };

    // 현재 스크롤 위치 저장
    setScrollPosition(window.scrollY);

    setCurrentImage(imageData);
    setCurrentSpace(space);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = "100%";
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    setCurrentSpace(null);

    // 스크롤 위치 복원
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
  };

  const handleKeyPress = (e) => {
    if (!modalOpen) return;

    if (e.key === "Escape") {
      closeModal();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [modalOpen]);

  return (
    <FeaturesWrapper>
      <FeaturesContent>
        <HeroSection>
          <Subtitle>
            자연과 어우러진 각각의 공간이 만들어내는 특별한 경험을 만나보세요.
            <br />
            편안함과 여유로움이 가득한 모든 공간을 둘러보겠습니다.
          </Subtitle>
        </HeroSection>

        {spacesData.map((space, index) => (
          <SpaceSection key={space.id}>
            <SpaceContainer>
              {index % 2 === 0 ? (
                <>
                  <ImageSection
                    bgImage={space.bgImage}
                    // onClick={() => openModal(space.bgImage, space.id)}
                  />
                  <ContentSection>
                    <SpaceTitle>{space.title}</SpaceTitle>
                    <SpaceDescription>{space.description}</SpaceDescription>
                    <FeatureList>
                      {space.features.map((feature, featureIndex) => (
                        <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                      ))}
                    </FeatureList>
                    <ImageGallery>
                      {space.images.slice(0, 4).map((img, imgIndex) => (
                        <GalleryImage
                          key={imgIndex}
                          src={img}
                          onClick={() => openModal(img, space.id)}
                        />
                      ))}
                    </ImageGallery>
                  </ContentSection>
                </>
              ) : (
                <>
                  <ContentSection>
                    <SpaceTitle>{space.title}</SpaceTitle>
                    <SpaceDescription>{space.description}</SpaceDescription>
                    <FeatureList>
                      {space.features.map((feature, featureIndex) => (
                        <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                      ))}
                    </FeatureList>
                    <ImageGallery>
                      {space.images.slice(0, 4).map((img, imgIndex) => (
                        <GalleryImage
                          key={imgIndex}
                          src={img}
                          onClick={() => openModal(img, space.id)}
                        />
                      ))}
                    </ImageGallery>
                  </ContentSection>
                  <ImageSection
                    bgImage={space.bgImage}
                    onClick={() => openModal(space.bgImage, space.id)}
                  />
                </>
              )}
            </SpaceContainer>
          </SpaceSection>
        ))}
      </FeaturesContent>

      {/* 이미지 상세보기 모달 */}
      <ModalOverlay isOpen={modalOpen} onClick={closeModal}>
        <ModalContent isOpen={modalOpen} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>×</CloseButton>
          {currentImage && (
            <>
              <ModalImage src={currentImage.src} alt={currentImage.title} />
            </>
          )}
        </ModalContent>
      </ModalOverlay>
    </FeaturesWrapper>
  );
};

export default Features;
