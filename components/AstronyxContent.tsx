import Image from 'next/image';
import styled from 'styled-components';
import ContentProps, { ShowCaseContainer } from '../Interfaces';
import Container from './Container';
import Link from 'next/link';

const AstronyxContent = ({ currentIndex, thisIndex }: ContentProps) => {
    const isCurrent = currentIndex === thisIndex;
    const text = "Astronyx is an innovative Space Photography, Marketing, and Space Imaging Hardware business. They marry the awe of the astral space with the resilience of onyx, implementing robust space imaging equipment, capturing celestial visuals, and creating compelling narratives. The dedicated team blends technical expertise with creative brilliance to exceed client expectations, delivering functional and awe - inspiring space solutions that fuel exploration and inspire fascination."

    return (
        <Container bgColour={"#000213"} gradient={<Gradient />}>
            <Wrapper>
                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <Image src='/AstronyxLogo.png' alt='A landscape ipad showcasing the Dicefall app.' width={600} height={1430} />
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <TextWrapper>
                        <h2>ASTRONYX</h2>
                    </TextWrapper>
                    <TextWrapper>
                        <p>{text}</p>
                        <Link rel="noreferrer" href='https://www.astronyx.com.au/'>
                            <Button>
                                <p>Go to website</p>
                            </Button>
                        </Link>
                    </TextWrapper>
                </ShowCaseContainerRight>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    padding-right: 20px;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 80% 50% at 50% -20%,#7877c667,var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
`;

const TextWrapper = styled.div`
    text-align: center;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: transparent;
    font-weight: 600;
    background: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));
    -webkit-background-clip: text;
    background-clip: text;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    & :last-child{
        padding-top: 5px;
    }
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    width: 60%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b4bcd0;
    flex-direction: column;
    text-align: center; 
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform: translateY(25vh);`};
    & h2 {
        font-weight: 700;
        font-size: 50px;
    }

    @media (max-width: 700px) {
        width: 100%;
        height: 60%;
        justify-content: center;
        font-size: calc(16px + (24 - 16) * (100vmin - 280px) / (1200 - 280));
        & h2 {
            font-size: 30px;
        }
    }
`;

const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: auto;
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translate(0, 0);` : `opacity: 0; transform: translate(-25vw, 25vh);`};
    & :first-child {
        height: auto;
        width: 100%;
        max-width: 400px;
        min-width: 300px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
        padding: 20px;
    }
    @media (max-width: 700px) {
        width: 100%;
        height: 40%;
        & :first-child {
            height: 100%;
            width: auto;
            max-width: unset;
            min-width: unset;
            padding: 20px;
        }
    }
`;

const Button = styled.button`
    background: #000213;
    border: 2px solid #b4bcd0;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    color: #b4bcd0;
    font-weight: 700;
    transition: 0.12s ease-in-out;
    :hover {
        background: #b4bcd0;
        color: #000213;
    }
`

export default AstronyxContent;