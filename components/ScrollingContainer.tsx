import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
interface Props {
    children: React.ReactNode[];
    currentIndex: number;
    setCurrentIndex: any;
}

/**
 * This component is a ScrollingContainer that handles vertical scrolling by wheel events and displays a group of children. 
 * It also includes a "jump to" feature that allows the user to click on a circle to jump to a specific child. The scrolling 
 * and current child index is controlled by the state and the current child is displayed by transforming the InnerContainer.
 * The component also debounces the scroll event by setting a boolean value when the event starts and setting it back to false 
 * after a certain duration, to prevent multiple events from being triggered in quick succession.
 */

const ScrollingContainer = ({ children, currentIndex, setCurrentIndex }: Props) => {
    const innerContainerRef = useRef<HTMLDivElement>(null);
    const isHomeScreen = currentIndex === 0;
    const animationDuration = 1000;
    const [isScrolling, setScrolling] = useState(false);

    const handleJumpTo = (key: number) => {
        setCurrentIndex(key);
    }

    const startScrolling = () => {
        setScrolling(true);
        setTimeout(() => {
            setScrolling(false);
        }, animationDuration);
    };

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            event.preventDefault();
            if (isScrolling) return;
            
            startScrolling();
            if (event.deltaY < 0 && currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            } else if (event.deltaY > 0 && currentIndex < children.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, [currentIndex, setCurrentIndex, children, isScrolling]);

    return (
        <Container>
            <JumpTo isHomeScreen={isHomeScreen}>
                {children.map((_, i) => (
                        <JumpToCircle onClick={() => handleJumpTo(i)} key={i} isCurrent={i === currentIndex}/>
                ))}
            </JumpTo>
            <InnerContainer ref={innerContainerRef} currentIndex={currentIndex} animationDuration={animationDuration}>
                {children.map((child, index) => (
                    <ChildWrapper key={index}>
                        {child}
                    </ChildWrapper>
                ))}
            </InnerContainer>
        </Container>
    );
};

const Container = styled.div`
    overflow: hidden;
    height: 100vh;
`;

const InnerContainer = styled.div<{ children: React.ReactNode[]; currentIndex: number; animationDuration: number }>`
    height: ${props => props.children && props.children.length * 100}vh;
    transition: transform ${props => props.animationDuration}ms ease-in-out;
    transform: translateY(${props => -props.currentIndex * 100}vh);
    position: initial;
`;

const JumpToCircle = styled.span<{ isCurrent: boolean }>`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #ff5e00;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: ${ props => props.isCurrent ? `#ff5e00` : 'none'};
    z-index: 2;
`;

const JumpTo = styled.div<{ isHomeScreen: boolean}>`
    position: fixed;
    width: fit-content;
    right: 25px;
    top: 50%;
    transform: ${props => props.isHomeScreen ? `translateX(10vw) translateY(-50%)` : `translateY(-50%)` };
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

    
`;

const ChildWrapper = styled.div`
    height: 100vh;
`;

export default ScrollingContainer;
