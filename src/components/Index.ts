import { useEffect } from "react";
import { _ } from "../App.tsx";

type indexProps = {
  navigationRef: {
    current: {
      upSection: HTMLDivElement;
      downSection: HTMLDivElement;
    };
  };
  profileRef: { current: HTMLDivElement };
  screenshotsRef: { current: HTMLDivElement };
  educationRef: { current: HTMLDivElement };
  skillsRef: { current: HTMLDivElement };
};

export interface States {
  contactMenu?: string;
  bottomFloats?: string;
}

let currentPage = 0;
let canScroll = !0;
let changed = !0;

export const changeSection = (operator: boolean) => {
  canScroll = !1;
  currentPage += operator ? -window.innerHeight : window.innerHeight;

  window!.scrollTo({
    top: currentPage,
    behavior: "smooth",
  });
  setTimeout(() => {
    canScroll = !1;
  }, 1000);
};

export const EventListeners = () => {
  useEffect(() => {
    const {
      navigationRef: {
        current: { upSection, downSection },
      },
      profileRef: { current: profileRef },
      screenshotsRef: { current: screenshotsRef },
      educationRef: { current: educationRef },
      skillsRef: { current: skillsRef },
    }: indexProps = _ as unknown as indexProps;
    function scrollHandler() {
      // Elements I will be using here

      function navigationToggle() {
        profileRef.getBoundingClientRect().top + 30 > 80
          ? upSection.classList.remove("cls")
          : upSection.classList.add("cls");

        currentPage > document.body.scrollHeight - window.innerHeight + 150
          ? downSection.classList.remove("cls")
          : downSection.classList.add("cls");
      }

      screenshotsRef!.childNodes.forEach((each) => {
        if (
          each instanceof HTMLElement &&
          each.getBoundingClientRect().top < window.innerHeight + 200
        ) {
          const clientTop = each.getBoundingClientRect().top;

          const blurry =
            (clientTop - window.innerHeight / window.innerHeight) *
            100 *
            -0.00013 *
            -1;

          blurry > 4
            ? (each.style.filter = "blur(" + blurry + "px)")
            : (each.style.filter = "blur(0)");

          const newScale =
            (clientTop - window.innerHeight / window.innerHeight) *
            100 *
            -0.002;

          each.style.transform =
            "scale(" +
            (each.getBoundingClientRect().bottom > window.innerHeight * 0.48
              ? newScale * 0.2 + 85
              : newScale * 0.001 + 85) +
            "%)";

          if (
            each instanceof HTMLElement &&
            each.getBoundingClientRect().bottom < window.innerHeight * 0.38
          ) {
            each.classList.add("js");
          } else {
            (each as HTMLElement).classList.remove("js");
          }

          const sectionChildren = [
            profileRef,
            profileRef.nextElementSibling,
            educationRef.firstElementChild,
            educationRef.lastElementChild,
            ...skillsRef.lastElementChild!.children,
            ...skillsRef.nextElementSibling!.lastElementChild!.children,
          ];

          sectionChildren.forEach((each) => {
            if (each?.getBoundingClientRect().top! < window.innerHeight * 0.80) {
              each?.classList.add("js");
            } else {
              each?.classList.remove("js");
            }
          });
        }
      });

      navigationToggle();
      // watchWheel();
    }
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const {
      educationRef: { current: educationRef },
    }: indexProps = _ as unknown as indexProps;
    function watchWheel() {
      if (
        educationRef.getBoundingClientRect().top - window.innerHeight * 0.3 <
          0 &&
        canScroll &&
        educationRef.getBoundingClientRect().bottom > window.innerHeight - 10
      ) {
        educationRef.scrollIntoView({
          block: "center",
          behavior: "smooth",
        });

        canScroll = !1;
      }
      setTimeout(() => {
        canScroll = !0;
      }, 350);
    }

    window.addEventListener("wheel", watchWheel);

    return () => {
      window.removeEventListener("wheel", watchWheel);
    };
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      if (changed && window.innerWidth < 600) {
        _.screenshotsRef.current?.childNodes.forEach((each: ChildNode) => {
          const imageName = (each as HTMLElement)
            .querySelector("img")
            ?.getAttribute("src");

          (each as HTMLElement)
            .querySelector("img")
            ?.setAttribute(
              "src",
              RegExp(/.*(?=\.)/).exec(imageName || "") + "_phone.webp"
            );
        });
        changed = !1;
      } else if (window.innerWidth > 600 && !changed) {
        _.screenshotsRef.current?.childNodes.forEach((each: ChildNode) => {
          const imageName = (each as HTMLElement)
            .querySelector("img")
            ?.getAttribute("src");

          (each as HTMLElement)
            .querySelector("img")
            ?.setAttribute(
              "src",
              RegExp(/.*(?=_phone.)/).exec(imageName || "") + ".webp"
            );
        });
        changed = !0;
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler, { capture: false });

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
};
