import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import JumpToNav from './JumpToNav';

interface ScrollableProps {
    currentIndex: number;
    setCurrentIndex: any;
    children: React.ReactElement[];
}

const ScrollableContainer: React.FC<ScrollableProps> = ({ currentIndex, setCurrentIndex, children}) => {
    const isHomeScreen = currentIndex === 0;
    const ref = useRef<HTMLDivElement>(null);
    const firstChildRef = useRef<HTMLDivElement>(null);

    const handleJumpTo = (key: number) => {
        setCurrentIndex(key);
        ref.current && ref.current.scrollTo({
            top: key * ref.current.clientHeight,
            behavior: 'smooth'
        });
    };
    
    useEffect(() => {
        const currentRef = ref.current;
        const currentFirstChildRef = firstChildRef.current;
        const checkAgainst = Array.from({length: children.length}, (_, i) => i);

        const handleIndex = () => {
            
            const indexPlaceholder = currentFirstChildRef && Math.abs(currentFirstChildRef.getBoundingClientRect().top / currentFirstChildRef.clientHeight) || 0; 
            if (checkAgainst.some((el) => el === Math.round(indexPlaceholder))) {
                setCurrentIndex(Math.round(indexPlaceholder))
            }
        };
        currentRef && currentRef.addEventListener('scroll', handleIndex);
        return () => {
            currentRef && currentRef.removeEventListener('scroll', handleIndex);
        };
    }, [children.length, currentIndex, ref, setCurrentIndex]);

    return (
        <Wrapper>
            <JumpToNav handleJumpTo={handleJumpTo} />
            <JumpTo isHomeScreen={isHomeScreen}>
                {children.map((_, i) => (
                    <JumpToCircle onClick={() => handleJumpTo(i)} key={i} isCurrent={i === currentIndex} />
                ))}
            </JumpTo>
            <InnerContainer ref={ref}>
                {children.map((child, i) => (
                    <>
                        {i === 0 && <div ref={firstChildRef}>{child}</div>}
                        {i !== 0 && child}
                    </>
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

export default ScrollableContainer;
