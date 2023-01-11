import Image from 'next/image';
import styled from 'styled-components';
import ContentProps, { ShowCaseContainer } from '../Interfaces';

/**
 * This is a component that displays content for a company called Astronyx. It includes a logo, text describing the company's focus 
 * and a link to the company's website. The component has an animation that plays when the component is set to be the current one 
 * being displayed. It is made up of two subcomponents, ShowCaseContainerLeft and ShowCaseContainerRight, which are responsible for 
 * displaying the logo and text respectively. The component is responsive and adjusts its layout depending on the size of the screen 
 * it is being displayed on.
 */
const AstronyxContent = ({ currentIndex, thisIndex }: ContentProps) => {

    const isCurrent = currentIndex === thisIndex;

    return (
        <Wrapper>
            <Gradient/>
                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <Image src='/AstronyxLogo.png' alt='A landscape ipad showcasing the Dicefall app.' width={600} height={1430} />
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <TextWrapper>
                        ASTRONYX
                    </TextWrapper>
                    <br/>
                    <TextWrapper>
                        <p>Astronyx is a software development company that specializes in creating visually stunning websites and intuitive applications. Our team of experienced developers and designers work together to create innovative digital solutions that exceed our clients&rsquo; expectations. We pride ourselves on combining cosmic wonder with practical functionality, combining astral beauty and the durable nature of onyx to create products that are both aesthetically pleasing and sturdy. At Astronyx, we strive to bring the convergence of cosmic marvel and functional reliability to every project we work on. With a strong focus on customer satisfaction and delivering top-quality results, Astronyx is the perfect partner for your next web or app development project.</p>
                        <br/>
                    <p><a target={'_blank'} rel="noreferrer" href='https://www.astronyx.com.au/'>https://www.astronyx.com.au/</a></p>
                    </TextWrapper>
                </ShowCaseContainerRight>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #000213;
    overflow: hidden;
    position: relative;
    //MOBILE
    @media (max-width: 600px) {
        flex-direction: column;
    }

`;

const Gradient = styled.div`
    background: radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),var(--transparent));
    position: absolute;
    height: 100%;
    width: 100%;
`;

const TextWrapper = styled.div`
    text-align: center;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    color: transparent;
    padding-bottom: 0.13em;
    font-weight: 600;
    background: linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38));
    -webkit-background-clip: text;
    background-clip: text;
    gap: 50px;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
    color: #b4bcd0;
    flex-direction: column;
    text-align: center;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translateY(0);` : `opacity: 0; transform: translateY(25vh);`};
    & > :first-child{
        font-weight: 700;
        font-size: 50px;
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
        font-size: calc(14px + (24 - 14) * (100vmin - 280px) / (1200 - 280));
    }
`;
const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    flex-direction: column;
    transition: 800ms ease-in-out;
    ${({ isCurrent }) => isCurrent ? `opacity: 1; transform: translate(0, 0);` : `opacity: 0; transform: translate(-25vw, 25vh);`};
    
    & :first-child {
        height: 60%;
        width: auto;
        max-height: 600px;
        filter: drop-shadow(10px 10px 15px #000000b2);
        -webkit-filter: drop-shadow(10px 10px 15px #000000b2);
    }
    //MOBILE
    @media (max-width: 600px) {
        width: 100%;
        height: 40%;
        padding: 50px;
        & :first-child {
            height: 100%;
            width: auto;
        }
    }
`;




export default AstronyxContent;