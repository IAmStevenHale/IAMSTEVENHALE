import styled from 'styled-components';
import { useState, useEffect } from 'react';

const CopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(text);
                setIsCopied(true);
            } else {
                const clipboard = new Clipboard();
                await clipboard.writeText(text);
                setIsCopied(true);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (isCopied) {
            timeout = setTimeout(() => setIsCopied(false), 2000);
        }
        return () => clearTimeout(timeout);
    }, [isCopied]);

    return (
        <Button onClick={() => copyToClipboard('iamstevenhale@gmail.com')}>
            {isCopied ? <p>Copied to clipboard!</p> : <p>iamstevenhale@gmail.com</p>}
        </Button>
    );
};

const Button = styled.button`
    background: none; 
    border: none; 
    cursor: pointer; 
    font-size: 1rem; 
    outline: none; 
    padding: 0; 
    color: white; 
    font-weight: 500;
    & > p {
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        margin-bottom: 15px;
    }
`;

export default CopyToClipboard;




