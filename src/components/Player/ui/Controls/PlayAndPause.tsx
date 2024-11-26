import React from 'react'
import { ReactComponent as Play } from "./../../assets/bootstrap-icons-1.11.2/play-fill.svg";
import { ReactComponent as Pause } from "./../../assets/bootstrap-icons-1.11.2/pause-fill.svg";
type TypeStart = {
  event: any;
  start: any;
};
export const PlayAndPause = ({ event, start }: TypeStart) => {
  return (
    <div className="video-control-item" onClick={event}>
      {!start ? <Play /> : <Pause />}
    </div>
  );
};