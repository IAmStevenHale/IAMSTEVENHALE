import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MaxWidthHomeContainer } from './HomeContainer';
import Card from './Card';
import Anchor from './Anchor';
import Socials from './Socials';
import { Button, Typography } from '@mui/material';


const content = [
    {
        title: 'Shine Lawyers',
        description: 'Description coming soon!',
        url: 'https://www.shine.com.au/',
        includepadding: false,
        quote: 'Australia’s leading law firm’s Website Overhaul Project.',
        logo: {
            src: '/shine-logo.png',
            height: 900,
            width: 1440,
            alt: 'Astronyx Logo'
        }
    },
    {
        title: 'Cosmos Digital',
        description: 'Description coming soon!',
        url: 'https://www.cosmosdigital.com.au/',
        includepadding: true,
        quote: 'Simple digital solutions for complex, modern challenges.',
        logo: {
            src: '/cosmos-digital-logo.png',
            height: 1430,
            width: 600,
            alt: 'Astronyx Logo'
        }
    },
    {
        title: 'Astronyx',
        description: 'Astronyx is an innovative Space Photography, Marketing, and Space Imaging Hardware business. They marry the awe of the astral space with the resilience of onyx, implementing robust space imaging equipment, capturing celestial visuals, and creating compelling narratives. The dedicated team blends technical expertise with creative brilliance to exceed client expectations, delivering functional and awe - inspiring space solutions that fuel exploration and inspire fascination.',
        url: 'https://www.astronyx.com.au/',
        includepadding: true,
        quote: 'Space photography meets compelling storytelling.',
        logo: {
            src: '/Astronyx-logo.png',
            height: 1430,
            width: 600,
            alt: 'Astronyx Logo'
        }
    },
    {
        title: 'DocAssist',
        description: 'DocAssist is a web-based tool that helps Allied Health Professionals find MBS rebates for their patients by using a filtering algorithm to identify key terms in patient notes and generate a list of relevant MBS items. It is built with React, TypeScript, and styled-components for efficient performance and a visually appealing user interface, streamlining the process of finding MBS rebates and saving time for professionals.',
        url: 'https://www.docassist.org/',
        includepadding: true,
        quote: 'Simplifying MBS rebate searches for health professionals with a click.',
        logo: {
            src: '/docAssist.png',
            height: 649,
            width: 543,
            alt: 'DocAssist Logo'
        }
    },
    {
        title: 'GamerHC',
        description: 'GamerHC is an ecommerce platform for the gaming community. Our goal is to help customers improve their health and wellness by providing gaming-themed products and resources such as workout guides and nutrition plans. The platform is built with React, TypeScript and styled components to ensure a smooth and visually appealing experience. It is more than an online store, it is a community for gamers who want to take control of their health and wellness.',
        url: 'https://www.gamerhc.com/',
        includepadding: true,
        quote: 'Elevating gamer health and wellness beyond the screen.',
        logo: {
            src: '/GamerHCLogo.png',
            height: 772,
            width: 908,
            alt: 'GamerHC Logo'
        }
    },
    {
        title: 'FormFlow',
        description: 'Description coming soon!',
        url: null,
        includepadding: true,
        quote: 'Forms utilising decision tree logic to allow endless possibilities.',
        logo: {
            src: '/formflow-logo.png',
            height: 2243,
            width: 1585,
            alt: 'DiceFall Logo'
        }
    },
    {
        title: 'DiceFall',
        description: 'DiceFall is the perfect tool for managing and running in-person Dungeons and Dragons campaigns. With a focus on collaboration and real-time interactivity, DiceFall makes it easy to plan epic tabletop adventures with your friends. Its intuitive interface allows players and Dungeon Masters to stay connected and engaged in their campaigns. Whether you&rsquo;re a seasoned DM or a newcomer to tabletop gaming, DiceFall has something for everyone. Start your next adventure today with DiceFall!',
        url: null,
        includepadding: true,
        quote: 'Elevating the game and equipping more tools for tabletop RPGs.',
        logo: {
            src: '/DiceFall.png',
            height: 2243,
            width: 1585,
            alt: 'DiceFall Logo'
        }
    },
]

const Connect: React.FC = () => {

    return (
        <Container>
            <Anchor id={'connect'} text={"Connect"} index={4} />
            <MaxWidthContainer>
                <Wrapper>
                    <Typography variant="h2" sx={{ color: '#8892b0', fontWeight: 700, textAlign: 'center' }}>Get in Contact</Typography>
                    <Typography variant="body1" sx={{ color: '#8892b0', fontWeight: 400, fontSize: '18px', maxWidth: '500px', textAlign: 'center' }}>I am currently open to new opportunities to collaborate and create. If you have a project in mind, please get in touch.</Typography>
                    <Socials isLoaded={true} />
                    <StyledButton>Download Resume</StyledButton>
                </Wrapper>
                    <Typography variant="h2" sx={{ color: '#8892b0', fontWeight: 400, fontFamily: "'Rock Salt', cursive", textAlign: 'center' }}>Thank you!</Typography>
            </MaxWidthContainer>
        </Container>
    );
};

const Container = styled.div`
    min-height: 80vh;
    height: fit-content;
    width: 100%;
    background-color: #000425;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 50px;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: 700px) {
        padding: 20px;
    }
`;
const MaxWidthContainer = styled(MaxWidthHomeContainer)`
    flex-direction: column;
    justify-content: space-evenly;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: fit-content;
    margin-top: 50px;
    & div {
        justify-content: center;
        & > * {
            margin: 0 10px;
        }
    }
`;

const StyledButton = styled(Button)`
    margin: 50px 0;
    background-color: #000425;
    color: #cfd5e9;
    border: 2px solid  #cfd5e9;
    font-weight: 700;
    padding: 20px 28px;
    &:hover {
        background-color: #cfd5e9;
        color: #000425;
    }
`;

export default Connect;