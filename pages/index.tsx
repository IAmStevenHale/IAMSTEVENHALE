import styled from 'styled-components';
import AboutContent from '../components/AboutContent';
import HomeContent from '../components/HomeContent';
import DicefallContent from '../components/DicefallContent';
import DocAssistContent from '../components/DocAssistContent';
import AstronyxContent from '../components/AstronyxContent';
import GHCContent from '../components/GHCContent';
import React, { useState } from 'react';
import ScrollableContainer from '../components/ScrollableContainer';


const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childrenArray = [
        <HomeContent key={0} thisIndex={0} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <DicefallContent key={1} thisIndex={1} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <DocAssistContent key={2} thisIndex={2} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <AstronyxContent key={3} thisIndex={3} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <GHCContent key={4} thisIndex={4} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <AboutContent key={5} thisIndex={5} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    ];

    return (
        <Wrapper>
            <ScrollableContainer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                {childrenArray}
            </ScrollableContainer>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    overflow: hidden;
`;

export default Home;
