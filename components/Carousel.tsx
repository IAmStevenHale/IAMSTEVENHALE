import Image from 'next/image';
import styled, { css } from 'styled-components';
import { moveLeft } from '../animations';

const items = [
    "api.png",
    "git.png",
    "github.png",
    "html_logo.png",
    "Javascript_badge.png",
    "Next_js.png",
    "Nodejs.png",
    "React-icon.png",
    "sass.png",
    "sql.png",
    "styled-components.png",
    "Typescript_logo_2020.png",
    "Vercel.png"
];

const Carousel: React.FC = () => {
    return (
        <Wrapper>
                <Slider>
                {items.map((item, i) => (
                    <CarouselItemWrapper key={i} width={150}>
                        <Image src={`/${item}`} alt='Profile picture 0' width={1024} height={1024} style={{ height: '50px', width: 'auto' }} />
                    </CarouselItemWrapper>
                ))}
                </Slider>
                <Slider>
                {items.map((item, i) => (
                    <CarouselItemWrapper key={i} width={150}>
                        <Image src={`/${item}`} alt='Profile picture 0' width={1024} height={1024} style={{ height: '50px', width: 'auto' }} />
                    </CarouselItemWrapper>
                ))}
                </Slider>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    /* overflow: hidden; */
    width: 100%;
    background: radial-gradient(ellipse 100% 50% at 50% 50%,#7e7e7eb0,var(--transparent));
    @media (max-width: 700px) {
        /* margin-bottom: 50px; */
    }
`;

const Slider = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 1950px;
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
