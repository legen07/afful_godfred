/// Imported Styles
import "./section.scss";

/// Imported Components
import Floats from "./components/Floats.tsx";
import Header from "./components/Header.tsx";
import Profile from "./components/Profile.tsx";
import MySites from "./components/MySites.tsx";
import NavigateSections from "./components/NavigateSections.tsx";
import Preloader from "./components/Preloader.tsx";
import Experience from "./components/Experience.tsx";
/// React APIs
import { memo, RefObject, useEffect, useRef, useState } from "react";
import Education from "./components/Education.tsx";

import { changeSection, EventListeners } from "./components/Index.ts";

/// Interfaces and types.
export interface valFace {
  contactMenu?: string;
  bottomFloats?: string;
  menu?: string;
}


export type allRefs = {
  [key: string]: RefObject<HTMLDivElement>;
};

export let _: allRefs;
let clickCount = 0;
let d: HTMLElement | null;
let elementClassName: string;

let cookiesDey = !localStorage.getItem("cookies_dey") ? "js" : "";

function bottomFloats() {
  localStorage.setItem("cookies_dey", "Yeah charlie");
}
window.bottomFloats = bottomFloats;
// window.bottomFloats =

////''''''''''''''''''''''''''''''////
///.........App..component.........///
const App = () => {
  const [Js, setJs] = useState<valFace>({
    contactMenu: "",
    bottomFloats: cookiesDey,
    menu: "",
  });
  const Jss = Js;
  _ = {
    screenshotsRef: useRef(null),
    profileRef: useRef(null),
    navigationRef: useRef(null),
    educationRef: useRef(null),
    skillsRef: useRef(null),
  };
  const menuClose = useRef<HTMLDivElement>(null);

  window.menu = function menu() {
    menuClose.current?.classList.remove("js");
  };

  const quotes = [
    {
      quote:
        "For the things we have to learn before we can do them, we learn by doing them.",
      author: "Aristotle",
    },
    {
      quote:
        "Practical wisdom is only to be learned in the school of experience.",
      author: "Samuel Smiles",
    },
    {
      quote: "An ounce of practice is worth more than tons of preaching",
      author: "Mahatama Gandhi",
    },
    {
      quote:
        "You don't have to be a genius to be successful. \nYou Just have to be persistent",
      author: "Unknown",
    },
    {
      quote:
        "You don't learn to walk by following rules. \nYou learn by doing and by falling over.",
      author: "Richard Branson",
    },
  ];
  const [quoteObj, setQuote] = useState(quotes);

  function carouselplace(prev_next: string) {
    let poppedQuote = prev_next === "next" ? quoteObj.shift() : quoteObj.pop();

    if (typeof poppedQuote === "object") {
      prev_next === "next"
        ? quoteObj.push(poppedQuote)
        : quoteObj.unshift(poppedQuote);
      setQuote((quoteObj) => [...quoteObj]);
    }
  }

  ////////////////////////////////////
  ///    Click Event Listener      ///
  const HandleClick = (event: Event) => {
    d = event.target as unknown as HTMLElement;
    clickCount = 0;

    // Modals functions
    function modOpener(dataModal: string, d: HTMLElement | null) {
      if (d?.hasAttribute("data-dp") && d.classList.contains("js")) {
        modCloser(dataModal, d);
        return;
      }

      Jss[dataModal as keyof valFace] = "js";
      setJs({ ...Jss });
      d!.classList.add("js");
    }

    function modCloser(dataClose: string, d: HTMLElement | null) {
      Jss[dataClose as keyof valFace] = "";
      setJs({ ...Jss });
      d!.classList.remove("js");

      try {
        eval(dataClose + "()");
      } catch {}
    }

    carouselplace("prev");

    //Click and Re-click parent if not child.
    const clickChecker = () => {
      if (d instanceof Element) {
        d.tagName.includes("path") && (d = d.parentElement);
      }
      elementClassName = (d as HTMLDivElement).classList.value;

      const dataModal = d?.getAttribute("data-modal");
      const dataClose = d?.getAttribute("data-close");

      // Switch start here.
      switch (true) {
        case typeof dataModal == "string":
          modOpener(dataModal, d);
          break;

        case typeof dataClose == "string":
          modCloser(dataClose, d);
          break;

        case elementClassName!.includes("up-section"):
          changeSection(true);
          break;

        case elementClassName!.includes("down-section"):
          changeSection(false);
          break;

        default:
          if (d?.tagName === "HTML") {
            break;
          } else if ((clickCount as number) < 1) {
            clickCount!++;
            d = d!.parentElement;
            clickChecker();
          }
          break;
      }
    };

    clickChecker();
  };

  useEffect(() => {
    document.addEventListener("click", HandleClick);

    return () => document.removeEventListener("click", HandleClick);
  });

  EventListeners();
  return (
    <>
      <Preloader />
      <Profile ref={_.profileRef} />
      <MySites ref={_.screenshotsRef} />
      <Education ref={_.educationRef} quoteObj={quoteObj} />
      <Experience ref={_.skillsRef} />
      <NavigateSections ref={_.navigationRef} />
      <Header contactMenu={Js.contactMenu} menu={Js.menu} ref={menuClose} />
      <Floats bottomFloats={Js.bottomFloats} />
    </>
  );
};
export default memo(App);
