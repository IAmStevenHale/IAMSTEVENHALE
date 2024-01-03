import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MaxWidthHomeContainer } from './HomeContainer';
import Card from './Card';
import Anchor from './Anchor';


const content = [
    {
        title: 'Shine Lawyers',
        description: `Shine Lawyers, Australia's top law firm, undertook a comprehensive 'Website Overhaul'. We developed a custom website builder using React, TypeScript, and Next.js, paired with an internal component library. We incorporated the Contentful headless CMS, offering our non-technical team unparalleled content management capabilities, enhancing our digital footprint.`,
        url: 'https://www.shine.com.au/',
        includepadding: false,
        quote: 'Australia’s leading law firm’s Website Overhaul Project.',
        logo: {
            src: '/shine-logo.png',
            height: 900,
            width: 1440,
            alt: 'Astronyx Logo'
        }
    },
    {
        title: 'Cosmos Digital',
        description: `Cosmos Digital is a rapidly emerging force in the software industry, specializing in crafting bespoke, custom-made solutions that empower businesses and redefine user experiences. Our team of skilled and dedicated professionals stay at the forefront of the digital landscape by embracing cutting-edge technologies and leveraging collective expertise.`,
        url: 'https://cosmos-digital.vercel.app/',
        includepadding: true,
        quote: 'Simple digital solutions for complex, modern challenges.',
        logo: {
            src: '/cosmos-digital-logo.png',
            height: 1430,
            width: 600,
            alt: 'Astronyx Logo'
        }
    },
    {
        title: 'Astronyx',
        description: 'Astronyx is an innovative Space Photography, Marketing, and Space Imaging Hardware business. They marry the awe of the astral space with the resilience of onyx, implementing robust space imaging equipment, capturing celestial visuals, and creating compelling narratives. The dedicated team blends technical expertise with creative brilliance to exceed client expectations, delivering functional and awe - inspiring space solutions that fuel exploration and inspire fascination.',
        url: 'https://astronyx.vercel.app/',
        includepadding: true,
        quote: 'Space photography meets compelling storytelling.',
        logo: {
            src: '/Astronyx-logo.png',
            height: 1430,
            width: 600,
            alt: 'Astronyx Logo'
        }
    },
    {
        title: 'DocAssist',
        description: 'DocAssist is a web-based tool that helps Allied Health Professionals find MBS rebates for their patients by using a filtering algorithm to identify key terms in patient notes and generate a list of relevant MBS items. It is built with React, TypeScript, and styled-components for efficient performance and a visually appealing user interface, streamlining the process of finding MBS rebates and saving time for professionals.',
        url: 'https://docassist.vercel.app/',
        includepadding: true,
        quote: 'Simplifying MBS rebate searches for health professionals with a click.',
        logo: {
            src: '/docAssist.png',
            height: 649,
            width: 543,
            alt: 'DocAssist Logo'
        }
    },
    {
        title: 'GamerHC',
        description: 'GamerHC is an ecommerce platform for the gaming community. Our goal is to help customers improve their health and wellness by providing gaming-themed products and resources such as workout guides and nutrition plans. The platform is built with React, TypeScript and styled components to ensure a smooth and visually appealing experience. It is more than an online store, it is a community for gamers who want to take control of their health and wellness.',
        url: 'https://gamerhc.vercel.app/',
        includepadding: true,
        quote: 'Elevating gamer health and wellness beyond the screen.',
        logo: {
            src: '/GamerHCLogo.png',
            height: 772,
            width: 908,
            alt: 'GamerHC Logo'
        }
    },
    {
        title: 'FormFlow',
        description: `Form Flow is a powerful web application tailored for professionals who want to spend less time on administration and more on their area of expertise. We provide a dynamic, intelligent form builder that can handle infinite question flows, creating a unique, automated journey for every client. It's not just a form, it's a smart conversation that sorts, filters, and directs clients, saving your time for what truly matters. With features like seamless appointment booking, secure payment handling, and essential analytics, Form Flow is revolutionizing client engagement.`,
        url: null,
        includepadding: true,
        quote: 'Forms utilising decision tree logic to allow endless possibilities.',
        logo: {
            src: '/formflow-logo.png',
            height: 2243,
            width: 1585,
            alt: 'DiceFall Logo'
        }
    },
    {
        title: 'DiceFall',
        description: 'DiceFall is the perfect tool for managing and running in-person Dungeons and Dragons campaigns. With a focus on collaboration and real-time interactivity, DiceFall makes it easy to plan epic tabletop adventures with your friends. Its intuitive interface allows players and Dungeon Masters to stay connected and engaged in their campaigns. Whether you&rsquo;re a seasoned DM or a newcomer to tabletop gaming, DiceFall has something for everyone. Start your next adventure today with DiceFall!',
        url: null,
        includepadding: true,
        quote: 'Elevating the game and equipping more tools for tabletop RPGs.',
        logo: {
            src: '/DiceFall.png',
            height: 2243,
            width: 1585,
            alt: 'DiceFall Logo'
        }
    },
    {
        title: 'Epic Defenders',
        description: 'An early project of mine, Epic Defenders is a clone of the popular game Plants vs Zombies. It is built with JavaScript and HTML5 Canvas. The game is a tower defence game where the player must defend their base from waves of enemies by strategically placing defenders on the map.',
        url: `https://epic-defenders.vercel.app/`,
        includepadding: false,
        quote: 'Clone of Plants vs Zombies using JavaScript Canvas',
        logo: {
            src: '/epic-defenders-logo.png',
            height: 500,
            width: 500,
            alt: 'Epic Defenders Logo'
        }
    },
    {
        title: 'Drunken Heroes',
        description: 'My very first project, Drunken Heroes is a digital card drinking game. It is built with JavaScript, HTML5, and CSS. The game is rudimentary but functional, and it is a great example to show progress from where I started to where I am now.',
        url: `https://drunkenheroes.vercel.app/`,
        includepadding: false,
        quote: 'Digital Card Drinking Game - "What happens when the Heroes hit the town?"',
        logo: {
            src: '/drunken-heroes-logo.png',
            height: 1000,
            width: 1000,
            alt: 'Drunken Heroes Logo'
        }
    },
]

const Portfolio: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 5000);
    }, []);

    return (
        <Container>
            <Anchor id={'portfolio'} text={"Portfolio"} index={3}/>
            <MaxWidthHomeContainer>
                <Wrapper isLoaded={isLoaded}>
                    <CardWrapper>
                        {content.map((card, index) => {
                            return (
                                <Card key={index} title={card.title} description={card.description} logo={card.logo} url={card.url} quote={card.quote} includepadding={card.includepadding.toString()}/>
                            )
                        })}
                    </CardWrapper>
                </Wrapper >
            </MaxWidthHomeContainer>
        </Container>
    );
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000425;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: 700px) {
        padding: 20px;
    }
`;

const Wrapper = styled.div<{ isLoaded: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: fit-content;
    width: 100%;
    transition: all 1s ease-in-out;
    transition-delay: 0.48s;
    opacity: ${props => props.isLoaded ? 1 : 0};
`;

const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    grid-gap: 20px;
    width: 100%;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
    @media (max-width: 800px) {
        grid-template-columns: repeat(1,minmax(0,1fr));
    }
`;

export default Portfolio;