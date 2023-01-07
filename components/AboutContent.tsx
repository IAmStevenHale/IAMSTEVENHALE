import Image from 'next/image';
import styled from 'styled-components';
import ContentProps from '../Interfaces';

//
const AboutContent = ({ currentIndex, thisIndex }: ContentProps) => {

    return (
        <Wrapper>
            <ShowCaseContainerLeft>
                <ImageWrapper>
                    <Image src='/docAssist.png' alt='A landscape ipad showcasing the Dicefall app.' width={1200} height={1430} style={{ height: 'auto', width: '100%' }} />
                </ImageWrapper>
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

const ImageWrapper = styled.div`
height: 50%;
`;

export default AboutContent;