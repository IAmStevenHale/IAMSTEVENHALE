import styled, { css } from 'styled-components';
import { MaxWidthHomeContainer } from './HomeContainer';
import VerticalTabs from './VerticalTabs';
import Anchor from './Anchor';

//
const Work: React.FC = () => {

    return (
        <>
            <Container>
                <Anchor id={'work'} text={"Work"} index={2} />
                <MaxWidthHomeContainer>
                    <VerticalTabs />
                </MaxWidthHomeContainer>
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

export default Work;