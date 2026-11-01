import cat1 from '../images/cat1.png';
import cat2 from '../images/cat2.png';
import cat3 from '../images/cat3.png';
import {useEffect, useState, useRef} from "react";
import * as Tone from "tone";
import ticksound from '../mp3/metronome-tick.mp3';

const catImages: string[] = [cat1, cat2, cat3];

export const useCatSlider = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [right, setRight] = useState<boolean>(true);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const sampleRef = useRef<Tone.Sampler | null>(null);
    const [BPMValue, setBPMValue] = useState<number>(120);

    useEffect(() => {
        sampleRef.current = new Tone.Sampler({
            urls: {
                A1: ticksound,
            },
            onload: () => {
                console.log("Sampler!!");
            }
        }).toDestination();

        return () => {
            sampleRef.current?.dispose();
        }
    }, []);

    useEffect(() => {



        if (!isRunning) return;
        const intervalTime:number = BPMValue > 0 ? 60/BPMValue * 1000 : 120;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                let nextIndex: number = prevIndex;
                if (right) {
                    if (prevIndex < catImages.length - 1) {
                        nextIndex = prevIndex + 1;
                    } else {
                        setRight(false);
                        nextIndex = prevIndex - 1;
                    }
                } else {
                    if (prevIndex > 0) {
                        nextIndex = prevIndex - 1;
                    } else {
                        setRight(true);
                        nextIndex = prevIndex + 1;
                    }
                }
                if(nextIndex != 1) {
                    sampleRef.current?.triggerAttackRelease("A1", 0);
                }
                return nextIndex;
            });
        }, intervalTime)
        return () => clearInterval(interval);
    }, [right, isRunning, BPMValue]);

    const toggleSlider = async () => {
        if (!isRunning && Tone.context.state !== 'running') {
            await Tone.start();
        }
        setIsRunning(!isRunning);
    }

    return {
        currentImage: catImages[currentIndex],
        toggleSlider,
        BPMValue,
        setBPMValue,
    };
}
