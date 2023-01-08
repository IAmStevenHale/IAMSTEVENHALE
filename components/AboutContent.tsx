import Image from 'next/image';
import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import ContentProps from '../Interfaces';
import { bounce, hover, shadowAnimation } from '../animations';

//
const AboutContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {

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
                        <ImageWrapper isCurrent={currentImageIndex === 0} >
                            <Image src='/1d62d29067f8824bcc22c1dbaf922bfc.jpg' alt='Profile picture 0' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 1} >
                            <Image src='/4a8861c2be55787c4450d90a9a8baab1.jpg' alt='Profile picture 1' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 2} >
                            <Image src='/6f690e4c4f39dc1a96496bb62738159a.jpg' alt='Profile picture 2' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 3} >
                            <Image src='/8f571ef315c0346d749bcee6170c71f0.jpg' alt='Profile picture 3' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 4} >
                            <Image src='/22ada7249943f29418eed29f2e8f9fa4.jpg' alt='Profile picture 4' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 5} >
                            <Image src='/50ec4af07690f0f8729efc9e6118bcb7.jpg' alt='Profile picture 5' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 6} >
                            <Image src='/9606631f93e4a80bfb80c4f414016371.jpg' alt='Profile picture 6' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 7} >
                            <Image src='/934858926a3da6e5f4b05927579cc3d4.jpg' alt='Profile picture 7' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 8} >
                            <Image src='/a0274b258023688e60bdfd527020b993.jpg' alt='Profile picture 8' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 9} >
                            <Image src='/df65ad6e7e74f9ccd30d977cf1cf5f3f.jpg' alt='Profile picture 10' width={1024} height={1024} />
                        </ImageWrapper>
                        <ImageWrapper isCurrent={currentImageIndex === 10} >
                            <Image src='/e578e6d03c3b11e4026467865bf02f11.jpg' alt='Profile picture 11' width={1024} height={1024} />
                        </ImageWrapper>
                            <Sphere />
                    </ImagesWrapper>
                    <Shadow />
                </ImageContainer>
            </ShowCaseContainerLeft>
            <ShowCaseContainerRight>
                <h1>Steven Hale</h1>
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
    background: radial-gradient(ellipse 20% 130% at 23% -10%,#c6be7771,var(--transparent));
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
    padding: 50px 100px 50px 50px;
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
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
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
    background: radial-gradient(circle at 150px 100px, var(--transparent) 20%,  #000 75%),
    radial-gradient(circle at 30% 20%,  rgb(255, 255, 255, 0.6), rgba(255, 255, 255, 0) 40%);


`;

export default AboutContent;