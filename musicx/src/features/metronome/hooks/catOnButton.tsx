import cat1 from '../images/cat1.png';
import cat2 from '../images/cat2.png';
import cat3 from '../images/cat3.png';
import {useEffect, useState, useRef} from "react";
import * as Tone from "tone";
import ticksound from '../mp3/metronome-tick.mp3';
import forceticksound from '../mp3/G-major-metronome-tick.mp3';

const catImages: string[] = [cat1, cat2, cat3];

export const useCatSlider = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [right, setRight] = useState<boolean>(true);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const sampleRef = useRef<Tone.Sampler | null>(null);
    const [BPMValue, setBPMValue] = useState<number>(120);
    const [currentBeat, setCurrentBeat] = useState<number>(0);
    const [totalBeat, setTotalBeat] = useState<number>(6);

    useEffect(() => {

        const volumeNode = new Tone.Volume(-10).toDestination();
        sampleRef.current = new Tone.Sampler({
            urls: {
                A1: ticksound,
                G1: forceticksound,
            },
            onload: () => {
                console.log("Sampler!!");
            }
        }).connect(volumeNode);

        return () => {
            sampleRef.current?.dispose();
            volumeNode.dispose();
        }
    }, []);



    useEffect(() => {



        if (!isRunning) return;
        const intervalTime:number = BPMValue > 0 ? 60/BPMValue * 1000 / 2 : 120;

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
                    setCurrentBeat((prevBeat) => {
                        const nextBeat = (prevBeat + 1) % totalBeat;

                        if (nextBeat === 0) {
                            sampleRef.current?.triggerAttackRelease("G1", 0);
                        } else {
                            sampleRef.current?.triggerAttackRelease("A1", 0);
                        }

                        return nextBeat;
                    });
                }
                return nextIndex;
            });
        }, intervalTime)
        return () => clearInterval(interval);
    }, [right, isRunning, BPMValue, currentBeat]);

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
        currentBeat,
        totalBeat,
        setTotalBeat,
    };
}
