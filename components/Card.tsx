import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Typography } from '@mui/material';
import Image from 'next/image';

interface CardProps {
    title: string;
    logo: {
        src: string;
        height: number;
        width: number;
        alt: string;
    },
    quote: string,
    description: string;
    url: string | null;
    includepadding: string;
}

const Card: React.FC<CardProps> = ({ title, logo, description, url, includepadding, quote }) => {
    return (
        <>
            {
                url ? (
                    <Link href={url} target='_blank' >
                        <CardWrapper>
                            <Logo src={logo.src} alt={logo.alt} height={logo.height} width={logo.width} includepadding={includepadding} />
                                <Typography variant='h5' style={{ color: '#cfd5e9', textAlign: 'center', fontFamily: "'Rock Salt', cursive" }}>{title}</Typography>
                                <Typography variant='h6' style={{ color: '#cfd5e9', textAlign: 'center' }}>‟{quote}”</Typography>
                                <Link href={url} style={{ color: '#8892b0', fontSize: '12px' }}>{url}</Link>
                            <CardContent>
                                <OpenInNewIcon style={{ position: 'absolute', color: 'white', top: 0, right: 0 }} />
                                <Description>{description}</Description>
                            </CardContent>
                        </CardWrapper>
                    </Link >
                ) : (
                    <CardWrapper>
                        <Logo src={logo.src} alt={logo.alt} height={logo.height} width={logo.width} includepadding={includepadding} />
                        <Typography variant='h5' style={{ color: '#cfd5e9', textAlign: 'center', fontFamily: "'Rock Salt', cursive" }}>{title}</Typography>
                        <Typography variant='h6' style={{ color: '#cfd5e9', textAlign: 'center' }}>‟{quote}”</Typography>
                            <p style={{ color: '#8892b0', textAlign: 'center', fontSize: '12px' }}> Currently in Development</p>
                        <CardContent>
                            <Description>{description}</Description>
                        </CardContent>
                    </CardWrapper>
                )}
        </>
    );
};

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
    background-color: rgb(154, 153, 226, 0.10);
    border-radius: 10px;
    padding: 20px;
    transition: all 0.3s ease;
    border: 1px solid #000425;
    overflow: hidden;
    & h5, h6, > p, a {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
    &:hover {
        border: 1px solid #cfd5e9;
        h5, h6, > p, a {
            transform: scale(1.1);
            opacity: 0;
        }
        img {
            transform: scale(1.1);
            opacity: 0;
        }
    }
`;

const Logo = styled(Image) <{ includepadding: string; bgColor?: string }>`
    width: 150px;
    height: 150px;
    object-fit: contain;
    object-position: center;
    aspect-ratio: 8/5;
    transition: transform 0.3s ease, opacity 0.3s ease;
    background-color: #000425;
    padding: ${({ includepadding }) => includepadding === 'true' ? '10px' : '0'};
    border-radius: 10px;
`;

const CardContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 4, 30);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 20px;
    svg {
        transition: all 0.3s ease;
        transform: translate(-100%, 100%);
    }
    p {
        transition: all 0.3s ease;
        transform: scale(0.8);
    }
    &:hover {
        opacity: 1;
        svg {
            transform: translate(-50%, 50%);
        }
        p {
        transform: scale(1);
    }
    }
`;

const Description = styled.p`
    color: #cfd5e9;
    text-align: center;
    line-height: 20px;
    font-size: 18px;
`;

export default Card;
