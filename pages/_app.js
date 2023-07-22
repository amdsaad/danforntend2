import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appWithTranslation } from "next-i18next";
import Layout from "./Layout";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";
import { SmootherContext } from "../components/SmootherContext";
import { useIsomorphicLayoutEffect } from "../components/isomorphicEffect";
import { useState, useContext } from "react";

function MyApp({ Component, pageProps }) {
  // let [smoother, setSmoother] = useState();
  // useIsomorphicLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  //   let smoother = ScrollSmoother.create({
  //     smooth: 1,
  //     normalizeScroll: true,
  //     ignoreMobileResize: true,
  //     effects: true,
  //     preventDefault: true,
  //   });
  //   setSmoother(smoother);
  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
