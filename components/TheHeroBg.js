// create next js component
import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import Image from "next/image";




export default function TheHeroBg({ mainImage, videoURL }) {




    useEffect(() => {
        // console.log('videoURL', videoURL)
        // console.log('mainImage', mainImage)
        const video = document.querySelector('.videoBg')

        // check if browser is safari
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        console.log('isSafari', isSafari)
        if (isSafari) {
            const handleFirstInteraction = () => {
                const video = document.getElementById('videoBg');
                video.play();
                document.removeEventListener('click', handleFirstInteraction);
            };

            document.addEventListener('click', handleFirstInteraction);

            return () => {
                document.removeEventListener('click', handleFirstInteraction);
            };
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
