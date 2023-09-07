import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import NavContacts from './NavContacts';
import { useTranslation } from 'next-i18next';

const Topbar = ({ gd, aboutDanLang, setAboutDanLang }) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== 'default',
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('');
  useEffect(() => {
    let dir = router.locale == 'ar' ? 'rtl' : 'ltr';
    let lang = router.locale == 'ar' ? 'ar' : 'en';
    document.querySelector('html').setAttribute('dir', dir);
    document.querySelector('html').setAttribute('lang', lang);
  }, [language, router.locale]);
  const { t } = useTranslation('');

  return (
    <>
      <SideBar
        open={open}
        setOpen={setOpen}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      <header
        className={`fixed w-full ${
          isScrolled
            ? 'py-8'
            : 'border-b border-gray-100 border-opacity-50 py-8'
        }`}
      >
        {gd ? (
          <div
            className={`absolute inset-0 h-full w-full bg-gradiunt2 transition-opacity duration-1000 `}
          />
        ) : (
          <div
            className={`absolute inset-0 h-full w-full bg-gradiunt2 transition-opacity duration-1000 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <div className=" px-10 relative z-10 flex items-center justify-between h-full gap-5">
          <div className="flex  items-center gap-16 h-full">
            <Link href="/">
              <img
                src="/logo.png"
                style={{ width: '100%', objectFit: 'contain' }}
                className=" h-10 "
                alt=""
              />
            </Link>
            <div className="  hidden lg:flex items-center pt-3 gap-8">
              <Link legacyBehavior href="/about-dan">
                <a
                  className={
                    router.pathname == '/about-dan'
                      ? 'text-white border-b-2 thin border-pr  text-[15px]'
                      : ' text-gray-50 thin border-transparent border-b-2 hover:border-b-2 hover:border-pr text-[15px]'
                  }
                >
                  {t('nav.about')}
                </a>
              </Link>
              <Link legacyBehavior href="/future-projects">
                <a
                  className={
                    router.pathname == '/future-projects'
                      ? 'text-white border-b-2 thin border-pr text-[15px]'
                      : ' text-gray-50 thin border-transparent border-b-2 hover:border-b-2 hover:border-pr text-[15px]'
                  }
                >
                  {t('nav.future')}
                </a>
              </Link>
              <Link legacyBehavior href="/newsmain">
                <a
                  className={
                    router.pathname == '/newsmain'
                      ? 'text-white border-b-2 thin border-pr  text-[15px]'
                      : ' text-gray-50 thin border-transparent border-b-2 hover:border-b-2 hover:border-pr text-[15px]'
                  }
                >
                  {t('nav.media')}
                </a>
              </Link>
              <Link legacyBehavior href="/careers">
                <a
                  className={
                    router.pathname == '/careers'
                      ? 'text-white border-b-2 thin border-pr  text-[15px]'
                      : ' text-gray-50 thin border-transparent border-b-2 hover:border-b-2 hover:border-pr text-[15px]'
                  }
                >
                  {t('nav.careers')}
                </a>
              </Link>

              <Link legacyBehavior href="/contact-us">
                <a
                  className={
                    router.pathname == '/contact-us'
                      ? 'text-white border-b-2 thin border-pr  text-[15px]'
                      : ' text-gray-50 thin border-transparent border-b-2 hover:border-b-2 hover:border-pr text-[15px]'
                  }
                >
                  {t('nav.contact')}
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {otherLocales?.map((locale) => {
              const { pathname, query, asPath } = router;
              return (
                <span key={'locale-' + locale}>
                  <Link href={{ pathname, query }} as={asPath} locale={locale}>
                    <h1 className="text-white text-lg">
                      {locale === 'en'
                        ? 'English'
                        : locale === 'ar'
                        ? 'عربى'
                        : null}
                    </h1>
                  </Link>
                </span>
              );
            })}
            <FaBars
              onClick={() => setOpen(true)}
              className="w-6 h-6 text-white cursor-pointer hover:text-pr"
            />{' '}
          </div>
        </div>
      </header>
    </>
  );
};

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function SideBar({ open, setOpen, language, setLanguage, t }) {
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setsecondOpen] = useState(false);
  const [thirdOpen, setThirdOpen] = useState(false);
  const [fourOpen, setFourOpen] = useState(false);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        style={{ zIndex: '9999' }}
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
          <div className="fixed inset-0 bg-[#000000] bg-opacity-40 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`pointer-events-none fixed inset-y-0 ${
                language === 'rtl' ? 'left-0' : 'right-0'
              } flex max-w-full`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom={
                  language === 'rtl' ? '-translate-x-full' : 'translate-x-full'
                }
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo={
                  language === 'rtl' ? '-translate-x-full' : 'translate-x-full'
                }
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col  bg-gradiunt border-r border-gray-50 border-opacity-50 shadow-xl">
                    <div className="flex-1  py-6 ">
                      <div className="flex px-8 border-b border-gray-50 border-opacity-50  pb-4  items-start justify-between">
                        <div className="ml-3 flex h-7 items-center">
                          <div onClick={() => setOpen(false)}>
                            <XMarkIcon
                              className="h-6 w-6 cursor-pointer text-white"
                              aria-hidden="true"
                            />
                          </div>
                        </div>

                        {language === 'rtl' ? (
                          <h1
                            onClick={() => {
                              localStorage.setItem('tLang', 'ltr');
                              setLanguage('ltr');
                            }}
                            className="text-white text-lg"
                          >
                            English
                          </h1>
                        ) : (
                          <h1
                            onClick={() => {
                              localStorage.setItem('tLang', 'rtl');
                              setLanguage('rtl');
                            }}
                            className="text-white text-lg"
                          >
                            {' '}
                            عربي
                          </h1>
                        )}
                      </div>
                      <div className="px-8 pt-6  border-b border-gray-50 border-opacity-50 pb-6">
                        <div className="flex cursor-pointer items-center justify-between">
                          <Link href="/about-dan" className="text-white thin">
                            {t('nav.about')}
                          </Link>
                          {!firstOpen ? (
                            <SlArrowDown
                              onClick={() => setFirstOpen(!firstOpen)}
                              className="w-5 h-5 text-white"
                            />
                          ) : (
                            <SlArrowUp
                              onClick={() => setFirstOpen(!firstOpen)}
                              className="w-5 h-5 text-white"
                            />
                          )}
                        </div>
                        {firstOpen && (
                          <div className="mt-6">
                            <p className="text-white text-sm thin cursor-pointer">
                              {t('VisionMission')}
                            </p>
                            <p className="text-white text-sm mt-3 thin cursor-pointer">
                              {t('ExperimentalPage')}
                            </p>
                            <p className="text-white text-sm mt-3 thin cursor-pointer">
                              {t('ExperimentalText')}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="px-8 mt-4  border-b border-gray-50 border-opacity-50 pb-6">
                        <div className="flex cursor-pointer mt-8 items-center justify-between">
                          <Link
                            href="/future-projects"
                            className="text-white thin"
                          >
                            {t('nav.future')}
                          </Link>
                          {!secondOpen ? (
                            <SlArrowDown
                              onClick={() => setsecondOpen(!secondOpen)}
                              className="w-5 h-5 text-white"
                            />
                          ) : (
                            <SlArrowUp
                              onClick={() => setsecondOpen(!secondOpen)}
                              className="w-5 h-5 text-white"
                            />
                          )}
                        </div>
                        {secondOpen && (
                          <div className="mt-6">
                            <p className="text-white text-sm thin cursor-pointer">
                              {t('VisionMission')}
                            </p>
                            <p className="text-white text-sm mt-3 thin cursor-pointer">
                              {t('ExperimentalPage')}
                            </p>
                            <p className="text-white text-sm mt-3 thin cursor-pointer">
                              {t('ExperimentalText')}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="px-8 mt-4  border-b border-gray-50 border-opacity-50 pb-6">
                        <div className="flex cursor-pointer mt-8 items-center justify-between">
                          <Link href="/newsmain" className="text-white thin">
                            {t('nav.media')}
                          </Link>
                          {!thirdOpen ? (
                            <SlArrowDown
                              onClick={() => setThirdOpen(!thirdOpen)}
                              className="w-5 h-5 text-white"
                            />
                          ) : (
                            <SlArrowUp
                              onClick={() => setThirdOpen(!thirdOpen)}
                              className="w-5 h-5 text-white"
                            />
                          )}
                        </div>
                        {thirdOpen && (
                          <div className="mt-6">
                            <p className="text-white text-sm thin cursor-pointer">
                              {t('VisionMission')}
                            </p>
                            <p className="text-white text-sm mt-3 thin cursor-pointer">
                              {t('ExperimentalPage')}
                            </p>
                            <p className="text-white text-sm mt-3 thin cursor-pointer">
                              {t('ExperimentalText')}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="px-8 mt-4  border-b border-gray-50 border-opacity-50 pb-6">
                        <div className="flex cursor-pointer mt-8 items-center justify-between">
                          <Link href="/careers" className="text-white thin">
                            {t('nav.careers')}
                          </Link>
                          {!fourOpen ? (
                            <SlArrowDown
                              onClick={() => setFourOpen(!fourOpen)}
                              className="w-5 h-5 text-white"
                            />
                          ) : (
                            <SlArrowUp
                              onClick={() => setFourOpen(!fourOpen)}
                              className="w-5 h-5 text-white"
                            />
                          )}
                        </div>
                        {fourOpen && (
                          <div className="mt-6">
                            <p className="text-white text-sm thin cursor-pointer">
                              {t('VisionMission')}
                            </p>
                            <p className="text-white text-sm mt-3 thin cursor-pointer">
                              {t('ExperimentalPage')}
                            </p>
                            <p className="text-white text-sm mt-3 thin cursor-pointer">
                              {t('ExperimentalText')}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="px-8 mt-4   pb-4">
                        <div className="flex cursor-pointer mt-8 items-center justify-between">
                          <Link href="/contact-us" className="text-white thin">
                            {t('nav.contact')}
                          </Link>
                          <NavContacts />
                        </div>
                      </div>
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

export default Topbar;
