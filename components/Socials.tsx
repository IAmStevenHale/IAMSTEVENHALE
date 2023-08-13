import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const socialsIcons = [
    {
        href: "https://github.com/IAmStevenHale",
        icon: <GitHubIcon />
    },
    {
        href: "https://www.linkedin.com/in/steven-hale/",
        icon: <LinkedInIcon />
    },
    {
        href: "mailto:iamstevenhale@gmail.com",
        icon: <MailIcon />
    }
];

interface SocialsProps {
    isLoaded: boolean;
}

const Socials = ({isLoaded}: SocialsProps) => {
  return (
      <SocialsContainer isLoaded={isLoaded}>
          {socialsIcons.map((social, index) => {
              return (
                  <SocialIcon key={index} href={social.href} target='_blank'>
                      {social.icon}
                  </SocialIcon>
              )
          })}
      </SocialsContainer>
  )
}

const SocialsContainer = styled.div<{ isLoaded: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-top: 20px;
    transition: all 1s ease-in-out;
    opacity: ${props => props.isLoaded ? 1 : 0};
`;

const SocialIcon = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #8892b0;
    font-size: 30px;
    font-weight: 400;
    margin-right: 20px;
    transition: all 0.24s ease-in-out;
    * {
        font-size: 30px;
    }
    &:hover {
        color: #cfd5e9;
    }
`;

export default Socials