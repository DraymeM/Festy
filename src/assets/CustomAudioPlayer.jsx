import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa'; 
import SoundWave from './SoundWave'; 
import './CustomAudioPlayer.css'; 

function CustomAudioPlayer({ audioSrc }) {
    const audioRef = useRef(null);
    const progressRef = useRef(null); 
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [progress, setProgress] = useState(0);
    const [volumeSliderVisible, setVolumeSliderVisible] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0); 

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.ontimeupdate = () => {
                setCurrentTime(audioRef.current.currentTime);
                setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
            };
        }
    }, [isPlaying]);

    // Set the width of the progress bar container dynamically
    useEffect(() => {
        if (progressRef.current) {
            setProgressWidth(progressRef.current.offsetWidth);
        }
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = newTime;
        setProgress(e.target.value);
        setCurrentTime(newTime);
    };

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
    };

    const toggleVolumeSlider = () => {
        setVolumeSliderVisible(!volumeSliderVisible);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="audioPlayerContainer">
            <audio ref={audioRef} src={audioSrc} onLoadedMetadata={() => setDuration(audioRef.current.duration)} />
            
            {/* SoundWave with dynamic width based on progress bar */}
            <SoundWave width={progressWidth} />

            <div className="controlsContainer">
                <div className="controls">
                    <button onClick={togglePlayPause} className="playPauseButton">
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>

                    <div className="progressContainer" ref={progressRef}>
                        <span className="time">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleProgressChange}
                            className="progressBar"
                        />
                        <span className="time">{formatTime(duration)}</span>
                    </div>

                    <button onClick={toggleVolumeSlider} className="volumeButton">
                        <FaVolumeUp />
                    </button>
                </div>

                {/* Volume slider container */}
                {volumeSliderVisible && (
                    <div className="volumeSliderContainer">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="volumeSlider"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomAudioPlayer;
