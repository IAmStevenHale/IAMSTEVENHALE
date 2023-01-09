import styled from 'styled-components';
import AboutContent from '../components/AboutContent';
import ScrollingContainer from '../components/ScrollingContainer';
import HomeContent from '../components/HomeContent';
import DicefallContent from '../components/DicefallContent';
import DocAssistContent from '../components/DocAssistContent';
import AstronyxContent from '../components/AstronyxContent';
import GHCContent from '../components/GHCContent';
import { useState } from 'react';
import Head from 'next/head';


const Home: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Wrapper>
            <Head>
                <link rel="preconnect" href="https://iamstevenhale.io" />
                <link rel="manifest" href="/manifest.json"></link>
            </Head>
            <ScrollingContainer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                <HomeContent thisIndex={0} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                <DicefallContent thisIndex={1} currentIndex={currentIndex} /> 
                <DocAssistContent thisIndex={2} currentIndex={currentIndex} />
                <AstronyxContent thisIndex={3} currentIndex={currentIndex} />
                <GHCContent thisIndex={4} currentIndex={currentIndex} />
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
