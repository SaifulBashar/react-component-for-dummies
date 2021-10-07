import { Global, css } from "@emotion/react";
import "prismjs/themes/prism-tomorrow.css";
// @ts-ignore
import normalize from "normalize.css";

const globalStyles = (
  <Global
    styles={css`
      ${normalize}
      @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
      * {
        box-sizing: border-box;
      }
      html,
      body {
        line-height: 1.5;
        margin: 0;
        min-height: 100vh;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";
      }
      blockquote,
      dd,
      dl,
      figure,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      p,
      pre {
        margin: 0;
        margin-top: 0px;
        margin-bottom: 0px;
      }
    `}
  />
);
const App = ({ Component, pageProps }: any) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;
