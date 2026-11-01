import type {JSX} from "react";
import styles from './styles/MetronomeSlider.module.css';


interface MetronomeSliderProps {
    BPMValue: number;
    setBPMValue: (value: number) => void;
}

const MetronomeSlider = ({BPMValue, setBPMValue}: MetronomeSliderProps): JSX.Element => {

    return (
        <div className={styles.sliderContainer}>

            <p>BPM: {BPMValue}</p>
            <input type="range" min="20" className={styles.rangeInput} max="340" onChange={(e) => setBPMValue(Number(e.target.value))} value={BPMValue}/>
        </div>)
}

export default MetronomeSlider;