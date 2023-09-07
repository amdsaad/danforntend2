// create next js component
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FaHandshake } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from 'next/dynamic'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import ScrollAnimations from "../scrollAnimations";
import Modal from "../../pages/form/Modal";
import TheHeroBg from "../TheHeroBg";
export default function Services({ tourisms, title, description, about_1, about_2, silders, mainImage, videoURL }) {
  const router = useRouter();
  console.log(router.locale);
  const { locale } = router;
  const advSection = useRef(null);
  const advSection_img_1 = useRef(null);
  const advSection_img_2 = useRef(null);
  const advSection_content = useRef(null);
  const advSection_content_btn = useRef(null);
  const ruralTourism = useRef(null);
  const ruralTourism_image1 = useRef(null);
  const ruralTourism_image2 = useRef(null);
  const ruralTourism_content = useRef(null);
  const ruralTourism_content_btn = useRef(null);
  const ecotourism = useRef(null);
  const ecotourism_image1 = useRef(null);
  const ecotourism_image2 = useRef(null);
  const ecotourism_content = useRef(null);
  const ecotourism_content_btn = useRef(null);
  const herosection = useRef(null);
  const scrollRef = useRef(null);
  const servicesRoot = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  // 233 - 129 - 8

  const [advBtnOver1, setAdvBtnOver1] = useState(false);
  const [advBtnOver2, setAdvBtnOver2] = useState(false);
  const [ruralBtnOver1, setRuralBtnOver1] = useState(false);
  const [ruralBtnOver2, setRuralBtnOver2] = useState(false);
  const [ecoBtnOver1, setEcoBtnOver1] = useState(false);
  const [ecoBtnOver2, setEcoBtnOver2] = useState(false);

  const animateModal = () => {

    gsap.to(".modal", {
      keyframes: [
        {
          scale: 1,

        },
        {
          backdropFilter: "blur(10px)",
        },
      ],
      duration: 0.2,
      ease: "power2.inOut",
    });
  };

  const scrollToElement = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    let ctx = gsap.context(() => {
      let panelWidth = gsap.getProperty(".panel", "width");
      let scrollWidth = gsap.getProperty(".panelcontainer", "width");
      gsap.set(".panelcontainer", { x: `${document.querySelector("html").dir === "rtl" ? "+" : "-"}` + `${scrollWidth - panelWidth}` });
      let mm = gsap.matchMedia()
      mm.add('(min-width:768px)', () => {
        let scrollTween = gsap.to(".panelcontainer", {
          x: 0,
          scrollTrigger: {
            trigger: ".horizontal-scroll",
            pin: ".horizontal-scroll",
            start: "top top",
            scrub: 1,
            end: "+=4000px",
          },
        });

        gsap.set(".image11, .image12, .image13,.image14", { opacity: 0.5, filter: "grayscale(1)" });
        gsap.to(".image11", {
          opacity: 1,
          filter: "grayscale(0)",
          scrollTrigger: {
            trigger: "#panel_image1",
            containerAnimation: scrollTween,
            start: "0",
            toggleActions: "play none none reverse",
            id: "1",
          },
        });
        gsap.to(".image12", {
          opacity: 1,
          filter: "grayscale(0)",
          scrollTrigger: {
            trigger: "#panel_image2",
            containerAnimation: scrollTween,
            start: "left 50%",
            toggleActions: "play none none reverse",

            id: "2",
          },
        });
        gsap.to(".image13", {
          opacity: 1,
          filter: "grayscale(0)",
          scrollTrigger: {
            trigger: "#panel_image3",
            containerAnimation: scrollTween,
            start: "left 50%",
            toggleActions: "play none none reverse",
            id: "3",
          },
        });
        gsap.to(".image14", {
          opacity: 1,
          filter: "grayscale(0)",
          scrollTrigger: {
            trigger: "#panel_image4",
            containerAnimation: scrollTween,
            start: "left 50%",
            toggleActions: "play none none reverse",
            id: "4",
          },
        });

      })


    }, servicesRoot);

    return () => ctx.revert();
  }, [locale]);

  const { t } = useTranslation("");
  return (
    <div ref={servicesRoot} className="relative">
      <Modal />
      <section id="herosection" ref={herosection}>
        <div className="w-full relative  min-h-screen">
          <TheHeroBg mainImage={mainImage} videoURL={videoURL} />

          <div className="absolute w-full h-full z-10">
            <div className="container h-full ">
              <div className=" flex flex-col h-full justify-center  lg:justify-end items-start lg:pb-32">
                <h1

                  className=" text-[24px] lg:text-[35px] text-white font-bold introFadeUp"
                >{title}</h1>
                {
                  description?.map((item, ind) => (
                    <p key={ind}
                      className="text-white text-[16px] lg:text-[16px] lg:w-3/5 py-6  introFadeUp"                    >
                      {item}
                    </p>
                  ))
                }
                <Image src="/home/arrow.png" width={32} height={32} onClick={scrollToElement} className=" cursor-pointer introFadeUp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={scrollRef}></div>

      <section className="w-full relative " id="advSection" ref={advSection}>
        <div className=" absolute top-0 right-0 flex items-end justify-end scrubElements scrubRight" id="advSection_img_1" ref={advSection_img_1}>

          <img src={tourisms[0]?.images[1]?.url} className="hidden lg:hidden xl:block w-[708px] h-[702px]" alt="" />
          {/* <img src={tourisms[0]?.images[1]?.url} className="hidden lg:block xl:hidden" alt="" className='w-[500px] h-[402px]' />
          <img src={tourisms[0]?.images[1]?.url} className="block lg:hidden" alt="" className='w-[300px] h-[324px]' /> */}
          {/* <Image src={tourisms[0]?.images[1]?.url} className="hidden lg:hidden xl:block" alt="" width={708} height={702} /> */}
          {/* <Image src={tourisms[0]?.images[1]?.url} className="hidden lg:block xl:hidden" alt="" width={500} height={402} /> */}
          {/* <Image src={tourisms[0]?.images[1]?.url} className="block lg:hidden" alt="" width={300} height={324} /> */}
        </div>
        <div className=" absolute top-10 right-0 flex items-end justify-end scrubElements scrubFadeUp" id="advSection_img_2" ref={advSection_img_2}>
          <Image src={tourisms[0]?.images[0]?.url} className="hidden lg:hidden xl:block" alt="" width={708} height={702} />
          <Image src={tourisms[0]?.images[0]?.url} className="hidden lg:block xl:hidden" alt="" width={508} height={402} />
          <Image src={tourisms[0]?.images[0]?.url} className="block lg:hidden" alt="" width={300} height={324} />
        </div>

        <div className="container  relative h-[700px]" id="advSection_content" ref={advSection_content}>
          <div className=" pt-96 lg:pt-52 xl:pt-60 px-3 lg:px-0 lg:w-[500px] xl:pl-20 absolute left-0 lg:pr-10 xl:pr-0 lg:left-0 xl:left-16">
            <h1 className="text-[25px] lg:text-[30px] tBold scrubElements scrubFadeUp  text-[#E98108]">{tourisms[0]?.name}</h1>
            <p className="pt-10 pb-16 thin text-[#54290E] scrubElements scrubFadeUp text-[16px] lg:text-[18px] font-thin ">{tourisms[0]?.description}</p>
            <div className="flex items-center gap-4 scrubElements scrubFadeUp w-full" id="advSection_content_btn" ref={advSection_content_btn}>
              <button onClick={animateModal} onMouseEnter={() => setAdvBtnOver1(true)} onMouseLeave={() => setAdvBtnOver1(false)} className="tourisms0 px-[30px] py-2 hidden  bg-transparent  hover:text-white border  rounded-full lg:flex items-center gap-2 " style={{ backgroundColor: !advBtnOver1 ? "transparent" : tourisms[0]?.color, color: advBtnOver1 ? "white" : tourisms[0]?.color, borderColor: tourisms[0]?.color }}>
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                {tourisms[0]?.button_1}
              </button>
              <Link href={"/future-projects"} className="px-[30px] py-2 border rounded-full flex items-center gap-2" onMouseEnter={() => setAdvBtnOver2(true)} onMouseLeave={() => setAdvBtnOver2(false)} style={{ backgroundColor: advBtnOver2 ? "transparent" : tourisms[0]?.color, color: !advBtnOver2 ? "white" : tourisms[0]?.color, borderColor: tourisms[0]?.color }}>
                <BiSearch className="w-5 h-5 " />
                {tourisms[0]?.button_2}
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full relative overflow-hidden" id="ruralTourism" ref={ruralTourism}>
        <div className="absolute top-0 left-0 flex items-center justify-end scrubElements scrubLeft" id="ruralTourism_image1" ref={ruralTourism_image1}>
          <Image src={tourisms[1]?.images[1]?.url} className="hidden lg:hidden xl:block" alt="" width={733} height={708} />
          <Image src={tourisms[1]?.images[1]?.url} className="hidden lg:block xl:hidden" alt="" width={533} height={708} />
          <Image src={tourisms[1]?.images[1]?.url} className="block lg:hidden" alt="" width={338} height={324} />
        </div>
        <div className="absolute top-0 left-0 flex items-center scrubElements scrubLeft justify-end" id="ruralTourism_image2" ref={ruralTourism_image2}>
          <Image src={tourisms[1]?.images[0]?.url} className="hidden lg:hidden xl:block" alt="" width={372} height={708} />
          <Image src={tourisms[1]?.images[0]?.url} className="hidden lg:block xl:hidden" alt="" width={272} height={408} />
          <Image src={tourisms[1]?.images[0]?.url} className="block lg:hidden" alt="" width={171} height={325} />
        </div>
        <div id="ruralTourism_content" ref={ruralTourism_content}

          className={router.locale === "ar" ? "container relative h-[750px] lg:h-[700px] flex justify-start " : "container relative h-[750px] lg:h-[700px] flex justify-end"}
        >
          <div className=" pt-[460px] lg:pt-52 xl:pt-60 px-3 lg:px-0 lg:w-[400px] xl:w-1/3 absolute xl:right-[100px]">
            <h1 className="text-[25px] lg:text-[30px] bottom-20 scrubElements scrubFadeUp tBold text-[#64C07D] ">{tourisms[1]?.name}</h1>
            <p className="pt-10 pb-16 thin text-[#54290E] scrubElements scrubFadeUp text-[16px] lg:text-[18px] font-thin bottom-20">{tourisms[1]?.description}</p>
            <div className="flex items-center gap-4 scrubElements scrubFadeUp" id="ruralTourism_content_btn" ref={ruralTourism_content_btn}>
              <button onClick={animateModal} className="px-[30px] py-2  border rounded-full hidden lg:flex items-center gap-2" onMouseEnter={() => setRuralBtnOver1(true)} onMouseLeave={() => setRuralBtnOver1(false)} style={{ backgroundColor: !ruralBtnOver1 ? "transparent" : tourisms[1]?.color, color: ruralBtnOver1 ? "white" : tourisms[1]?.color, borderColor: tourisms[1]?.color }}>
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                {tourisms[1]?.button_1}
              </button>
              <Link href={"/future-projects"} className="px-[20px] py-2  border rounded-full flex items-center gap-2" onMouseEnter={() => setRuralBtnOver2(true)} onMouseLeave={() => setRuralBtnOver2(false)} style={{ backgroundColor: ruralBtnOver2 ? "transparent" : tourisms[1]?.color, color: !ruralBtnOver2 ? "white" : tourisms[1]?.color, borderColor: tourisms[1]?.color }}>
                <BiSearch className="w-5 h-5 " />
                {tourisms[1]?.button_2}
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full relative mt-24 overflow-hidden " id="ecotourism" ref={ecotourism}>
        <div className="absolute top-0 right-0 flex items-center scrubElements scrubRight justify-end" id="ecotourism_image1" ref={ecotourism_image1}>
          <Image src={tourisms[2]?.images[0]?.url} className="hidden lg:hidden xl:block" alt="" width={704} height={706} />
          <Image src={tourisms[2]?.images[0]?.url} className="hidden lg:block xl:hidden" alt="" width={492} height={706} />
          <Image src={tourisms[2]?.images[0]?.url} className="block lg:hidden" alt="" width={271} height={271} />
        </div>
        <div className="absolute -top-[109px] lg:-top-[151px] scrubElements scrubUp right-0 flex items-center justify-end" id="ecotourism_image2" ref={ecotourism_image2}>
          <Image src={tourisms[2]?.images[1]?.url} className="hidden lg:hidden xl:block" alt="" width={410} height={900} />
          <Image src={tourisms[2]?.images[1]?.url} className="hidden lg:block xl:hidden" alt="" width={306} height={300} />
          <Image src={tourisms[2]?.images[1]?.url} className="block lg:hidden" alt="" width={180} height={346} />
        </div>
        <div className="container relative h-[650px] lg:h-[500px] xl:h-[700px]" id="ecotourism_content" ref={ecotourism_content}>
          <div className="  pt-[350px] px-3 lg:px-0 lg:pt-40 lg:pr-10 xl:pr-0 xl:pt-80 lg:w-[500px] absolute left-0">
            <div className="flex items-center gap-5 scrubElements scrubFadeUp ">
              <h1 className="text-[18px] lg:text-[30px] tBold   text-[#1A92D3] ">{tourisms[2]?.name}</h1>
            </div>
            <p className="pt-10 pb-16 thin text-[#54290E] scrubElements scrubFadeUp  text-[16px] lg:text-[18px] ">{tourisms[2]?.description}</p>
            <div className="flex items-center gap-4 scrubElements scrubFadeUp " id="ecotourism_content_btn " ref={ecotourism_content_btn}>
              <button onClick={animateModal} className="px-[30px] py-2 hidden border rounded-full lg:flex items-center gap-2" onMouseEnter={() => setEcoBtnOver1(true)} onMouseLeave={() => setEcoBtnOver1(false)} style={{ backgroundColor: !ecoBtnOver1 ? "transparent" : tourisms[2]?.color, color: ecoBtnOver1 ? "white" : tourisms[2]?.color, borderColor: tourisms[2]?.color }}>
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                {tourisms[2]?.button_1}
              </button>
              <Link href={"/future-projects"} className="px-[30px] py-2 border rounded-full flex items-center gap-2" onMouseEnter={() => setEcoBtnOver2(true)} onMouseLeave={() => setEcoBtnOver2(false)} style={{ backgroundColor: ecoBtnOver2 ? "transparent" : tourisms[2]?.color, color: !ecoBtnOver2 ? "white" : tourisms[2]?.color, borderColor: tourisms[2]?.color }}>
                <BiSearch className="w-5 h-5 " />
                {tourisms[2]?.button_2}
              </Link>
            </div>
          </div>
        </div>
      </section>




      <section className="relative ltr horizontal-scroll  h-screen">
        <div className="panelcontainer absolute ">
          {/* {
            silders.map((item) => (

              <div key={item.id} className="panel">
                <Image src={item.url} alt="" fill objectFit="cover" id="panel_image1" />
              </div>
            ))
          } */}
          <div className="panel">
            <Image src={silders[0]?.url} alt="" fill objectFit="cover" id="panel_image1" />
          </div>
          <div className="panel">
            <Image src={silders[1]?.url} alt="" fill objectFit="cover" id="panel_image2" />
          </div>
          <div className="panel">
            <Image src={silders[2]?.url} alt="" fill objectFit="cover" id="panel_image3" />
          </div>
          <div className="panel">
            <Image src={silders[3]?.url} alt="" fill objectFit="cover" id="panel_image4" />
          </div>
        </div>
        <div className=" relative w-screen flex  h-full">
          <div className=" container">
            <div className="w-full grid grid-cols-1 pt-5 lg:pt-[150px] thin lg:grid-cols-2">
              <div className="flex lg:hidden pt-5 px-4 items-center gap-10 mb-2">
                <Image height={59} width={59} src="/home/l1.png" className="image11" alt="" />
                <Image height={59} width={59} src="/home/l2.png" className="image12" alt="" />
                <Image height={59} width={59} src="/home/l3.png" className="image13" alt="" />
                <Image height={59} width={59} src="/home/l4.png" className="image14" alt="" />
              </div>
              <div>
                <p className="text-[25px] tBold lg:text-[30px] text-white">{t("nav.about")}</p>
                <div
                  className="text-[14px] lg:text-[14px] mt-10 thin text-white about__html"
                  dangerouslySetInnerHTML={{
                    __html: about_1,
                  }}
                ></div>
                <div className="flex my-5">
                  <Link href={"/about-dan"} className="px-[30px] py-2  border rounded-full flex items-center gap-2" onMouseEnter={() => setRuralBtnOver2(true)} onMouseLeave={() => setRuralBtnOver2(false)} style={{ backgroundColor: ruralBtnOver2 ? "transparent" : tourisms[0]?.color, color: !ruralBtnOver2 ? "white" : tourisms[0]?.color, borderColor: tourisms[0]?.color }}>
                    <BiSearch className="w-5 h-5 " />
                    {t("readmore")}
                  </Link>
                </div>
                <div
                  className="text-[14px] lg:text-[14px] thin text-white about__html"
                  dangerouslySetInnerHTML={{
                    __html: about_2,
                  }}
                ></div>
                {/* <p className=" text-[15px] lg:text-[18px] mt-10 thin text-white">{t("TourismDevelopment")}</p>
                <p className="text-[15px] lg:text-[18px] mt-10 thin text-white">{t("NatureConnection")}</p> */}
              </div>
              <div className="hidden lg:flex lg:flex-col items-center gap-10">
                <Image height={94} width={93} src="/home/l1.png" className={router.locale === "ar" ? "image11" : "image14"} alt="" />
                <Image height={94} width={93} src="/home/l2.png" className={router.locale === "ar" ? "image12" : "image13"} alt="" />
                <Image height={94} width={93} src="/home/l3.png" className={router.locale === "ar" ? "image13" : "image12"} alt="" />
                <div>
                  <Image height={94} width={93} src="/home/l4.png" className={router.locale === "ar" ? "image14" : "image11"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
