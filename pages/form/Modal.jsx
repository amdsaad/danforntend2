import Form from "./Form";
import { useState } from "react";
import { gsap } from "gsap";
import ContactForm from "./ContactForm";
import { FiXCircle } from "react-icons/fi";

export default function Modal() {
  const animateModal = () => {
    gsap.to(".modal", {
      keyframes: [
        {   backdropFilter: "blur(0px)", },
         { scale: 0,  y: "100%",  },
      ],
      duration: 1.5,
      ease: "power4.inOut",
      onStart: () => (document.body.style = "overflow-x:hidden"),
    });
  };

  return (
    <div className=" modal  scale-0 fixed inset-0 translate-y-full flex justify-center items-center">
      <div className="container w-2/3 h-2/3 bg-slate-50 rounded-lg flex justify-center items-center shadow-gray-300 drop-shadow-lg m-auto ">
        <button onClick={animateModal} className="absolute top-5 right-5">
          <FiXCircle className="w-6 h-6 text-txt" />
        </button>
        <ContactForm />
        {/* <Form/> */}
      </div>
    </div>
  );
}
