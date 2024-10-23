import { ReactNode, useState } from "react";
import "./Button.css"

type Props = {
    style: string | undefined;
    children: ReactNode;
}

const Button = ({ children, style }:Props) => {
    // Setting the state for the button text 
    const [buttonText, setButtonText] = useState<string | ReactNode>(children);
    const [dog, setdog] = useState<ReactNode>(<></>);
    // Function to change state on click
    const handleClick = () => {
        setdog (<img src="https://c.tenor.com/aPgTU-Z9j1MAAAAd/tenor.gif"/>)
        setButtonText("I´m smilling at you!");  
    // Changes the button text on click
    }
    return (
      <>
        <div className="button-container">
            {/* When clicking the button, we call handleClick which changes the state */}
            <button className={style} onClick={handleClick}>
                {buttonText}
            </button>
            {dog}
        </div>
      </>
    )
}

export default Button