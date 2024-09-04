import { forwardRef, memo } from "react";
import Svg from "./IconsTable.tsx";

const Experience = forwardRef<HTMLDivElement>((props, skillsRef) => {
  props

  return (
    <>
      <section id="skills" ref={skillsRef}>
        <h2>Skills</h2>
        <div className="languages-technologies">
          <div className="html">
            <div className="code">
              <Svg icon="code" />
              <h3>90%</h3>
            </div>
            <div className="ein-things">
              <div>
                <Svg icon="brand-html5" />
                <span>95%</span>
              </div>
              <div>
                <Svg icon="brand-sass" />
                <span>95%</span>
              </div>
              <div>
                <Svg icon="brand-css3" />
                <span>95%</span>
              </div>
              <div>
                <Svg icon="brand-typescript" />
                <span>80%</span>
              </div>
              <div className="jquery">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M29.87 3c-.1.02-.21.05-.32.1A7.61 7.61 0 0 0 27.5 5.1a8.97 8.97 0 0 0-1.5 4.9 9.88 9.88 0 0 0 .77 3.89 12 12 0 0 0 6.76 6.48l.38.13.18.06.11.04a13.91 13.91 0 0 0 2.77.4l.37.01c5.48 0 7.6-3.87 8.32-5.16l.16-.29a1 1 0 1 0-1.65-1.13c-1.46 2.15-3.96 2.8-7.42 1.95a9.56 9.56 0 0 1-3.44-1.71c-3.05-2.37-4.24-7.29-2.46-10.13a1 1 0 0 0-.98-1.52ZM21 5a.98.98 0 0 0-.65.23c-1.5 1.23-3.06 3.24-3.12 3.32l-.03.05c-2.73 3.98-2.94 9.64-.52 14.43a18 18 0 0 0 1.26 2.14l.14.2c.39.56.82 1.2 1.37 1.7l.6.64.1.1.09.08.63.6.07.06c.24.22.5.42.82.68l.1.07a16.65 16.65 0 0 0 .86.65c.1.07.2.12.29.2l.09.05.1.07a11.66 11.66 0 0 0 1.18.7l.25.14.3.16.1.04.62.3.31.14.68.27.12.04.1.05.58.2.44.14c.22.07.47.16.75.2 1.36.23 2.68.35 3.94.35h.44a14.62 14.62 0 0 0 13.94-9.72 1 1 0 0 0-1.79-.84c-2.8 4.08-8.08 5.81-13.47 4.39a11.58 11.58 0 0 1-1.51-.48l-.28-.1a12.3 12.3 0 0 1-.52-.22l-.12-.06-.68-.31-.57-.3c-.13-.06-.24-.13-.42-.24l-.1-.05-.1-.06a6.48 6.48 0 0 1-.42-.27l-.09-.06-.1-.07-.33-.22c-.25-.17-.48-.35-.76-.57l-.11-.09a16.06 16.06 0 0 1-5.38-7.75c-.83-2.71-.21-6.25 1.65-9.48a1 1 0 0 0-.85-1.5ZM10 8a1 1 0 0 0-.68.26 21.95 21.95 0 0 0-3.5 4.19c-4.08 5.95-3.3 15.2-.49 20.85l.18.34.03.06.13.26.1.18.18.33.32.55a6.1 6.1 0 0 1 .3.5l.16.24.13.18c.15.24.31.49.48.72l.03.02.06.09c.14.2.28.4.41.56l.57.72.08.1.08.08c.17.22.35.43.54.63l.08.09.54.58.18.17a9.91 9.91 0 0 0 .53.53l.16.15a12.17 12.17 0 0 0 .69.62l.55.47.96.76.51.37a3.48 3.48 0 0 0 .27.2l.72.48.85.52.17.1.6.33c.1.07.22.12.32.17l.5.27.2.1a18.4 18.4 0 0 0 1.83.8l.7.26.15.06a37.1 37.1 0 0 0 1.03.33l.2.06c.24.08.48.15.75.2 1.85.34 3.67.52 5.39.52 14.33 0 18.9-11.53 18.94-11.64a1 1 0 0 0-1.74-.97c-3.67 4.84-10.6 6.64-18.54 4.82l-.58-.16-.38-.12c-.25-.07-.5-.16-.75-.25l-.12-.04-.63-.23-.22-.09-.71-.3-.14-.06-.62-.3-.19-.09a14.9 14.9 0 0 1-.46-.24l-.82-.44a2.8 2.8 0 0 0-.25-.14c-.24-.16-.5-.3-.75-.47l-.2-.14c-.18-.1-.34-.22-.59-.4l-.1-.06-.47-.35-.3-.24-.38-.28-.21-.18-.54-.46a.5.5 0 0 0-.07-.06c-.2-.18-.4-.36-.64-.6l-.71-.7a20.91 20.91 0 0 1-1.12-1.24l-.42-.52-.18-.22-.43-.6C8.78 24.89 7.78 13.7 10.8 9.6A1 1 0 0 0 10 8Z" />
                </svg>
                <span>90%</span>
              </div>
              <div>
                <Svg icon="brand-javascript" />
                <span>90%</span>
              </div>
              <div>
                <Svg icon="brand-react"/>
                <span>80%</span>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1000">
                  <path d="M715.8 310.8h-.1c0 .1-.1.1-.1.2h.2v-.2zm-75 196.8c-5.8-2.7-10.9-5.6-14.9-11.6-5.3-8-18.2-11.9-30.5-11.1-12.3-.7-25.2 3.2-30.5 11.1-4 6-9.1 8.9-14.9 11.6-41.5 19.2-67.1 61.6-65.3 107.4-.7.6 6.3 61.6 17.2 69.9 4.3 2.2 55.2 14.9 93.5 14.9s91.6-12.8 95.9-14.9c10.9-8.3 15.6-69.4 14.9-69.9 1.7-45.8-23.8-88.2-65.4-107.4zm257-122.2c-18.7-17.9-36-37.8-57.6-51.8-26.7-17.3-58.2-20.5-89.4-22.4-3.3 5.2.7 8.4 3.5 11.6 4.7 5.4 10 10.2 14.9 15.4 27.9 28.6 48.4 61.3 55.4 101.3.8 4.5 12 91.8 14.7 94.1 5 15 9.1 15.9 19.9 4.6 2.9-3 19.2-45 31.1-60.2 11.9-15.2 45.2-37 47.1-42.1 1.6-5-25.6-37.1-39.6-50.5zm-472-62.6c2.8-3.2 6.8-6.4 3.5-11.6-31.2 2-62.7 5.1-89.4 22.4-21.7 14-38.9 33.9-57.6 51.8-14 13.4-41.3 45.4-39.4 50.5 1.9 5.1 35.2 26.9 47.1 42.1 11.9 15.2 28.2 57.2 31.1 60.2 10.7 11.3 14.9 10.3 19.9-4.6 2.7-2.3 13.9-89.6 14.7-94.1 7-40 27.5-72.7 55.4-101.3 4.7-5.2 10-10 14.7-15.4zm378.4 211.1v-.3c0 .1-.1.1-.1.2s.1.1.1.1z" />
                  <path d="M734.1 338.3c-4.9-5.2-10.2-10.3-14.9-15.7-2.8-3.2-6.7-6.2-3.6-11.6-27.7-2.8-55.2-7.7-83.2-9.6-51.3-3.5-101.9-.2-152.2 9.7-5 1-9.7 2.7-14.6.2 0 .7-.1 1.3-.2 1.9 1.2 4-2.1 6.7-4.5 9.5-4.7 5.4-10 10.2-14.9 15.4-27.9 28.6-48.4 61.3-55.4 101.3-.3 1.6-2 14.6-4.2 30.4 0 1.5-.1 3-.2 4.3l-.3-.6c-2.5 18.3-5 52.1-3.7 60.3 1.8 11.6 3.1 23.4 10.9 33.1 6.9 13.4 20.4 23 23.2 38.8 5.3 30.6 23.8 48.1 50.2 57.7-10.3-18.8-14.8-69-14-69.5-2.3-49.5 30.2-95.3 83.1-116 7.4-2.9 13.9-6.1 19-12.6 6.8-8.6 23.1-12.8 38.8-12 15.7-.8 32 3.4 38.8 12 5.1 6.5 11.6 9.7 19 12.6 52.9 20.7 85.4 66.5 83.1 116 .7.5-3.5 48.4-13.3 68.1 23.2-9.9 39.9-26 44.9-51.8 1.9-9.8 5.5-18.5 11.7-26.3 3.4-4.3 7.7-8.2 8-14.2 4.9-2.5 6.5-7.3 8.2-11.9 3.1-8.2 4.5-17.3 10.4-24.2-2.8-4.7-13.8-89.7-14.6-94.1-7.1-39.8-27.6-72.6-55.5-101.2zm-297.7 46.1c-.5-.5-1-1-1.5-1.3 1.1.1 1.5.6 1.5 1.3zm27.9 105c-24.1 0-43.6-19.5-43.6-43.6s19.5-43.6 43.6-43.6 43.6 19.5 43.6 43.6-19.5 43.6-43.6 43.6zm223.2-17.2s.1 0 .2-.1c0 .1 0 .1.1.2-.1 0-.2-.1-.3-.1zm38.3 17.2c-24.1 0-43.6-19.5-43.6-43.6s19.5-43.6 43.6-43.6 43.6 19.5 43.6 43.6-19.5 43.6-43.6 43.6zm46.3-26.6c0-.6-.1-1-.2-1.4.1-1 .1-1.9.2-2.9.2 1.5.4 2.9 0 4.3zm.3-10.2c-.2.4-.3.7-.4 1.1v-.9c.3-.3.5-.4.4-.2z" />
                </svg>
                <span>95%</span>
              </div>
            </div>
            <article>
              <p>
                I have created websites with all of these languages. You can check out my catalogue of websites and scripts @ <a href="https://github.com/legen07"> https://github.com/legen07</a>. 
              </p>
            </article>
          </div>
          <div className="data-interchange">
            <div>
              <Svg icon="json" />
              <span>95%</span>
            </div>
            <div>
              <Svg icon="file-type-xml" />
              <span>85%</span>
            </div>
            <div>
              <strong>yaml</strong>
              <span>85%</span>
            </div>
            <div>
              <h3>90%</h3>
            </div>
          </div>
          <div className="adobe">
            <div className="technology">
              <Svg icon="brand-adobe" />
              <h3>75%</h3>
            </div>
            <div className="ein-things">
              <div>
                <Svg icon="brand-adobe-photoshop" /> <span>80%</span>
              </div>
              <div>
                <Svg icon="brand-adobe-illustrator" />
                <span>80%</span>
              </div>
              <div>
                <Svg icon="brand-adobe-premier" /> <span>70%</span>
              </div>
              <div>
                <Svg icon="brand-adobe-xd" />
                <span>55%</span>
              </div>
              <div>
                <Svg icon="brand-adobe-after-effect" />
                <span>80%</span>
              </div>
            </div>
            <article>
              <p>
                Photoshop and illustrator for graphic design and creating icons.
                <br />
                <br />
                <b>Self Reliant :</b>I always try to learn anything that comes
                in my way of developing a site.
              </p>
            </article>
          </div>
          <div className="back-end">
            <div>
              <Svg icon="terminal-2" />
              <span>80%</span>
            </div>
            <div>
              <Svg icon="brand-python" />
              <span>80%</span>
            </div>
            <div>
              <Svg icon="brand-nodejs" />
              <span>80%</span>
            </div>
            <div>
              <h3>80%</h3>
            </div>
          </div>
          <div className="third-parties">
            <div className="database-wordpress">
              <Svg icon="database" />
              <h3>80%</h3>
            </div>
            <div className="ein-things">
              <div>
                <Svg icon="brand-php" />
                <span>60%</span>
              </div>
              <div>
                <Svg icon="brand-wordpress" />
                <span>85%</span>
              </div>
              <div>
                <Svg icon="brand-drupal" />
                <span>80%</span>
              </div>
              <div>
                <Svg icon="sql" />
                <span>95%</span>
              </div>
              <div>
                <Svg icon="brand-mongodb" />
                <span>95%</span>
              </div>
              <div>
                <Svg icon="brand-git" />
                <span>95%</span>
              </div>
            </div>
            <article>
              <p>
                <b>Databases, WordPress and Git</b>
                <br />
                <br />I also do CI/CD. I am yet to learn dockers and containers.
                But I know about <b>Nginx</b>
                <br />
                <br />
                For PHP I haven't really dive deep. Mostly use it for Drupal.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="my-scripts">
        <h2>
          My scripts <Svg icon="brand-github" />
        </h2>
        <article>
          <div>
            <h3>Icons-table </h3>
            <p>
              With this script, all you need to create an svg is to add
              <br />
              <br />
              <b>&lt;svg icon="name-of-icon"&gt;&lt;/svg&gt; </b>
              <br />
              <br />
              you will have to refer the name from{" "}
              <a href="https://tabler.io" title="Tabler Icons">
                tabler.io
              </a>
              .
              <br />
              <br />
              There are 76 icons in this site and it's just 2 that were pasted.
              All the 74 others were added just by adding icon='icon-name' to an
              svg tag.
              <br />
              <br />
              <a href="https://github.com/legen07/iconstable">
                <Svg icon="brand-github" /> Github repo
              </a>
            </p>
          </div>
          <div>
            <h3>Auto model</h3>
            <p>
              This script let you show or hide a model just by naming your model
              with an Id then naming your model opener with the attribute
              model='id-of-model'. By add 'dp' to the model opener it can also
              close the model otherwise add close='id-of-model' to the close
              button.
              <br />
              <br />
              You can also add additional functions if adding 'js' to the model
              is not enough for you. All you have to do is to create a function
              with the name of the id. If the id has more than 2 words
              ('the-id-name') use first and last words and you can run a whole
              function onclick.
              <br />
              <br />
              With this Script you don't have to be adding numerous click event
              listeners.
              <br />
              <br />
              <a href="https://github.com/legen07/iconstable">
                <Svg icon="brand-github" /> Github repo
              </a>
            </p>
          </div>
          <div>
            <h3>pop and shift slider</h3>
            <p>
              This is a unique algorithm for a carousel I created. It .pop and
              .unshift on 'prev' and does opposite on 'next'. I won't explain
              much. You can get in-touch for further explanation for this.
              <br />
              <br />
              For it's unique feature, it can create a 3 layer carousel. And I
              searched throughout youtube and never found this kind of
              algorithm.
              <br />
              <a href="https://gitlab.com/-/snippets/3640556">
                <Svg icon="brand-gitlab" /> &nbsp; Gitlab snippet
              </a>
            </p>
          </div>
        </article>
      </section>
    </>
  );
});

export default memo(Experience);
