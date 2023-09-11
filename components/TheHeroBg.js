// create next js component
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import Image from "next/image";




export default function TheHeroBg({ mainImage, videoURL }) {

    const videoRef = useRef(null);



    useEffect(() => {
        // console.log('videoURL', videoURL)
        // console.log('mainImage', mainImage)

        // check if browser is safari
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        console.log('isSafari', isSafari)
        if (isSafari) {
            console.log(videoRef.current)
            

            if (videoURL && videoRef.current) {
                videoRef.current.setAttribute("playsinline", "playsinline");
                videoRef.current.setAttribute("muted", "muted");
                videoRef.current.setAttribute("autoplay", "autoplay");
                videoRef.current.setAttribute("loop", "loop");
                videoRef.current.setAttribute("preload", "auto");
            }

        }
    }, [videoURL])


    return (
        <div className="absolute top-0 right-0 left-0 h-screen overflow-hidden">

            {
                videoURL ?
                    <video src={videoURL}
                        className='videoBg'
                        ref={videoRef}
                        id="videoBg"
                        autoPlay muted loop  ></video>

                    // <img src={mainImage} alt="mainImage" className="absolute inset-0 object-cover w-full h-full" />
                    :
                    <Image
                        src={mainImage}
                        alt="hero"
                        className="block introFadeUp"
                        fill
                        objectFit="cover"
                    />
            }

        </div>
    )
}
