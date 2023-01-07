import styled from 'styled-components';
import AboutContent from '../components/AboutContent';
import ScrollingContainer from '../components/ScrollingContainer';
import HomeContent from '../components/HomeContent';
import DicefallContent from '../components/DicefallContent';
import DocAssistContent from '../components/DocAssistContent';
import AstronyxContent from '../components/AstronyxContent';
import GHCContent from '../components/GHCContent';
import MiscContent from '../components/MiscContent';
import { useState } from 'react';


const Home: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Wrapper>
            <ScrollingContainer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                {/* TODO */}
                <HomeContent thisIndex={0} currentIndex={currentIndex} />
                <DicefallContent thisIndex={1} currentIndex={currentIndex} /> 
                <DocAssistContent thisIndex={2} currentIndex={currentIndex} />
                <AstronyxContent thisIndex={3} currentIndex={currentIndex} />
                <GHCContent thisIndex={4} currentIndex={currentIndex} />
                {/* TODO */}
                <MiscContent thisIndex={5} currentIndex={currentIndex} />
                {/* TODO */}
                <AboutContent thisIndex={6} currentIndex={currentIndex} />
            </ScrollingContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`;

export default Home;
