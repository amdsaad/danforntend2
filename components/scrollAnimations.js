import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const introOptions = {
    start: "center 90%",
    end: "+=300px",
  };
  const scrubOptions = {
    start: "center 90%",
    end: "+=300px",
    scrub: 1,
  };
  const scrubElements = gsap.utils.toArray(".scrubElements");
  scrubElements.forEach((e) => {
    if (e.classList.contains("scrubFadeUp")) {
      gsap.from(e, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubFadeLeft")) {
      gsap.from(e, {
        x: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubFadeRight")) {
      gsap.from(e, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubRight")) {
      gsap.from(e, {
        xPercent: 100,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubLeft")) {
      gsap.from(e, {
        xPercent: -100,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubUp")) {
      gsap.from(e, {
        y: 100,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubRotateFadeUp")) {
      gsap.from(e, {
        y: 100,
        rotate:180,
        opacity:0,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubRandom")) {
      gsap.from(e, {
        y: gsap.utils.random(100,-100) ,
        opacity:0,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubRotateFade")) {
      gsap.from(e, {
        rotate:180,
        opacity:0,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scrubFade")) {
      gsap.from(e, {
        opacity:0,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
    if (e.classList.contains("scaleUp")) {
      gsap.from(e, {
        scale: 0,
        scrollTrigger: {
          trigger: e,
          ...scrubOptions,
        },
      });
    }
  });
}