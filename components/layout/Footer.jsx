import React from 'react';
import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <div className=" w-full bg-[#552A0E]">
      <div className="container hidden lg:grid items-center  pt-12 grid-cols-1 lg:grid-cols-4 gap-4">
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
              {t('about-dan')}
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
              {t('future-projects')}
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
              {t('newsmain')}
            </a>
          </Link>
        </div>
        <div className=" flex  flex-col gap-3">
          <div className=" flex items-center gap-2">
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
          </div>
          <Link legacyBehavior href="/careers">
            <a
              className={
                router.pathname == '/careers'
                  ? 'text-pr'
                  : ' thin hover:text-pr text-white'
              }
            >
              {t('careers')}
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
              {t('contact-us')}
            </a>
          </Link>
          <Link legacyBehavior href="/terms-conditions">
            <a
              className={
                router.pathname == '/terms-conditions'
                  ? 'text-pr'
                  : ' thin hover:text-pr  text-white'
              }
            >
              {t('PrivacyAndUsagePolicy')}
            </a>
          </Link>
        </div>
        <div></div>
        <div className="flex items-center gap-3">
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
          <div className=" flex items-center gap-2">
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
          </div>
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
      <div className=" w-full text-center pt-7 pb-8 mt-10 ">
        <p className="text-xs lg:text-sm text-white thin">
          {t('AllRightsReserved')}
        </p>
      </div>
    </div>
  );
};

export default Footer;
