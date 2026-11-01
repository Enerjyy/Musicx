import type {JSX} from "react";

const MetronomeButton = (currentImage:string, toggleSlider: () => void): JSX.Element => {
    return (<div>


        <button onClick={toggleSlider}> <img src={currentImage}/></button>
    </div>)
}

export default MetronomeButton;