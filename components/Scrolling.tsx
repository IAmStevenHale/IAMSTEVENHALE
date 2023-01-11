
import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode[];
    currentIndex: number;
    setCurrentIndex: any;
}

const Scrolling = ({ children }: Props) => {

    return (
        <ScrollableContainer>
        {children.map((child, i) => (
            <ChildWrapper key={i}>
                {child}
            </ChildWrapper>
        ))}
      </ScrollableContainer>
    );
};

const ScrollableContainer = styled.div`
  height: 600vh;
  position: relative;
`;

const ChildWrapper = styled.div`

`;

export default Scrolling;
