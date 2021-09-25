import { Global, css } from "@emotion/react";
import "prismjs/themes/prism-tomorrow.css";
// @ts-ignore
import normalize from "normalize.css";

const globalStyles = (
  <Global
    styles={css`
      ${normalize}
      @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
      html,
      body {
        margin: 0;
        background: #e0e7ff;
        min-height: 100vh;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji";
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
