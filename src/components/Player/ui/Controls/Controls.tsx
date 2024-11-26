import React from "react";
import { Progress } from "./Progress";
import { NextBtn, PrevBtn } from "./NextPrevBtn";
import { Volume } from "./Volume";
import { Time } from "./Time";
import { PlayAndPause } from "./PlayAndPause";
import { SizeScreen } from "./SizeScreen";

type TypeControl = {
  style?: React.CSSProperties;
  playerState: any;
  togglePlay: any;
  handleVideoProgress: any;
  handleVideoVolume: any;
  toggleMute: any;
  duration: any;
  videoProgress: any;
  toPrevVideo: any;
  toNextVideo: any;
  handleFullScreen: any;
};

export const Controls = ({
  style,
  playerState,
  togglePlay,
  handleVideoProgress,
  handleVideoVolume,
  toggleMute,
  duration,
  videoProgress,
  toPrevVideo,
  toNextVideo,
  handleFullScreen,
}: TypeControl) => {
  const styles = {
    controls_group_center: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      display: "flex",
      gap: "20px",
    },
    controls_FullScreen:{
      position: "absolute",
      bottom: '20px',
      right:    '20px',
     }
  };
  return (
    <div
      className="controls__wrap video__control__info "
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
    >
      <div className="controls  color-player" style={style}>
        <Progress
          duration={duration}
          value={videoProgress}
          event={handleVideoProgress}
        />
        <div className="controls_group" style={styles.controls_group_center}>
          <PrevBtn event={toPrevVideo} />
          <PlayAndPause start={playerState.isPlaying} event={togglePlay} />
          <NextBtn event={toNextVideo} />
        </div>

        <Volume
          EventVolume={handleVideoVolume}
          value={playerState.isMuted}
          EventMute={toggleMute}
        />
        <Time CurrentTime={videoProgress} DurationTime={duration} />
        <div></div>
        <SizeScreen value={handleFullScreen} style={styles.controls_FullScreen}/>
      </div>
    </div>
  );
};
