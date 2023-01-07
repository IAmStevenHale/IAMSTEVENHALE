export default interface ContentProps {
    currentIndex: number;
    thisIndex: number;
}

export type LineTextProps = {
    text: string,
    fontChanged: boolean,
    index: number,
};

export type TextBlockProps = {
    text: string,
    fontChanged: boolean,
    index: number,
};

export type TextProps = {
    fontChanged: boolean,
    text: string,
    index: number,
};

export type ShowCaseContainer = {
    isCurrent: boolean,
};

