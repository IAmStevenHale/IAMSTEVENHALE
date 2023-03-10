import React, { useState } from 'react';
import styled from 'styled-components';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const JumpToNav: React.FC<{handleJumpTo: any}> = ({handleJumpTo}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleMouseEnter = () => setIsNavOpen(true);
    const handleMouseLeave = () => setIsNavOpen(false);

    return (
        <Wrapper>
            <JumpToWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <DoubleArrowIcon />
                <NavList isOpen={isNavOpen}>
                    <NavItem onClick={() => handleJumpTo(0)}>Top</NavItem>
                    <NavItem onClick={() => handleJumpTo(1)}>Projects</NavItem>
                    <NavItem onClick={() => handleJumpTo(5)}>About</NavItem>
                </NavList>
            </JumpToWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    z-index: 99;
`;

const JumpToWrapper = styled.div`
    display: flex; 
    align-items: center; 
    position: relative;
    padding: 15px;
    &:hover > svg {
        color: #fd9814;
    } 
    & > svg {
        color: white;
        height: 30px;
        width: auto;
    }
` ;

const NavList = styled.ul<{ isOpen: boolean }>`
    display: flex; 
    flex-direction: row; 
    list-style: none; 
    position: absolute; 
    top: 30px; 
    left: 45px; 
    transform: ${ ({ isOpen }) => isOpen ? 'translateY(-50%) translateX(0)' : 'translateY(-50%) translateX(calc(-100% + -45px))' }; 
    transition: transform 200ms ease-in-out;
    height: 30px;
    display: flex;
    align-items: center;
`;

const NavItem = styled.li`
    margin-left: 10px; 
    font-size: 12px; 
    color: white; 
    cursor: pointer; 
    font-weight: 600;
    &:hover {
        color: #fd9814;
    }
`;

export default JumpToNav;