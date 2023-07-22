import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appWithTranslation } from "next-i18next";
import Layout from "./Layout";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";
import { useState, useContext } from "react";
function MyApp({ Component, pageProps }) {
  let [smoother, setSmoother] = useState();
  return (
    <Layout smoother={smoother} setSmoother={setSmoother}>
      <Topbar />
      <Component {...pageProps} smoother={smoother} setSmoother={setSmoother}/>
      <Footer />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
