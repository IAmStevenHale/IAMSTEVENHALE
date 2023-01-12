import styled from 'styled-components';

interface ContainerProps {
  bgColour: string;
  children: React.ReactElement;
  gradient?: React.ReactElement;
}

const Container: React.FC<ContainerProps> = ({bgColour, children, gradient} :any) => {
  return (
    <FullScreenContainer bgColour={bgColour}>
      {gradient}
        <MaxWidthContainer>
            {children}
        </MaxWidthContainer>
    </FullScreenContainer>
  )
}

const FullScreenContainer = styled.div<{ bgColour: string}>`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.bgColour};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow: hidden;
    @media (max-width: 700px) {
    }
`;

const MaxWidthContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1400px;
    position: relative;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Container;
