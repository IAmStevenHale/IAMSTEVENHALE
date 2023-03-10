import styled, { css } from 'styled-components';
import ContentProps from '../Interfaces';
import Carousel from './Carousel';
import Container from './Container';
import ImageSphere from './ImageSphere';

//
const AboutContent: React.FC<ContentProps> = ({ currentIndex, thisIndex, setCurrentIndex }) => {

    const text = "I started out as a Full-stack Developer back in 2019. I have a strong understanding of both front-end and back-end development using the JavaScript eco-system. I've used React, Typescript, and Next.js to build high-performance, scalable web applications both personally and professionally.\nThanks for checking out my portfolio!"

    return (
        <Container bgColour='black'>
            <Wrapper>
                <Gradient />
                <InnerWrapper>
                    <ShowCaseContainerLeft>
                        <ImageSphere />
                    </ShowCaseContainerLeft>
                    <ShowCaseContainerRight>
                        <p>Hi, <a rel='noreferrer' target={'_blank'} href='https://www.youtube.com/watch?v=ouA-U4x17KY'>Stevie here.</a></p>
                        <p>{text}</p>
                        <p style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>Steven Hale</p>
                    </ShowCaseContainerRight>
                </InnerWrapper>
                <Carousel />
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const InnerWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column;
        height: fit-content;
    }
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 25% 130% at 25% -10%,#c6be7788,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
    @media (max-width: 700px) {
        background: radial-gradient(ellipse 50% 70% at 50% 0%,#c6be77b7,var(--transparent));
    }
`;

const ShowCaseContainerLeft = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(180, 188, 208);
    flex-direction: column;
    text-align: center;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    @media (max-width: 700px) {
        width: 100%;
        height: fit-content;
        margin-bottom: 80px;
    }
`;

const ShowCaseContainerRight = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    flex-direction: column;
    text-align: center;
    color: whitesmoke;
    position: relative;
    height: 100%;
    line-height: 24px;
    text-align: left;
    padding: 50px 100px 50px 50px;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    & > p {
        width: 100%;
    }
    @media (max-width: 700px) {
        width: 100%;
        height: fit-content;
        padding: 0 40px 0 20px;
    }
`;

export default AboutContent;