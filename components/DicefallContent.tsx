import Image from 'next/image';
import styled, { css } from 'styled-components';
import { textEnterAnimation, textExitAnimation } from '../animations';
import ContentProps from '../Interfaces';

/**
 * This is a functional component that displays information and an image for a project called Dicefall.
 * It takes in two props: currentIndex and thisIndex, and displays different content based on whether 
 * currentIndex is equal to thisIndex. The component is made up of two styled divs: ShowCaseContainerLeft 
 * and ShowCaseContainerRight, which are rendered within a Wrapper div and a Gradient div. ShowCaseContainerLeft 
 * displays an image, and ShowCaseContainerRight displays text content. Both of these divs have a transition 
 * animation that is triggered based on the value of isCurrent.
 */

const DicefallContent: React.FC<ContentProps> = ({currentIndex, thisIndex}) => {

    const isCurrent = currentIndex === thisIndex;

    return (
        <Wrapper>
            <Gradient/>
                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <Image src='/DiceFall.png' alt='A landscape ipad showcasing the Dicefall app.' width={1585} height={2243} />
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <h2>Dicefall</h2>
                <br />
                    <p>DiceFall is the perfect tool for managing and running in-person Dungeons and Dragons campaigns. With a focus on collaboration and real-time interactivity, DiceFall makes it easy to plan epic tabletop adventures with your friends. Its intuitive interface allows players and Dungeon Masters to stay connected and engaged in their campaigns. Whether you&rsquo;re a seasoned DM or a newcomer to tabletop gaming, DiceFall has something for everyone. Start your next adventure today with DiceFall!</p>
                    <br/>
                    <p><strong>Currently in Development</strong></p>
                </ShowCaseContainerRight>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    //DEFAULT
    height: 100%;
    width: 100vw;
    display: flex;
    overflow: hidden;
    position: relative;

    //MOBILE
    @media (max-width: 600px) {
        flex-direction: column;
    }

`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 80% 100% at 0% 50%, #a184725c, var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
`;

const ShowCaseContainerLeft = styled.div<{ isCurrent: boolean }>`
    //DEFAULT
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    flex-direction: column;
    text-align: center;
    & :first-child {
        height: 60%;
        width: auto;
        max-height: 600px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
        transition: 1.2s ease-in-out;
        transform: ${({ isCurrent }) => isCurrent ? `translateX(0)` : `translateX(-50vw)`} ;
    }

    //TABLET

    //MOBILE
    @media (max-width: 600px) {
        width: 100%;
        height: 40%;
        padding: 0 50px;
        & :first-child {
            height: 100%;
            width: auto;
        }
    }
`;

const ShowCaseContainerRight = styled.div<{ isCurrent: boolean }>`
    //DEFAULT
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
    color: #b4bcd0;
    flex-direction: column;
    text-align: center;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    animation: ${({ isCurrent }) => isCurrent ? css`${textEnterAnimation} 1.2s ease-in-out` : css`${textExitAnimation} 1.2s ease-in-out`};
    & h2 {
        font-size: 30px;
    }

    //TABLET
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        padding-right: 80px;
    }

    //MOBILE
    @media (max-width: 600px) {
        width: 100%;
        height: 60%;
        padding: 0 30px;
        justify-content: flex-start;
        line-height: 25px;
        font-size: calc(14px + (24 - 14) * (100vmin - 280px) / (1200 - 280));
        & h2 {
            margin-bottom: 20px;
        }
    }
`;

export default DicefallContent;