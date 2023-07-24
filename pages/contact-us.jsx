import React, { useRef, useState, useCallback, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { gsap } from 'gsap';
import ScrollAnimations from '../components/scrollAnimations';
import Image from 'next/image';
import { BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useTranslation } from 'next-i18next';
import config from '../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';
import Form from './form/Form';

export default function ContactUs() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [feedback, setFeedback] = useState('');
  const scrollRef = useRef(null);
  const [defaultCenter, setDefaultCenter] = useState({
    lat: 0,
    lng: 0,
  });
  const [intro, setIntro] = useState('');
  const [introImage, setIntroImage] = useState('');
  const [contacts, setContacts] = useState({});

  const getContact = useCallback(async () => {
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
            setTitle(response?.data?.contactus_titele);
            setFeedback(response?.data?.feedback);
            setDefaultCenter({
              lat: parseFloat(response?.data?.lat),
              lng: parseFloat(response?.data?.long),
            });
            setIntro(response?.data?.intro_contactus);
            setIntroImage(response?.data?.intro_logo_contactus);
            setContacts(response?.data?.contacts);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [setTitle, router.locale]);

  const scrollToElement = () => {
    const element = scrollRef.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const { t } = useTranslation();

  useEffect(() => {
    getContact();
  }, [getContact]);
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollAnimations();
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className=" relative w-full min-h-screen">
      
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
                <h1 className=" text-[24px]  lg:text-[35px] text-white font-bold">
                  {title}
                </h1>
                <p className="text-white text-[16px] lg:text-[16px] lg:w-3/5 py-6 ">
                  {feedback}
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
              src={introImage}
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
              {/* TODO: TO BE ADDED IN THE BACKEND  */}
              {intro}
            </p>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="container">
          <div  className='scrubElements scrubFadeUp'>

          <Form />
          </div>

          <div className="flex items-center flex-col lg:flex-row gap-10 justify-between mt-10 scrubElements scrubFadeLeft">
            <div className=" hidden lg:flex items-center gap-3">
              <p className="text-[19px] text-txt ">{t('FollowUs')}</p>
              {/* TODO: add social media from the backend */}
              {contacts.twitter ? (
                <a
                  href={contacts.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter className="w-6 h-6 text-txt" />
                </a>
              ) : null}
              {contacts.linkedin ? (
                <a
                  href={contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="w-6 h-6 text-txt thin" />
                </a>
              ) : null}
              {contacts.instagram ? (
                <a
                  href={contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="w-6 h-6 text-txt thin" />
                </a>
              ) : null}
            </div>
            <div className=" flex lg:hidden items-center gap-3">
              <p className="text-[19px] text-txt ">{t('FollowUs')}</p>
              {contacts.twitter ? (
                <a
                  href={contacts.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter className="w-6 h-6 text-txt" />
                </a>
              ) : null}
              {contacts.linkedin ? (
                <a
                  href={contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin className="w-6 h-6 text-txt thin" />
                </a>
              ) : null}
              {contacts.instagram ? (
                <a
                  href={contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="w-6 h-6 text-txt thin" />
                </a>
              ) : null}
            </div>
          </div>
          <div className="mt-10 bg-white scrubElements scrubFadeRight">
            <LoadScript googleMapsApiKey="AIzaSyDhEd4erdTFIBvGYH5r1Uyv7D7ssra05I0">
              <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                zoom={10} // Specify the initial zoom level
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
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
