import './App.css'
//import * as Tone from "tone";
//import { useState } from 'react';
//import buttonBPM from './features/metronome/components/ButtonBPM.tsx';
import MetronomeButton from "./features/metronome/components/ButtonBPM.tsx";



/* Для приложения нужно реализовать:
- Метроном, который можно будет настраивать на различное количество щелчков в такт, бпм и второй метроном для полиритмов. Можно добавить плавное автоускорение по тактам. Функция замолкания раз в такт/количетство тактов заданное пользователем.
- Тюнер для гитары/клавишных/басс гитарки, в нём нужно реализовать моментальное распознание ноты, возможность делать кастомные ноты и мб импортировать бд с различными настройками гитар для популярных треков
- Вокальные/клавишные ноты отдельно для определения(с возможностью нажать чтобы услышать как та звучит или кликнуть быстро два раза чтобы зажать 1 ноту)
- сохранение всего от пользователя на джава-спринг бэкенде.
- организация занятий(с напоминаниями про тренировку внутри тг бота) вместе с дневником и таймером сессии
- запись чего-либо чтобы потом прослушать и не забыть(можно сразу проанализировать на частоты и прочее через бота)
- мини игры(определение тона, продолжить ритм, дать максимально чистую ноту)
- определение бпм песни по настукиванию на экран
- чтение файлов с нотной грамотой */






const App = () => {




    return (<MetronomeButton />)





    /*
    const lowPassFilter = new Tone.Filter(800, "lowpass").toDestination();
    Tone.Destination.volume.value = -10;
  const [state, setState] = useState({})
    const woodClick = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: {
            attack: 0.001,
            decay: 0.03,
            sustain: 0,
            release: 0.1
        }
    }).connect(lowPassFilter);
    const woodStrongClick = new Tone.Synth({
        oscillator: { type: "sine" },
        envelope: {
            attack: 0.01,
            decay: 0.03,
            sustain: 0.2,
            release: 0.1
        }
    }).connect(lowPassFilter);

  return (
      <>
        <button onClick={ () => {
            if (state) {
                setState(!state);
                const input = document.getElementById("BPM") as HTMLInputElement;
                let BPM = Number(input?.value) || 120;
                const input2 = document.getElementById("FIRSTRATE") as HTMLInputElement;
                let FIRSTRATE = Number(input2?.value) || 4;
                const input3 = document.getElementById("SECONDRATE") as HTMLInputElement;
                let SECONDRATE = Number(input3?.value) || 1;

                Tone.start();

                const loop = new Tone.Loop((time) => {
                woodClick.triggerAttackRelease("A3", "32n", time);
                }, FIRSTRATE + "n");

                const loop2 = new Tone.Loop((time) => {
                    woodStrongClick.triggerAttackRelease("A3", "32n", time);
                }, SECONDRATE + "n")


                loop.start(0);
                loop2.start(0);

                Tone.Transport.bpm.value = BPM;

                Tone.Transport.start();
            }
            else {
                setState(!state);
                Tone.Transport.stop();}
            }}
        >
          start beat
        </button>
        <input type="text" id="BPM" />
        <input type="text" id="FIRSTRATE" />
        <input type="text" id="SECONDRATE" />
      </>
      ) */
}



export default App
