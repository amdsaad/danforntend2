// create next js component
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import Image from "next/image";




export default function TheHeroBg({ mainImage, videoURL }) {




    useEffect(() => {
        // console.log('videoURL', videoURL)
        // console.log('mainImage', mainImage)

        // check if browser is safari
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        console.log('isSafari', isSafari)
        if (isSafari) {
            const videElement = document.getElementById('videoBg')
            console.log('videElement', videElement)
            // update video attributes for autoplay for safari

            if (videElement) {
                videElement.setAttribute('autoplay', '');
                videElement.setAttribute('muted', '');
                videElement.setAttribute('playsinline', '');
                videElement.setAttribute('loop', '');
                videElement.setAttribute('controls', '');
                videElement.setAttribute('preload', 'auto');
            }

        }
    }, [])


    return (
        <div className="absolute top-0 right-0 left-0 h-screen overflow-hidden">

            {
                videoURL ?
                    <video src={videoURL}
                        className='videoBg'
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
