import Image from 'next/image';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ContentProps from '../Interfaces';

//
const AboutContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImageIndex  >= 5- 1) {
                setCurrentImageIndex(0);
            } else {
                setCurrentImageIndex(currentImageIndex + 1);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <Wrapper>
            <ShowCaseContainerLeft>
                <ImagesWrapper>
                    <ImageWrapper isCurrent={currentImageIndex === 0} >
                        <Image src='/22ada7249943f29418eed29f2e8f9fa4.jpg' alt='Profile picture 1' width={1200} height={1430} />
                    </ImageWrapper>
                    <ImageWrapper isCurrent={currentImageIndex === 1} >
                        <Image src='/934858926a3da6e5f4b05927579cc3d4.jpg' alt='Profile picture 1' width={1200} height={1430} />
                    </ImageWrapper>
                    <ImageWrapper isCurrent={currentImageIndex === 2} >
                        <Image src='/a0274b258023688e60bdfd527020b993.jpg' alt='Profile picture 1' width={1200} height={1430} />
                    </ImageWrapper>
                    <ImageWrapper isCurrent={currentImageIndex === 3} >
                        <Image src='/e578e6d03c3b11e4026467865bf02f11.jpg' alt='Profile picture 1' width={1200} height={1430} />
                    </ImageWrapper>
                    <ImageWrapper isCurrent={currentImageIndex === 4} >
                        <Image src='/ee3293cf04b3369a76146b546122332f.jpg' alt='Profile picture 1' width={1200} height={1430} />
                    </ImageWrapper>
                </ImagesWrapper>
                <h1>Steven Hale</h1>

            </ShowCaseContainerLeft>
            <ShowCaseContainerRight>
                
            </ShowCaseContainerRight>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
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
    gap: 20px;
    
    & :first-child {
        height: auto;
        width: 100%;
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
    border-radius: 50%;
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

export default AboutContent;