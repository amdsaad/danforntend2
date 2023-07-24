import { useRouter } from "next/router";
import { SwitchTransition, Transition } from "react-transition-group";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SmootherContext } from "../components/SmootherContext";
import { useIsomorphicLayoutEffect } from "../components/isomorphicEffect";
import { useState, useContext, useRef } from "react";
const Layout = ({ children,smoother,setSmoother }) => {
  const router = useRouter();
  const transitionDuration = 0.5;
  const onPageEnter = () => {
    gsap.to(".introFadeUp", {y:100,opacity:0})
    gsap.to(".transition-animation", {
      x: "100%",
      duration: transitionDuration,
      ease: "power4.inOut",
      borderRadius: "0",
      stagger: 0.1,
    });
    gsap.to(".introFadeUp", {
        y:0,
        opacity:1,
        duration:1,
       stagger:.1,
       ease:'sine'
      });
  

  };

  const onPageExit = () => {
    gsap.to(".transition-animation", {
      x: "0",
      duration: transitionDuration,
      ease: "power4.inOut",
      borderRadius: "0 ",
      stagger: 0.1,
      revesed: true,
    });
    
  };

  
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    let smoother = ScrollSmoother.create({
      smooth: 2,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      preventDefault: true,
      
    });
    setSmoother(smoother);
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div className="transition-animation bg-[#fbe6ce]"></div>
      <div className="transition-animation  bg-[#fbe6ce]"></div>
      {/* <div className="transition-animation  bg-indigo-50"></div> */}
      <SmootherContext.Provider value={smoother}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <SwitchTransition>
              <Transition 
              key={router.pathname} 
              timeout={transitionDuration * 1000} 
              in={true} 
              appear={true} 
              onEnter={onPageEnter} 
              onExit={onPageExit} 
              mountOnEnter={true} 
              unmountOnExit={true}
              
              >
                <main>{children}</main>
              </Transition>
            </SwitchTransition>
          </div>
        </div>
      </SmootherContext.Provider>
    </>
  );
};

export default Layout;
