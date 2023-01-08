import Image from 'next/image';
import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import ContentProps from '../Interfaces';
import { bounce, hover, shadowAnimation } from '../animations';
import Carousel from './Carousel';

//
const AboutContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {

    const items = [
        "api.png",
        "git.png",
        "github.png",
        "html_logo.png",
        "Javascript_badge.png",
        "Next_js.png",
        "Nodejs.png",
        "React-icon.png",
        "sass.png",
        "sql.png",
        "styled-components.png",
        "Typescript_logo_2020.png",
        "Vercel.png",
        "api.png",
        "git.png",
        "github.png",
        "html_logo.png",
    ];

    const profileUrls = [
        "1d62d29067f8824bcc22c1dbaf922bfc.jpg",
        "4a8861c2be55787c4450d90a9a8baab1.jpg",
        "6f690e4c4f39dc1a96496bb62738159a.jpg",
        "8f571ef315c0346d749bcee6170c71f0.jpg",
        "22ada7249943f29418eed29f2e8f9fa4.jpg",
        "50ec4af07690f0f8729efc9e6118bcb7.jpg",
        "9606631f93e4a80bfb80c4f414016371.jpg",
        "934858926a3da6e5f4b05927579cc3d4.jpg",
        "a0274b258023688e60bdfd527020b993.jpg",
        "df65ad6e7e74f9ccd30d977cf1cf5f3f.jpg",
        "e578e6d03c3b11e4026467865bf02f11.jpg",
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImageIndex  >= 10) {
                setCurrentImageIndex(0);
            } else {
                setCurrentImageIndex(currentImageIndex + 1);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <Wrapper>
            <Gradient/>
            <ShowCaseContainerLeft>
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
            </ShowCaseContainerLeft>
            <ShowCaseContainerRight>
                {/* <h1>I am Steven Hale.</h1> */}
                <p>
                    Hi, <a rel='noreferrer' target={'_blank'} href='https://www.youtube.com/watch?v=ouA-U4x17KY'>Stevie here.</a>
                </p>
                <br/>
                <p>
                    I started out as a Software Developer in 2019, chasing a new and challenging career after moving on from being a S&C Coach.
                    I have a strong understanding of front-end and back-end development, and I am comfortable working on both sides of the stack. 
                    My experience with React, Typescript, and Next.js has given me the ability to build high-performance, scalable web applications 
                    that provide a seamless user experience.
                </p>
                <p>Kind regards,</p>
                <br/>
                <p style={{ fontFamily: "'Gloria Hallelujah', cursive"}}>Steven Hale</p>
                
                <Carousel items={items}/>
            </ShowCaseContainerRight>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 20% 130% at 25% -10%,#c6be7771,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
`;

const ShowCaseContainerLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(180, 188, 208);
    flex-direction: column;
    text-align: center;
    gap: 20px;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
`;
const ShowCaseContainerRight = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    flex-direction: column;
    text-align: center;
    color: whitesmoke;
    position: relative;
    height: 100%;
    line-height: 24px;
    text-align: left;
    padding: 50px 100px 50px 50px;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    & > p {
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    height: 300px;
    width: 300px;
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
    border-radius: 50%;
    animation: ${css`${hover} 5s ease-in-out infinite`};
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
`;

const Shadow = styled.div`
    position: relative;
    top: 20px;
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
`;

export default AboutContent;