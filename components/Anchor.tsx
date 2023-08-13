import styled from "styled-components";


interface AnchorProps {
    id: string;
    text: string;
    index: number;
}

const Anchor = ({id, text, index}: AnchorProps) => {
  return (
    <AnchorWrapper id={id}>
        <Container>
              <IndexWrapper>
                  # {index}
              </IndexWrapper>
              <TextWrapper>
                  {text}
              </TextWrapper>
        </Container>
        <hr/>
    </AnchorWrapper>
  )
}

const AnchorWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    hr {
        margin-left: 20px;
        width: 400px;
        height: 3px;
        border-color: none;
        border-radius: 5px;
        border-width: 0;
        background-color: #cfd5e9;
    }
`;

const Container = styled.div`
    min-width: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #cfd5e9;
    padding: 50px 0;
`;

const IndexWrapper = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    margin-right: 10px;
    font-family: 'Rock Salt', cursive;
    @media (max-width: 700px) {
        font-size: 1rem;
    }
`;

const TextWrapper = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Rock Salt', cursive;
    @media (max-width: 700px) {
        font-size: 1rem;
    }
`;

export default Anchor