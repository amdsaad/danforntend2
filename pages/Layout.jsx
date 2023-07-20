import { useRouter } from "next/router";
import { SwitchTransition, Transition } from "react-transition-group";
import { gsap } from "gsap";


const Layout = ({ children }) => {
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
      borderRadius: "0 ",
      stagger: 0.1,
      revesed:true,
    });
  };

  return (
    <>
      <div className="transition-animation bg-[#fbe6ce]"></div>
      <div className="transition-animation  bg-blue-400 "></div>
      {/* <div className="transition-animation  bg-indigo-50"></div> */}
      <SwitchTransition>
        <Transition key={router.pathname} timeout={transitionDuration * 1000} in={true} appear={true} onEnter={onPageEnter} onExit={onPageExit} mountOnEnter={true} unmountOnExit={true}>
          <main>{children}</main>
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default Layout;
