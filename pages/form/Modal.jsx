import Form from "./Form";
import { useState } from "react";
import { gsap } from "gsap";


export default function Modal() {
  const animateModal = ()=>{

    gsap.to('.modal',{
 
      y:'100%',
      scale:0,
      duration:1,
      ease:'power2.inOut'
    })

  }

  return (
    <div className=" modal scale-0 w-2/3 h-[50vw] bg-slate-50 rounded-lg  shadow-gray-300 drop-shadow-lg m-auto fixed inset-0">
      <button onClick={animateModal}>Close</button>

      <Form />
    </div>
  );
}
