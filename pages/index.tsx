import styled from 'styled-components';
import Home from '../components/Home';
import React from 'react';
import Portfolio from '../components/Portfolio';
import SideNav from '../components/SideNav';
import About from '../components/About';
import Work from '../components/Work';
import Connect from '../components/Connect';
import ScrollWrapper from '../components/ScrollWrapper';


const index: React.FC = () => {
        
    return (
        <Wrapper>
            <Home />
            <ScrollWrapper><About /></ScrollWrapper>
            <ScrollWrapper><Work /></ScrollWrapper>
            <ScrollWrapper><Portfolio /></ScrollWrapper>
            <ScrollWrapper><Connect /></ScrollWrapper>
            <SideNav />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    overflow: hidden;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export default index;
