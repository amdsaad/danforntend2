import { useRouter } from "next/router";
import { SwitchTransition, Transition } from "react-transition-group";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import { SmootherContext } from "../components/SmootherContext";
import { useIsomorphicLayoutEffect } from "../components/isomorphicEffect";
import { useRef, useState,useContext } from "react";

const Layout = ({ children }) => {

  const smoother = useContext(SmootherContext);
  const router = useRouter();
  const transitionDuration = 0.5;
  const onPageEnter = () => {
    gsap.to(".transition-animation", {
      x: '100%',
      duration: transitionDuration,
      ease: "power4.inOut",
      borderRadius: '0',
      stagger: 0.1,
    });
   
  };

  const onPageExit = () => {
    gsap.to(".transition-animation", {
      x: '0',
      duration: transitionDuration,
      ease: "power4.inOut",
      borderRadius: '0 ',
      stagger: 0.1,
      revesed:true,
    });
  
  };


  // let [smoother, setSmoother] = useState();

   
  // useIsomorphicLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     let smoother = ScrollSmoother.create({
  //       smooth: 2,
  //       normalizeScroll: true, 
  //       ignoreMobileResize: true, 
  //       effects: true,
  //       preventDefault: true
  //     });
  //   });
  //   setSmoother(smoother);
  //   return () => ctx.revert();
  // }, []);



  // let [smoother, setSmoother] = useState(); 
  // useIsomorphicLayoutEffect(() => {
 
  //     let smoother = ScrollSmoother.create({
  //       smooth: 2,
  //       normalizeScroll: true, 
  //       ignoreMobileResize: true, 
  //       effects: true,
  //       preventDefault: true
  //     });
  
  //   setSmoother(smoother);
  
  // }, []);


  return (
    <>
      <div className="transition-animation bg-[#fbe6ce]"></div>
      <div className="transition-animation  bg-blue-400 "></div>
      {/* <div className="transition-animation  bg-indigo-50"></div> */}
      <SwitchTransition>
        <Transition key={router.pathname} timeout={transitionDuration * 1000} in={true} appear={true} onEnter={onPageEnter} onExit={onPageExit} mountOnEnter={true} unmountOnExit={true}>
       {/* <div id="smooth-wrapper">
       <div id="smooth-content">   */}
      
              <main>{children}</main>
       {/* </div>
       </div>  */}
         
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default Layout;
