import React, {
  useEffect,
  useRef,
  useState,
  useTransition,
  useCallback,
  useLayoutEffect,
} from 'react';
import Footer from '../components/layout/Footer';
import Slider from 'react-slick';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Services from '../components/home/Services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import ScrollAnimations from '../components/scrollAnimations';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
import config from '../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const { locale } = router;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settingsDesktop = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: locale === 'ar' ? true : false,
    autoplay: true,
  };
  const [tourisms, setTourisms] = useState([]);
  const [title = '', setTitle] = useState('');
  const [description, setDescription] = useState([]);
  const [about_1, setAbout1] = useState('');
  const [about_2, setAbout2] = useState('');
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [silders, setSilders] = useState([]);
  const [danNumberTitle, setDanNumberTitle] = useState('');
  const [main_image, setMainImage] = useState('');
  const [url_video_main, setUrlVideoMain] = useState('');
  const getHome = useCallback(async () => {
    try {
      await axios
        .get(`${apiURL}/home`, {
          headers: {
            'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setTitle(response?.data?.data?.titele);
            setDescription(
              response?.data?.data?.description
                ? response?.data?.data?.description
                    .split('\n')
                    .filter((x) => x.trim().length)
                    .map((x) => x.trim())
                : [],
            );
            setTourisms(response?.data?.data?.typetourisms);
            setAbout1(response?.data?.data?.about);
            setAbout2(response?.data?.data?.about1);
            setStories(response?.data?.data?.stories);
            setPosts(response?.data?.data?.posts);
            setSilders(response?.data?.data?.silders);
            setDanNumberTitle(response?.data?.data?.plain_text);
            setMainImage(response?.data?.data?.main_image);
            setUrlVideoMain(response?.data?.data?.url_video_main);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [router.locale]);
  useEffect(() => {
    getHome();
  }, [getHome]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollAnimations();
    });
    return () => ctx.revert();
  }, []);

  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen overflow-hidden">
      <main>
        <Services
          tourisms={tourisms}
          title={title}
          description={description}
          about_1={about_1}
          about_2={about_2}
          silders={silders}
          mainImage={main_image}
          videoURL={url_video_main}
        />

        <div className="w-full mt-16 lg:mt-40 mb-20 overflow-hidden scrubElements scrubFadeLeft">
          <div className="container">
            <h1 className="text-[25px] text-center lg:bottom-20 lg:text-[30px] tBold text-[#5A2910] pb-16">
              {danNumberTitle}
            </h1>
            <div className="w-full hidden lg:block ">
              <Slider {...settingsDesktop}>
                {stories.map((item, ind) => (
                  <div key={ind} className="relative w-full p-4">
                    <img
                      key={ind}
                      src={item.icon}
                      alt=""
                      className="rounded-md w-full object-cover"
                    />
                    <div
                      className={
                        router.locale === 'ar'
                          ? 'absolute bottom-5  z-10 p-4 right-5 text-right'
                          : 'absolute bottom-5 z-10 p-4 left-5 text-left'
                      }
                    >
                      <h1 className="text-white font-bold text-6xl flex items-end gap-2">
                        <span
                          className={
                            router.locale === 'ar'
                              ? 'inline-block order-2'
                              : 'inline-block order-1'
                          }
                        >
                          {item.number}{' '}
                        </span>
                        <span
                          className={
                            router.locale === 'ar'
                              ? 'inline-block order-1 text-[20px] mb-2 flex-1 text-right'
                              : 'inline-block order-2 text-[20px] mb-2 flex-1 text-left'
                          }
                        >
                          {item.text_number}
                        </span>
                      </h1>
                      <p className="text-xs text-white thin pt-1">
                        {item.titele}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="w-full block lg:hidden px-4">
              <Slider {...settings}>
                {stories.map((item, ind) => (
                  <div key={ind} className="relative w-full p-4">
                    <img
                      key={ind}
                      src={item.icon}
                      alt=""
                      className="rounded-md w-full object-cover"
                    />
                    <div
                      className={
                        router.locale === 'ar'
                          ? 'absolute bottom-5  z-10 p-4 right-5 text-right'
                          : 'absolute bottom-5 z-10 p-4 left-5 text-left'
                      }
                    >
                      <h1 className="text-white font-bold text-6xl flex items-end gap-2">
                        <span
                          className={
                            router.locale === 'ar'
                              ? 'inline-block order-2'
                              : 'inline-block order-1'
                          }
                        >
                          {item.number}{' '}
                        </span>
                        <span
                          className={
                            router.locale === 'ar'
                              ? 'inline-block order-1 text-[20px] mb-2 flex-1 text-right'
                              : 'inline-block order-2 text-[20px] mb-2 flex-1 text-left'
                          }
                        >
                          {item.text_number}
                        </span>
                      </h1>
                      <p className="text-xs text-white thin pt-1">
                        {item.titele}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="w-full mt-40 mb-20 overflow-hidden scrubElements scrubFadeRight">
          <div className="container">
            <h1 className="text-[30px] tBold text-[#5A2910] pb-16">
              {t('nav.media')}
            </h1>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
              {posts.map((item) => (
                <Link
                  key={item.id}
                  href={
                    router.locale === 'en'
                      ? `/en/news/${item.id}`
                      : `/news/${item.id}`
                  }
                  className="bg-[#e0e0e047] cursor-pointer"
                >
                  <img src={item.image} alt={item.name + 'image'} />
                  <div className="px-4 py-6">
                    <div className="flex items-center justify-between">
                      <button
                        className={'px-3 rounded-full py-1 text-sm text-white '}
                        style={{
                          backgroundColor: `${item.category_color}`,
                        }}
                      >
                        {item.category_name}
                      </button>
                      <p className="text-[#562E15]">{item.created_at.date}</p>
                    </div>
                    <p className="text-[18px]  pt-8 pb-3 text-[#562E15] font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[#562E15] text-sm lg:text-base ">
                      {item.bio}
                    </p>
                    <div className=" mt-3 flex text-[11px] lg:text-base text-[#562E15]   w-full">
                      {t('readmore')} {'>'}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
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
