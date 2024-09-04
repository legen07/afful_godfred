import Svg from "./IconsTable.tsx";
import { valFace } from "../App";
import { forwardRef, memo, } from "react";

const Header = forwardRef<HTMLDivElement, valFace>(({ contactMenu, menu}: valFace, ref) => {
  return (
    <header>
      <div className="contact-opener" data-modal="contactMenu">
        <Svg icon="phone" />
      </div>
      <div id="contact-menu" className={contactMenu}>
        <div className="contact-content">
          <a
            className="telegram"
            href="https://t.me/legenofthe20s"
            target="__blank"
            data-close="menu"
          >
            <Svg icon="brand-telegram" />
          </a>

          <a
            className="call"
            href="tel:+233593861032"
            target="__blank"
            data-close="menu"
          >
            <Svg icon="phone" />
          </a>
          <a
            className="gmail"
            href="mailto:gafful07@gmail.com"
            target="__blank"
            data-close="menu"
          >
            <Svg icon="mail" />
          </a>
          <a
            className="github"
            href="https://github.com/legen07"
            target="__blank"
            data-close="menu"
          >
            <Svg icon="brand-github" />
          </a>
        </div>
        <div className="close" data-close="contactMenu">
          <Svg icon="x" />
        </div>
      </div>
      <div className="hamburger" data-modal="menu" data-dp ref={ref}>
        <Svg icon="menu" />
      </div>
      <div id="menu" className={menu}>
        <div className="menu-content">
          <span>01</span> <a href="#my-sites" data-close="menu">Recent Sites</a>
          <span>02</span>
          <a data-close="menu" href="#education">
            {" "}
            Education
          </a>
          <span>03</span>
          <a href="#skills" data-close="menu">Skill & Experience</a>
          <span>04</span>
          <a href="#my-scripts" data-close="menu">Repos and Snippets</a>
        </div>
      </div>
    </header>
  );
});
export default memo(Header);
