import React, { useRef, useState } from 'react';
import Topbar from '../components/layout/Topbar';
import Footer from '../components/layout/Footer';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AiOutlineTwitter } from 'react-icons/ai';
import Slider from 'react-slick';
export default function AboutDan() {
  const [activeEffect, setActiveEffect] = useState(false);
  const [activeKey, setActiveKey] = useState(5);
  const [gridOpen, setGridOpen] = useState(false);

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
  const { t } = useTranslation();
  return (
    <div className=" min-h-screen relative">
      <SideBar
        open={open}
        setOpen={setOpen}
        language={aboutDanLang}
        setLanguage={setAboutDanLang}
      />
      <Topbar aboutDanLang={aboutDanLang} setAboutDanLang={setAboutDanLang} />

      <section>
        <div className="w-full relative  min-h-screen">
          <Image
            src="/about/hero.png"
            alt="hero"
            className="hidden lg:block"
            fill
            objectFit="cover"
          />
          <Image
            src="/about/heromob.png"
            alt="hero"
            className="block lg:hidden"
            fill
            objectFit="cover"
          />
          <div className="absolute w-full h-full z-10">
            <div className="container h-full ">
              <div className=" flex flex-col h-full justify-center  lg:lg:justify-end items-start lg:pb-32">
                <h1 className=" text-[24px]  lg:text-[50px] text-white font-bold">
                  {t('AboutDan')}
                </h1>
                <p className="text-white text-[16px] lg:text-[18px] lg:w-2/5 py-6 ">
                  {t('CompanyMission')}
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
            <p className="text-[#552A0E] text-center text-[14px] lg:text-[18px] thin lg:w-4/5 ">
              {t('DanLaunchLocations')}
            </p>
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
                } child_h h-full hover:bg-[#ffffff10] py-24`}
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
                  {t('Vision')}
                </h1>
                <p className="text-center thin text-white text-[18px] px-10">
                  {t('vison_text')}
                </p>
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
                } child_h h-full hover:bg-[#ffffff10] py-24`}
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
                  {t('Mission')}
                </h1>
                <p className="text-center thin text-white text-[18px] px-10">
                  {t('mission_text')}
                </p>
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
                    {t('Vision')}
                  </h1>
                  <p className="text-center thin text-white pb-10 text-[16px] lg:text-[18px] px-10">
                    {t('vison_text')}
                  </p>
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
                    {t('Mission')}
                  </h1>
                  <p className="text-center thin text-white  pb-10  text-[16px] lg:text-[18px] px-10">
                    {t('mission_text')}
                  </p>
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
        <div className="flex flex-col items-center gap-5 lg:gap-4">
          <Image
            className="mx-auto hidden lg:block"
            width={84}
            height={84}
            src={`/home/l1.png`}
            alt=""
          />
          <Image
            className="mx-auto block lg:hidden"
            width={40}
            height={40}
            src={`/home/l1.png`}
            alt=""
          />
          <p className="text-[#552A0E] text-center text-[24px] tBold lg:text-[30px]   ">
            {t('Values')}
          </p>
        </div>
        <div className="container-fluid">
          <div
            className={` mt-10 flex flex-col  lg:flex-row items-center w-full h-[800px] lg:h-[500px] overflow-hidden `}
          >
            <div
              onClick={() => {
                setActiveKey(activeKey !== 5 ? 5 : 0);
              }}
              className={`gridItem  ${
                activeKey === 5
                  ? 'w-full h-[400px] lg:h-full lg:w-[80%]'
                  : 'w-full h-[130px] lg:h-full lg:w-[20%]'
              }  cursor-pointer relative`}
            >
              <img
                src="/about/5.png"
                className=" object-cover h-full w-full"
                style={{ transition: 'all 1s ease' }}
                alt=""
              />
              {activeKey !== 5 && (
                <div className=" absolute bottom-0 lg:bottom-20  text-white text-[25px] lg:text-[50px] left-0 w-full h-full z-10 flex items-center justify-center lg:justify-end flex-col">
                  <h1 className="transform lg:rotate-90 tBold ">
                    {' '}
                    {t('Values')}
                  </h1>
                </div>
              )}
              {activeKey === 5 && <Exportable t={t} />}
            </div>
            <div
              onClick={() => {
                setActiveKey(activeKey !== 4 ? 4 : 0);
              }}
              className={`gridItem  ${
                activeKey === 4
                  ? 'w-full h-[400px] lg:h-full lg:w-[80%]'
                  : 'w-full h-[130px] lg:h-full lg:w-[20%]'
              }  cursor-pointer relative`}
            >
              <img
                src="/about/4.png"
                className=" object-cover h-full w-full"
                alt=""
              />
              {activeKey !== 4 && (
                <div className=" absolute bottom-0 lg:bottom-20  text-white text-[25px] lg:text-[50px] left-0 w-full h-full z-10 flex items-center justify-center lg:justify-end flex-col">
                  <h1 className="transform lg:rotate-90 tBold">
                    {' '}
                    {t('Values')}
                  </h1>
                </div>
              )}
              {activeKey === 4 && <Exportable t={t} />}
            </div>
            <div
              onClick={() => {
                setActiveKey(activeKey !== 3 ? 3 : 0);
                setGridOpen(activeKey !== 3 ? true : false);
              }}
              className={`gridItem  ${
                activeKey === 3
                  ? 'w-full h-[400px] lg:h-full lg:w-[80%]'
                  : 'w-full h-[130px] lg:h-full lg:w-[20%]'
              }  cursor-pointer relative`}
            >
              <img
                src="/about/3.png"
                className=" object-cover h-full w-full"
                alt=""
              />
              {activeKey !== 3 && (
                <div className=" absolute bottom-0 lg:bottom-20  text-white text-[25px] lg:text-[50px] left-0 w-full h-full z-10 flex items-center justify-center lg:justify-end flex-col">
                  <h1 className="transform lg:rotate-90 tBold">
                    {t('Values')}
                  </h1>
                </div>
              )}
              {activeKey === 3 && <Exportable t={t} />}
            </div>
            <div
              onClick={() => {
                setActiveKey(activeKey !== 2 ? 2 : 0);
                setGridOpen(activeKey !== 2 ? true : false);
              }}
              className={` gridItem  ${
                activeKey === 2
                  ? 'w-full h-[400px] lg:h-full lg:w-[80%]'
                  : 'w-full h-[130px] lg:h-full lg:w-[20%]'
              }  cursor-pointer relative`}
            >
              <img
                src="/about/2.png"
                className=" object-cover h-full w-full"
                alt=""
              />
              {activeKey !== 2 && (
                <div className=" absolute bottom-0 lg:bottom-20  text-white text-[25px] lg:text-[50px] left-0 w-full h-full z-10 flex items-center justify-center lg:justify-end flex-col">
                  <h1 className="transform lg:rotate-90 tBold">
                    {t('Values')}
                  </h1>
                </div>
              )}
              {activeKey === 2 && <Exportable t={t} />}
            </div>
            <div
              onClick={() => {
                setActiveKey(activeKey !== 1 ? 1 : 0);
                setGridOpen(activeKey !== 1 ? true : false);
              }}
              className={` gridItem  ${
                activeKey === 1
                  ? 'w-full h-[400px] lg:h-full lg:w-[80%]'
                  : 'w-full h-[130px] lg:h-full lg:w-[20%]'
              }   cursor-pointer relative`}
            >
              <img
                src="/about/1.png"
                className=" object-cover h-full w-full"
                alt=""
              />
              {activeKey !== 1 && (
                <div className=" absolute bottom-0 lg:bottom-20  text-white text-[25px] lg:text-[50px] left-0 w-full h-full z-10 flex items-center justify-center lg:justify-end flex-col">
                  <h1 className="transform lg:rotate-90 tBold">
                    {t('Values')}
                  </h1>
                </div>
              )}
              {activeKey === 1 && <Exportable t={t} />}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <p className="text-[#552A0E] pb-10 text-center text-[24px] tBold lg:text-[30px]   ">
          {t('BoardOfDirectors')}
        </p>
        <div className="container">
          <div className=" hidden lg:grid grid-cols-3 gap-16">
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div
                onClick={() => setOpen(true)}
                key={item}
                className="bg-[#F7F7F7] cursor-pointer px-6 pt-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="thin text-[16px] text-txt">
                      عبدالرحمن أبا الخيل
                    </p>
                    <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                  </div>
                  <AiOutlineTwitter className="w-6 h-6 text-txt" />
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                </div>
                <img src="/about/shck.png" className="mt-5" alt="" />
              </div>
            ))}
          </div>
          <div className=" block lg:hidden w-full ">
            <Slider {...settings}>
              <div
                onClick={() => setOpen(true)}
                className="bg-[#F7F7F7] px-6 pt-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="thin text-[16px] text-txt">
                      عبدالرحمن أبا الخيل
                    </p>
                    <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                  </div>
                  <AiOutlineTwitter className="w-6 h-6 text-txt" />
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                </div>
                <img src="/about/shck.png" className="mt-5" alt="" />
              </div>
              <div
                onClick={() => setOpen(true)}
                className="bg-[#F7F7F7] px-6 pt-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="thin text-[16px] text-txt">
                      عبدالرحمن أبا الخيل
                    </p>
                    <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                  </div>
                  <AiOutlineTwitter className="w-6 h-6 text-txt" />
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                </div>
                <img src="/about/shck.png" className="mt-5" alt="" />
              </div>
              <div
                onClick={() => setOpen(true)}
                className="bg-[#F7F7F7] px-6 pt-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="thin text-[16px] text-txt">
                      عبدالرحمن أبا الخيل
                    </p>
                    <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                  </div>
                  <AiOutlineTwitter className="w-6 h-6 text-txt" />
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                </div>
                <img src="/about/shck.png" className="mt-5" alt="" />
              </div>
              <div
                onClick={() => setOpen(true)}
                className="bg-[#F7F7F7] px-6 pt-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="thin text-[16px] text-txt">
                      عبدالرحمن أبا الخيل
                    </p>
                    <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                  </div>
                  <AiOutlineTwitter className="w-6 h-6 text-txt" />
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                </div>
                <img src="/about/shck.png" className="mt-5" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="my-20">
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
            <h1 className="text-[#552A0E]  text-center text-[24px] tBold lg:text-[30px] bold  ">
              {t('OurLeadership')}
            </h1>
            <p className="text-[#552A0E] text-center text-[14px] lg:text-[18px] thin lg:w-4/5 ">
              {t('ExpertTeam')}
            </p>
          </div>
          <div className=" hidden lg:grid grid-cols-3 mt-10 gap-16">
            <div
              onClick={() => setOpen(true)}
              className="bg-[#F7F7F7] cursor-pointer px-6 pt-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="thin text-[16px] text-txt">
                    عبدالرحمن أبا الخيل
                  </p>
                  <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                </div>
                <AiOutlineTwitter className="w-6 h-6 text-txt" />
              </div>
              <div className="flex items-center gap-1 mt-4">
                <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                <Image width={20} height={20} src={`/home/l4.png`} alt="" />
              </div>
              <img src="/about/shck.png" className="mt-5" alt="" />
            </div>
            <div
              onClick={() => setOpen(true)}
              className="bg-[#F7F7F7] cursor-pointer px-6 pt-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="thin text-[16px] text-txt">
                    عبدالرحمن أبا الخيل
                  </p>
                  <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                </div>
                <AiOutlineTwitter className="w-6 h-6 text-txt" />
              </div>
              <div className="flex items-center gap-1 mt-4">
                <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                <Image width={20} height={20} src={`/home/l4.png`} alt="" />
              </div>
              <img src="/about/shck.png" className="mt-5" alt="" />
            </div>
            <div
              onClick={() => setOpen(true)}
              className="bg-[#F7F7F7] cursor-pointer px-6 pt-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="thin text-[16px] text-txt">
                    عبدالرحمن أبا الخيل
                  </p>
                  <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                </div>
                <AiOutlineTwitter className="w-6 h-6 text-txt" />
              </div>
              <div className="flex items-center gap-1 mt-4">
                <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                <Image width={20} height={20} src={`/home/l4.png`} alt="" />
              </div>
              <img src="/about/shck.png" className="mt-5" alt="" />
            </div>
          </div>
          <div className=" block mt-10 lg:hidden w-full ">
            <Slider {...settings}>
              <div
                onClick={() => setOpen(true)}
                className="bg-[#F7F7F7] cursor-pointer px-6 pt-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="thin text-[16px] text-txt">
                      عبدالرحمن أبا الخيل
                    </p>
                    <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                  </div>
                  <AiOutlineTwitter className="w-6 h-6 text-txt" />
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                </div>
                <img src="/about/shck.png" className="mt-5" alt="" />
              </div>
              <div
                onClick={() => setOpen(true)}
                className="bg-[#F7F7F7] cursor-pointer px-6 pt-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="thin text-[16px] text-txt">
                      عبدالرحمن أبا الخيل
                    </p>
                    <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                  </div>
                  <AiOutlineTwitter className="w-6 h-6 text-txt" />
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                </div>
                <img src="/about/shck.png" className="mt-5" alt="" />
              </div>
              <div
                onClick={() => setOpen(true)}
                className="bg-[#F7F7F7] cursor-pointer px-6 pt-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="thin text-[16px] text-txt">
                      عبدالرحمن أبا الخيل
                    </p>
                    <p className="thin text-[14px] text-txt">الرئيس التنفيذي</p>
                  </div>
                  <AiOutlineTwitter className="w-6 h-6 text-txt" />
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <Image width={20} height={20} src={`/home/l1.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l2.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l3.png`} alt="" />
                  <Image width={20} height={20} src={`/home/l4.png`} alt="" />
                </div>
                <img src="/about/shck.png" className="mt-5" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <div className="bg-[#552A0E] w-full py-20">
        <div className="container">
          <h1 className="text-[25px] lg:text-[30px] tBold text-white">
            {t('CEOMessage')}
          </h1>
          <p className="py-3 pt-10 text-[14px] lg:text-[18px] text-white thin">
            من الكثبان الرملية المهيبة إلى سلاسل الجبال الخلابة والواحات
            الخضراء، تعد المملكة العربية السعودية موطنًا لعددٍ من الوجهات
            الطبيعية الاستثنائية في العالم. فمنذ فجر التاريخ، شكلت بلادنا
            بتاريخها العريق مصدر فخرٍ لنا، ووفرت مصدر رزقٍ لأجيال من
            السعوديين.وفي عالم سريع التغير، بات علينا أن نجدد ارتباطنا بالطبيعة
            أكثر من أي وقتٍ مضى.
          </p>
          <p className="py-3 text-[14px] lg:text-[18px] text-white thin">
            في شركة دان، نتطلع لإثراء النسيج الاجتماعي والاقتصادي للمملكة من
            خلال إطلاق الإمكانات الهائلة للسياحة القائمة على الطبيعة في وطننا
            المعطاء، واليوم، نبني منظومة سياحية محلية تزدهر باستمرار مستندة إلى
            مفاهيم مبتكرةٍ تدعم مجتمعاتنا المحلية وتمكنها، وتعزز النمو الاجتماعي
            والاقتصادي المستدام، وتدعو الناس للعودة إلى الطبيعة، والاستمتاع
            بجمالها. وتتماشى استراتيجيتنا مع مستهدفات استراتيجية صندوق
            الاستثمارات العامة، وستساهم في تطوير وتمكين القطاعات الواعدة، ودعم
            الكفاءات الوطنية، واستحداث فرص العمل، وإثراء جودة الحياة في مختلف
            أنحاء المملكة.
          </p>
          <p className="py-3 text-[14px] lg:text-[18px] text-white thin">
            ويشمل نموذج الأعمال المتكامل والمبتكر الذي تطبقه شركة دان الأصول
            المملوكة والأصول الحاصلة على امتياز علامتها التجارية، وهو نهج رائد
            يمثل مفهوماً فريداً في صناعة السياحة. ونحن على استعدادٍ تامٍ لدعم
            شركائنا في الامتياز، بمن فيهم المزارعين وملاك الأراضي، لتأسيس
            أعمالهم المستدامة والمربحة في مجال الضيافة. كذلك، نعتزم في شركة دان
            تقديم برامج تدريبية عالمية المستوى مصممة بعناية لرفع مهارات الجيل
            القادم من رواد الضيافة في المملكة.
          </p>
          <p className="py-3 text-[14px] lg:text-[18px] text-white thin">
            لقد حشدنا فريقاً من الكفاءات والخبراء من داخل وخارج المملكة لنخرج
            برؤيتنا لحيز النور. وعلى الرغم من تنوع ثقافاتهم، إلا أن أعضاء فريقنا
            يجمعهم شغفٌ عميقٌ بالطبيعة، وتوقٌ للتأثير إيجاباً في حياة الآخرين،
            واليوم، نخطو بثقةٍ نحو المستقبل، ونتطلع لغدٍ أفضل، والمساهمة الفاعلة
            في الازدهار المستدام للمملكة العربية السعودية وشعبها.
          </p>
          <div className="flex items-center lg:justify-end mt-20">
            <div className="flex items-center ">
              <img src="/about/sign.png" alt="" />
              <div>
                <h1 className="text-white text-[14px] lg:text-[18px]">
                  عبدالرحمن أبا الخيل
                </h1>
                <h1 className="text-white text-[14px] lg:text-[18px]">
                  {' '}
                  الرئيس التنفيذي
                </h1>
                <AiOutlineTwitter className="w-6 h-6 text-white mt-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Exportable = ({ t }) => {
  return (
    <div className="absolute w-full h-full  flex items-center lg:items-start justify-center flex-col p-10 top-0 left-0 z-10">
      <h1 className="text-white text-[25px] lg:text-[50px] tBold text-center lg:text-left  ">
        {t('Values')}
      </h1>
      <p className="text-white text-[14px] lg:text-[18px] hidden   lg:block  lg:w-2/3">
        {t('CommunityCommitment')}
      </p>
      <p className="text-white text-[14px] lg:text-[18px] block text-center lg:hidden  lg:w-2/3">
        {t('CommunityCommitment')}
      </p>
    </div>
  );
};

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

