import { ReactComponent as FullScreen } from "./../../assets/bootstrap-icons-1.11.2/fullscreen.svg";

type TypeScreen = {
  style?: React.CSSProperties;
  value: any;
};
export const SizeScreen = ({ value,style }: TypeScreen) => {
  return (
    <div className="video-control-item" onClick={value} style={style}>
      <FullScreen />
    </div>
  );
};
