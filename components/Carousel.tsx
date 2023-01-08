import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface CarouselProps {
    items: any[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [currentItems] = useState(items);
    const [currentIteration, setCurrentIteration] = useState(0)

    // useEffect(() => {
        // const shiftElement = () => {
        //     const element = currentItems[currentIteration];
        //     setCurrentItems([...currentItems, element]);
        //     setCurrentIteration(currentIteration + 1);
        // }
        // setInterval(() => {
        //     shiftElement();
        // }, 2000);
    // }, [currentItems, currentIteration]);

    return (
        <Wrapper>
            <Slider>
                {currentItems.map((item, i) => (
                    <CarouselItemWrapper key={i} width={150}>
                        <Image src={`/${item}`} alt='Profile picture 0' width={1024} height={1024} style={{height: '50px', width: 'auto'}} />
                    </CarouselItemWrapper>
                ))}
            </Slider>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 600px;
    /* background: #3700ff6f; */
    background: radial-gradient(ellipse 50% 20% at 50% 50%,#7e7e7eb0,var(--transparent));
`;

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-1350px);
  }
`;

const Slider = styled.div`
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${css`${moveLeft} 26s linear infinite`};
`;

interface CarouselItemWrapperProps {
    width: number;
}

const CarouselItemWrapper = styled.div<CarouselItemWrapperProps>`
  width: ${(props) => `${props.width}px`};
  object-fit: contain;
`;

export default Carousel;
