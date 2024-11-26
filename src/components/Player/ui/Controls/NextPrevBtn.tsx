import { ReactComponent as Prev } from "./../../assets/bootstrap-icons-1.11.2/skip-start-fill.svg";
import { ReactComponent as Next } from "./../../assets/bootstrap-icons-1.11.2/skip-end-fill.svg";
type TypeNextPrev = {
  event: any;
};
export const NextBtn = ({ event }: TypeNextPrev) => {
  return (
    <div className="video-control-item" onClick={event}>
      <Next />
    </div>
  );
};
export const PrevBtn = ({ event }: TypeNextPrev) => {
  return (
    <div className="video-control-item" onClick={event}>
      <Prev />
    </div>
  );
};
