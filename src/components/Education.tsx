import { forwardRef, memo } from "react";
import Svg from "./IconsTable.tsx";

export interface quoteFace {
  quoteObj: { quote: string; author: string }[];
}

const Education = forwardRef<HTMLDivElement, quoteFace>(
  ({ quoteObj }, education) => {
    return (
      <section id="education" ref={education}>
        <div className="quotes">
          <div className="active">
            <Svg icon="quote"/>
            <div className="quote"> {quoteObj[0].quote} </div>
            <div className="author"> - {quoteObj[0].author} </div>
          </div>
          <button className="next"></button>
        </div>
        <article>
          <h2>Education</h2>
          <b>St. John's Grammar Senior High, Accra, Ghana.</b>
          <br />
          <br />
          <p>
            Despite my limited educational background, I have acquired
            exceptional skills in software development and website development
            that surpass those of my peers who have graduated in these fields.
            Through diligent self-study and online courses, I have mastered the
            necessary knowledge and techniques, driven mostly by curiosity, and
            love for programming and also the necessity to sustain myself
            financially.
          </p>
        </article>
      </section>
    );
  }
);

export default memo(Education);
