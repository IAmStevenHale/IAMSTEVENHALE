import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';
import { enterBottomLeft, exitBottomLeft, textEnterAnimation, textExitAnimation } from '../animations';
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
            <Gradient>
                <ShowCaseContainerLeft isCurrent={isCurrent}>
                    <Image src='/AstronyxLogo.png' alt='A landscape ipad showcasing the Dicefall app.' width={600} height={1430} style={{ height: '70%', width: 'auto' }} />
                </ShowCaseContainerLeft>
                <ShowCaseContainerRight isCurrent={isCurrent}>
                    <TextWrapper>
                        ASTRONYX
                    </TextWrapper>
                    <TextWrapper>
                        <p>Astronyx is a software development company that specializes in creating visually stunning websites and intuitive applications. Our team of experienced developers and designers work together to create innovative digital solutions that exceed our clients&rsquo; expectations. We pride ourselves on combining cosmic wonder with practical functionality, combining astral beauty and the durable nature of onyx to create products that are both aesthetically pleasing and sturdy. At Astronyx, we strive to bring the convergence of cosmic marvel and functional reliability to every project we work on. With a strong focus on customer satisfaction and delivering top-quality results, Astronyx is the perfect partner for your next web or app development project.</p>
                        <a target={'_blank'} rel="noreferrer" href='https://www.astronyx.com.au/'>https://www.astronyx.com.au/</a>
                    </TextWrapper>
                </ShowCaseContainerRight>
            </Gradient>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #000213;
    overflow: hidden;
`;

const Gradient = styled.div`
      background: radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),var(--transparent));
      display: flex;
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
    & :first-child {
        margin-bottom: 40px;
    }
`;

const ShowCaseContainerRight = styled.div<ShowCaseContainer>`
    width: 50%;
   display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 100px 50px 50px;
    color: rgb(180, 188, 208);
    flex-direction: column;
    text-align: center;
    gap: 20px;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    animation: ${({ isCurrent }) => isCurrent ? css`${textEnterAnimation} 1.2s ease-in-out` : css`${textExitAnimation} 1.2s ease-in-out`};
   
    & > :first-child{
        font-weight: 700;
        font-size: 50px;
    }
`;
const ShowCaseContainerLeft = styled.div<ShowCaseContainer>`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    animation: ${({ isCurrent }) => isCurrent ? css` ${enterBottomLeft} 1200ms ease-in-out;` : css`${exitBottomLeft} 1200ms ease-in-out;`};
    
    & :first-child {
        height: auto;
        width: 100%;
    }
`;




export default AstronyxContent;