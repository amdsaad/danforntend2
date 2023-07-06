// create next js component
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FaHandshake } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useRouter } from 'next/router';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

export default function Services() {
    const router = useRouter();
    const { locale: activeLocale } = router;


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
    const servicesRoot = useRef();
    const herosection = useRef(null);
    const scrollRef = useRef(null);
    const panelcontainer = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollToElement = () => {
        const element = scrollRef.current;
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        let ctx = gsap.context(() => {
            const advTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#advSection',
                    start: 'top 300px',
                    // end: 'center center',
                    ease: 'none',
                    scrub: 1,
                },
            });
            const advTL2Content = gsap.timeline({
                scrollTrigger: {
                    trigger: '#advSection',
                    start: 'top 150%',
                    // end: 'center center',
                    ease: 'none',
                    scrub: 1,
                },
            });
            const advTL2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#herosection',
                    start: 'center center',
                    // end: 'bottom bottom',
                    ease: 'none',
                    scrub: 1,
                },
            });
            const advContent = gsap.timeline({
                scrollTrigger: {
                    trigger: '#advSection',
                    start: 'top -200px',
                    end: 'bottom 100px',
                    ease: 'none',
                    scrub: 1,

                },
            });

            advTL2.fromTo(advSection_img_1.current, { x: '100%' }, { x: '0', duration: 5 }, 0);
            advTL.fromTo(advSection_img_2.current, { y: '100%' }, { y: '-100%', duration: 5 }, '=-5');
            advTL2Content.fromTo(advSection_content.current, { y: '100%' }, { y: '0', duration: 5 }, 0)
            // advContent.fromTo(advSection_content_btn.current, { opacity: 0 }, { opacity: 100, duration: 5 }, 0)

            // *********ruralTourism************
            const ruralTourismTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#advSection',
                    start: 'center 40%',
                    ease: 'none',
                    scrub: 1,
                },
            });

            const ruralTourismTLContent = gsap.timeline({
                scrollTrigger: {
                    trigger: '#ruralTourism',
                    start: 'top 200%',
                    end: 'top top',
                    ease: 'none',
                    scrub: 1,
                },
            });
            const ruralTourismTLContent2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '#ruralTourism',
                    start: 'top 100%',
                    end: 'top top',
                    ease: 'none',
                    scrub: 1,
                },
            });
            ruralTourismTLContent.fromTo(ruralTourism_image1.current, { x: '-100%' }, { x: 0, duration: 3 }, 0);
            ruralTourismTLContent2.fromTo(ruralTourism_image2.current, { x: '-100%' }, { x: '0', duration: 3 }, 0);
            ruralTourismTLContent.fromTo(ruralTourism_content.current, { y: '100%' }, { y: '0', duration: 3 }, 0);

            const ruralTourismTLContentbtn = gsap.timeline({
                scrollTrigger: {
                    trigger: '#ruralTourism',
                    start: 'center 60%',
                    ease: 'none',
                    scrub: 1,
                },
            });
            ruralTourismTLContentbtn.fromTo(ruralTourism_content_btn.current, { opacity: 0 }, { opacity: 100 }, 0);

            // ************ ecotourism *******************
            const ecotourismTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '#ruralTourism',
                    start: 'center center',
                    ease: 'none',
                    scrub: 1,
                },
            });

            ecotourismTL.fromTo(ecotourism_image1.current, { x: '100%' }, { x: '10%' }, 0);

            const ecotourismTLContent = gsap.timeline({
                scrollTrigger: {
                    trigger: '#ecotourism',
                    start: 'top 350%',
                    ease: 'none',
                    scrub: 1,
                },
            });


            ecotourismTLContent.fromTo(ecotourism_image2.current, { y: '100%' }, { y: 0, duration: 3 }, 0);
            ecotourismTLContent.fromTo(ecotourism_content.current, { y: '100%' }, { y: '-20%', duration: 3 }, 0);

            const ecotourismTLContentbtn = gsap.timeline({
                scrollTrigger: {
                    trigger: '#ecotourism',
                    start: 'center 70%',
                    ease: 'none',
                    scrub: 1,
                },
            });
            ecotourismTLContentbtn.fromTo(ecotourism_content_btn.current, { opacity: 0 }, { opacity: 100 }, 0);
            const sections = gsap.utils.toArray(".panel");

            const scrollTween = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".panelcontainer",
                    pin: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    scrub: 1.23,
                    end: () => "+=3000",
                    preventOverlaps: true,
                    toggleClass: "active",
                }
            });
            gsap.set(".image11, .image12, .image13,.image14", { opacity: 0.5, filter: 'grayscale(1)' });


            gsap.to(".image11", {
                opacity: 1,
                filter: 'grayscale(0)',
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
                filter: 'grayscale(0)',
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
                filter: 'grayscale(0)',
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
                filter: 'grayscale(0)',
                scrollTrigger: {
                    trigger: "#panel_image4",
                    containerAnimation: scrollTween,
                    start: "left 50%",
                    toggleActions: "play none none reverse",
                    id: "4",
                },

            });


        }, servicesRoot);

        return () => ctx.revert();
    }, []);
    const { t } = useTranslation("");

    return (
        <div ref={servicesRoot}>
            <section id="herosection" ref={herosection}>
                <div className="w-full relative  min-h-screen">
                    <Image
                        src="/home/hero.png"
                        alt="hero"
                        className="hidden lg:block"
                        fill
                        objectFit="cover"
                    />
                    <Image
                        src="/home/heromob.png"
                        alt="hero"
                        className="block lg:hidden"
                        fill
                        objectFit="cover"
                    />
                    <div className="absolute w-full h-full z-10">
                        <div className="container h-full ">
                            <div className=" flex flex-col h-full justify-center  lg:justify-end items-start lg:pb-32">
                                <h1 className=" text-[35px] lg:text-[50px] text-white font-bold">
                                    {t("OurNature")}
                                </h1>
                                <p className="text-white text-[16px] lg:text-[22px] lg:w-2/5 py-6 ">
                                    {t("DanCompanyGoal")}
                                </p>
                                <Image
                                    src="/home/arrow.png"
                                    width={32}
                                    height={32}
                                    onClick={scrollToElement}
                                    className=" cursor-pointer"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full relative overflow-hidden" id="advSection" ref={advSection}>
                <div className=" absolute top-0 right-0 flex items-end justify-end" id="advSection_img_1" ref={advSection_img_1} >
                    <Image
                        src="/home/adb.png"
                        className="hidden lg:hidden xl:block"
                        alt=""
                        width={708}
                        height={702}
                    />
                    <Image
                        src="/home/adb.png"
                        className="hidden lg:block xl:hidden"
                        alt=""
                        width={500}
                        height={402}
                    />
                    <Image
                        src="/home/adb.png"
                        className="block lg:hidden"
                        alt=""
                        width={300}
                        height={324}
                    />
                </div>
                <div className=" absolute top-10 right-0 flex items-end justify-end" id="advSection_img_2" ref={advSection_img_2}>
                    <Image
                        src="/home/ad.png"
                        className="hidden lg:hidden xl:block"
                        alt=""
                        width={708}
                        height={702}
                    />
                    <Image
                        src="/home/ad.png"
                        className="hidden lg:block xl:hidden"
                        alt=""
                        width={508}
                        height={402}
                    />
                    <Image
                        src="/home/ad.png"
                        className="block lg:hidden"
                        alt=""
                        width={300}
                        height={324}
                    />
                </div>

                <div className="container  relative h-[700px]" id="advSection_content" ref={advSection_content} >
                    <div className=" pt-96 lg:pt-52 xl:pt-60 px-3 lg:px-0 lg:w-[500px] xl:pl-20 absolute left-0 lg:pr-10 xl:pr-0 lg:left-0 xl:left-16">
                        <h1 className="text-[25px] lg:text-[30px] tBold  text-[#E98108]">
                            {t("AdventureTourism")}
                        </h1>
                        <p className="pt-10 pb-16 thin text-[#54290E] text-[16px] lg:text-[18px] font-thin ">
                            {t("InspireReconnection")}
                        </p>
                        <div className="flex items-center gap-4  w-full" id="advSection_content_btn" ref={advSection_content_btn}>
                            <button className="pr-3 pl-[30px] py-2 hidden   hover:bg-[#F97A00] bg-transparent text-pr hover:text-white border border-pr rounded-full lg:flex items-center gap-2">
                                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                                {t("JoinDanPartners")}
                            </button>
                            <button className="pr-3 pl-[30px] py-2 text-white  bg-[#F97A00] hover:bg-transparent hover:text-pr border border-pr rounded-full flex items-center gap-2">
                                <BiSearch className="w-5 h-5 " />
                                {t("DiscoverMore")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full relative overflow-hidden" id="ruralTourism" ref={ruralTourism}>
                <div className="absolute top-0 left-0 flex items-center justify-end" id="ruralTourism_image1" ref={ruralTourism_image1}>
                    <Image
                        src="/home/agb.png"
                        className="hidden lg:hidden xl:block"
                        alt=""
                        width={733}
                        height={708}
                    />
                    <Image
                        src="/home/agb.png"
                        className="hidden lg:block xl:hidden"
                        alt=""
                        width={533}
                        height={708}
                    />
                    <Image
                        src="/home/agb.png"
                        className="block lg:hidden"
                        alt=""
                        width={338}
                        height={324}
                    />
                </div>
                <div className="absolute top-0 left-0 flex items-center justify-end" id="ruralTourism_image2" ref={ruralTourism_image2}>
                    <Image
                        src="/home/ag.png"
                        className="hidden lg:hidden xl:block"
                        alt=""
                        width={372}
                        height={708}
                    />
                    <Image
                        src="/home/ag.png"
                        className="hidden lg:block xl:hidden"
                        alt=""
                        width={272}
                        height={408}
                    />
                    <Image
                        src="/home/ag.png"
                        className="block lg:hidden"
                        alt=""
                        width={171}
                        height={325}
                    />
                </div>
                <div className="container relative h-[750px] lg:h-[700px]" id="ruralTourism_content" ref={ruralTourism_content}>
                    <div className=" pt-[460px] lg:pt-52 xl:pt-60 px-3 lg:px-0 lg:w-[400px] xl:w-1/3 absolute xl:right-[100px]">
                        <h1 className="text-[25px] lg:text-[30px] bottom-20  tBold text-[#64C07D] ">
                            {t("RuralTourism")}
                        </h1>
                        <p className="pt-10 pb-16 thin text-[#54290E] text-[16px] lg:text-[18px] font-thin bottom-20">
                            {t("DiscoverKingdomRoots")}
                        </p>
                        <div className="flex items-center gap-4 " id="ruralTourism_content_btn" ref={ruralTourism_content_btn}>
                            <button className="pr-3 pl-[30px] py-2   hover:bg-pr bg-transparent text-pr hover:text-white border border-pr rounded-full hidden lg:flex items-center gap-2">
                                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                                {t("JoinDanPartners")}
                            </button>
                            <button className="pr-3 pl-[30px] py-2 text-white  bg-[#00A386] hover:bg-transparent hover:text-[#00A386] border border-[#00A386] rounded-full flex items-center gap-2">
                                <BiSearch className="w-5 h-5 " />
                                {t("DiscoverMore")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full relative mt-24 overflow-hidden" id="ecotourism" ref={ecotourism}>
                <div className="absolute top-0 right-0 flex items-center justify-end" id="ecotourism_image1" ref={ecotourism_image1}>
                    <Image
                        src="/home/ecob.png"
                        className="hidden lg:hidden xl:block"
                        alt=""
                        width={704}
                        height={706}
                    />
                    <Image
                        src="/home/ecob.png"
                        className="hidden lg:block xl:hidden"
                        alt=""
                        width={492}
                        height={706}
                    />
                    <Image
                        src="/home/ecob.png"
                        className="block lg:hidden"
                        alt=""
                        width={271}
                        height={271}
                    />
                </div>
                <div className="absolute -top-[109px] lg:-top-[151px] right-0 flex items-center justify-end" id="ecotourism_image2" ref={ecotourism_image2}>
                    <Image
                        src="/home/eco.png"
                        className="hidden lg:hidden xl:block"
                        alt=""
                        width={410}
                        height={900}
                    />
                    <Image
                        src="/home/eco.png"
                        className="hidden lg:block xl:hidden"
                        alt=""
                        width={306}
                        height={300}
                    />
                    <Image
                        src="/home/eco.png"
                        className="block lg:hidden"
                        alt=""
                        width={180}
                        height={346}
                    />
                </div>
                <div className="container relative h-[550px] lg:h-[500px] xl:h-[700px]" id="ecotourism_content" ref={ecotourism_content}>
                    <div className="  pt-[350px] px-3 lg:px-0 lg:pt-40 lg:pr-10 xl:pr-0 xl:pt-80 lg:w-[500px] absolute left-0">
                        <div className="flex items-center gap-5 ">
                            <h1 className="text-[18px] lg:text-[30px] tBold   text-[#1A92D3] ">
                                {t("Ecotourism")}
                            </h1>
                        </div>
                        <p className="pt-10 pb-16 thin text-[#54290E] text-[16px] lg:text-[18px] ">
                            {t("EnjoyDailyLife")}
                        </p>
                        <div className="flex items-center gap-4 " id="ecotourism_content_btn" ref={ecotourism_content_btn}>
                            <button className="pr-3 pl-[30px] py-2 hidden   hover:bg-[#F97A00] bg-transparent text-pr hover:text-white border border-pr rounded-full lg:flex items-center gap-2">
                                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                                {t("JoinDanPartners")}
                            </button>
                            <button className="pr-3 pl-[30px] py-2 text-white  bg-[#0095D9] hover:bg-transparent hover:text-[#0095D9] border border-[#0095D9] rounded-full flex items-center gap-2">
                                <BiSearch className="w-5 h-5 " />
                                {t("DiscoverMore")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="panelcontainer relative" ref={panelcontainer} >
                <div className="panel">
                    <Image src="/home/Group8029@2x.jpg" alt="" fill objectFit="cover" id="panel_image1" />
                </div>
                <div className="panel">
                    <Image src="/home/Group8028@2x.jpg" alt="" fill objectFit="cover" id="panel_image2" />
                </div>
                <div className="panel">
                    <Image src="/home/Group8027@2x.jpg" alt="" fill objectFit="cover" id="panel_image3" />
                </div>
                <div className="panel">
                    <Image src="/home/Group8026@2x.jpg" alt="" fill objectFit="cover" id="panel_image4" />
                </div>
                <div className="absolute top-0 left-0 w-screen" >
                    <div className=" container">

                        <div className="w-full grid grid-cols-1 pt-10 lg:pt-[150px] thin lg:grid-cols-2">
                            <div className="flex lg:hidden pt-20 px-4 items-center gap-10">
                                <Image
                                    height={59}
                                    width={59}
                                    src="/home/l1.png"
                                    className="image11"
                                    alt=""
                                />
                                <Image
                                    height={59}
                                    width={59}
                                    src="/home/l2.png"
                                    className="image12"
                                    alt=""
                                />
                                <Image
                                    height={59}
                                    width={59}
                                    src="/home/l3.png"

                                    className="image13"
                                    alt=""
                                />

                                <Image
                                    height={59}
                                    width={59}
                                    src="/home/l4.png"
                                    className="image14"
                                    alt=""
                                />
                            </div>
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

                                    className="image11"
                                    alt=""
                                />
                                <Image
                                    height={94}
                                    width={93}
                                    src="/home/l2.png"

                                    className="image12"
                                    alt=""
                                />
                                <Image
                                    height={94}
                                    width={93}
                                    src="/home/l3.png"

                                    className="image13"
                                    alt=""
                                />
                                <div
                                >
                                    <Image
                                        height={94}
                                        width={93}
                                        src="/home/l4.png"
                                        className="image14"
                                        alt=""
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
