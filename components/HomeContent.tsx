import React, { useState, useEffect, useMemo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ContentProps from '../Interfaces';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyToClipboard from './CopyButton';
import MailIcon from '@mui/icons-material/Mail';
import { bounce } from '../animations';

const iAmArray = [
    "steven hale.",
    "a software developer.",
    "a fullstack developer.",
    "steven hale.",
    "a front-end developer.",
    "a back-end developer.",
    "steven hale.",
    "a web developer.",
    "a pizza connoisseur."
];

const socialsIcons = [
    {
        href: "https://github.com/IAmStevenHale",
        icon: <GitHubIcon />
    },
    {
        href: "https://www.linkedin.com/in/steven-hale/",
        icon: <LinkedInIcon />
    },
    {
        href: "https://www.instagram.com/iamsteviehale/",
        icon: <InstagramIcon />
    },
    {
        href: "mailto:iamstevenhale@gmail.com",
        icon: <MailIcon />
    }
];


const HomeContent: React.FC<ContentProps> = ({ currentIndex, thisIndex, setCurrentIndex }) => {
    const [currentWord, setCurrentWord] = useState(iAmArray[0]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentWordIndex >= iAmArray.length - 1) {
                setCurrentWordIndex(0);
            } else {
                setCurrentWordIndex(currentWordIndex + 1);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [currentWordIndex]);

    useEffect(() => {
        setCurrentWord(iAmArray[currentWordIndex]);
    }, [currentWordIndex]);

    return (
        <Wrapper>
            <Gradient />
            <Title>
                <h1>I AM<br/>{currentWord}</h1>
            </Title>
            <EmailContainer>
                <ul>
                    <li>
                        <CopyToClipboard />
                    </li>
                </ul>
            </EmailContainer>
            <SocialsContainer>
                <ul>
                    {
                        socialsIcons.map((social, i) => (
                            <li key={i}>
                                <a target={"_blank"} rel={"noreferrer"} href={`${social.href}`}>
                                    {social.icon}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </SocialsContainer>
            <ScrollDownPrompt onClick={() => setCurrentIndex(1)}>
                Scroll down for projects
            </ScrollDownPrompt>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000425;
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
`;

const Title = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    font-size: 40px;
    width: 100%;
    height: 50%;
    transform: translateX(25%);
    & > * {
        white-space: nowrap;
    }
    @media (max-width: 950px) {
        font-size: 4vw;
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    padding: 0 51px 15px 0;
    z-index: 99;
    & ul::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: white;
    }
    & li {
        list-style: none;
        transition: 0.24s;
        margin-bottom: 20px;
        &:hover{
            transform: translateY(-6px);
        }
        & a {
            color: white;
            height: 30px;
            width: auto;
        }
    }
`;

const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    padding: 0 0 15px 30px;
      z-index: 99;
    & ul::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: white;
    }
    & li {
        list-style: none;
        padding-left: 5px;
        transition: 0.24s;
        &:hover{
            transform: translateY(-6px);
        }
    }
`;

const ScrollDownPrompt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width:  100%;
    position: absolute;
    bottom: 10px;
    color: white;
    animation: ${css`${bounce} 1.5s ease-in-out infinite`};
    cursor: pointer;    
     z-index: 99;
`;


export default HomeContent;