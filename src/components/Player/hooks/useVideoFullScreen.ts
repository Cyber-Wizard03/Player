import { useState} from "react";

const useVideoFullScreen = (elem:any) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = (  )=>{
     
        if (!isFullScreen) {
          elem!.requestFullscreen();
          setIsFullScreen(true);
        } else {
          document.exitFullscreen();
          setIsFullScreen(false);
        }
      };
      return {
        handleFullScreen
      }
}

export default useVideoFullScreen

