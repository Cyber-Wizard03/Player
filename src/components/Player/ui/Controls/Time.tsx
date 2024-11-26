type TypeTime = {
    CurrentTime: any;
    DurationTime: any;
  };
export const Time = ({ CurrentTime, DurationTime }: TypeTime) => {
    function secondsToHms(d: any) {
      function ModifyCharacterCount(a: any) {
        if (a.length < 2) {
          let b = "0" + a;
          return b;
        } else {
          return a;
        }
      }
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);
  
      var hDisplay = h > 0 ? String(h) + ":" : "";
      var mDisplay = m > 0 ? ModifyCharacterCount(String(m)) + ":" : "0:";
      var sDisplay = s > 0 ? ModifyCharacterCount(String(s)) : "00";
      return hDisplay + mDisplay + sDisplay;
    }
  
    return (
      <div>
        {secondsToHms(CurrentTime)}  /  {secondsToHms(DurationTime)}
      </div>
    );
  };
  