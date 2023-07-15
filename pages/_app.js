import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appWithTranslation } from "next-i18next";
import Layout from "./Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default appWithTranslation(MyApp);
