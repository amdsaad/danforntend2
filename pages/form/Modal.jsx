import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Form from "./Form";
import { FiXCircle } from "react-icons/fi";

export default function Modal(){

  const animateModal = () => {
 
    gsap.to(".modal", {
      keyframes: [{ backdropFilter: "blur(0px)" }, { scale: 0, y: "100%" }],
      duration: 0.2,
      ease: "none",
      onStart: () => (document.body.style = "overflow-x:hidden"),
    });
  };

 
  return (
    <div className="modal scale-0 fixed w-full h-screen flex justify-center items-center">
      <div className="container w-11/12 lg:w-10/12 xl:w-7/12 min-h-fit py-10 bg-slate-50 rounded-lg flex justify-center items-center shadow-gray-300 drop-shadow-lg m-auto ">
        <button onClick={animateModal} className="absolute top-5 right-5">
          <FiXCircle className="w-6 h-6 text-txt" />
        </button>
        <Form />
      </div>
    </div>
  );
}
