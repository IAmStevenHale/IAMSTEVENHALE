import Image from 'next/image';
import styled from 'styled-components';
import ContentProps, { ShowCaseContainer } from '../Interfaces';
import Container from './Container';

const AstronyxContent = ({ currentIndex, thisIndex }: ContentProps) => {
    const isCurrent = currentIndex === thisIndex;
    const text = "Astronyx is a software development company that creates visually stunning websites and applications. Our team of developers and designers create innovative digital solutions that exceed client expectations. We combine cosmic wonder with practical functionality to create aesthetically pleasing and sturdy products. We focus on customer satisfaction and delivering top-quality results for web and app development projects."

    return (
        <Container bgColour={"#000213"} gradient={<Gradient/>}>
            <Wrapper>
                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <Image src='/AstronyxLogo.png' alt='A landscape ipad showcasing the Dicefall app.' width={600} height={1430} />
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <TextWrapper>
                        ASTRONYX
                    </TextWrapper>
                    <br />
                    <TextWrapper>
                        <p>{text}</p>
                        <br />
                        <p><a target={'_blank'} rel="noreferrer" href='https://www.astronyx.com.au/'>https://www.astronyx.com.au/</a></p>
                    </TextWrapper>
                </ShowCaseContainerRight>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    padding-right: 20px;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 80% 50% at 50% -20%,#7877c667,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
`;

const TextWrapper = styled.div`
    text-align: center;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: transparent;
    font-weight: 600;
    background: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));
    -webkit-background-clip: text;
    background-clip: text;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    width: 60%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b4bcd0;
    flex-direction: column;
    text-align: center; 
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform: translateY(25vh);`};
    & > :first-child {
        font-weight: 700;
        font-size: 50px;
    }

    @media (max-width: 700px) {
        width: 100%;
        height: 60%;
        justify-content: flex-start;
        font-size: calc(16px + (24 - 16) * (100vmin - 280px) / (1200 - 280));
    }
`;

const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: auto 0;
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translate(0, 0);` : `opacity: 0; transform: translate(-25vw, 25vh);`};
    & :first-child {
        height: auto;
        width: 100%;
        max-width: 500px;
        min-width: 300px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
        padding: 20px;
    }
    @media (max-width: 700px) {
        width: auto;
        height: 100%;
        & :first-child {
            height: 100%;
            width: auto;
        }
    }
`;

export default AstronyxContent;