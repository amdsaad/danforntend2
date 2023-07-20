import React, { useRef, useCallback, useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ScrollAnimations from '../components/scrollAnimations';
import Topbar from '../components/layout/Topbar';
import Footer from '../components/layout/Footer';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaHandshake } from 'react-icons/fa';
import { Parallax } from 'react-parallax';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import axios from 'axios';
import config from '../components/config';
const apiURL = config.api_url;
import { gsap } from 'gsap';
export default function FutureProject() {
  const router = useRouter();
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };
  const scrollRef = useRef(null);
  const [future, setFuture] = useState('');
  const [typetourisms, setTypetourisms] = useState([]);

  const scrollToElement = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const getFuture = useCallback(async () => {
    try {
      await axios
        .get(`${apiURL}/futureprojects`, {
          headers: {
            'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setFuture(response?.data?.data);
            setTypetourisms(response?.data?.data?.typetourisms);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [setFuture, router.locale]);
  const { t } = useTranslation();

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollAnimations();
    });
    return () => ctx.revert();
  }, [getFuture]);
  return (
    <div className=" min-h-screen w-full relative">
      <section>
        <div className="w-full relative  min-h-screen">
          <Image
            src="/future/hero.png"
            alt="hero"
            className="hidden lg:block"
            fill
            objectFit="cover"
          />
          <Image
            src="/future/heromob.png"
            alt="hero"
            className="block lg:hidden"
            fill
            objectFit="cover"
          />
          <div className="absolute w-full h-full z-10">
            <div className="container h-full ">
              <div className=" flex flex-col h-full justify-center  lg:justify-end items-start lg:pb-32">
                <h1 className=" text-[24px] lg:text-[35px] text-white font-bold">
                  {future?.titele}
                </h1>
                <p className="text-white text-[16px] lg:text-[16px] lg:w-3/5 py-6 ">
                  {future?.description}
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
              className="mx-auto hidden lg:block scrubElements scrubRotateFadeUp"
              width={84}
              height={84}
              src={`/home/l1.png`}
              alt=""
            />
            <Image
              className="mx-auto block lg:hidden scrubElements scrubRotateFadeUp"
              width={40}
              height={40}
              src={`/home/l1.png`}
              alt=""
            />
            <p className="text-[#552A0E] text-center text-[14px] lg:text-[18px] thin lg:w-4/5 scrubElements scrubFadeUp">
              {/* TODO: missing from the backend */}
              {t('LaunchLocation')}
            </p>
          </div>
        </div>
      </section>
      <section className=" h-[700px]  lg:h-[1000px] relative mt-20">
        <img
          src="/future/road.png"
          className="relative hidden lg:block  "
          alt=""
        />
        <img
          src="/future/Scroll Group 2.png"
          className="relative block lg:hidden  "
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="container">
            <div className="w-full  lg:pr-[420px]">
              <div className="flex mt-20 lg:mt-24 items-center justify-between">
                <h1 className="text-[24px] lg:text-[30px] tBold pr-10 lg:pr-0 text-txt scrubElements scrubFadeLeft">
                  {future?.start_titele}
                </h1>
                <div className=" lg:flex items-center hidden gap-2">
                  <Image
                    src="/home/l1.png"
                    width={40}
                    height={41}
                    alt=""
                    className="scrubElements scrubRotateFade"
                  />
                  <Image
                    src="/home/l2.png"
                    width={40}
                    height={41}
                    alt=""
                    className="scrubElements scrubRotateFade"
                  />
                  <Image
                    src="/home/l3.png"
                    width={40}
                    height={41}
                    alt=""
                    className="scrubElements scrubRotateFade"
                  />
                  <Image
                    src="/home/l4.png"
                    width={40}
                    height={41}
                    alt=""
                    className="scrubElements scrubRotateFade"
                  />
                </div>
                <div className=" lg:hidden items-center flex gap-2">
                  <Image
                    src="/home/l1.png"
                    width={20}
                    height={21}
                    alt=""
                    className="scrubElements scrubRotateFade"
                  />
                  <Image
                    src="/home/l2.png"
                    width={20}
                    height={21}
                    alt=""
                    className="scrubElements scrubRotateFade"
                  />
                  <Image
                    src="/home/l3.png"
                    width={20}
                    height={21}
                    alt=""
                    className="scrubElements scrubRotateFade"
                  />
                  <Image
                    src="/home/l4.png"
                    width={20}
                    height={21}
                    alt=""
                    className="scrubElements scrubRotateFade"
                  />
                </div>
              </div>
              <p className="thin text-txt text-[14px] pr-8 lg:pr-0 lg:text-[18px] scrubElements scrubFadeLeft pt-5">
                {future?.start_distinguish}
              </p>
            </div>
            <div className="w-full pt-6 lg:pt-[150px] lg:pr-[420px]">
              <div className="flex mt-24 items-center justify-between scrubElements scrubFadeLeft">
                <h1 className="text-[24px] lg:text-[30px] tBold text-txt pr-8 lg:pr-0 ">
                  {future?.goal_titele}
                </h1>
              </div>
              <p className="thin text-txt text-[14px] pr-8 lg:pr-0 lg:text-[18px] pt-5 scrubElements scrubFadeLeft">
                {future?.goal}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" mb-20 hidden lg:block future_slide overflow-hidden">
        <Slider {...settings}>
          <div
            style={{ marginRight: '20px' }}
            className="bg-[#E98108] bg-opacity-20 relative h-96 "
          >
            <img
              className="absolute top-0 left-0"
              src={typetourisms[0]?.images[0]?.url}
              alt=""
            />
            <div className="w-3/6  top-16 rtl absolute font-bold right-10">
              <h1 className="text-txt text-[22px]">{typetourisms[0]?.name}</h1>
              <p className="text-[14px] mt-5 text-txt thin">
                {typetourisms[0]?.description}
              </p>
              <button className="px-5 py-2 hidden text-sm mt-20   hover:bg-txt  bg-white text-txt thin hover:text-white border border-txt rounded-full lg:flex items-center gap-2">
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                {typetourisms[0]?.button_1}
              </button>
            </div>
          </div>
          <div
            style={{ marginRight: '20px' }}
            className="bg-[#E98108] bg-opacity-20 relative h-96 "
          >
            <img
              className="absolute top-0 left-0"
              src={typetourisms[1]?.images[2]?.url}
              alt=""
            />
            <div className="w-3/6  top-16 rtl absolute font-bold right-10">
              <h1 className="text-txt text-[22px]">{typetourisms[1]?.name}</h1>
              <p className="text-[14px] mt-5 text-txt thin">
                {typetourisms[1]?.description}
              </p>
              <button className="px-5 py-2 hidden text-sm mt-20   hover:bg-txt  bg-white text-txt thin hover:text-white border border-txt rounded-full lg:flex items-center gap-2">
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                {typetourisms[1]?.button_1}
              </button>
            </div>
          </div>
          <div
            style={{ marginRight: '20px' }}
            className="bg-[#E98108] bg-opacity-20 relative h-96 "
          >
            <img
              className="absolute top-0 left-0"
              src={typetourisms[2]?.images[2]?.url}
              alt=""
            />
            <div className="w-3/6  top-16 rtl absolute font-bold right-10">
              <h1 className="text-txt text-[22px]">{typetourisms[2]?.name}</h1>
              <p className="text-[14px] mt-5 text-txt thin">
                {typetourisms[2]?.description}
              </p>
              <button className="px-5 py-2 hidden text-sm mt-20   hover:bg-txt  bg-white text-txt thin hover:text-white border border-txt rounded-full lg:flex items-center gap-2">
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                {typetourisms[2]?.button_1}
              </button>
            </div>
          </div>
        </Slider>
      </section>
      <section className=" mb-20 block lg:hidden future_slide2 overflow-hidden">
        {/* TODO: ADJUST THE MOBILE SLIDER */}
        <Slider {...settings2}>
          <div
            style={{ marginRight: '20px' }}
            className="bg-[#E98108] bg-opacity-20 relative h-80 "
          >
            <img
              className="absolute top-0 w-32 lg:w-auto left-0"
              src="/future/Adv-slide.png"
              alt=""
            />
            <div className="w-4/6  top-20 rtl absolute font-bold right-10">
              <h1 className="text-txt font-bold text-[14px]">
                سياحة المغامرات
              </h1>
              <p className="text-[12px] mt-5 text-txt thin">
                ستقدم شركة دان أنشطة في الهواء الطلق مصممة بعناية لتلهم الضيوف
                لإعادة التواصل مع الطبيعة من خلال مغامراتٍ مثيرة في وجهاتٍ
                فريدة. سيتم تصميم عروض المغامرات التي سنقدمها لضيوفنا بهدف
                الاستفادة من الميزات المتنوعة في كل وجهة؛ بما في ذلك الكثبان
                الرملية، والجبال، والأشجار.
              </p>
              <button className="px-5 py-2 hidden text-sm mt-20   hover:bg-txt  bg-white text-txt thin hover:text-white border border-txt rounded-full lg:flex items-center gap-2">
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                انضم إلى شركاء دان
              </button>
            </div>
          </div>

          <div
            style={{ marginRight: '20px' }}
            className="bg-[#64C07D] bg-opacity-20 relative h-80 "
          >
            <img
              className="absolute bottom-0 w-40 lg:w-auto left-0"
              src="/future/agri-slide.png"
              alt=""
            />
            <div className="w-4/6  top-16 rtl absolute font-bold right-10">
              <h1 className="text-txt font-bold text-[14px]">
                سياحة المغامرات
              </h1>
              <p className="text-[12px] mt-5 text-txt thin">
                ستقدم شركة دان أنشطة في الهواء الطلق مصممة بعناية لتلهم الضيوف
                لإعادة التواصل مع الطبيعة من خلال مغامراتٍ مثيرة في وجهاتٍ
                فريدة. سيتم تصميم عروض المغامرات التي سنقدمها لضيوفنا بهدف
                الاستفادة من الميزات المتنوعة في كل وجهة؛ بما في ذلك الكثبان
                الرملية، والجبال، والأشجار.
              </p>
              <button className="px-5 py-2 hidden text-sm mt-20   hover:bg-txt  bg-white text-txt thin hover:text-white border border-txt rounded-full lg:flex items-center gap-2">
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                انضم إلى شركاء دان
              </button>
            </div>
          </div>
          <div
            style={{ marginRight: '20px' }}
            className="bg-[#1A92D3] bg-opacity-20 relative h-80 "
          >
            <img
              className="absolute bottom-0 w-40 lg:w-auto left-0"
              src="/future/Mask Group 94.png"
              alt=""
            />
            <div className="w-4/6  top-16 rtl absolute font-bold right-10">
              <h1 className="text-txt font-bold text-[14px]">
                سياحة المغامرات
              </h1>
              <p className="text-[12px] mt-5 text-txt thin">
                ستقدم شركة دان أنشطة في الهواء الطلق مصممة بعناية لتلهم الضيوف
                لإعادة التواصل مع الطبيعة من خلال مغامراتٍ مثيرة في وجهاتٍ
                فريدة. سيتم تصميم عروض المغامرات التي سنقدمها لضيوفنا بهدف
                الاستفادة من الميزات المتنوعة في كل وجهة؛ بما في ذلك الكثبان
                الرملية، والجبال، والأشجار.
              </p>
              <button className="px-5 py-2 hidden text-sm mt-20   hover:bg-txt  bg-white text-txt thin hover:text-white border border-txt rounded-full lg:flex items-center gap-2">
                <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                انضم إلى شركاء دان
              </button>
            </div>
          </div>
        </Slider>
      </section>
      <section>
        <div className="container">
          <div className=" my-20 relative pairlal  ">
            <Parallax
              strength={0}
              className=" relative h-[1200px]   "
              bgImage="/future/Group 8199.png"
              bgImageStyle={{ objectFit: 'cover', height: 'h-[1200px]' }}
            >
              <div className=" absolute w-full h-full top-0 left-0  ">
                <div className=" container py-20">
                  <div className="flex items-start gap-4 lg:items-center lg:flex-row flex-col lg:justify-between ">
                    <h1 className="text-white tBold text-[24px] lg:text-[30px] ">
                      {/* TODO: add title on the backend  */}
                      {future?.titele}
                    </h1>
                    <button className="px-5 py-2  text-sm    hover:bg-txt  bg-white text-txt thin hover:text-white border border-txt rounded-full flex items-center gap-2">
                      <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                      {future?.button_1_distinguish}
                    </button>
                  </div>
                  <p className="text-white text-[14px] lg:text-[18px] thin lg:w-4/5 pt-8 scrubElements scrubFadeUp">
                    {future?.start_distinguish}
                  </p>
                  {future?.items?.map((item, index) => (
                    <div
                      key={index}
                      className=" mt-20 w-full px-10 py-3 hover:bg-opacity-25 flex flex-col scrubElements scrubFadeUp lg:items-center lg:flex-row  bg-white bg-opacity-20 lg:gap-10"
                    >
                      <h1 className="text-white font-bold text-[32px] lg:text-[81px]">
                        {convertToArabic(index + 1, router.locale)}
                      </h1>
                      <p className="text-white thin text-[14px] lg:text-[18px] lg:w-4/5 ">
                        {item.titele}
                      </p>
                    </div>
                  ))}

                  <p className="text-white thin lg:w-4/5 pt-8 scrubElements scrubFadeUp">
                    {future?.end_distinguish}
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
    </div>
  );
}

const convertToArabic = (num, locale) => {
  let res;
  switch (num) {
    case 1:
      res = locale === 'en' ? '1' : '١';
      break;
    case 2:
      res = locale === 'en' ? '2' : '٢';
      break;
    case 3:
      res = locale === 'en' ? '3' : '٣';
      break;
    case 4:
      res = locale === 'en' ? '4' : '٤';
      break;
    default:
      break;
  }
  return res;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
