import React, { useEffect, useRef, useState, useCallback } from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Topbar from '../../components/layout/Topbar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { BiShareAlt } from 'react-icons/bi';
import { AiFillFilePdf } from 'react-icons/ai';
import { FaPlay, FaPause } from 'react-icons/fa';
import config from '../../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';


export default function NewsRead() {
    const { t } = useTranslation();

    const [post, setPost] = useState(false);
    const router = useRouter();
    const { nid } = router.query;
    const getNews = useCallback(async () => {
        if (nid) {
            try {
                await axios
                    .get(`${apiURL}/posts/${nid}`, {
                        headers: {
                            "Accept-Language": `${router.locale === "en" ? "en" : "ar"
                                }`
                        }
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            console.log('nid post', response?.data?.data);
                            setPost(response?.data?.data);
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }, [setPost, nid, router.locale]);
    useEffect(() => {
        getNews();
    }, [router.locale, getNews]);
    if (!post) {
        // Returns null on first render, so the client and server match
        return null;
    }
    return (
        <div className="relative w-full">
            <Topbar gd={true} />
            <section>
                <div className="w-full relative pb-20 lg:pb-0  min-h-screen">
                    {/* <Image
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
                    /> */}

                    <div className="relative w-full h-full z-10">
                        <div className="container h-full ">
                            <div className=" flex flex-col   pt-40">
                                <Link href="/newsmain">
                                    <p className="text-txt text-sm lg:text-base flex items-center gap-1 cursor-pointer">
                                        <IoIosArrowForward className="w-6 h-6" />
                                        {t("allNews")}
                                    </p>
                                </Link>
                                <h1 className=" text-[22px]  lg:text-[46px] text-txt font-bold">
                                    {post?.name}
                                </h1>
                            </div>
                            <div className="flex items-center mt-10 justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="px-5 rounded-full py-1 text-[9px] lg:text-base text-white" style={{
                                        backgroundColor: `${post.category_color}`,
                                    }} >
                                        {post?.category_name}
                                    </div>
                                    <p className="text-[9px] lg:text-xl text-txt">{t('postDate')}</p>
                                    <p className="text-[9px] lg:text-xl text-txt">{post?.created_at?.date}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {
                                        post?.file_en && router.locale === "en" ?
                                            <a download={post.file_en} href={post.file_en}  target="_blank" >
                                                <AiFillFilePdf className="w-7 h-7 text-[#E98108] cursor-pointer" />
                                            </a>
                                            : null

                                    }
                                    {
                                        post?.file_ar && router.locale === "ar" ?
                                            <a download={post.file_ar} href={post.file_ar} target='_blank'  >
                                                <AiFillFilePdf className="w-7 h-7 text-[#E98108] cursor-pointer" />
                                            </a>
                                            : null

                                    }

                                    <BiShareAlt className="w-7 h-7 text-[#E98108] cursor-pointer" />
                                </div>
                            </div>
                            <div className='my-10'>
                                <BigScreenVideo />
                            </div>
                            <div
                                className="text-[#626262] text-[16px] lg:text-[18px] thin my-10"
                                dangerouslySetInnerHTML={{
                                    __html: post?.description,
                                }}
                            ></div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

const BigScreenVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const [post, setPost] = useState(false);
    const router = useRouter();
    const { nid } = router.query;

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

    const getNews = useCallback(async () => {
        if (nid) {
            try {
                await axios
                    .get(`${apiURL}/posts/${nid}`, {
                        headers: {
                            'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
                        },
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            setPost(response?.data?.data);
                            console.log(response?.data?.data);
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        }
    }, [setPost, nid, router.locale]);

    useEffect(() => {
        const video = videoRef.current;

        // Update the video source when the videoObj changes
        video.src = `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=5`;
        video.load(); // Load the updated video source

        // Pause the video when the videoObj changes
        video.pause();
        setIsPlaying(false);

        // Reset the progress bar
        progressRef.current.style.width = '0%';

        // Add event listeners
        video.addEventListener('timeupdate', updateProgressBar);
        getNews();
        // Clean up the event listener on unmount
        return () => {
            video.removeEventListener('timeupdate', updateProgressBar);
        };
    }, [getNews]);

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
                    style={{ width: '0%' }}
                ></div>
            </div>
        </div>
    );
};
export async function getStaticPaths() {
    let posts = [];
    try {
        await axios
            .get(`${apiURL}/posts`, { headers: { "Accept-Language": `ar` } })
            .then((response) => {
                if (response.status === 200) {
                    posts = response?.data?.data.Posts;
                }
            });
    } catch (error) {
        console.log(error);
    }
    const paths = posts.map((post) => ({
        params: { nid: JSON.stringify(post.id) }
    }));
    return {
        paths,
        fallback: true // false or 'blocking'
    };
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}