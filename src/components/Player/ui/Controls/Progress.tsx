type TypeProgress = {
  duration: any;
  event: any;
  value: any;
};
export const Progress = ({ duration, value, event }: TypeProgress) => {
  return (
    <div className="controls-ProgressBar video-duration">
      <input
        type="range"
        min="0"
        max={duration}
        value={value}
        onChange={(e) => event(e)}
      />
    </div>
  );
};
