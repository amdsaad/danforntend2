import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import config from '../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import ScrollAnimations from '../components/scrollAnimations';
import TheHeroBg from '../components/TheHeroBg';

export default function Newsmain() {
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredposts, setFilteredposts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [videoURL, setUrlVideoMain] = useState('');
  const router = useRouter();
  const { t } = useTranslation();

  const scrollToElement = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const getCategories = useCallback(async () => {
    const allCat = {
      id: 'all',
      name: t('all'),
      color: '#552A0E',
    };
    try {
      await axios
        .get(`${apiURL}/categorypost`, {
          headers: {
            'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            response?.data?.data?.unshift(allCat);
            setCategories(response?.data?.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [setCategories, router.locale, t]);
  const getPosts = useCallback(
    async (id) => {
      try {
        await axios
          .get(`${apiURL}/posts${id ? '?category_id=' + id : ''}`, {
            headers: {
              'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              setPosts(response?.data?.data.Posts);
              setFilteredposts(response?.data?.data.Posts);
              setTitle(response?.data?.data.titele);
              setDescription(
                response?.data?.data.description
                  .split('\n')
                  .filter((x) => x.trim().length)
                  .map((description) => description.trim()),
              );
              setMainImage(response?.data?.data?.post_image);
              setUrlVideoMain(response?.data?.data?.url_video_post);
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
    [setPosts, router.locale],
  );

  useEffect(() => {
    getCategories();
    getPosts();

    let ctx = gsap.context(() => {
      ScrollAnimations();
    });
    return () => ctx.revert();
  }, [getCategories, getPosts]);

  return (
    <div className=" w-full min-h-screen relative ">
      <section>
        <div className="w-full relative  min-h-screen">
          <TheHeroBg mainImage={mainImage} videoURL={videoURL} />
          {/* <Image
            src="/news/hero.png"
            alt="hero"
            className="hidden lg:block introFadeUp"
            fill
            objectFit="cover"
          />
          <Image
            src="/news/heromob.png"
            alt="hero"
            className="block lg:hidden introFadeUp"
            fill
            objectFit="cover"
          /> */}
          <div className="absolute w-full h-full z-10">
            <div className="container h-full ">
              <div className=" flex flex-col h-full justify-end  lg:lg:justify-end items-start pb-32">
                <h1 className=" text-[24px] lg:text-[35px] text-white font-bold introFadeUp">
                  {title}
                </h1>

                {description?.map((item, index) => (
                  <p
                    key={index}
                    className="text-white text-[16px] lg:text-[16px] lg:w-3/5 py-6  introFadeUp"
                  >
                    {item}
                  </p>
                ))}
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
          <div className="flex items-center  justify-between">
            <h1 className="text-txt tBold text-[24px] lg:text-[30px] scrubElements scrubFadeRight">
              {title}
            </h1>
          </div>
          <div className="mt-10 flex items-center flex-wrap gap-3 scrubElements scrubFadeRight">
            {categories.map((item) => (
              <div
                key={item.id}
                className="px-5 border whitespace-nowrap rounded-full text-[13px] text-white py-1 cursor-pointer"
                style={{
                  backgroundColor: `${item?.color}`,
                }}
                onClick={() => {
                  const filtered =
                    item.id != 'all'
                      ? posts.filter((post) => post.category_id === item.id)
                      : posts;
                  setFilteredposts(filtered);
                }}
              >
                {item?.name}
              </div>
            ))}
          </div>
          <div className=" grid mt-20 grid-cols-1 lg:grid-cols-3 gap-10 scrubElements scrubFadeUp">
            {filteredposts?.map((item) => (
              <Link
                href={
                  router.locale === 'en'
                    ? `/en/news/${item.id}`
                    : `/news/${item.id}`
                }
                key={item.id}
                className="bg-[#e0e0e047] cursor-pointer "
              >
                <img src={item?.image} alt="" />
                <div className="px-4 py-6">
                  <div className="flex items-center justify-between">
                    <button
                      className="px-3 rounded-full py-1 text-sm text-white"
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
                    {t('readmore')} {'>'}{' '}
                  </div>
                </div>
              </Link>
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
