import Image from 'next/image';
import styled from 'styled-components';
import ContentProps, { ShowCaseContainer } from '../Interfaces';
import Container from './Container';

/**
 * This is a functional component that displays information and an image for a project called Dicefall.
 * It takes in two props: currentIndex and thisIndex, and displays different content based on whether 
 * currentIndex is equal to thisIndex. The component is made up of two styled divs: ShowCaseContainerLeft 
 * and ShowCaseContainerRight, which are rendered within a Wrapper div and a Gradient div. ShowCaseContainerLeft 
 * displays an image, and ShowCaseContainerRight displays text content. Both of these divs have a transition 
 * animation that is triggered based on the value of isCurrent.
 */

const DicefallContent: React.FC<ContentProps> = ({ currentIndex, thisIndex }) => {

    const isCurrent = currentIndex === thisIndex;

    return (
        <Container bgColour='#130000' gradient={<Gradient />}>
            <Wrapper>

                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <Image src='/DiceFall.png' alt='A landscape ipad showcasing the Dicefall app.' width={1585} height={2243} />
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <h2>Dicefall</h2>
                    <br />
                    <p>DiceFall is the perfect tool for managing and running in-person Dungeons and Dragons campaigns. With a focus on collaboration and real-time interactivity, DiceFall makes it easy to plan epic tabletop adventures with your friends. Its intuitive interface allows players and Dungeon Masters to stay connected and engaged in their campaigns. Whether you&rsquo;re a seasoned DM or a newcomer to tabletop gaming, DiceFall has something for everyone. Start your next adventure today with DiceFall!</p>
                    <br />
                    <p><strong>Currently in Development</strong></p>
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
    background: radial-gradient(ellipse 80% 100% at 0% 50%, #a184725c, var(--transparent));
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    @media (max-width: 700px){
        background: radial-gradient(ellipse 120% 100% at 0% 0%, #a18472a4, var(--transparent));
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
    transition: 800ms ease-in-out;
    margin: auto 0;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translate(0, 0);` : `opacity: 0; transform: translate(0, -25vh);`};
    & :first-child {
        height: auto;
        width: 100%;
        max-width: 500px;
        min-width: 300px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
    }
    @media (max-width: 700px) {
        width: 100%;
        height: 40%;
        & :first-child {
            height: 100%;
            width: auto;
        }
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
    padding-right: 20px;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform: translateY(25vh);`};
    & > :first-child {
        font-weight: 700;
        font-size: 50px;
    }

    @media (max-width: 700px) {
        width: 100%;
        height: 60%;
        justify-content: flex-start;
        font-size: calc(16px + (24 - 16) * (100vmin - 280px) / (1200 - 280));
    }
`;

export default DicefallContent;