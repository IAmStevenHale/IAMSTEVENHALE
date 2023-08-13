import styled, { css } from 'styled-components';
import ImageSphere from './ImageSphere';
import { MaxWidthHomeContainer } from './HomeContainer';
import VerticalTabs from './VerticalTabs';
import Anchor from './Anchor';

//
const About: React.FC = () => {

    const text = "For half a decade I've been working on both the front and back ends across a variety of industries, from legal marketing to digital agencies. I studied at the University of South Australia and the University of Central Queensland, where I received a solid foundation in Computer Science, Data Analytics, and Business Operations.";
    const text2 = "The main technologies I've recently been working with are JavaScript, React, TypeScript, and Node, amongst others. Some of my notable work includes collaborating on the 'Website Overhaul Project' for Shine Lawyers, where we created a component library and a custom Website Builder, as well as creating CRM systems with complex finance integrations at Dynamic Digital Solutions.";
    const text3 = "I'm based on the Sunshine Coast, but I've worked on projects from all over Australia. Interested in teaming up? Let's chat about how we can collaborate!";

    return (
        <>
            <Container>
                <Anchor id={'about'} text={"About Me"} index={1} />
                <StyledMaxWidthContainer>
                    <InnerWrapper>
                        <ShowCaseContainerLeft>
                            <ImageSphere />
                        </ShowCaseContainerLeft>
                        <ShowCaseContainerRight>
                            <p>Hi, <a rel='noreferrer' target={'_blank'} href='https://www.youtube.com/watch?v=ouA-U4x17KY'>Stevie here.</a> I&apos;m Fullstack Developer.</p>
                            <br />
                            <p>{text}</p>
                            <br />
                            <p>{text2}</p>
                            <br />
                            <p>{text3}</p>
                            <br />
                            <p style={{ fontFamily: "'Rock Salt', cursive" }}>Steven Hale</p>
                        </ShowCaseContainerRight>
                    </InnerWrapper>
                </StyledMaxWidthContainer>
            </Container>
        </>
    );
};

const Container = styled.div`
    height: fit-content;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #000425;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    overflow: hidden;
    @media (max-width: 700px) {
        padding: 20px;
    }
    `;

const StyledMaxWidthContainer = styled(MaxWidthHomeContainer)`
    flex-direction: column;
`;

const InnerWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    @media (max-width: 850px) {
        flex-direction: column;
        height: fit-content;
    }
`;

const ShowCaseContainerLeft = styled.div`
    position: relative;
    width: fit-content;
    height: 100%;
    /* min-height: 500px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: rgb(180, 188, 208);
    flex-direction: column;
    text-align: center;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    @media (max-width: 850px) {
        width: 100%;
        height: fit-content;
        margin-bottom: 80px;
        min-height: unset;
    }
`;

const ShowCaseContainerRight = styled.div`
    width: fit-content;
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #8892b0;
    position: relative;
    height: 100%;
    line-height: 24px;
    text-align: left;
    font-family: "Linear","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    & > p {
        width: 100%;
        font-size: 18px;
    }
    @media (max-width: 850px) {
        width: 100%;
        height: fit-content;
        padding: 0;
        margin-left: unset;
    }
`;

export default About;