import { useRef, useState, useEffect } from "react";
//@ts-ignore
import icons from "../allSvgs.js";
/////////////////////////////////////////////
////  ICONS MANIPULATIONS

interface Props {
  icon: string;
}

const Svg = (icon: Props) => {
  const AllIconsObject = useRef(icons);
  let [pathTag, setPathTag] = useState([]);

	useEffect(() => {

  if (AllIconsObject.current[icon.icon]){
	  setPathTag(AllIconsObject.current[icon.icon].map((each: any, i: number) => (
	    <path key={icon.icon + "-" + i} {...each[1]}></path>
	  )))

  } else {
  	(async () => {
	    const res = await fetch(
	      "https://cdn.jsdelivr.net/npm/@tabler/icons@3.34.0/tabler-nodes-outline.json"
	      //{ priority: "high" }
	    );
	     
	    
	    const result = await res.json();
			const iconPaths = await result[icon.icon]
  
     	fetch("http://localhost:4000/write-file", {
     		method : "POST",
     		body : JSON.stringify({ iconPaths : iconPaths, icon : icon.icon })
     	})
    })()
  }}, [icon])
  


  return (
    <>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...icon}>
        {pathTag}
      </svg>
    </>
  );
}

export default Svg;
