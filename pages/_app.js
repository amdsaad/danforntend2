import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appWithTranslation } from "next-i18next";
import Layout from "./Layout";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import { useIsomorphicLayoutEffect } from "./isomorphicEffect";
import { useRef } from "react";

function MyApp({ Component, pageProps }) {
  return (

        <Layout>
          <Component {...pageProps} />
        </Layout>
  
  );
}


export default appWithTranslation(MyApp);
