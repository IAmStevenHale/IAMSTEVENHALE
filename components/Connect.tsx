import React from 'react';
import styled from 'styled-components';
import { MaxWidthHomeContainer } from './HomeContainer';
import Anchor from './Anchor';
import Socials from './Socials';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

const Connect: React.FC = () => {

    return (
        <Container>
            <Anchor id={'connect'} text={"Connect"} index={4} />
            <MaxWidthContainer>
                <Wrapper>
                    <Typography variant="h2" sx={{ color: '#8892b0', fontWeight: 700, textAlign: 'center' }}>Get in Contact</Typography>
                    <Typography variant="body1" sx={{ color: '#8892b0', fontWeight: 400, fontSize: '18px', maxWidth: '500px', textAlign: 'center' }}>I am currently open to new opportunities to collaborate and create. If you have a project in mind, please get in touch.</Typography>
                    <Socials isLoaded={true} />
                    <Link href='/Steven-Hale-Resume.pdf' target='_blank'>
                        <StyledButton >Download Resume</StyledButton>
                    </Link>
                </Wrapper>
                <Typography variant="h3" sx={{ color: '#8892b0', fontWeight: 400, fontFamily: "'Rock Salt', cursive", textAlign: 'center' }}>Thank you!</Typography>
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
        h2, h3 {
            font-size: 24px;
        }
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
    @media (max-width: 700px) {
        margin-top: 0;
    }
`;

const StyledButton = styled(Button)`
    margin: 20px 0 50px 0 !important;
    background-color: #000425 !important;
    color: #cfd5e9 !important;
    border: 2px solid  #cfd5e9 !important;
    font-weight: 700 !important;
    padding: 10px 14px !important;
    &:hover {
        background-color: rgb(154, 153, 226, 0.25) !important;
    }
    @media (max-width: 700px) {
        font-size: 12px !important;
    }
`;

export default Connect;