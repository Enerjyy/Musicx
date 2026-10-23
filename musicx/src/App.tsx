import './App.css'
import * as Tone from "tone";
//import { useState } from 'react';


const App = () => {
    const lowPassFilter = new Tone.Filter(800, "lowpass").toDestination();
  //const [state, setState] = useState({})
    const woodClick = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: {
            attack: 0.001,
            decay: 0.03,
            sustain: 0,
            release: 0.03
        }
    }).connect(lowPassFilter);

  return (
      <>
        <button onClick={async () => {
            const input = document.getElementById("BPM") as HTMLInputElement;
            let BPM = Number(input?.value) || 120;

            await Tone.start();

            const loop = new Tone.Loop((time) => {
                woodClick.triggerAttackRelease("A3", "32n", time);
            }, "4n");

          loop.start(0);

          Tone.Transport.bpm.value = BPM;

            Tone.Transport.start();
        }}>
          start beat
        </button>
        <input type="text" id="BPM" />
      </>
      )
}



export default App
