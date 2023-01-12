import { keyframes } from "styled-components";



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
    transform: translateY(50px);
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
        transform: translateX(-1950px);
    }
`;