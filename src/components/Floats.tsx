import { memo } from "react";
import Svg from "./IconsTable.tsx";
import { valFace } from "../App";
// import { useJs } from "./context";

export interface floatRefs {
  bottomFloats: HTMLDivElement | null;
}

const Floats = (props: valFace) => {
  // const [Js, setJs] = useState("");

  // setTimeout(() => {
    // setJs("js");
  // }, 1000);

  return (
    <div id="bottom-floats" className={props.bottomFloats}>
      <div id="cookies-policy">
        <div>
          <Svg icon="cookie" />
          <span>This site stores cookies on your device.</span>
          <Svg icon="x" data-close="bottomFloats" />
        </div>
      </div>
    </div>
  );
};

export default memo(Floats);
