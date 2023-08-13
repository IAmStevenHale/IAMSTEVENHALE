import React, { useEffect } from 'react';
import styled from 'styled-components';
import HomeContainer from './HomeContainer';
import TypingText from './TypingText';
import Title from './Title';
import Socials from './Socials';

const Home: React.FC = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
    }, []);

    return (
        <HomeContainer gradient={<Gradient isLoaded={isLoaded} />} includeBorder>
            <>
                <Wrapper isLoaded={isLoaded}>
                    <PreTitleWrapper isLoaded={isLoaded}>
                        <p>Hello there,</p>
                    </PreTitleWrapper>
                    <Title isLoaded={isLoaded}/>
                    <SubtitleWrapper isLoaded={isLoaded}>
                        <TypingTextWrapper>
                            <p>I am&nbsp;</p>
                            <TypingText />
                        </TypingTextWrapper>
                        <br />
                        <p>I specialise in creating incredible web-based software and websites.
                            I&apos;m a big fan of minimalistic design, simplistic code, and chill vibes.
                            I just want to build interesting things that are aesthetic and practical, facilitating
                            positive change where I can.
                        </p>
                    </SubtitleWrapper>
                    <Socials isLoaded={isLoaded} />
                </Wrapper>
            </>
        </HomeContainer>
    );
};

const Wrapper = styled.div<{ isLoaded: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 720px;
    transition: all 1s ease-in-out;
    padding: 20px;    
`;

const Gradient = styled.div<{ isLoaded: boolean }>`
    background: radial-gradient(ellipse 50% 120% at 50% -20%,rgba(154, 153, 226, 0.25),var(--transparent));
    position: absolute;
    height: 100%;
    opacity: ${props => props.isLoaded ? 1 : 0};
    width: 100%;
    z-index: 0;
    top: 0;
    transition: all 0.30s ease-in-out;
    @media (max-width: 1000px) {
        background: radial-gradient(ellipse 400px 120% at 50% -20%,rgb(154, 153, 226, 0.25),var(--transparent));
    }
`;

const PreTitleWrapper = styled.div<{ isLoaded: boolean }>`
    color: #cfd5e9;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    color: #cfd5e9;
    font-size: 18px;
    font-weight: 600;
    transition: all 1s ease-in-out;
    opacity: ${props => props.isLoaded ? 1 : 0};
    @media (max-width: 700px) {
        font-size: 30px;
    }
`;

const TypingTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    color: #cfd5e9;
    font-size: 25px;
    font-weight: 600;
`;

const SubtitleWrapper = styled.div<{ isLoaded: boolean }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: fit-content;
    text-align: left;
    flex-direction: column;
    width: 100%;
    color: #8892b0;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.5px;
    transition: all 1s ease-in-out;
    opacity: ${props => props.isLoaded ? 1 : 0};
`;

export default Home;