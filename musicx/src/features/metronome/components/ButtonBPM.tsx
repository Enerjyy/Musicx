import type {JSX} from "react";

interface MetronomeButtonProps {
    currentImage: string;
    toggleSlider: () => void;
}

const MetronomeButton = ({ currentImage, toggleSlider }: MetronomeButtonProps): JSX.Element => {
    return (<div>


        <button onClick={toggleSlider}> <img src={currentImage}/></button>
    </div>)
}

export default MetronomeButton;