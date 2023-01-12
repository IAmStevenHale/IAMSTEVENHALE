import Image from 'next/image';
import styled from 'styled-components';
import ContentProps, { ShowCaseContainer } from '../Interfaces';
import Container from './Container';

const GHCContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {
    const isCurrent = currentIndex === thisIndex;

    const text = "GamerHC is an ecommerce platform for the gaming community. Our goal is to help customers improve their health and wellness by providing gaming-themed products and resources such as workout guides and nutrition plans. The platform is built with React, TypeScript and styled components to ensure a smooth and visually appealing experience. It's more than an online store, it's a community for gamers who want to take control of their health and wellness."

    return (
        <Container bgColour='#130000' gradient={<Gradient />}>
            <Wrapper>
                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <TextWrapper>
                        <h2>GamerHC</h2>
                    </TextWrapper>
                    <TextWrapper>
                        <p>{text}</p>
                        <p><strong><a target={'_blank'} rel="noreferrer" href='https://www.gamerhc.com/'>https://www.gamerhc.com/</a></strong></p>
                    </TextWrapper>
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <Image src='/GamerHCLogo.png' alt='A landscape ipad showcasing the Dicefall app.' width={908} height={772} />
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
        flex-direction: column-reverse;
    }
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 50% 50% at 80% 50%,#c6be774c,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
    @media (max-width: 700px) {
        background: radial-gradient(ellipse 60% 30% at 50% 20%,#c6be774c,var(--transparent));
    }
`;

const TextWrapper = styled.div`
    text-align: center;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: transparent;
    font-weight: 600;
    background: linear-gradient(to right, #ffffff66 20%, #ffffff );
    -webkit-background-clip: text;
    background-clip: text;
    & h2 {
        font-family: 'GamerHC';
        margin: 0;
        padding: 0;
        font-size: 50px;
    }
    & p {
        font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    }
    @media (max-width: 700px){
        background: linear-gradient(to top, #ffffffb7 20%, #ffffff );
        -webkit-background-clip: text;
        background-clip: text;
        & h2 {
            font-size: 40px;
        }
    }
`;

const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
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
    & h2 {
        font-weight: 700;
        font-size: 50px;
    }

    @media (max-width: 700px) {
        width: 100%;
        height: 60%;
        justify-content: flex-start;
        font-size: calc(16px + (24 - 16) * (100vmin - 280px) / (1200 - 280));
        & h2 {
            font-size: 34px;
        }
    }
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    transition: 800ms ease-in-out;
    margin: auto;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translateX(0);` : `opacity: 0; transform: translateX(25vw);`};
    & :first-child {
        padding: 20px;
        height: auto;
        width: 100%;
        max-width: 400px;
        min-width: 200px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
    }
    @media (max-width: 700px) {
        width: 100%;
        height: 40%;
        & :first-child {
            height: 100%;
            width: auto;
            max-width: unset;
            min-width: unset;
            padding: 20px;
        }
    }
`;

export default GHCContent;