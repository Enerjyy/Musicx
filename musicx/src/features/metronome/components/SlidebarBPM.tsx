import type {JSX} from "react";


const MetronomeSlider = (BPMValue: number, setBPMValue: (value: number) => void): JSX.Element => {

    return (<div>

        <p>BPM:</p> {BPMValue}
        <input type="range" min="20" max="340" onChange={(e) => setBPMValue(Number(e.target.value))} value={BPMValue}/>
    </div>)
}

export default MetronomeSlider;