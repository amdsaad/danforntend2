import React, { useRef, useCallback, useEffect,useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Topbar from '../components/layout/Topbar';
import Footer from '../components/layout/Footer';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaHandshake } from 'react-icons/fa';
import { Parallax } from 'react-parallax';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function FutureProject() {
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
  const router = useRouter();

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
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [setFuture, router.locale]);
  const { t } = useTranslation();

  useEffect(() => {
    getFuture();
  }, [getFuture]);
  return (
    <div className=" min-h-screen w-full relative">
      <Topbar />
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
                <h1 className=" text-[24px] lg:text-[50px] text-white font-bold">
                  {t('Future Projects')}
                </h1>
                <p className="text-white text-[16px] lg:text-[18px] lg:w-2/5 py-6 ">
                  {t('Company Goal')}
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
            <p className="text-[#552A0E] text-center text-[14px] lg:text-[18px] thin lg:w-4/5 ">
              {t('LaunchLocation')}
            </p>
          </div>
        </div>
      </section>
      <section className=" h-[700px]  lg:h-[1000px] relative mt-20">
        <img
          src="/future/road.png"
          className="relative hidden lg:block"
          alt=""
        />
        <img
          src="/future/Scroll Group 2.png"
          className="relative block lg:hidden"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div className="container">
            <div className="w-full  lg:pr-[420px]">
              <div className="flex mt-20 lg:mt-24 items-center justify-between">
                <h1 className="text-[24px] lg:text-[30px] tBold pr-10 lg:pr-0 text-txt ">
                  {t('Start')}
                </h1>
                <div className=" lg:flex items-center hidden gap-2">
                  <Image src="/home/l1.png" width={40} height={41} alt="" />
                  <Image src="/home/l2.png" width={40} height={41} alt="" />
                  <Image src="/home/l3.png" width={40} height={41} alt="" />
                  <Image src="/home/l4.png" width={40} height={41} alt="" />
                </div>
                <div className=" lg:hidden items-center flex gap-2">
                  <Image src="/home/l1.png" width={20} height={21} alt="" />
                  <Image src="/home/l2.png" width={20} height={21} alt="" />
                  <Image src="/home/l3.png" width={20} height={21} alt="" />
                  <Image src="/home/l4.png" width={20} height={21} alt="" />
                </div>
              </div>
              <p className="thin text-txt text-[14px] pr-8 lg:pr-0 lg:text-[18px] pt-5">
                {t('start_text')}
              </p>
            </div>
            <div className="w-full pt-6 lg:pt-[150px] lg:pr-[420px]">
              <div className="flex mt-24 items-center justify-between">
                <h1 className="text-[24px] lg:text-[30px] tBold text-txt pr-8 lg:pr-0 ">
                  {t('Objective')}
                </h1>
              </div>
              <p className="thin text-txt text-[14px] pr-8 lg:pr-0 lg:text-[18px] pt-5">
                {t('objective_text')}
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
              src="/future/Adv-slide.png"
              alt=""
            />
            <div className="w-3/6  top-16 rtl absolute font-bold right-10">
              <h1 className="text-txt text-[22px]">سياحة المغامرات</h1>
              <p className="text-[14px] mt-5 text-txt thin">
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
            className="bg-[#64C07D] bg-opacity-20 relative h-96 "
          >
            <img
              className="absolute bottom-0 left-0"
              src="/future/agri-slide.png"
              alt=""
            />
            <div className="w-3/6  top-16 rtl absolute font-bold right-10">
              <h1 className="text-txt text-[22px]">سياحة المغامرات</h1>
              <p className="text-[14px] mt-5 text-txt thin">
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
            className="bg-[#1A92D3] bg-opacity-20 relative h-96 "
          >
            <img
              className="absolute bottom-0 left-0"
              src="/future/Mask Group 94.png"
              alt=""
            />
            <div className="w-3/6  top-16 rtl absolute font-bold right-10">
              <h1 className="text-txt text-[22px]">سياحة المغامرات</h1>
              <p className="text-[14px] mt-5 text-txt thin">
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
      <section className=" mb-20 block lg:hidden future_slide2 overflow-hidden">
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
              strength={500}
              className=" relative h-[1200px]   "
              bgImage="/future/Group 8199.png"
              bgImageStyle={{ objectFit: 'cover', height: 'h-[1200px]' }}
            >
              <div className=" absolute w-full h-full top-0 left-0">
                <div className=" container py-20">
                  <div className="flex items-start gap-4 lg:items-center lg:flex-row flex-col lg:justify-between">
                    <h1 className="text-white tBold text-[24px] lg:text-[30px]">
                      {t('FranchiseOpportunities')}
                    </h1>
                    <button className="px-5 py-2  text-sm    hover:bg-txt  bg-white text-txt thin hover:text-white border border-txt rounded-full flex items-center gap-2">
                      <FaHandshake className="w-5 h-5 transform  -rotate-45 " />
                      {t('handShake')}
                    </button>
                  </div>
                  <p className="text-white text-[14px] lg:text-[18px] thin lg:w-4/5 pt-8">
                    {t('franchise_text')}
                  </p>
                  <div className=" mt-20 w-full px-10 py-3 hover:bg-opacity-25 flex flex-col lg:items-center lg:flex-row  bg-white bg-opacity-20 lg:gap-10">
                    <h1 className="text-white font-bold text-[32px] lg:text-[81px]">
                      ١
                    </h1>
                    <p className="text-white thin text-[14px] lg:text-[18px] lg:w-4/5 ">
                      ستعمل شركة دان على تمكين المزارعين وملاك الأراضي من خلال
                      منح حق الامتياز وتوفير الدعم في عدة مجالات تشمل: إرشادات
                      معايير البناء والتصميم، والتسويق.
                    </p>
                  </div>
                  <div className=" mt-20 w-full px-10 py-3 hover:bg-opacity-25 flex flex-col lg:items-center lg:flex-row  bg-white bg-opacity-20 lg:gap-10">
                    <h1 className="text-white font-bold text-[32px] lg:text-[81px] ">
                      ٢
                    </h1>
                    <p className="text-white thin text-[14px] lg:text-[18px] lg:w-4/5 ">
                      ستعمل شركة دان على تمكين المزارعين وملاك الأراضي من خلال
                      منح حق الامتياز وتوفير الدعم في عدة مجالات تشمل: إرشادات
                      معايير البناء والتصميم، والتسويق.
                    </p>
                  </div>
                  <div className=" mt-20 w-full px-10 py-3 hover:bg-opacity-25 flex flex-col lg:items-center lg:flex-row  bg-white bg-opacity-20 lg:gap-10">
                    <h1 className="text-white font-bold text-[32px] lg:text-[81px]">
                      ٣
                    </h1>
                    <p className="text-white thin text-[14px] lg:text-[18px] lg:w-4/5 ">
                      ستعمل شركة دان على تمكين المزارعين وملاك الأراضي من خلال
                      منح حق الامتياز وتوفير الدعم في عدة مجالات تشمل: إرشادات
                      معايير البناء والتصميم، والتسويق.
                    </p>
                  </div>
                  <p className="text-white thin lg:w-4/5 pt-8">
                    نحن على استعدادٍ تامٍ لدعم شركائنا في الامتياز، بمن فيهم
                    المزارعين وملاك الأراضي، لتأسيس أعمالهم التجارية المستدامة
                    والمربحة.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
      <Footer />
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
