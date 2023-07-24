import React, { useRef, useState, useEffect, useCallback } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ScrollAnimations from '../components/scrollAnimations';
import { gsap } from 'gsap';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { useTranslation } from 'next-i18next';
import config from '../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';
import Modal from './form/Modal';
export default function Careers({smoother,setSmoother}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);

  const scrollToElement = () => {
    const element = scrollRef.current;
    if (element) {
      smoother.scrollTo(scrollRef.current,true,'top 100px')
    }
  };
  const { t } = useTranslation();
  const [culture, setCulture] = useState('');
  const [join, setJoin] = useState('');
  const [cultureTitle, setCultureTitle] = useState('');
  const [joinTitle, setJoinTitle] = useState('');
  const [btnFirst, setBtnFirst] = useState('');
  const [btnSecond, setBtnSecond] = useState('');
  const [intro, setIntro] = useState('');
  const [introImage, setIntroImage] = useState('');

  const getCareer = useCallback(async () => {
    try {
      await axios
        .get(`${apiURL}/settings`, {
          headers: {
            'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response?.data);
            setCulture(response?.data?.work_culture);
            setJoin(response?.data?.Join_dan);
            setCultureTitle(response?.data?.work_titele);
            setJoinTitle(response?.data?.Join_titele);
            setBtnFirst(response?.data?.culture_button_1);
            setBtnSecond(response?.data?.culture_button_2);
            setCultureTitle(response?.data?.work_titele);
            setCulture(response?.data?.work_culture);
            setIntro(response?.data?.intro_career);
            setIntroImage(response?.data?.intro_logo_career);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [
    setCulture,
    setJoin,
    setCultureTitle,
    setJoinTitle,
    setBtnFirst,
    setBtnSecond,
    router.locale,
  ]);
  useEffect(() => {
    getCareer();
  }, [getCareer]);
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollAnimations();
    });
    return () => ctx.revert();
  }, []);

  const animateModal = () => {
    smoother.paused(true)
    gsap.to('.modal', {
      keyframes: [
        {
          scale: 1,
          y: window.scrollY,
        },
        {
          backdropFilter: 'blur(10px)',
        },
      ],
      duration: 2,
      ease: 'power2.inOut',
    });
  };

  return (
    <div className="min-h-screen relative w-full">
           <Modal smoother={smoother} setSmoother={setSmoother}/>

      <section>
        <div className="w-full relative  min-h-screen">
          <Image
            src="/comp/hero.png"
            alt="hero"
            className="hidden lg:block introFadeUp"
            fill
            objectFit="cover"
          />
          <Image
            src="/comp/heromob.png"
            alt="hero"
            className="block lg:hidden introFadeUp"
            fill
            objectFit="cover"
          />
          <div className="absolute w-full h-full z-10">
            <div className="container h-full ">
              <div className=" flex flex-col h-full justify-center  lg:lg:justify-end items-start lg:pb-32">
                <h1 className=" text-[24px]  lg:text-[50px] text-white font-bold introFadeUp">
                  {cultureTitle}
                </h1>
                <p className="text-white text-[16px] lg:text-[16px] lg:w-3/5 py-6 introFadeUp">
                  {culture}
                </p>
                <Image
                  src="/home/arrow.png"
                  width={32}
                  height={32}
                  onClick={scrollToElement}
                  className=" cursor-pointer introFadeUp"
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
              src={`/home/l2.png`}
              alt=""
            />
            <Image
              className="mx-auto block lg:hidden scrubElements scrubRotateFadeUp"
              width={40}
              height={40}
              src={introImage}
              alt=""
            />
            <p className="text-[#552A0E] text-center text-[14px] lg:text-[18px] thin lg:w-4/5 scrubElements scrubFadeUp">
              {intro}
            </p>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="container">
          <div className="flex flex-col items-center gap-5 lg:gap-10">
            <Image
              className="mx-auto hidden lg:block scrubElements scrubRotateFadeUp"
              width={84}
              height={84}
              src={`/home/l4.png`}
              alt=""
            />
            <Image
              className="mx-auto block lg:hidden scrubElements scrubRotateFadeUp"
              width={40}
              height={40}
              src={`/home/l4.png`}
              alt=""
            />
            <h1 className="text-txt tet-[16px] tBold font-medium scrubElements scrubFadeUp lg:text-[30px]">
              {joinTitle}
            </h1>
            <p className="text-[#552A0E] text-center text-[14px] scrubElements scrubFadeUp lg:text-[18px] thin lg:w-4/5 ">
              {join}
            </p>

            <button
              onClick={animateModal}
              className="px-5 bg-[#552A0E] rounded-full  scrubElements scrubFadeUp py-2 text-[17px] text-white flex items-center gap-6 cursor-pointer"
            >
              <img src="/comp/icon.png" className="w-6 h-6" alt="" />
              {btnFirst}
            </button>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="container">
          <div className="flex items-center justify-between scrubElements scrubFade">
            <h1 className="text-txt flex items-center gap-3 text-[16px] tBold lg:text-[30px]">
              <Image
                className="mx-auto "
                width={34}
                height={34}
                src={`/home/l1.png`}
                alt=""
              />
              {btnSecond}
            </h1>
            <div className="flex items-center gap-5">
              <div className="p-3 rounded-full flex transition-all duration-500 ease-linear items-center gap-2 bg-[#e0e0e047] ">
                {open && (
                  <input
                    type="text"
                    className=" border-none outline-none text-txt bg-transparent"
                    placeholder="Search"
                  />
                )}
                <BiSearch
                  onClick={() => setOpen(!open)}
                  className="w-6 h-6 cursor-pointer text-txt"
                />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 mt-10 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className=" bg-[#e0e0e047] p-8 scrubElements scrubRandom"
              >
                <h1 className="text-[21px] font-medium">Business Analyst </h1>
                <p className="text-sm">Full Time</p>
                <div className="flex items-center mt-20 justify-between">
                  <p className="text-sm">Published on 23/03/2022</p>
                  <p className="font-bold cursor-pointer">More {' >>'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
