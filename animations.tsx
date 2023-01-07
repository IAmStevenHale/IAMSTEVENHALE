import { keyframes } from "styled-components";

export const textEnterAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(25vh);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


export const textExitAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(25vh);
  }
`;

export const enterBottomLeft = keyframes`
  from {
    transform: translate(-100%, 100%);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

export const exitBottomLeft = keyframes`
  from {
    transform: translate(0, 0);
    opacity: 1;
  }
  to {
    transform: translate(-100%, 100%);
    opacity: 0;
  }
`;

export const enterBottomRight = keyframes`
  from {
    transform: translate(100%, 100%);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

export const exitBottomRight = keyframes`
  from {
    transform: translate(0, 0);
    opacity: 1;
  }
  to {
    transform: translate(100%, 100%);
    opacity: 0;
  }
`;