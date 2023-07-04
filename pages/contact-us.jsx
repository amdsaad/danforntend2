import React, { useRef } from "react";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const scrollRef = useRef(null);

  const scrollToElement = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 24.709113, // Specify the initial center latitude
    lng: 46.674211, // Specify the initial center longitude
  };
  const { t } = useTranslation();
  return (
    <div className=" relative w-full min-h-screen">
      <Topbar />
      <section>
        <div className="w-full relative  min-h-screen">
          <Image
            src="/contact/hero.png"
            alt="hero"
            className="hidden lg:block"
            fill
            objectFit="cover"
          />
          <Image
            src="/contact/heromob.png"
            alt="hero"
            className="block lg:hidden"
            fill
            objectFit="cover"
          />
          <div className="absolute w-full h-full z-10">
            <div className="container h-full ">
              <div className=" flex flex-col h-full justify-center  lg:lg:justify-end items-start lg:pb-32">
                <h1 className=" text-[24px]  lg:text-[50px] text-white font-bold">
                  {t("contact_us")}
                </h1>
                <p className="text-white text-[16px] lg:text-[18px] lg:w-2/5 py-6 ">
                  {t("contact_txt")}
                </p>
                <Image
                  src="/home/arrow.png"
                  width={32}
                  height={32}
                  onClick={scrollToElement}
                  className=" cursor-pointer"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={scrollRef}></div>
      <section className="mt-40 mb-20">
        <div className="container">
          <div className="flex flex-col items-center gap-5 lg:gap-10">
            <Image
              className="mx-auto hidden lg:block"
              width={84}
              height={84}
              src={`/home/l3.png`}
              alt=""
            />
            <Image
              className="mx-auto block lg:hidden"
              width={40}
              height={40}
              src={`/home/l3.png`}
              alt=""
            />
            <p className="text-[#552A0E] text-center text-[14px] lg:text-[18px] thin lg:w-4/5 ">
              {t("contact_desc")}
            </p>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-10 gap-y-4 lg:gap-y-8 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <input
                type="text"
                className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin"
                placeholder={t("FullName")}
              />
            </div>
            <div>
              <input
                type="text"
                className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin"
                placeholder={t("Email")}
              />
            </div>
            <div>
              <input
                type="text"
                className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-txt placeholder:text-txt thin"
                placeholder={t("MobileNumber")}
              />
            </div>
            <div className="lg:col-span-2">
              <input
                type="text"
                className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin"
                placeholder={t("City")}
              />
            </div>
            <div className="lg:col-span-2">
              <input
                type="text"
                className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin"
                placeholder={t("AreaOfInterest")}
              />
            </div>
            <div className="lg:col-span-4">
              <textarea
                placeholder={t("MessageText")}
                className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center flex-col lg:flex-row gap-10 justify-between mt-10">
            <div className=" hidden lg:flex items-center gap-3">
              <p className="text-[19px] text-txt ">{t("FollowUs")}</p>
              <BsTwitter className="w-6 h-6 text-txt" />
              <BsLinkedin className="w-6 h-6 text-txt thin" />{" "}
            </div>
            <button className="px-32 py-3 thin bg-[#E5E6E7] text-txt hover:bg-txt hover:text-white  bg-opacity-40 text-lg">
              {t("send")}
            </button>
            <div className=" flex lg:hidden items-center gap-3">
              <p className="text-[19px] text-txt ">تابعنا</p>
              <BsTwitter className="w-6 h-6 text-txt" />
              <BsLinkedin className="w-6 h-6 text-txt thin" />{" "}
            </div>
          </div>
          <div className="mt-10 bg-white">
            <LoadScript googleMapsApiKey="AIzaSyDhEd4erdTFIBvGYH5r1Uyv7D7ssra05I0">
              <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                zoom={10} // Specify the initial zoom level
              ></GoogleMap>
            </LoadScript>
            {/* <img
              src="/contact/map.png"
              className="w-full "
              style={{ mixBlendMode: "luminosity" }}
              alt=""
            /> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
