import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface HomeContainerProps {
    children: React.ReactElement;
    gradient?: React.ReactElement;
    includeBorder?: boolean;
}

const HomeContainer: React.FC<HomeContainerProps> = ({ children, gradient, includeBorder }: any) => {
    const [scrolled, setScrolled] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setInitialLoad(false);
        }, 2000);
    }, []);

    return (
        <FullScreenHomeContainer>
            {includeBorder ?
                (<>
                    <Border>
                        {gradient}
                        <BorderBottom scrolled={scrolled} initialLoad={initialLoad}/>
                        <BorderRight scrolled={scrolled} initialLoad={initialLoad}/>
                        <BorderTopContainer scrolled={scrolled} initialLoad={initialLoad}>
                            <BorderTopLeft scrolled={scrolled} initialLoad={initialLoad}/>
                            <BorderTopRight scrolled={scrolled} initialLoad={initialLoad}/>
                        </BorderTopContainer>
                        <BorderLeft scrolled={scrolled} initialLoad={initialLoad}/>
                        <MaxWidthHomeContainer>
                            {children}
                        </MaxWidthHomeContainer>
                    </Border>
                </>) :
                (<>
                    {gradient}
                    <MaxWidthHomeContainer>
                        {children}
                    </MaxWidthHomeContainer>
                </>)}
        </FullScreenHomeContainer>
    )
}

const FullScreenHomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #000425;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    overflow: hidden;
    @media (max-width: 700px) {
        padding: 20px;
    }
`;

const Border = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BorderBottom = styled.div<{ scrolled: boolean; initialLoad: boolean; }>`
    background-color:rgb(154, 153, 226, 0.25);
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.24s ease-in-out;
    transform-origin: center;
    transform: scaleX(${props => props.initialLoad || props.scrolled ? '0' : '1'});
    transition-delay: ${props => props.scrolled ? '0.48s' : '0'};
`;

const BorderLeft = styled.div<{ scrolled: boolean; initialLoad: boolean; }>`
    background-color:rgb(154, 153, 226, 0.25);
    width: 3px;
    height: ${props => props.scrolled || props.initialLoad ? '0' : '100%'};
    position: absolute;
    bottom:0;
    left: 0;
    transition: all 0.24s ease-in-out;
    transition-delay: 0.24s;
`;
const BorderRight = styled.div<{ scrolled: boolean; initialLoad: boolean; }>`
    background-color:rgb(154, 153, 226, 0.25);
    width: 3px;
    height: ${props => props.scrolled || props.initialLoad ? '0' : '100%'};
    position: absolute;
    bottom:0;
    left: 100%;
    transition: all 0.24s ease-in-out;
    transition-delay: 0.24s;
`;

const BorderTopContainer = styled.div<{ scrolled: boolean; initialLoad: boolean; }>`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
`;

const BorderTopLeft = styled.div<{ scrolled: boolean; initialLoad: boolean; }>`
    background-color:rgb(154, 153, 226, 0.25);
    width: 100%;
    height: 3px;
    position: relative;
    transition: all 0.24s ease-in-out;
    transform-origin: left;
    transform: scaleX(${props => props.scrolled || props.initialLoad ? '0' : '1'});
    transition-delay:  ${props => !props.scrolled ? '0.48s' : '0'};
`;

const BorderTopRight = styled.div<{ scrolled: boolean; initialLoad: boolean; }>`
    background-color:rgb(154, 153, 226, 0.25);
    width: 100%;
    height: 3px;
    position: relative;
    transition: all 0.24s ease-in-out;
    transform-origin: right;
    transform: scaleX(${props => props.scrolled || props.initialLoad ? '0' : '1'});
    transition-delay:  ${props => !props.scrolled ? '0.48s' : '0'};
`;

export const MaxWidthHomeContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1400px;
    position: relative;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default HomeContainer;
