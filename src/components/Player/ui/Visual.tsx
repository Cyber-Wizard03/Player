import React from 'react'

type Props = {
  Video: string,
  togglePlay: any,
  videoElement:any,
  handleOnTimeUpdate: any,
  style?: React.CSSProperties;
}

export const Visual = ({Video,togglePlay,videoElement, handleOnTimeUpdate,style}: Props) => {
  return (
    <div>
        <video
        style={style}
          src={Video}
          onDoubleClick={togglePlay}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        
        />
    </div>
  )
}
