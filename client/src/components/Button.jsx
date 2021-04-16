import React from "react";
import "./button.css";

const STYLES = [
    "btn--primary--solid" ,
    "btn--primary--outline" 
];

const SIZE = [
    "btn--medium",
    "btn--small"
];

export const Button = ({

    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

    



}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZE.includes(buttonSize) 
    ? buttonSize 
    : SIZE[0]

    
    
    return (
        < button className={`btn ${checkButtonStyle} ${checkButtonSize}`}onClick = {onClick} type = {type}>
            {children}
        </button>
    );


};