function SideBar({ open, setOpen, language, setLanguage }) {
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
                    <div className="flex flex-col items-start px-8  py-6 ">
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

                        <Link href="/">
                          <img
                            src="/logo.png"
                            style={{ width: '100%', objectFit: 'contain' }}
                            className=" h-10 "
                            alt=""
                          />
                        </Link>
                      </div>
                      <img
                        src="/about/shck.png"
                        className={
                          language !== 'rtl'
                            ? 'mt-5 transform -scale-x-100'
                            : 'mt-5'
                        }
                        alt=""
                      />
                      <p className="text-[18px] lg:text-[22px] tBold mt-3 text-white">
                        عبدالرحمن أبا الخيل
                      </p>
                      <p className="text-[14px] lg:text-[18px] thin  mt-1 text-white">
                        الرئيس التنفيذي
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
                        في شركة دان، نتطلع لإثراء النسيج الاجتماعي والاقتصادي
                        للمملكة من خلال إطلاق الإمكانات الهائلة للسياحة القائمة
                        على الطبيعة في وطننا المعطاء، واليوم، نبني منظومة سياحية
                        محلية تزدهر باستمرار مستندة إلى مفاهيم مبتكرةٍ تدعم
                        مجتمعاتنا المحلية وتمكنها، وتعزز النمو الاجتماعي
                        والاقتصادي المستدام، وتدعو الناس للعودة إلى الطبيعة،
                        والاستمتاع بجمالها. وتتماشى استراتيجيتنا مع مستهدفات
                        استراتيجية صندوق الاستثمارات العامة، وستساهم في تطوير
                        وتمكين القطاعات الواعدة، ودعم الكفاءات الوطنية، واستحداث
                        فرص العمل، وإثراء جودة الحياة في مختلف أنحاء المملكة.
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
