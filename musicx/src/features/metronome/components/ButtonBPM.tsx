import { useCatSlider } from '../hooks/catOnButton';
import type {JSX} from "react";

const MetronomeButton = (): JSX.Element => {
    const {currentImage, toggleSlider} = useCatSlider();
    return (<div>


        <button onClick={toggleSlider}> <img src={currentImage}/></button>
    </div>)
}

export default MetronomeButton;