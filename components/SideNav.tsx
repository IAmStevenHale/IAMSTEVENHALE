import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";

const links = [
    {
        name: 'Home',
        href: '#'
    },
    {
        name: 'About',
        href: '#about'
    },
    {
        name: 'Work',
        href: '#work'
    },
    {
        name: 'Portfolio',
        href: '#portfolio'
    },
    {
        name: 'Connect',
        href: '#connect'
    }
]

const SideNav = () => {
    const [initialLoad, setInitialLoad] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [linksShown, setLinksShown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > 10) {
                setScrolled(true);
                setLinksShown(false);
            } else if (currentScrollPosition < 10) {
                setScrolled(false);
                setLinksShown(true);
                setIsMenuOpen(false);
            }

            setLastScrollPosition(currentScrollPosition);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollPosition]);

    useEffect(() => {
        setTimeout(() => {
            setInitialLoad(false);
        }, 4500);
    }, [lastScrollPosition]);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setLinksShown(!linksShown);
    }

    return (
        <>
        <Overlay isMenuOpen={isMenuOpen} scrolled={scrolled} onClick={() => handleClick()}/>
            <Nav>
                {links.map((link, index) => {
                    return (
                        <NavItem
                            key={index}
                            href={link.href}
                            scrolled={scrolled}
                            isMenuOpen={isMenuOpen}
                            className={!linksShown && !initialLoad ? "shown" : ""}
                            onClick={() => handleClick()}
                            style={{
                                animationDelay: `${initialLoad ? index * 0.1 + 3.5 : index * 0.1}s`
                            }}>
                            {link.name}
                        </NavItem>
                    );
                })}
            </Nav>
            <MenuIcon scrolled={scrolled} onClick={() => handleClick()}>
                <MenuButton isOpen={isMenuOpen} />
            </MenuIcon>
        </>
    );
};

const Overlay = styled.div<{ isMenuOpen: boolean; scrolled: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 1, 15, 0.8);
    z-index: 1000;
    opacity: ${props => props.isMenuOpen && props.scrolled ? '1' : '0'};
    transition: all 0.5s ease-in-out;
    transition-delay: ${props => props.isMenuOpen && props.scrolled ? '0' : '0.5s'};
    cursor: pointer;
    backdrop-filter: ${props => props.isMenuOpen && props.scrolled ? 'blur(5px)' : 'none'};
    display: ${props => props.isMenuOpen && props.scrolled ? 'block' : 'none'};
`;

const Nav = styled.nav`
    position: fixed;
    top: 70px;
    left: calc(100vw - 70px);
    display: flex;
    flex-direction: column;
    color: #cfd5e9;
    width: fit-content;
    font-weight: 600;
    font-size: 18px;
    transform: translate(-100%, 0);
    text-align: right;
    z-index: 1000;
    gap:10px;
    @media (max-width: 700px) {
        top: 40px;
        left: calc(100vw - 40px);
        font-size: 14px;
    }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(200%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(200%);
    opacity: 0;
  }
`;

const NavItem = styled.a<{ scrolled: boolean; isMenuOpen: boolean; }>`
   animation: ${props => props.isMenuOpen || !props.scrolled ? slideInFromRight : slideOutToRight} 0.5s forwards;
    opacity: 0;
        &.shown {
            opacity: 1;
            transform: translateX(0);
        }
        :hover {
            color: #8892b0;
        }
`;

const MenuIcon = styled.div<{ scrolled: boolean }>`
    position: fixed;
    width: 62px;
    height: 50px;
    top: 70px;
    left: calc(100vw);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color:  #000425;
    font-weight: 600;
    transform: ${props => props.scrolled ? 'translate(-100%, 0)' : 'translate(100%, 0)'};
    transition: all 0.5s ease-in-out;
    transition-delay: ${props => props.scrolled ? '0.4s' : '0'};
    text-align: right;
    z-index: 1000;
    background-color: #8892b0;
    border-radius: 10px 0 0 10px;
    padding: 10px;
    @media (max-width: 700px) {
        width: 36px;
        height: 30px;
    }
`;

export default SideNav