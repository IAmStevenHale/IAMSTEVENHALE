import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { textEnterAnimation, textExitAnimation } from '../animations';
import ContentProps, { LineTextProps, ShowCaseContainer } from '../Interfaces';

/**This is a React functional component that displays information about a web application called DocAssist. 
 * The component receives two props, currentIndex and thisIndex, and uses them to determine if it is the current 
 * element being displayed. If it is the current element, it changes the font of the text displayed. The text is 
 * split into individual words and rendered in either a new font or the old font, depending on whether the 
 * element is current or not. The component also includes styled components for the overall layout and individual 
 * elements within the component. */
const DocAssistContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {
    const isCurrent = currentIndex === thisIndex;

    return (
        <Wrapper>
            <Gradient />
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
    );
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
    //MOBILE
    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;

const Gradient = styled.div`
  background-image: 
    radial-gradient(ellipse 50% 30% at 0% 0%,#25bec32d,var(--transparent)),
    radial-gradient(ellipse 50% 30% at 100% 0%,#25bec32d,var(--transparent)),
    radial-gradient(ellipse 50% 30% at 0% 100%,#25bec32d,var(--transparent)),
    radial-gradient(ellipse 50% 30% at 100% 100%,#25bec32d,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
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
    & :first-child {
        transform: ${({ isCurrent }) => isCurrent ? `scale(1)` : `scale(0)`};
        height: 60%;
        width: auto;
        max-height: 600px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
    }

    //MOBILE
    @media (max-width: 600px) {
        width: 100%;
        height: 40%;
        padding: 50px 100px;
        & :first-child {
            height: 100%;
            width: auto;
        }
    }
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
    animation: ${({ isCurrent }) => isCurrent ? css`${textEnterAnimation} 1.2s ease-in-out` : css`${textExitAnimation} 1.2s ease-in-out`};
    & h2 {
        font-size: 30px;
    }

    //TABLET
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        padding-right: 80px;
    }

    //MOBILE
    @media (max-width: 600px) {
        width: 100%;
        height: 60%;
        padding: 0 30px;
        justify-content: flex-start;
    }
`;

export default DocAssistContent;