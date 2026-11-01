import {useCatSlider} from "../features/metronome/hooks/catOnButton.tsx";
import MetronomeButton from "../features/metronome/components/ButtonBPM.tsx";
import MetronomeSlider from "../features/metronome/components/SlidebarBPM.tsx";
import BeatMarkers from "../features/metronome/components/BeatMarkers.tsx";


const MetronomePage = () => {
    const {currentImage, toggleSlider, BPMValue, setBPMValue, currentBeat, totalBeat} = useCatSlider();


    return (
        <div>
            <MetronomeButton currentImage={currentImage} toggleSlider={toggleSlider}/>
            <MetronomeSlider BPMValue={BPMValue} setBPMValue={setBPMValue}/>
            <BeatMarkers totalBeats={totalBeat} currentBeat={currentBeat}/>
        </div>
    );
}

export default MetronomePage;