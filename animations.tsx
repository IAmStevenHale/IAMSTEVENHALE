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

export const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0)
  }
`

export const hover = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100%{
    transform: translateY(0)
  }
`

export const shadowAnimation = keyframes`
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(3);
  }
  100% {
    transform: scaleX(1);
  }
`;

export const moveLeft = keyframes`
 from {
    transform: translateX(0);
  }
 to {
    transform: translateX(-200px);
  }
`;