import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import ContentProps from '../Interfaces';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyToClipboard from './CopyButton';
import MailIcon from '@mui/icons-material/Mail';

const HomeContent = ({ currentIndex, thisIndex }: ContentProps) => {
    const iAmArray = useMemo(() => ["steven hale.", "a software developer.", "a fullstack developer.", "a front-end developer.", "a back-end developer.", "a web developer.", "a pizza connoisseur."], []);
    const [currentWord, setCurrentWord] = useState(iAmArray[0]);
    const [currentWordIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentWordIndex >= iAmArray.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentWordIndex + 1);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [currentWordIndex, iAmArray.length,]);

    useEffect(() => {
        setCurrentWord(iAmArray[currentWordIndex]);
    }, [currentWordIndex, iAmArray]);

    return (
        <Wrapper>
            <Gradient/>
            <Title>
                <h2>I AM</h2>
                <h2>{currentWord}</h2>
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
                    <li>
                        <a target={"_blank"} rel={"noreferrer"} href='https://github.com/IAmStevenHale'>
                            <GitHubIcon style={{ color: "#ff5e00", height: "30px", width: "auto" }} />
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} rel={"noreferrer"} href='https://www.linkedin.com/in/steven-hale/'>
                            <LinkedInIcon style={{ color: "#ff5e00", height: "30px", width: "auto" }} />
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} rel={"noreferrer"} href='https://www.instagram.com/iamsteviehale/'>
                            <InstagramIcon style={{ color: "#ff5e00", height: "30px", width: "auto" }} />
                        </a>
                    </li>
                    <li>
                        <a target={"_blank"} rel={"noreferrer"} href='mailto:iamstevenhale@gmail.com'>
                            <MailIcon style={{ color: "#ff5e00", height: "30px", width: "auto" }} />
                        </a>
                    </li>
                </ul>
            </SocialsContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Gradient = styled.div`
      background: radial-gradient(ellipse 80% 50% at 50% -20%,#ff5e0063,var(--transparent));
      position: absolute;
      height: 100%;
      width: 100%;
`;


const Title = styled.div`
    color: #ff5e00;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    font-size: 40px;
    width: 70%;
    height: 50%;
    transform: translateX(25%);
    & > * {
        white-space: nowrap;
    }
`;

const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: fit-content;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 15px;

    & ul > li {
        margin-bottom: 30px;
    }

    & ul > :last-child {
        margin-bottom: 10px;
    }

    & ul::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: #ff5e00;
    }
    & li {
        list-style: none;
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
    color: #ff5e00;
    padding: 0 0 15px 30px;
    & ul::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: #ff5e00;;
    }
    & li {
        list-style: none;
        padding-left: 5px;
    }
`;

export default HomeContent;