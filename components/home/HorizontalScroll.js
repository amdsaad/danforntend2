import React, { useEffect, useRef, useState, useTransition, useCallback, useLayoutEffect } from "react";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

export default function HorizontalScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const panelcontainer = useRef(null);
  if (typeof window !== "undefined") {
  }
  useLayoutEffect(() => {
    let ctx__ = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
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
        },
      });
    }, panelcontainer);

    return () => ctx__.revert();
  }, []);
  const { t } = useTranslation();

  return (
    <section className="panelcontainer relative" ref={panelcontainer}>
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
            <Image height={59} width={59} src="/home/l1.png" style={scrollPosition < 2740 ? { mixBlendMode: "luminosity" } : { mixBlendMode: "normal" }} className="" alt="" />
            <Image height={59} width={59} src="/home/l2.png" style={scrollPosition < 3000 ? { mixBlendMode: "luminosity" } : { mixBlendMode: "normal" }} className="" alt="" />
            <Image height={59} width={59} src="/home/l3.png" style={scrollPosition < 3200 ? { mixBlendMode: "luminosity" } : { mixBlendMode: "normal" }} className="" alt="" />
            <div height={59} width={59} style={scrollPosition < 3350 ? { mixBlendMode: "luminosity" } : { mixBlendMode: "normal" }}>
              <Image height={59} width={59} src="/home/l4.png" className="" alt="" />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 pt-10 lg:pt-72 thin lg:grid-cols-2">
            <div>
              <p className="text-[25px] tBold lg:text-[30px] text-white">{t("AboutDan")}</p>
              <p className=" text-[15px] lg:text-[18px] mt-10 thin text-white">{t("TourismDevelopment")}</p>
              <p className="text-[15px] lg:text-[18px] mt-10 thin text-white">{t("NatureConnection")}</p>
            </div>
            <div className="hidden lg:flex lg:flex-col items-center gap-10">
              <Image height={94} width={93} src="/home/l1.png" style={scrollPosition < 2740 ? { mixBlendMode: "luminosity" } : { mixBlendMode: "normal" }} className="" alt="" />
              <Image height={94} width={93} src="/home/l2.png" style={scrollPosition < 3000 ? { mixBlendMode: "luminosity" } : { mixBlendMode: "normal" }} className="" alt="" />
              <Image height={94} width={93} src="/home/l3.png" style={scrollPosition < 3200 ? { mixBlendMode: "luminosity" } : { mixBlendMode: "normal" }} className="" alt="" />
              <div style={scrollPosition < 3350 ? { mixBlendMode: "luminosity" } : { mixBlendMode: "normal" }}>
                <Image height={94} width={93} src="/home/l4.png" className="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
