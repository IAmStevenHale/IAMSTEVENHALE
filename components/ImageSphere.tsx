import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { hover, shadowAnimation } from '../animations';

const profileUrls = [
    "1d62d29067f8824bcc22c1dbaf922bfc-min.jpg",
    "4a8861c2be55787c4450d90a9a8baab1-min.jpg",
    "6f690e4c4f39dc1a96496bb62738159a-min.jpg",
    "8f571ef315c0346d749bcee6170c71f0-min.jpg",
    "22ada7249943f29418eed29f2e8f9fa4-min.jpg",
    "50ec4af07690f0f8729efc9e6118bcb7-min.jpg",
    "9606631f93e4a80bfb80c4f414016371-min.jpg",
    "934858926a3da6e5f4b05927579cc3d4-min.jpg",
    "a0274b258023688e60bdfd527020b993-min.jpg",
    "df65ad6e7e74f9ccd30d977cf1cf5f3f-min.jpg",
    "e578e6d03c3b11e4026467865bf02f11-min.jpg",
]


const ImageSphere = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImageIndex >= 10) {
                setCurrentImageIndex(0);
            } else {
                setCurrentImageIndex(currentImageIndex + 1);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <ImageContainer>
            <ImagesWrapper>
                {profileUrls.map((profileUrl, i) => (
                    <ImageWrapper key={i} isCurrent={currentImageIndex === i} >
                        <Image src={`/${profileUrl}`} alt={`Profile image picture ${i}, AI generated image.`} width={1024} height={1024} />
                    </ImageWrapper>
                ))}
                <Sphere />
            </ImagesWrapper>
            <Shadow />
        </ImageContainer>
    )
}

const ImageContainer = styled.div`
    margin-top: 20px;
    height: 300px;
    width: 300px;
        @media (max-width: 700px) {
        height: 230px;
        width: 230px;
    }
`;


const ImagesWrapper = styled.div`
    height: 300px;
    width: 300px;
    border: 1px;
    position: relative;
    overflow: hidden;
    object-fit: contain;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    animation: ${css`${hover} 5s ease-in-out infinite`};
    @media (max-width: 700px) {
        height: 200px;
        width: 200px;
    }
`;

const ImageWrapper = styled.div<{ isCurrent: boolean }>`
    height: 300px;
    width: 300px;
    position: absolute;
    opacity: ${props => props.isCurrent ? `1` : `0`};
    transition: 1.5s;
    & * {
        height: 100%;
        width: auto;
    }
    @media (max-width: 700px) {
        height: 200px;
        width: 200px;
        
    }
`;

const Shadow = styled.div`
    position: relative;
    top: 50px;
    height: 20px;
    width: 100px;
    margin: 0 auto;
    transform-origin: center;
    &:before {
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        border-radius: 50%; 
        box-shadow: rgba(0, 0, 0, 0.5) 0 5px 10px;
        clip: rect(20px, auto, 50px, 0);
        transform-origin: center;
        animation: ${css`${shadowAnimation} 5s ease-in-out infinite`}; 
    }
`;

const Sphere = styled.div`
    position: absolute;
    background: black;
    height: 300px;
    width: 300px;
    background-origin: border-box;
    background-clip: border-box;
    background: radial-gradient(circle at 150px 100px, var(--transparent) 30%,  #000 75%),
    radial-gradient(circle at 30% 20%,  rgb(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 30%);
    @media (max-width: 700px) {
        height: 200px;
        width: 200px;
    }
`;

export default ImageSphere