import React, { useEffect, useRef, useState } from "react";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { BiShareAlt } from "react-icons/bi";
import { AiFillFilePdf } from "react-icons/ai";
import { FaPlay, FaPause } from "react-icons/fa";
const NewsRead = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Topbar gd={true} />
      <section>
        <div className="w-full relative pb-20 lg:pb-0  min-h-screen">
          <Image
            src="/nr/hero.png"
            alt="hero"
            className="hidden lg:block"
            fill
            objectFit="cover"
          />
          <Image
            src="/nr/heromob.png"
            alt="hero"
            className="block lg:hidden"
            fill
            objectFit="cover"
          />
          <div className="relative lg:absolute w-full h-full z-10">
            <div className="container h-full ">
              <div className=" flex flex-col   pt-40">
                <p className="text-txt text-sm lg:text-base flex items-center gap-1 cursor-pointer">
                  <IoIosArrowForward className="w-6 h-6" />
                  كل الأخبار
                </p>
                <h1 className=" text-[22px]  lg:text-[46px] text-txt font-bold">
                  الخبر الأول
                </h1>
              </div>
              <div className="flex items-center mt-10 justify-between">
                <div className="flex items-center gap-4">
                  <div className="px-5 rounded-full py-1 text-[9px] lg:text-base text-white bg-[#F84D4A]">
                    اقتصاد وبيئة
                  </div>
                  <p className="text-[9px] lg:text-xl text-txt">نشر في</p>
                  <p className="text-[9px] lg:text-xl text-txt">22/11/2023</p>
                </div>
                <div className="flex items-center gap-2">
                  <AiFillFilePdf className="w-7 h-7 text-[#E98108] cursor-pointer" />
                  <BiShareAlt className="w-7 h-7 text-[#E98108] cursor-pointer" />
                </div>
              </div>
              <p className="text-[#626262] text-[16px] lg:text-[18px] thin pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                lorem lacus, molestie id lacus et, maximus dapibus nisl. Fusce
                quis libero urna. In hac habitasse platea dictumst. Donec
                tincidunt nisl nec nisi elementum suscipit. Maecenas felis ex,
                consectetur a enim vitae, congue elementum nisi. Etiam laoreet,
                eros in rutrum mattis, lacus dolor cursus lorem, non scelerisque
                libero augue ut nisi. Sed non orci odio. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Quisque lorem lacus, molestie
                id lacus et, maximus dapibus nisl. Fusce quis libero urna. In
                hac habitasse platea dictumst. Donec tincidunt nisl nec nisi
                elementum suscipit. Maecenas felis ex, consectetur a enim vitae,
                congue elementum nisi. Etiam laoreet, eros in rutrum mattis,
                lacus dolor cursus lorem, non scelerisque libero augue ut nisi.
                Sed non orci odio.
              </p>
              <p className="text-[#626262] text-[16px] lg:text-[18px] thin pt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                lorem lacus, molestie id lacus et, maximus dapibus nisl. Fusce
                quis libero urna. In hac habitasse platea dictumst. Donec
                tincidunt nisl nec nisi elementum suscipit. Maecenas felis ex,
                consectetur a enim vitae, congue elementum nisi. Etiam laoreet,
                eros in rutrum mattis, lacus dolor cursus lorem, non scelerisque
                libero augue ut nisi. Sed non orci odio.
              </p>
              <p className="text-[#626262] text-[16px] lg:text-[18px] thin pt-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
                fugiat delectus ipsam iure tempore quia dolor assumenda! Id,
                officia velit ipsum, eum saepe itaque, qui aspernatur
                consequuntur repellendus dolor laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et ab iste dolorum libero sit suscipit quod amet expedita neque aut iure voluptates nostrum quae distinctio dicta recusandae, enim cum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container">
          <BigScreenVideo />
          <p className="text-[#626262] text-[16px] lg:text-[18px] thin pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            lorem lacus, molestie id lacus et, maximus dapibus nisl. Fusce quis
            libero urna. In hac habitasse platea dictumst. Donec tincidunt nisl
            nec nisi elementum suscipit. Maecenas felis ex, consectetur a enim
            vitae, congue elementum nisi. Etiam laoreet, eros in rutrum mattis,
            lacus dolor cursus lorem, non scelerisque libero augue ut nisi. Sed
            non orci odio. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Quisque lorem lacus, molestie id lacus et, maximus dapibus
            nisl. Fusce quis libero urna. In hac habitasse platea dictumst.
            Donec tincidunt nisl nec nisi elementum suscipit. Maecenas felis ex,
            consectetur a enim vitae, congue elementum nisi. Etiam laoreet, eros
            in rutrum mattis, lacus dolor cursus lorem, non scelerisque libero
            augue ut nisi. Sed non orci odio.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const BigScreenVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const handlePlayClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoHover = () => {
    setIsHovered(!isHovered);
  };

  const updateProgressBar = () => {
    const video = videoRef.current;
    const progress = (video.currentTime / video.duration) * 100;
    progressRef.current.style.width = `${progress}%`;
  };

  useEffect(() => {
    const video = videoRef.current;

    // Update the video source when the videoObj changes
    video.src = `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=5`;
    video.load(); // Load the updated video source

    // Pause the video when the videoObj changes
    video.pause();
    setIsPlaying(false);

    // Reset the progress bar
    progressRef.current.style.width = "0%";

    // Add event listeners
    video.addEventListener("timeupdate", updateProgressBar);

    // Clean up the event listener on unmount
    return () => {
      video.removeEventListener("timeupdate", updateProgressBar);
    };
  }, []);

  return (
    <div
      className="relative w-full h-auto lg:h-[600px] rounded-xl overflow-hidden"
      onMouseEnter={handleVideoHover}
      onMouseLeave={handleVideoHover}
    >
      <video
        ref={videoRef}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
        className="w-full h-full object-fill rounded-lg  custom-video-controls"
        onClick={handlePlayClick}
        onTimeUpdate={isPlaying ? updateProgressBar : null}
      >
        <source
          src={`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=5`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl focus:outline-none"
          onClick={handlePlayClick}
        >
          <FaPlay />
        </button>
      )}
      {isHovered && isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl focus:outline-none"
          onClick={handlePlayClick}
        >
          <FaPause />
        </button>
      )}
      <div className="absolute bottom-0 left-0 w-full h-2 ">
        <div
          ref={progressRef}
          className="h-full "
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default NewsRead;
