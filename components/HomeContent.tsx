import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import Container from './Container';
import TypingText from './TypingText';


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

const HomeContent: React.FC = () => {

    return (
        <Container bgColour='#000425' gradient={<Gradient />}>
            <Wrapper>
                <Title>
                    <h1>Steven Hale</h1>
                    <SubtitleWrapper>
                        <TypingText/>
                    </SubtitleWrapper>
                </Title>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 25% 120% at 50% -20%,rgba(154, 153, 226, 0.712),var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    @media (max-width: 700px) {
        background: radial-gradient(ellipse 50% 120% at 50% -20%,rgba(154, 153, 226, 0.712),var(--transparent));
    }
`;

const Title = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    font-size: 40px;
    width: fit-content;
    height: fit-content;
    text-align: center;
    @media (max-width: 700px) {
        font-size: 30px;
    }
`;

const SubtitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    text-align: center;
    width: 100%;
    margin-top: 10px;
    & h2 {
        font-size: 40px;
        font-weight: 400;
        @media (max-width: 700px) {
            font-size: 20px;
        }
    }
`;

export default HomeContent;