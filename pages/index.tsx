import styled from 'styled-components';
import Home from '../components/Home';
import React from 'react';
import Portfolio from '../components/Portfolio';
import SideNav from '../components/SideNav';
import About from '../components/About';
import Work from '../components/Work';
import Connect from '../components/Connect';


const index: React.FC = () => {
        
    return (
        <Wrapper>
            <Home />
            <About />
            <Work />
            <Portfolio />
            <Connect />
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
