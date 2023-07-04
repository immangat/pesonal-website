import styled from "styled-components";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  white: "white",
};

const buttonColor = (buttonType, hover) => {
    if(hover){
        return {
            [BUTTON_TYPE_CLASSES.base]: "white",
            [BUTTON_TYPE_CLASSES.white]: "#ff8c92",
        }[buttonType];
    }
  return {
    [BUTTON_TYPE_CLASSES.base]: "#263238",
    [BUTTON_TYPE_CLASSES.white]: "white",
  }[buttonType];
};

const fontColor = (buttonType, hover) =>{
    if(hover){
        return {
            [BUTTON_TYPE_CLASSES.base]: "#263238",
            [BUTTON_TYPE_CLASSES.white]: "white",
        }[buttonType];
    }
    return {
        [BUTTON_TYPE_CLASSES.base]: "white",
        [BUTTON_TYPE_CLASSES.white]: "#263238",
      }[buttonType];
    };

export const But = styled.button`
  font-size: 19px;
  background-color: ${({ butType }) => buttonColor(butType)};
  border: 2px transparent solid; 
  border-radius: 2em;
  padding: 1.5em 2.1em;
  color: ${({ butType }) => fontColor(butType)};
  margin: 0.25em;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  &:hover{
    background-color: ${({ butType }) => buttonColor(butType, true)};
    color: ${({ butType }) => fontColor(butType, true)};
    border: ${({ butType }) => butType === 'base' ? '2px #263238 solid' : '2px transparent solid'};
    transition: background-color 200ms ease, color 200ms ease;
  }
`;




