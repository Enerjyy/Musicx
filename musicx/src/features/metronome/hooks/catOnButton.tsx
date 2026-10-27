import cat1 from '../images/cat1.png';
import cat2 from '../images/cat2.png';
import cat3 from '../images/cat3.png';
import {useEffect, useState} from "react";

const catImages: string[] = [cat1, cat2, cat3];

export const useCatSlider = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [right, setRight] = useState<boolean>(true);
    const [isRunning, setIsRunning] = useState<boolean>(false);


    useEffect(() => {



        if (!isRunning) return;

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
                return nextIndex;
            });
        }, 250)
        return () => clearInterval(interval);
    }, [right, isRunning]);

    const toggleSlider = () => {
        setIsRunning(!isRunning);
    }

    return {
        currentImage: catImages[currentIndex],
        toggleSlider
    };
}
