import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const text = "I am Steven Hale";

const Title = ({ isLoaded }: any) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFont = async () => {
            // Wait for the 'Rock Salt' font to be loaded
            await document.fonts.load('400 60px "Rock Salt"');
            // Once the font is loaded, set the state
            setFontLoaded(true);
        };

        loadFont();
    }, []);

    if (!fontLoaded) {
        return null; // or return a placeholder/loading component
    }

    return (
        <TitleWrapper isLoaded={isLoaded}>
            <h1>
                {text.split("").map((char, index) => {
                    if (char === ' ') {
                        return <span key={index}>&nbsp;</span>;
                    }
                    return (
                        <Letter key={index} delay={index * 80}>
                            {char}
                        </Letter>
                    );
                })}
            </h1>
        </TitleWrapper >
    )
}
const TitleWrapper = styled.div<{ isLoaded: boolean }>`
    color: #cfd5e9;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
    margin: ${props => props.isLoaded ? '0 auto 0 0' : '0 auto 0 50px'};
    width: 100%;
    height: fit-content;
    transition: all 1s ease-in-out;
    width: fit-content;
    overflow: hidden;

    @keyframes reveal {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }

    & h1 {
        font-size: 60px;
        font-weight: 400;
        margin: 0;
        font-family: 'Rock Salt', cursive;
        line-height: 100px;
        position: relative;
    }

    @media (max-width: 700px) {
        font-size: 30px;
    }
`;

const rollIn = keyframes`
    0% {
        transform: rotateX(-90deg);
    }
    100% {
        transform: rotateX(0deg);
    }
`;

const Letter = styled.span<{ delay: number; }>`
    display: inline-block;
    transform-origin: 50% 50% 25px;
    transform: rotateX(-90deg);
    animation: ${rollIn} 0.32s forwards;
    animation-delay: ${props => `${props.delay}ms`};
    font-family: 'Rock Salt', cursive;
`;


export default Title;
