import styled from 'styled-components';

interface ContainerProps {
  bgColour: string;
  children: React.ReactElement;
  gradient: React.ReactElement;
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
`;

const MaxWidthContainer = styled.div`
    max-width: 1400px;
    position: relative;
`;

export default Container;
