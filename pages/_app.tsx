import { Global, css } from "@emotion/react";

const globalStyles = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
      html,
      body {
        margin: 0;
        background: #e0e7ff;
        min-height: 100vh;
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
