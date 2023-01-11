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
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <Image src='/DiceFall.png' alt='A landscape ipad showcasing the Dicefall app.' width={1585} height={2243} />
                </ShowCaseContainerRight>
                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <h2>Dicefall</h2>
                    <br />
                    <p>DiceFall is the perfect tool for managing and running in-person Dungeons and Dragons campaigns. With a focus on collaboration and real-time interactivity, DiceFall makes it easy to plan epic tabletop adventures with your friends. Its intuitive interface allows players and Dungeon Masters to stay connected and engaged in their campaigns. Whether you&rsquo;re a seasoned DM or a newcomer to tabletop gaming, DiceFall has something for everyone. Start your next adventure today with DiceFall!</p>
                    <br />
                    <p><strong>Currently in Development</strong></p>
                </ShowCaseContainerLeft>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 80% 100% at 0% 50%, #a184725c, var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
    @media (max-width: 600px) {
        /* background: radial-gradient(ellipse 60% 30% at 50% 20%,#c6be774c,var(--transparent)); */
    }
`;

const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    color: #b4bcd0;
    flex-direction: column;
    text-align: center; 
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform: translateY(25vh);`};
    & > :first-child {
        font-weight: 700;
        font-size: 50px;
    }
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        padding-right: 80px;
    }
    @media (max-width: 600px) {
        width: 100%;
        height: 60%;
        padding: 0 30px;
        justify-content: flex-start;
        font-size: calc(14px + (24 - 14) * (100vmin - 280px) / (1200 - 280));
    }
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    flex-direction: column;
    text-align: center;
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translate(0, 0);` : `opacity: 0; transform: translate(0, -25vh);`};    
    & :first-child {
        height: 60%;
        width: auto;
        max-height: 600px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
    }
    @media (max-width: 600px) {
        width: 100%;
        height: 40%;
        & :first-child {
            height: 100%;
            width: 100%;
        }
    }
`;

export default DicefallContent;