import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  use,
} from 'react';
import ScrollAnimations from '../components/scrollAnimations';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import config from '../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';
import { AiOutlineTwitter } from 'react-icons/ai';
import Slider from 'react-slick';
import { gsap } from 'gsap';
export default function AboutDan({ smoother }) {
  const router = useRouter();
  const [activeEffect, setActiveEffect] = useState(false);
  const [activeKey, setActiveKey] = useState(5);
  const [gridOpen, setGridOpen] = useState(false);
  const [about, setAbout] = useState({});
  const [activeCard, setActiveCard] = useState({});
  const [descriptionsArray, setdescriptionsArray] = useState([]);
  const [vision, setvision] = useState([]);
  const [message, setMessage] = useState([]);
  const [leadership, setLeadership] = useState([]);
  const [intro, setIntro] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [videoURL, setUrlVideoMain] = useState('');
  const getAbout = useCallback(async () => {
    try {
      await axios
        .get(`${apiURL}/systemeffects`, {
          headers: {
            'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setAbout(response?.data?.data);
            setActiveKey(
              response?.data?.data?.rate_us.reduce((previous, current) => {
                return current.id < previous.id ? current : previous;
              }),
            );
            setdescriptionsArray(
              response?.data?.data.description
                .split('\n')
                .filter((x) => x.trim().length)
                .map((description) => description.trim()),
            );
            setvision(
              response?.data?.data.vision.split('\n').map((x) => x.trim()),
            );
            setMessage(
              response?.data?.data.message
                .split('\n')
                .filter((x) => x.trim().length)
                .map((x) => x.trim()),
            );
            setLeadership(
              response?.data?.data.leadership.split('\n').map((x) => x.trim()),
            );
            setIntro(
              response?.data?.data.intro
                .split('\n')
                .filter((x) => x.trim().length)
                .map((x) => (x.trim().length ? x : null)),
            );
            setMainImage(response?.data?.data?.about_image);
            setUrlVideoMain(response?.data?.data?.url_video_about);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [setAbout, router.locale]);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const scrollRef = useRef(null);

  const scrollToElement = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [open, setOpen] = useState(false);
  const [aboutDanLang, setAboutDanLang] = useState('');
  const [active, setActive] = useState(0);
  const aboutRoot = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    getAbout();
    setAboutDanLang(router.locale === 'en' ? 'ltr' : 'rtl');
  }, [getAbout, router.locale]);
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollAnimations();
    });
    return () => ctx.revert();
  }, [about]);

  return (
    <div className=" min-h-screen relative" ref={aboutRoot}>
      <SideBar
        open={open}
        setOpen={setOpen}
        language={aboutDanLang}
        setLanguage={setAboutDanLang}
        activeCard={activeCard}
      />
      <section>
        <div className="w-full relative  min-h-screen ">
          <TheHeroBg mainImage={mainImage} videoURL={videoURL} />
          <div className="absolute w-full h-full z-10">
            <div className="container h-full ">
              <div className=" flex flex-col h-full  justify-end  lg:lg:justify-end items-start pb-32 introFadeUp">
                <h1 className=" text-[24px]  lg:text-[35px] text-white font-bold introFadeUp mb-6">
                  {about?.titele}
                </h1>
                {descriptionsArray.map((item, ind) => (
                  <p
                    key={ind}
                    className="text-white  text-[16px] lg:text-[16px] lg:w-3/5 introFadeUp mb-2"
                  >
                    {item}
                  </p>
                ))}
                <Image
                  src="/home/arrow.png"
                  width={32}
                  height={32}
                  onClick={scrollToElement}
                  className=" cursor-pointer  introFadeUp mt-6"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={scrollRef}></div>
      <section className="mt-40 mb-20 ">
        <div className="container">
          <div className="flex flex-col items-center gap-5 lg:gap-10">
            <Image
              className="mx-auto hidden scrubElements scrubRotateFadeUp  lg:block"
              width={84}
              height={84}
              src={about?.intro_logo}
              alt=""
            />
            <Image
              className="mx-auto block  scrubElements scrubRotateFadeUp lg:hidden"
              width={40}
              height={40}
              src={about?.intro_logo}
              alt=""
            />
            {intro.map((item, ind) => (
              <p
                key={ind}
                className="text-[#552A0E] text-center text-[14px] lg:text-[18px] thin lg:w-4/5 scrubElements scrubFadeUp"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="relative h-[500px] lg:h-[750px] parent_h mb-20">
        <Image
          src="/about/bg_b.png"
          alt="hero"
          className=""
          fill
          objectFit="cover"
        />
        <div className="absolute z-20  w-full h-full top-0 left-0 py-20 ">
          <div className="container h-full">
            <div className="w-full h-full hidden items-center lg:grid grid-cols-2 gap-20">
              <div
                onMouseEnter={() => {
                  setActiveEffect(true);
                  setActive(1);
                }}
                onMouseLeave={() => {
                  setActiveEffect(false);
                  setActive(0);
                }}
                className={`border cursor-pointer ${
                  active === 2 ? ' opacity-25' : 'opacity-100'
                } scrubElements scrubFadeLeft child_h h-full hover:bg-[#ffffff10] py-24`}
              >
                <Image
                  className="mx-auto hidden lg:block"
                  width={84}
                  height={84}
                  src={`/home/l2.png`}
                  alt=""
                />
                <Image
                  className="mx-auto block lg:hidden"
                  width={40}
                  height={40}
                  src={`/home/l2.png`}
                  alt=""
                />
                <h1 className="text-[25px] lg:text-[50px] tBold text-white text-center py-4">
                  {about?.titele_vision}
                </h1>
                {vision.map((item, ind) => (
                  <p
                    key={ind}
                    className="text-center thin text-white text-[18px] px-10"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div
                onMouseEnter={() => {
                  setActiveEffect(true);
                  setActive(2);
                }}
                onMouseLeave={() => {
                  setActiveEffect(false);
                  setActive(0);
                }}
                className={`border cursor-pointer ${
                  active === 1 ? ' opacity-25' : 'opacity-100'
                } scrubElements scrubFadeRight child_h h-full hover:bg-[#ffffff10] py-24`}
              >
                <Image
                  className="mx-auto hidden lg:block"
                  width={84}
                  height={84}
                  src={`/home/l4.png`}
                  alt=""
                />
                <Image
                  className="mx-auto block lg:hidden"
                  width={40}
                  height={40}
                  src={`/home/l4.png`}
                  alt=""
                />
                <h1 className="text-[25px] lg:text-[50px] tBold text-white text-center py-4">
                  {about?.titele_message}
                </h1>

                {message.map((item, ind) => (
                  <p
                    key={ind}
                    className="text-center thin text-white text-[18px] px-10"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className=" block lg:hidden w-full hide_arrow">
              <Slider {...settings}>
                <div
                  onMouseEnter={() => setActiveEffect(true)}
                  onMouseLeave={() => setActiveEffect(false)}
                  className="border cursor-pointer child_h h-full hover:bg-[#ffffff10] pt-10 lg:pt-0 lg:py-24"
                >
                  <Image
                    className="mx-auto block lg:hidden"
                    width={40}
                    height={40}
                    src={`/home/l2.png`}
                    alt=""
                  />

                  <h1 className="text-[35px] lg:text-[50px] tBold text-white text-center py-4">
                    {about?.titele_vision}
                  </h1>
                  {vision.map((item, ind) => (
                    <p
                      key={ind}
                      className="text-center thin text-white pb-10 text-[16px] lg:text-[18px] px-10"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <div
                  onMouseEnter={() => setActiveEffect(true)}
                  onMouseLeave={() => setActiveEffect(false)}
                  className="border cursor-pointer child_h h-full hover:bg-[#ffffff10] pt-10 lg:pt-0 lg:py-24"
                >
                  <Image
                    className="mx-auto block lg:hidden"
                    width={40}
                    height={40}
                    src={`/home/l4.png`}
                    alt=""
                  />
                  <h1 className="text-[35px] lg:text-[50px] font-bold text-white text-center py-4">
                    {about?.titele_message}
                  </h1>
                  {message.map((item, ind) => (
                    <p
                      key={ind}
                      className="text-center thin text-white  pb-10  text-[16px] lg:text-[18px] px-10"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 w-full transition duration-200 ease-linear h-full z-10 ${
            activeEffect && 'bg_highLight'
          }`}
        ></div>
      </section>
      <section className="mb-20">
        <div className="container flex flex-col items-center gap-5 lg:gap-4">
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
          <p className="text-[#552A0E] text-center scrubElements scrubFadeUp text-[24px] tBold lg:text-[30px]   ">
            {/* TODO: add from backend once Islam is done */}

            {about?.titele_value}
          </p>
          <p className="scrubElements scrubFadeUp">
            {about?.description_value}
          </p>
        </div>
        <div className="container-fluid ">
          <div
            className={` mt-10 flex flex-col  lg:flex-row items-center w-full min-h-[800px] lg:h-[600px] overflow-hidden `}
          >
            {about?.rate_us?.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveKey(item);
                }}
                className={`gridItem  ${
                  activeKey.id === item.id
                    ? 'w-full min-h-[400px] lg:h-full lg:w-[80%]'
                    : 'w-full h-[130px] lg:h-full lg:w-[20%]'
                }  cursor-pointer relative scrubElements scrubFadeUp lg:scrubRandom`}
              >
                <img
                  src={item?.icon}
                  className="absolute top-0 object-cover h-full w-full"
                  style={{ transition: 'all 1s ease' }}
                  alt=""
                />
                {activeKey.id !== item.id && (
                  <div className=" absolute bottom-0 lg:bottom-20  text-white text-[25px] lg:text-[50px] left-0 w-full h-full z-10 flex items-center justify-center lg:justify-end flex-col">
                    <h1 className="transform  tBold lg:[writing-mode:vertical-lr]">
                      {/* TODO: add from backend once Islam is done */}
                      {item?.titele}
                    </h1>
                  </div>
                )}
                {activeKey.id === item.id && <Exportable t={t} d={item} />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <p className="text-[#552A0E] pb-10 text-center text-[24px] tBold lg:text-[30px]  lg:scrubElements  lg:scrubRandom ">
          {about?.boardofdirectors}
        </p>
        <div className="container">
          <div className=" hidden lg:grid grid-cols-3 gap-16 ">
            {about?.leaders
              ?.filter((x) => x.role != 'management')
              .map((item) => (
                <div
                  onClick={() => {
                    setOpen(true);
                    setActiveCard(item);
                  }}
                  key={item.id}
                  className="bg-[#F7F7F7] cursor-pointer px-6 pt-6 scrubElements scrubFadeUp lg:scrubRandom"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="thin text-[16px] text-txt">
                        {router.locale === 'en' ? item.name_en : item.name}
                      </p>
                      <p className="thin text-[14px] text-txt">
                        {router.locale === 'en' ? item.job_en : item.job}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-4">
                    <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                    <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                    <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                    <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                  </div>
                  <img src={item?.avatar} className="mt-5" alt="" />
                </div>
              ))}
          </div>

          <div className=" block lg:hidden w-full lg:scrubElements lg:scrubRandom">
            <Slider {...settings}>
              {about?.leaders
                ?.filter((x) => x.role != 'management')
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setOpen(true);
                      setActiveCard(item);
                    }}
                    className="bg-[#F7F7F7] px-6 pt-6"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="thin text-[16px] text-txt">
                          {router.locale === 'en' ? item.name_en : item.name}
                        </p>
                        <p className="thin text-[14px] text-txt">
                          {router.locale === 'en' ? item.job_en : item.job}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-4">
                      <Image
                        width={20}
                        height={20}
                        src={`/home/l1.png`}
                        alt=""
                      />
                      <Image
                        width={20}
                        height={20}
                        src={`/home/l2.png`}
                        alt=""
                      />
                      <Image
                        width={20}
                        height={20}
                        src={`/home/l3.png`}
                        alt=""
                      />
                      <Image
                        width={20}
                        height={20}
                        src={`/home/l4.png`}
                        alt=""
                      />
                    </div>
                    <img src={item?.avatar} className="mt-5" alt="" />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>

      <div className="bg-[#552A0E] w-full py-20">
        <div className="container">
          <h1 className="text-[25px] lg:text-[30px] tBold text-white">
            {about?.titele_ceo_message}
          </h1>
          <div
            className="py-3 pt-10 text-[14px] lg:text-[18px] text-white thin"
            dangerouslySetInnerHTML={{
              __html: about?.ceo_message,
            }}
          ></div>

          <div className="flex items-center lg:justify-end mt-20">
            <div className="flex items-center ">
              <img src={about?.image_ceo} alt="" />
              <div>
                <h1 className="text-white text-[14px] lg:text-[18px]">
                  {router.locale === 'en'
                    ? about?.ceo?.name_en
                    : about?.ceo?.name}
                </h1>
                <h1 className="text-white text-[14px] lg:text-[18px]">
                  {router.locale === 'en'
                    ? about?.ceo?.job_en
                    : about?.ceo?.job}
                </h1>
                {/* <AiOutlineTwitter
                  className="w-6 h-6"
                  style={{ color: `${about?.ceo?.color}` }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Exportable = ({ t, d }) => {
  return (
    <div className="absolute w-full h-full  flex items-center lg:items-start justify-center flex-col p-10 top-0 left-0 z-10">
      <h1 className="text-white text-[25px] lg:text-[50px] tBold text-center lg:text-left mb-5 ">
        {d.titele}
      </h1>
      <p className="text-white text-[14px] lg:text-[18px] hidden   lg:block  lg:w-2/3">
        {d.description}
      </p>
      <p className="text-white text-[14px] lg:text-[18px] block text-center lg:hidden  lg:w-2/3">
        {d.description}
      </p>
    </div>
  );
};

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import TheHeroBg from '../components/TheHeroBg';

function SideBar({
  open,
  setOpen,
  language,
  setLanguage,
  activeCard,
  setActive,
  locale,
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        style={{ zIndex: '999999999999999999' }}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#552A0E] bg-opacity-40 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`pointer-events-none fixed inset-y-0 ${
                language !== 'rtl' ? 'left-0' : 'right-0'
              } flex max-w-full`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom={
                  language !== 'rtl' ? '-translate-x-full' : 'translate-x-full'
                }
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo={
                  language !== 'rtl' ? '-translate-x-full' : 'translate-x-full'
                }
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col  bg-gradiunt border-r border-gray-50 border-opacity-50 shadow-xl">
                    <div className="flex flex-col items-start px-8  py-6 overflow-y-scroll scrollbar-none">
                      <div
                        className="flex w-full  
                       border-opacity-50  pb-4  items-center justify-between"
                      >
                        <div className="ml-3 flex h-7 items-center">
                          <div onClick={() => setOpen(false)}>
                            <XMarkIcon
                              className="h-8 w-8 cursor-pointer text-white"
                              aria-hidden="true"
                            />
                          </div>
                        </div>

                        {/* <Link href="/">
                          <img
                            src="/logo.png"
                            style={{ width: '100%', objectFit: 'contain' }}
                            className=" h-10 "
                            alt=""
                          />
                        </Link> */}
                      </div>
                      <img
                        src={activeCard?.avatar}
                        className={language !== 'rtl' ? 'mt-5' : 'mt-5'}
                        alt=""
                      />
                      <p className="text-[18px] lg:text-[22px] tBold mt-3 text-white">
                        {language === 'ltr'
                          ? activeCard?.name_en
                          : activeCard?.name}
                      </p>
                      <p className="text-[14px] lg:text-[18px] thin  mt-1 text-white">
                        {language === 'ltr'
                          ? activeCard?.job_en
                          : activeCard?.job}
                      </p>
                      <div className="flex items-center gap-1 mt-4">
                        <Image
                          width={20}
                          height={20}
                          src={`/home/l1.png`}
                          alt=""
                        />
                        <Image
                          width={20}
                          height={20}
                          src={`/home/l2.png`}
                          alt=""
                        />
                        <Image
                          width={20}
                          height={20}
                          src={`/home/l3.png`}
                          alt=""
                        />
                        <Image
                          width={20}
                          height={20}
                          src={`/home/l4.png`}
                          alt=""
                        />
                      </div>
                      <p className=" mt-4 text-[14px] lg:text-[18px] text-white thin">
                        {language === 'ltr'
                          ? activeCard?.description_en
                          : activeCard?.description}
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
