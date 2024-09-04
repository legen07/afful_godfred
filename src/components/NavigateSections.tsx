import { forwardRef, memo, useImperativeHandle, useRef } from "react";
import Svg from "./IconsTable.tsx";

const Navigate_Sections = forwardRef<unknown>((props, Props) => {
  props
  const upSections = useRef(null);
  const downSections = useRef(null);

  useImperativeHandle(Props, () => ({
    upSection: upSections.current,
    downSection: downSections.current,
  }));

  return (
    <>
      <div id="navigate-sections">
        <div className="up-section" ref={upSections}>
          <Svg icon="arrow-narrow-up" />
        </div>
        <div className="down-section" ref={downSections}>
          <Svg icon="arrow-narrow-down" />
        </div>
      </div>
    </>
  );
});

export default memo(Navigate_Sections);
