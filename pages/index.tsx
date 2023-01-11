import styled from 'styled-components';
import AboutContent from '../components/AboutContent';
import HomeContent from '../components/HomeContent';
import DicefallContent from '../components/DicefallContent';
import DocAssistContent from '../components/DocAssistContent';
import AstronyxContent from '../components/AstronyxContent';
import GHCContent from '../components/GHCContent';
import React, { useEffect, useRef, useState } from 'react';
import JumpToNav from '../components/JumpToNav';

const Home: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isHomeScreen = currentIndex === 0;
    const ref = useRef<HTMLDivElement>(null);
    const firstChildRef = useRef<HTMLDivElement>(null);
    const childrenArray = [
        <HomeContent key={0} thisIndex={0} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <DicefallContent key={1} thisIndex={1} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <DocAssistContent key={2} thisIndex={2} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <AstronyxContent key={3} thisIndex={3} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <GHCContent key={4} thisIndex={4} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />,
        <AboutContent key={5} thisIndex={5} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    ];

    const handleJumpTo = (key: number) => {
        setCurrentIndex(key);
        console.log("here")
        ref.current && ref.current.scrollTo({
            top: key * ref.current.clientHeight,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const currentRef = ref.current;
        const currentFirstChildRef = firstChildRef.current;
        const handleIndex = () => {
            const indexPlaceholder = currentFirstChildRef && currentFirstChildRef && currentFirstChildRef.getBoundingClientRect().top / currentFirstChildRef.clientHeight;
            if (indexPlaceholder === 0 || indexPlaceholder === -1 || indexPlaceholder === -2 || indexPlaceholder === -3 || indexPlaceholder === -4 || indexPlaceholder === -5 || indexPlaceholder === -6) {
                setCurrentIndex(Math.abs(indexPlaceholder))
            }
        };
        currentRef && currentRef.addEventListener('scroll', handleIndex);
        return () => {
            currentRef && currentRef.removeEventListener('scroll', handleIndex);
        };
    }, [currentIndex, ref]);

    return (
        <Wrapper>
            <JumpToNav setCurrentIndex={setCurrentIndex} />
            <JumpTo isHomeScreen={isHomeScreen}>
                {childrenArray.map((_, i) => (
                    <JumpToCircle onClick={() => handleJumpTo(i)} key={i} isCurrent={i === currentIndex} />
                ))}
            </JumpTo>
            <InnerContainer ref={ref}>
                {childrenArray.map((child, i) => (
                    <React.Fragment key={i} >
                        {i === 0 && <div ref={firstChildRef}>{child}</div>}
                        {i !== 0 && child}
                    </React.Fragment>
                ))}
            </InnerContainer>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    overflow: hidden;
`;

const InnerContainer = styled.div<{ ref: any }>`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow: hidden scroll;
    & > * {
        height: 100vh;
        width: 100vw;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        position: relative;
    }
`;

const JumpToCircle = styled.span<{ isCurrent: boolean }>`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid white;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: ${props => props.isCurrent ? `white` : 'none'};
    z-index: 2;
`;

const JumpTo = styled.div<{ isHomeScreen: boolean }>`
    position: fixed;
    width: fit-content;
    right: 25px;
    top: 50%;
    transform: ${props => props.isHomeScreen ? `translateX(10vw) translateY(-50%)` : `translateY(-50%)`};
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: 1s;
    & span:last-of-type {
        margin-bottom: 0;
    }
    @media (max-width: 850px) {
            right: 10px;
    }
`;

export default Home;
