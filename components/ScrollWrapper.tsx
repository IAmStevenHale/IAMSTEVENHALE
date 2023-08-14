import styled from 'styled-components';
import React, { useRef, useState, useEffect } from 'react';

const ScrollWrapper = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    const handleScroll = () => {
        if (inView) return;

        if (ref && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const hasPassedHalfway = rect.top < window.innerHeight / 1.5;

            setInView(hasPassedHalfway);
        }
    };

    useEffect(() => {
        handleScroll(); // Check if in view initially, in case the element is already halfway in view on load
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollEffect ref={ref} isVisible={inView}>
            {children}
        </ScrollEffect>
    );
};

const ScrollEffect = styled.div<{ isVisible: boolean }>`
    opacity: ${props => props.isVisible ? 1 : 0};
    transform: translateY(${props => props.isVisible ? '0' : '20px'});
    transition: opacity 1s, transform 1s;
`;

export default ScrollWrapper;
