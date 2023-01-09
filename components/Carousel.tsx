import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';

interface CarouselProps {
    items: string[];
}

//items[] should be an array of relative image paths from the public folder

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    return (
        <Wrapper>
            <Slider>
                {items.map((item, i) => (
                    <CarouselItemWrapper key={i} width={150}>
                        <Image src={`/${item}`} alt='Profile picture 0' width={1024} height={1024} style={{height: '50px', width: 'auto'}} />
                    </CarouselItemWrapper>
                ))}
            </Slider>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 600px;
    border-radius: 50%;
    background: radial-gradient(ellipse 100% 20% at 50% 50%,#7e7e7eb0,var(--transparent));
    @media (max-width: 600px) {
        height: 75px;
        background: radial-gradient(ellipse 100% 50% at 50% 50%,#7e7e7eb0,var(--transparent));
    }
`;

const moveLeft = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-1950px);
    }
`;

const Slider = styled.div`
  left: 0;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 2550px;
  animation: ${css`${moveLeft} 34s linear infinite`};
`;

interface CarouselItemWrapperProps {
    width: number;
}

const CarouselItemWrapper = styled.div<CarouselItemWrapperProps>`
  width: ${(props) => `${props.width}px`};
  object-fit: contain;
`;

export default Carousel;
