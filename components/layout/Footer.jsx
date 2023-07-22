import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import config from '../../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import NavContacts from './NavContacts';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
export default function Footer() {
  const { t } = useTranslation();
  const router = useRouter();

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
            setContacts(response?.data?.contacts);
            console.log(response?.data?.contacts);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [router.locale]);
  useEffect(() => {
    getContact();
  }, [getContact]);
  return (
    <div className=" w-full bg-[#552A0E]">
      <div className="container hidden lg:grid items-center  pt-12  lg:grid-cols-4 gap-4">
        <div className=" flex  flex-col gap-3">
          <div className=" flex items-center gap-2">
            <img src="/home/l1.png" className="w-5" alt="" />
            <img src="/home/l2.png" className="w-5" alt="" />
            <img src="/home/l3.png" className="w-5" alt="" />
            <img src="/home/l4.png" className="w-5" alt="" />
          </div>
          <Link legacyBehavior href="/about-dan">
            <a
              className={
                router.pathname == '/about-dan'
                  ? 'text-pr'
                  : ' thin hover:text-pr text-white'
              }
            >
              {t('nav.about')}
            </a>
          </Link>

          <Link legacyBehavior href="/future-projects">
            <a
              className={
                router.pathname == '/future-projects'
                  ? 'text-pr'
                  : ' thin hover:text-pr text-white'
              }
            >
              {t('nav.future')}
            </a>
          </Link>
          <Link legacyBehavior href="/newsmain">
            <a
              className={
                router.pathname == '/newsmain'
                  ? 'text-pr'
                  : ' thin hover:text-pr text-white'
              }
            >
              {t('nav.media')}
            </a>
          </Link>
        </div>
        <div className=" flex flex-col gap-3">
          <NavContacts />
          {/* <div className=" flex items-center gap-2">
            {contacts.twitter ? (
              <a target="_blank" href={contacts.twitter}>
                <AiFillTwitterCircle className=" w-5 h-5 text-white thin hover:text-pr" />
              </a>
            ) : null}

            {contacts.instagram ? (
              <a target="_blank" href={contacts.instagram}>
                <AiOutlineInstagram className=" w-5 h-5 text-white thin hover:text-pr" />
              </a>
            ) : null}

            {contacts.linkedin ? (
              <a target="_blank" href={contacts.linkedin}>
                <AiFillLinkedin className=" w-5 h-5 text-white thin hover:text-pr" />
              </a>
            ) : null}
          </div> */}
          <Link legacyBehavior href="/careers">
            <a
              className={
                router.pathname == '/careers'
                  ? 'text-pr'
                  : ' thin hover:text-pr text-white'
              }
            >
              {t('nav.careers')}
            </a>
          </Link>

          <Link legacyBehavior href="/contact-us">
            <a
              className={
                router.pathname == '/contact-us'
                  ? 'text-pr'
                  : ' thin hover:text-pr text-white'
              }
            >
              {t('nav.contact')}
            </a>
          </Link>
          <div className="p-4"></div>
        </div>
        <div></div>
        <div className="">
          <a
            href="https://www.pif.gov.sa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/home/flogo.png" alt="" />
          </a>
        </div>
      </div>
      <div className="container block lg:hidden i pt-12">
        <div className="flex items-center justify-between pb-10">
          {/* <div className=" flex items-center gap-2">
            <a
              target="_blank"
              href="https://twitter.com/musimorph
"
            >
              <AiFillTwitterCircle className=" w-5 h-5 text-white thin hover:text-pr" />
            </a>
            <a target="_blank" href="https://instagram.com/musimorph">
              <AiOutlineInstagram className=" w-5 h-5 text-white thin hover:text-pr" />
            </a>
            <a target="_blank" href="https://linkedin.com/company/musimorph">
              <AiFillLinkedin className=" w-5 h-5 text-white thin hover:text-pr" />
            </a>
          </div> */}
          <NavContacts />

          <div className=" flex items-center gap-2">
            <img src="/home/l1.png" className="w-5" alt="" />
            <img src="/home/l2.png" className="w-5" alt="" />
            <img src="/home/l3.png" className="w-5" alt="" />
            <img src="/home/l4.png" className="w-5" alt="" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <a
            href="https://www.pif.gov.sa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/home/flogo.png" alt="" />
          </a>
        </div>
      </div>
      <div className=" w-full text-center pt-7 pb-8">
        <div className="flex items-center justify-center gap-2 py-4">
          <Link legacyBehavior href="/privacy-policy">
            <a
              className={
                router.pathname == '/privacy-policy'
                  ? 'text-pr'
                  : ' thin hover:text-pr  text-white'
              }
            >
              {t('nav.privacy')}
            </a>
          </Link>
          <p className="text-white">|</p>
          <Link legacyBehavior href="/terms-conditions">
            <a
              className={
                router.pathname == '/terms-conditions'
                  ? 'text-pr'
                  : ' thin hover:text-pr  text-white'
              }
            >
              {t('nav.terms')}
            </a>
          </Link>
        </div>
        <p className="text-xs lg:text-sm text-white thin">
          {t('AllRightsReserved')}
        </p>
      </div>
    </div>
  );
}
