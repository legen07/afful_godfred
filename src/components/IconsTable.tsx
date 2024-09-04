import { useRef } from "react";
/////////////////////////////////////////////
////  ICONS MANIPULATIONS

interface Props {
  icon: string;
}

const Svg = (icon: Props) => {
  const AllIconsObject = useRef([]);

  !localStorage.icons &&
    fetch(
      "https://cdn.jsdelivr.net/npm/@tabler/icons@3.11.0/tabler-nodes-outline.json",
      { priority: "high" }
    )
      .then((outJsonUrl) => outJsonUrl.json())
      .then((outJsonUrl) =>
        localStorage.setItem("icons", JSON.stringify(outJsonUrl))
      );
  AllIconsObject.current = JSON.parse(localStorage.getItem("icons") || "")[
    icon.icon
  ];

  const pathTag = AllIconsObject.current.map((each: any, i: number) => (
    <path key={icon.icon + "-" + i} {...each[1]}></path>
  ));

  return (
    <>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...icon}>
        {pathTag}
      </svg>
    </>
  );
}

export default Svg;