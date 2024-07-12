import React from "react";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import "./AudioPlayer/styles/react-audio.css";

const AudioPack = ({
  tracks,
  trackTitle,
  cover,
  progressBar,
  timeTrack,
  navigator,
  navigationButton,
  playButton,
  pauseButton,
}) => {
  return (
    <div>
      <AudioPlayer
        tracks={tracks}
        trackTitle={trackTitle}
        cover={cover}
        progressBar={progressBar}
        timeTrack={timeTrack}
        navigator={navigator}
        navigationButton={navigationButton}
        playButton={playButton}
        pauseButton={pauseButton}
      />
    </div>
  );
};

export default AudioPack;
