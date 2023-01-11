import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import ContentProps, { ShowCaseContainer } from '../Interfaces';
import Container from './Container';

const DocAssistContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {
    const isCurrent = currentIndex === thisIndex;

    return (
        <Container bgColour='#130000;' gradient={<Gradient/>}>
        <Wrapper>
            <ShowCaseContainerLeft isCurrent={isCurrent}>
                <h2>DocAssist</h2>
                <br />
                <p>
                    DocAssist is a web-based tool that helps Allied Health Professionals find relevant MBS rebates for their patients.
                    The application utilizes a Rake Filtering algorithm to identify key terms in patient notes and generate a list of
                    relevant MBS items. The application is built with a modern tech stack including React, TypeScript, and styled components.
                    This allows for efficient and reliable performance, as well as a visually appealing user interface. DocAssist
                    streamlines the process of finding MBS rebates, saving time and effort for Allied Health Professionals. Give it a
                    try and see how it can benefit your practice.
                </p>
                <br />
                <p><a target={'_blank'} rel="noreferrer" href='https://www.docassist.org/'>https://www.docassist.org/</a></p>
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
    @media (max-width: 600px) {
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
`;

const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    color: #b4bcd0;
    flex-direction: column;
    text-align: center;
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform: translateY(25vh);`};
    & > :first-child {
        font-weight: 700;
        font-size: 50px;
    }
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        padding-right: 80px;
    }
    @media (max-width: 600px) {
        width: 100%;
        height: 60%;
        padding: 0 30px;
        justify-content: flex-start;
        font-size: calc(14px + (24 - 14) * (100vmin - 280px) / (1200 - 280));
    }
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    flex-direction: column;
    text-align: center;
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: scale(1)` : `opacity: 0; transform: scale(0);`};
    & :first-child {
        height: 60%;
        width: auto;
        max-height: 600px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
    }
    @media (max-width: 600px) {
        width: 100%;
        height: 40%;
        & :first-child {
            height: 100%;
            width: 100%;
        }
    }
`;

export default DocAssistContent;