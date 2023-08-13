import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonSVG = styled.svg`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: scaleX(-1);
`;

const Line = styled.line<{ isOpen: boolean }>`
  stroke: #192a6b;
  stroke-dasharray: 100%;
  stroke-dashoffset: 0%;
  transition: transform 0.3s, stroke-dashoffset .4s;
  transform-origin: center;
  stroke-width: 3px;

  /* Default styles */
  &.top {
    transform: translateY(-35%);
    @media (max-width: 700px) {
        transform: translateY(-20%);
    }
  }

  &.middle {
    transform: scaleX(1);
    transition: opacity .3s, transform .3s;
  }

  &.bottom {
    transform: translateY(33%);
    stroke-dashoffset: 9px;
    @media (max-width: 700px) {
        transform: translateY(20%);
    }

    /* Hover effect */
    ${ButtonSVG}:hover & {
      stroke-dashoffset: 0%;
    }
  }

  /* Styles when isOpen is true */
  ${props => props.isOpen ? `
    &.top {
      transform: rotate(45deg);
      stroke-linecap: round;
    }

    &.middle {
      transform: scaleX(0.1);
      opacity: 0;
    }

    &.bottom {
      transform: rotate(-45deg);
      stroke-linecap: round;
      stroke-dashoffset: 0%;
    }
  `:
  `
    &.bottom {
    stroke-dashoffset: 9px;
  }
  `
  }
`;

const MenuButton = ( {isOpen}: {isOpen: boolean} ) => {
    return (
        <ButtonSVG>
            <Line x1="0" y1="50%" x2="100%" y2="50%" className="top" isOpen={isOpen} />
            <Line x1="0" y1="50%" x2="100%" y2="50%" className="middle" isOpen={isOpen} />
            <Line x1="0" y1="50%" x2="100%" y2="50%" className="bottom" isOpen={isOpen} />
        </ButtonSVG>
    );
}

export default MenuButton;
