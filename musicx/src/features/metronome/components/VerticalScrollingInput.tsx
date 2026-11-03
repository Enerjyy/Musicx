import type {ChangeEvent, JSX} from "react";
import styles from './styles/MetronomeSlider.module.css';

interface VerticalScrollingInputProps {
    min: number;
    max: number;
    value: number | string;
    setValue: (value:number) => void;
    label: string;
}



const ScrollingInput = ({min, max, value, setValue, label}: VerticalScrollingInputProps): JSX.Element => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        if (rawValue === "") {
            setValue(60);
            return;
        }

        const numericValue = Number(rawValue);

        if (numericValue <= max) {
            setValue(numericValue);
        }

    }


    return (
        <div className={styles.container}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                <input type={"number"}
                       value={value}
                       min={min}
                       max={max}
                       onChange={handleChange}
                       className={styles.input}
                />
            </div>
        </div>
    )
}

export default ScrollingInput;