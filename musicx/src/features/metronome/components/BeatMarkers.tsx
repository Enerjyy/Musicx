import type {JSX} from "react";
import styles from './styles/MetronomeSlider.module.css';

interface beatMarkerProps {
    totalBeats: number;
    currentBeat: number;
}

const beatMarkers = ({totalBeats, currentBeat}: beatMarkerProps): JSX.Element => {
    const beatsArray = Array.from({ length: totalBeats }, (_, index) => index);

    return (
        <div className={styles.beatsContainer}>
            {beatsArray.map((index) => (
                <div
                    key={index}
                    className={`${styles.beatDot} ${currentBeat === index ? styles.active : ''}`}
                />
            ))}
        </div>
    );
}

export default beatMarkers;