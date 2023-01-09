import Image from 'next/image';
import styled, { css } from 'styled-components';
import { enterBottomRight, exitBottomRight, textEnterAnimation, textExitAnimation } from '../animations';
import ContentProps, { ShowCaseContainer } from '../Interfaces';

/*
  GHCContent is a component that displays information about the GamerHC ecommerce platform.
  It takes in two props: currentIndex and thisIndex, which are used to determine whether
  the component should be in an "active" or "inactive" state. The component is rendered
  with a left and right section, each containing text and/or an image. The component also
  uses styled-components and animations imported from the '../animations' file to style and animate itself.
*/
const GHCContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {

    const isCurrent = currentIndex === thisIndex;

    return (
        <Wrapper>
            <Gradient/>

                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <TextWrapper>
                        <h2>GamerHC</h2>
                    </TextWrapper>
                <br />
                    <TextWrapper>
                        <p>GamerHC is an ecommerce platform targeting the gaming community, both recreational and professional. Our goal is to provide motivation and guidance to help customers lead a more active lifestyle, through the use of gaming-themed products and resources. The platform is built with a modern tech stack including React, TypeScript, and styled components, ensuring a smooth and visually appealing user experience. We offer a range of products and services, including workout guides, nutrition plans, and gaming-themed merchandise, to help our customers reach their health and wellness goals. GamerHC is more than just an online store - it&rsquo;s a community for gamers who want to take control of their health and wellness. Join us and discover the benefits of gaming-inspired motivation and guidance.</p>
                        <br/>
                        <p><a target={'_blank'} rel="noreferrer" href='https://www.gamerhc.com/'>https://www.gamerhc.com/</a></p>
                    </TextWrapper>
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <Image src='/GamerHCLogo.png' alt='A landscape ipad showcasing the Dicefall app.' width={908} height={772} />
                </ShowCaseContainerRight>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #130000;
    overflow: hidden;
    position: relative;
        //MOBILE
    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 50% 50% at 80% 50%,#c6be774c,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
    //MOBILE
    @media (max-width: 600px) {
        background: radial-gradient(ellipse 60% 30% at 50% 20%,#c6be774c,var(--transparent));
    }
`;

const TextWrapper = styled.div`
    text-align: center;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: transparent;
    padding-bottom: 0.13em;
    font-weight: 600;
    background: linear-gradient(to right, #ffffff66 20%, #ffffff );
    @media (max-width: 600px){
        background: linear-gradient(to top, #ffffff66 5%, #ffffff );
        -webkit-background-clip: text;
        background-clip: text;
    }
    
    -webkit-background-clip: text;
    background-clip: text;
    gap: 50px;
    & h2 {
        font-family: 'GamerHC';
        margin: 0;
        padding: 0;
    }
    & p {
        font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    }
    @media (max-width: 600px){
        & h2 {
            font-size: 50px;
        }
    }
    
`;

const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
    //DEFAULT
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    color: #b4bcd0;
    flex-direction: column;
    text-align: center;
    animation: ${({ isCurrent }) => isCurrent ? css`${textEnterAnimation} 1.2s ease-in-out` : css`${textExitAnimation} 1.2s ease-in-out`};
    & > :first-child {
        font-weight: 700;
        font-size: 50px;
    }
        //TABLET
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        padding-right: 80px;
    }

    //MOBILE
    @media (max-width: 600px) {
        width: 100%;
        height: 60%;
        padding: 0 30px;
        justify-content: flex-start;
        font-size: calc(14px + (24 - 14) * (100vmin - 280px) / (1200 - 280));
    }
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    //DEFAULT
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    flex-direction: column;
    text-align: center;
    animation: ${({ isCurrent }) => isCurrent ? css` ${enterBottomRight} 1200ms ease-in-out;` : css`${exitBottomRight} 1200ms ease-in-out;`};    
    & :first-child {
        height: 60%;
        width: auto;
        max-height: 600px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
    }

    
    //MOBILE
    @media (max-width: 600px) {
        width: 100%;
        height: 40%;
        /* padding: 0 50px; */
        & :first-child {
            height: 100%;
            width: 100%;
        }
    }
`;

export default GHCContent;