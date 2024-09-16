import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { appWithTranslation } from "next-i18next";
import Layout from "./Layout";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";
import { useState, useContext } from "react";
import { AppProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }) {

  return (
    <AppProvider>
      <Layout>
        <Topbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </AppProvider>

  );
}

export default appWithTranslation(MyApp);
