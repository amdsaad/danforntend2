// create next js component
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import Image from "next/image";




export default function TheHeroBg({ mainImage, videoURL }) {
    console.log("mainImage", mainImage);
    console.log("videoURL", videoURL);


    return (
        <div className="absolute top-0 right-0 left-0 h-screen overflow-hidden">

            {
                mainImage ?
                    <Image
                        src={mainImage}
                        alt="hero"
                        className="hidden lg:block introFadeUp"
                        fill
                        objectFit="cover"
                    />
                    // <img src={mainImage} alt="mainImage" className="absolute inset-0 object-cover w-full h-full" />
                    :
                    <video src={videoURL}
                        autoPlay muted width={'100%'} height={'100%'} loop className="relative" ></video>
            }

        </div>
    )
}
