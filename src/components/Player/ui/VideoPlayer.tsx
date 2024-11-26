import React, { useEffect, useRef, useState } from "react";

import useVideoPlayer from "./../hooks/useVideoPlayer";
import useVideoFullScreen from "./../hooks/useVideoFullScreen";

import { ReactComponent as PlayListIcon } from "./../assets/bootstrap-icons-1.11.2/collection-play-fill.svg";

import "./videostyle.css";
// import useConcealment from "./../hooks/useConcealment";

import { Controls } from "./Controls/Controls";
import { Visual } from "./Visual";
// import PlayList from "./PlayList";
type VideoList = {
  Title?: string;
  Preview?: string;
  Video?: string;
  List?: {
    Title: string;
    Preview: string;
    Video: string;
  }[];
};
export const VideoPlayer = ({ List, Title, Preview, Video }: VideoList) => {
  const videoElement = useRef(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const [widthElem,setWidthElem] = useState<number>(0)
  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setWidthElem(rect.width); 
    }
  }, []);
  const [videoIndex, setVideoIndex] = useState(0);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoVolume,
    toggleMute,
    duration,
    videoProgress,
    toPrevVideo,
    toNextVideo,
  } = useVideoPlayer(videoElement, List, setVideoIndex, videoIndex);
  const { handleFullScreen } = useVideoFullScreen(elementRef);

  // const { Title, Preview, Video } = List[videoIndex];

  // const { handleDisableControl, handleMouseOver, handleMouseOut } =
  //   useConcealment();
  const [playlistActive, setPlaylistActive] = useState(false);
  const styles = {
    player_container: {
      width: "100%",
      height: String(widthElem / 16 * 9 + 'px'),
      border: "1px solid black",
      borderBottom: "none",
      overflow: "hidden",
      display: "inline",
      background: "#000",
      fontWeight: "bold",
      fontSize: "90%",
      margin: "0",
      whiteSpace: "nowrap",
      position: "relative",
    },
    player_controls: {
      position: "absolute",
      bottom: 0,
      padding: "20px",
      width: "100%",
      color: " #EEEEEE",
      background: "black",
      boxSizing: 'border-box'
    },
    player_video: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  };
  return (
    <div
      className="player-container"
      id="myvideo"
      style={styles.player_container}
      ref={elementRef}
    >
      <div className="wrap-control" style={{ opacity: `${1 * 100}%` }}>
        <div className="video-name ">
          <h4 className="color-player"> {Title}</h4>
          <div
            className="playlist color-player"
            onClick={() => {
              setPlaylistActive(!playlistActive);
            }}
          >
            <PlayListIcon />
            <div>Плейлист</div>
          </div>
        </div>
        {/* <div className="wrap-playlist">
          {playlistActive ? (
            <PlayList
              VideoList={List}
              setPlaylistActive={setPlaylistActive}
              setVideoIndex={setVideoIndex}
            />
          ) : (
            <></>
          )}
        </div> */}
        <Controls
          style={styles.player_controls}
          playerState={playerState}
          togglePlay={togglePlay}
          handleVideoProgress={handleVideoProgress}
          handleVideoVolume={handleVideoVolume}
          toggleMute={toggleMute}
          duration={duration}
          videoProgress={videoProgress}
          toPrevVideo={toPrevVideo}
          toNextVideo={toNextVideo}
          handleFullScreen={handleFullScreen}
        />
      </div>

      <Visual
      style={styles.player_video}
        Video={Video}
        togglePlay={togglePlay}
        videoElement={videoElement}
        handleOnTimeUpdate={handleOnTimeUpdate}
      />
    </div>
  );
};
