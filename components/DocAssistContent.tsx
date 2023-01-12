import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import ContentProps, { ShowCaseContainer } from '../Interfaces';
import Container from './Container';

const DocAssistContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {
    const isCurrent = currentIndex === thisIndex;
    const text = "DocAssist is a web-based tool that helps Allied Health Professionals find MBS rebates for their patients by using a filtering algorithm to identify key terms in patient notes and generate a list of relevant MBS items. It's built with React, TypeScript, and styled components for efficient performance and a visually appealing user interface, streamlining the process of finding MBS rebates and saving time for professionals."

    return (
        <Container bgColour='#130000;' gradient={<Gradient/>}>
        <Wrapper>
            <ShowCaseContainerLeft isCurrent={isCurrent}>
                <h2>DocAssist</h2>
                <p>{text}</p>
                <p><strong><a target={'_blank'} rel="noreferrer" href='https://www.docassist.org/'>https://www.docassist.org/</a></strong></p>
            </ShowCaseContainerLeft>
            <ShowCaseContainerRight isCurrent={isCurrent}>
                <Image src='/docAssist.png' alt='A landscape ipad showcasing the Dicefall app.' width={543} height={649} />
            </ShowCaseContainerRight>
        </Wrapper>
        </Container>

    );
};

const Wrapper = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    padding-right: 20px;
    @media (max-width: 700px) {
        flex-direction: column-reverse;
    }
`;

const Gradient = styled.div`
    background-image: 
    radial-gradient(ellipse 70% 50% at 0% 0%,#25bec367,var(--transparent)),
    radial-gradient(ellipse 70% 50% at 100% 0%,#25bec367,var(--transparent)),
    radial-gradient(ellipse 70% 50% at 0% 100%,#25bec367,var(--transparent)),
    radial-gradient(ellipse 70% 50% at 100% 100%,#25bec367,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
    width: 60%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b4bcd0;
    flex-direction: column;
    text-align: center; 
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform: translateY(25vh);`};
    & h2 {
        font-weight: 700;
        font-size: 50px;
    }
    & :last-child{
        padding-top: 5px;
    }
    @media (max-width: 700px) {
        width: 100%;
        height: 60%;
        justify-content: flex-start;
        font-size: calc(16px + (24 - 16) * (100vmin - 280px) / (1200 - 280));
        & h2 {
            font-weight: 700;
            font-size: 30px;
        }
    }
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    width: 40%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    transition: 800ms ease-in-out;
    margin: auto;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: scale(1);` : `opacity: 0; transform: scale(0);`};
    & :first-child {
        height: auto;
        width: 100%;
        max-width: 300px;
        min-width: 300px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
        padding: 20px;
    }
    @media (max-width: 700px) {
        width: 100%;
        height: 40%;
        & :first-child {
            height: 100%;
            width: auto;
            max-width: unset;
            min-width: unset;
            padding: 20px;
        }
    }
`;

export default DocAssistContent;