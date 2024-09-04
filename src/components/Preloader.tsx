import { memo, useEffect, useState } from "react";
import "./preloader.scss";

const Preloader = () => {
  const [loader, setLoader] = useState(0);
  const [Sec, SetSec] = useState("0");
  const [Milli, SetMilli] = useState("0");
  const [MIlliClass, SetMilliClass] = useState("js");

  // const preload = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoader((l) => l + (l < 85 ? Math.floor(Math.random() * 5) + 1 : 1));

        SetMilli(/\d$/.exec(String(loader))![0]);
        SetMilliClass(MIlliClass === "js" ? "cls" : "js");
        loader > 9 && SetSec(/\d/.exec(String(loader))![0]);
      }, 40);

      if (loader >= 100) return clearTimeout(timer);
    }, [MIlliClass, loader]);
    return (
      <>
        <div id='preloader' className={loader === 100 ? 'js' : ''}>
          <div className="preloader-content">
            <strong className="min">0</strong>
            <strong className="sec">{Sec}</strong>
            <strong className={"milli " + (loader <= 99 && MIlliClass) }>{Milli}</strong>
          </div>
          <span>loading ...</span>
        </div>
      </>
    );
  // };

  // return preload();
}


export default memo(Preloader)
