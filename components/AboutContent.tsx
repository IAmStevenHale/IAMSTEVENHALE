import styled, { css } from 'styled-components';
import ContentProps from '../Interfaces';
import Carousel from './Carousel';
import Container from './Container';
import ImageSphere from './ImageSphere';

//
const AboutContent: React.FC<ContentProps> = ({currentIndex, thisIndex, setCurrentIndex}) => {

    return (
        <Container bgColour='black'>
            <Wrapper>
            <Gradient />
                <ShowCaseContainerLeft>
                    
                    <ImageSphere/>
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight>
                    <p>
                        Hi, <a rel='noreferrer' target={'_blank'} href='https://www.youtube.com/watch?v=ouA-U4x17KY'>Stevie here.</a>
                    </p>
                    <br />
                    <p>
                        I started out as a Software Developer in 2019, chasing a new and challenging career after moving on from being a S&C Coach.
                        I have a strong understanding of front-end and back-end development, and I am comfortable working on both sides of the stack.
                        My experience with React, Typescript, and Next.js has given me the ability to build high-performance, scalable web applications
                        that provide a seamless user experience.
                    </p>
                    <br />
                    <p style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>Steven Hale</p>
                    <Carousel />
                </ShowCaseContainerRight>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 25% 130% at 25% -10%,#c6be7788,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
    @media (max-width: 700px) {
        background: radial-gradient(ellipse 60% 60% at 50% 0%,#c6be77b7,var(--transparent));
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
    gap: 20px;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    @media (max-width: 700px) {
        width: 100%;
        height: 50%;
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
        height: 70%;
        padding: 0 20px;
    }
`;

export default AboutContent;