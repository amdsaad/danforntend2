import Topbar from "../components/layout/Topbar";
import React, { useEffect, useRef, useState, useTransition, useCallback, useLayoutEffect } from "react";
import Image from "next/image";
import Footer from "../components/layout/Footer";
import Slider from "react-slick";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Services from "../components/home/Services";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);


export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);


  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const advTL = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#advSection',
  //         start: 'top 300px',
  //         // end: 'center center',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });
  //     const advTL2Content = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#advSection',
  //         start: 'top 150%',
  //         // end: 'center center',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });
  //     const advTL2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#herosection',
  //         start: 'center center',
  //         // end: 'bottom bottom',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });
  //     const advContent = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#advSection',
  //         start: 'top -200px',
  //         end: 'bottom 100px',
  //         ease: 'none',
  //         scrub: 1,

  //       },
  //     });

  //     advTL2.fromTo(advSection_img_1.current, { x: '100%' }, { x: '0', duration: 5 }, 0);
  //     advTL.fromTo(advSection_img_2.current, { y: '100%' }, { y: '-100%', duration: 5 }, '=-5');
  //     advTL2Content.fromTo(advSection_content.current, { y: '100%' }, { y: '0', duration: 5 }, 0)
  //     // advContent.fromTo(advSection_content_btn.current, { opacity: 0 }, { opacity: 100, duration: 5 }, 0)

  //     // *********ruralTourism************
  //     const ruralTourismTL = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#advSection',
  //         start: 'center 40%',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });

  //     const ruralTourismTLContent = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#ruralTourism',
  //         start: 'top 200%',
  //         end: 'top top',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });
  //     const ruralTourismTLContent2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#ruralTourism',
  //         start: 'top 100%',
  //         end: 'top top',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });
  //     ruralTourismTLContent.fromTo(ruralTourism_image1.current, { x: '-100%' }, { x: 0, duration: 3 }, 0);
  //     ruralTourismTLContent2.fromTo(ruralTourism_image2.current, { x: '-100%' }, { x: '0', duration: 3 }, 0);
  //     ruralTourismTLContent.fromTo(ruralTourism_content.current, { y: '100%' }, { y: '0', duration: 3 }, 0);

  //     const ruralTourismTLContentbtn = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#ruralTourism',
  //         start: 'center 60%',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });
  //     ruralTourismTLContentbtn.fromTo(ruralTourism_content_btn.current, { opacity: 0 }, { opacity: 100 }, 0);

  //     // ************ ecotourism *******************
  //     const ecotourismTL = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#ruralTourism',
  //         start: 'center center',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });

  //     ecotourismTL.fromTo(ecotourism_image1.current, { x: '100%' }, { x: '10%' }, 0);

  //     const ecotourismTLContent = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#ecotourism',
  //         start: 'top 350%',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });


  //     ecotourismTLContent.fromTo(ecotourism_image2.current, { y: '100%' }, { y: 0, duration: 3 }, 0);
  //     ecotourismTLContent.fromTo(ecotourism_content.current, { y: '100%' }, { y: '-20%', duration: 3 }, 0);

  //     const ecotourismTLContentbtn = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#ecotourism',
  //         start: 'center 70%',
  //         ease: 'none',
  //         scrub: 1,
  //       },
  //     });
  //     ecotourismTLContentbtn.fromTo(ecotourism_content_btn.current, { opacity: 0 }, { opacity: 100 }, 0);

  //     const sections = gsap.utils.toArray(".panel");

  //     gsap.to(sections, {
  //       xPercent: -100 * (sections.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".panelcontainer",
  //         pin: true,
  //         invalidateOnRefresh: true,
  //         anticipatePin: 1,
  //         scrub: 1.23,
  //         end: () => "+=3000",
  //         preventOverlaps: true
  //       }
  //     });


  //   }, root);

  //   return () => ctx.revert();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   // animateADV()
  //   // animate2()
  //   // let smoother = ScrollSmoother.create({
  //   //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //   //   effects: true // looks for data-speed and data-lag attributes on elements
  //   // });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     // smoother.kill();

  //   };
  // }, [animateADV,]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Topbar />
      <main >
       
        <Services />
        <section className="panelcontainer relative">
          <div className="panel">
            <Image src="/home/Group8029@2x.png" alt="" fill objectFit="cover" />
          </div>
          <div className="panel">
            <Image src="/home/Group8028@2x.png" alt="" fill objectFit="cover" />
          </div>
          <div className="panel">
            <Image src="/home/Group8027@2x.png" alt="" fill objectFit="cover" />
          </div>
          <div className="panel">
            <Image src="/home/Group8026@2x.png" alt="" fill objectFit="cover" />
          </div>
          <div className=" absolute top-0 w-screen bg-black bg-opacity-10">
            <div className=" container">
              <div className="flex lg:hidden pt-20 px-4 items-center gap-10">
                <Image
                  height={59}
                  width={59}
                  src="/home/l1.png"
                  style={
                    scrollPosition < 2740
                      ? { mixBlendMode: "luminosity" }
                      : { mixBlendMode: "normal" }
                  }
                  className=""
                  alt=""
                />
                <Image
                  height={59}
                  width={59}
                  src="/home/l2.png"
                  style={
                    scrollPosition < 3000
                      ? { mixBlendMode: "luminosity" }
                      : { mixBlendMode: "normal" }
                  }
                  className=""
                  alt=""
                />
                <Image
                  height={59}
                  width={59}
                  src="/home/l3.png"
                  style={
                    scrollPosition < 3200
                      ? { mixBlendMode: "luminosity" }
                      : { mixBlendMode: "normal" }
                  }
                  className=""
                  alt=""
                />
                <div
                  height={59}
                  width={59}
                  style={
                    scrollPosition < 3350
                      ? { mixBlendMode: "luminosity" }
                      : { mixBlendMode: "normal" }
                  }
                >
                  <Image
                    height={59}
                    width={59}
                    src="/home/l4.png"
                    className=""
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 pt-10 lg:pt-72 thin lg:grid-cols-2">
                <div>
                  <p className="text-[25px] tBold lg:text-[30px] text-white">
                    {t("AboutDan")}
                  </p>
                  <p className=" text-[15px] lg:text-[18px] mt-10 thin text-white">
                    {t("TourismDevelopment")}
                  </p>
                  <p className="text-[15px] lg:text-[18px] mt-10 thin text-white">
                    {t("NatureConnection")}
                  </p>
                </div>
                <div className="hidden lg:flex lg:flex-col items-center gap-10">
                  <Image
                    height={94}
                    width={93}
                    src="/home/l1.png"
                    style={
                      scrollPosition < 2740
                        ? { mixBlendMode: "luminosity" }
                        : { mixBlendMode: "normal" }
                    }
                    className=""
                    alt=""
                  />
                  <Image
                    height={94}
                    width={93}
                    src="/home/l2.png"
                    style={
                      scrollPosition < 3000
                        ? { mixBlendMode: "luminosity" }
                        : { mixBlendMode: "normal" }
                    }
                    className=""
                    alt=""
                  />
                  <Image
                    height={94}
                    width={93}
                    src="/home/l3.png"
                    style={
                      scrollPosition < 3200
                        ? { mixBlendMode: "luminosity" }
                        : { mixBlendMode: "normal" }
                    }
                    className=""
                    alt=""
                  />
                  <div
                    style={
                      scrollPosition < 3350
                        ? { mixBlendMode: "luminosity" }
                        : { mixBlendMode: "normal" }
                    }
                  >
                    <Image
                      height={94}
                      width={93}
                      src="/home/l4.png"
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* <div className="relative  bg-[#552A0F] overflow-hidden" >
          <Parallax
            strength={500}
            className=" relative h-[1000px]  "
            bgImage="/home/Mask Group 69.png"
            bgImageStyle={{ objectFit: "cover", height: "1000px" }}
          >
            <div className=" absolute w-full h-full top-0 left-0">
              <div className=" container">
                <div className="flex lg:hidden pt-20 px-4 items-center gap-10">
                  <Image
                    height={59}
                    width={59}
                    src="/home/l1.png"
                    style={
                      scrollPosition < 2740
                        ? { mixBlendMode: "luminosity" }
                        : { mixBlendMode: "normal" }
                    }
                    className=""
                    alt=""
                  />
                  <Image
                    height={59}
                    width={59}
                    src="/home/l2.png"
                    style={
                      scrollPosition < 3000
                        ? { mixBlendMode: "luminosity" }
                        : { mixBlendMode: "normal" }
                    }
                    className=""
                    alt=""
                  />
                  <Image
                    height={59}
                    width={59}
                    src="/home/l3.png"
                    style={
                      scrollPosition < 3200
                        ? { mixBlendMode: "luminosity" }
                        : { mixBlendMode: "normal" }
                    }
                    className=""
                    alt=""
                  />
                  <div
                    height={59}
                    width={59}
                    style={
                      scrollPosition < 3350
                        ? { mixBlendMode: "luminosity" }
                        : { mixBlendMode: "normal" }
                    }
                  >
                    <Image
                      height={59}
                      width={59}
                      src="/home/l4.png"
                      className=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 pt-10 lg:pt-72 thin lg:grid-cols-2">
                  <div>
                    <p className="text-[25px] tBold lg:text-[30px] text-white">
                      {t("AboutDan")}
                    </p>
                    <p className=" text-[15px] lg:text-[18px] mt-10 thin text-white">
                      {t("TourismDevelopment")}
                    </p>
                    <p className="text-[15px] lg:text-[18px] mt-10 thin text-white">
                      {t("NatureConnection")}
                    </p>
                  </div>
                  <div className="hidden lg:flex lg:flex-col items-center gap-10">
                    <Image
                      height={94}
                      width={93}
                      src="/home/l1.png"
                      style={
                        scrollPosition < 2740
                          ? { mixBlendMode: "luminosity" }
                          : { mixBlendMode: "normal" }
                      }
                      className=""
                      alt=""
                    />
                    <Image
                      height={94}
                      width={93}
                      src="/home/l2.png"
                      style={
                        scrollPosition < 3000
                          ? { mixBlendMode: "luminosity" }
                          : { mixBlendMode: "normal" }
                      }
                      className=""
                      alt=""
                    />
                    <Image
                      height={94}
                      width={93}
                      src="/home/l3.png"
                      style={
                        scrollPosition < 3200
                          ? { mixBlendMode: "luminosity" }
                          : { mixBlendMode: "normal" }
                      }
                      className=""
                      alt=""
                    />
                    <div
                      style={
                        scrollPosition < 3350
                          ? { mixBlendMode: "luminosity" }
                          : { mixBlendMode: "normal" }
                      }
                    >
                      <Image
                        height={94}
                        width={93}
                        src="/home/l4.png"
                        className=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div> */}
        <div className="w-full mt-16 lg:mt-40 mb-20 overflow-hidden">
          <div className="container">
            <h1 className="text-[25px] text-center lg:bottom-20 lg:text-[30px] tBold text-[#5A2910] pb-16">
              {t("DanTripStatistics")}
            </h1>
            <div className=" hidden lg:grid grid-cols-5 gap-10">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, ind) => (
                <div key={ind} className="relative w-full">
                  <img
                    key={ind}
                    src={`/home/${item}.png`}
                    alt=""
                    className="rounded-md object-cover"
                  />
                  <div className="absolute bottom-5 right-5 z-10">
                    <h1 className="text-white font-bold lg:text-4xl xl:text-6xl">4,160</h1>
                    <p className="text-xs text-white thin pt-1">وحدة ضيافة</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full block lg:hidden">
              <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, ind) => (
                  <div key={ind} className="relative w-full">
                    <img
                      key={ind}
                      src={`/home/${item}.png`}
                      alt=""
                      className="rounded-md w-full object-cover"
                    />
                    <div className="absolute bottom-5 right-5 z-10">
                      <h1 className="text-white font-bold text-6xl  text-right">
                        4,160
                      </h1>
                      <p className="text-xs text-white thin pt-1 text-right">
                        وحدة ضيافة
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="w-full mt-40 mb-20 overflow-hidden">
          <div className="container">
            <h1 className="text-[30px] tBold text-[#5A2910] pb-16">
              {t("LatestNews")}
            </h1>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
              {[1, 2, 3].map((item) => (
                <Link
                  key={item}
                  href="/news-read"
                  className="bg-[#e0e0e047] cursor-pointer"
                >
                  <img src="/home/hand.png" alt="" />
                  <div className="px-4 py-6">
                    <div className="flex items-center justify-between">
                      <button className="px-3 rounded-full py-1 text-sm text-white bg-[#7EBD85]">
                        Project News
                      </button>
                      <p className="text-[#562E15]">22/11/2023</p>
                    </div>
                    <p className="text-[18px]  pt-8 pb-3 text-[#562E15] font-semibold">
                      News Title
                    </p>
                    <p className="text-[#562E15] text-sm lg:text-base ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque lorem lacus, molestie id lacus Lorem ipsum dolor sit
                      amet, consectetur{" "}
                    </p>
                    <div className=" mt-3 flex text-[11px] lg:text-base text-[#562E15]   w-full">
                      Read More {">"}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}