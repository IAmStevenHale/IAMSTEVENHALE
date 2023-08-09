import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Approx. 68 characters max length
const fullText = [
    "software developer",
    "fullstack developer",
    "front-end developer",
    "back-end developer",
    "web developer",
    "pizza connoisseur"
];


const TypingText = () => {
    const [text, setText] = useState('');
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typing: NodeJS.Timeout;
        const startInterval = () => {
            typing = setInterval(() => {
                if (isDeleting) {
                    if (text.length > 0) {
                        setText(text.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setSentenceIndex((prevIndex) => (prevIndex + 1) % fullText.length);
                    }
                } else {
                    const currentSentence = fullText[sentenceIndex];
                    if (text.length < currentSentence.length) {
                        setText(text + currentSentence.charAt(text.length));
                    } else {
                        clearInterval(typing);  // Clear the interval once the word is fully typed
                        setTimeout(() => {
                            setIsDeleting(true);
                            startInterval();  // Restart the interval after the pause
                        }, 1500);  // Add a 1.5s delay. Adjust as per your needs.
                    }
                }
            }, 60);
        };

        startInterval();  // Start the typing effect

        return () => clearInterval(typing);  // Clean up the interval when the component is unmounted
    }, [text, isDeleting, sentenceIndex]);


    return (
        <Wrapper>
            {text}<Cursor />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: inline-block;
    color: #fff;
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const Cursor = styled('span')({
    display: 'inline-block',
    marginLeft: '4px',
    width: '4px',
    height: '40px',
    backgroundColor: '#fff',
    animation: `${blink} 1s linear infinite`
});

export default TypingText;