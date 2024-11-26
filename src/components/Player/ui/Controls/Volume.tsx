import { ReactComponent as Full } from "./../../assets/bootstrap-icons-1.11.2/volume-up.svg";
import { ReactComponent as Mute } from "./../../assets/bootstrap-icons-1.11.2/volume-mute.svg";

type TypeVolume = {
    value: any;
    EventMute: any;
    EventVolume: any;
  };
export const Volume = ({ EventMute, value, EventVolume }: TypeVolume) => {
    return (
      <div className="video-control-volume">
        <div className="video-control-item" onClick={EventMute}>
          {!value ? <Full /> : <Mute />}
        </div>
        <div className="video-ProgressBar video-volume">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={(e) => EventVolume(e)}
          />
        </div>
      </div>
    );
  };