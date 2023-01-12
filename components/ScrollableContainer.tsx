import styled, { css } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import JumpToNav from './JumpToNav';
import { bounce } from '../animations';

interface ScrollableProps {
    currentIndex: number;
    setCurrentIndex: any;
    children: React.ReactElement[];
}

const ScrollableContainer: React.FC<ScrollableProps> = ({ currentIndex, setCurrentIndex, children}) => {
    const isHomeScreen = currentIndex === 0;
    const ref = useRef<HTMLDivElement>(null);
    const firstChildRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight]:any = useState();
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        
        if(typeof window === undefined) return;
        if(navigator.userAgent.includes("iPhone")){
            setContentHeight("100vh");
        }else{
            const innerHeight = window.innerHeight;
            const addressBarHeight = window.outerHeight - innerHeight;
            setContentHeight(innerHeight - addressBarHeight + "px");
        }

        setIsVisible(true);
    }, [])

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
        <Wrapper isVisible={isVisible}>
            <JumpToNav handleJumpTo={handleJumpTo} />
            <JumpTo isHomeScreen={isHomeScreen}>
                {children.map((_, i) => (
                    <JumpToCircle onClick={() => handleJumpTo(i)} key={i} isCurrent={i === currentIndex} />
                ))}
            </JumpTo>
            <ScrollDownPrompt onClick={() => handleJumpTo(1)} currentIndex={currentIndex}>
                    Scroll down for projects
                </ScrollDownPrompt>
            <InnerContainer ref={ref} height={contentHeight}>
                {children.map((child, i) => (
                    <React.Fragment key={i}>
                        {i === 0 && <div ref={firstChildRef}>{child}</div>}
                        {i !== 0 && child}
                    </React.Fragment>
                ))}
            </InnerContainer>
        </Wrapper>
    )
};

const Wrapper = styled.div<{ isVisible: boolean}>`
    width: 100vw;
    overflow: hidden;
    display: ${props => props.isVisible ? `block` : 'none'};
`;

const InnerContainer = styled.div<{ ref: any; height: string; }>`
    height: 100vh;
    scroll-snap-type: y mandatory;
    -webkit-scroll-snap-type: y mandatory;
    overflow: hidden scroll;
    & > * {
        height: 100vh;
        width: 100vw;
        scroll-snap-align: start;
        -webkit-scroll-snap-align: start;
        scroll-snap-stop: always;
        -webkit-scroll-snap-stop: always;
        position: relative;
    }
    @media (max-width: 700px) {
        height: ${props => `${props.height}`};
        & > * {
            height: ${props => `${props.height}`};
        }
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
    right: 30px;
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
    @media (max-width: 700px){
        right: 15px;
    }
`;

const ScrollDownPrompt = styled.div<{ currentIndex: number}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width:  100%;
    position: fixed;
    bottom: 10px;
    color: white;
    animation: ${css`${bounce} 1.5s ease-in-out infinite`};
    transition: 500ms;
    ${props => props.currentIndex === 0 ? `opacity: 1; z-index: 99;` : `opacity: 0; z-index: -1;`};
    cursor: pointer;    
    &:hover{
        color: #fd9814;
        font-weight: 600;
    }
`;

export default ScrollableContainer;
