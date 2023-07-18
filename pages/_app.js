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
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Topbar/>

      <Component {...pageProps} />
<Footer/>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
