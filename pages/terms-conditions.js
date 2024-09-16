import React, { useEffect, useRef, useState, useCallback, useContext } from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Topbar from '../components/layout/Topbar';
import config from '../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { AppContext } from '../context/AppContext';

export default function Terms() {
    const { settings } = useContext(AppContext)
    const { t } = useTranslation();
    const [terms, setTerms] = useState('');
    const router = useRouter();


    const [post, setPost] = useState(false);


    useEffect(() => {
        if (settings) {
            setTerms(settings?.pages?.terms?.content);
        }
    }, [settings]);
    return (
        <div className="relative w-full min-h-screen">
            <Topbar gd={true} />
            <div className="container py-36">
                <div
                    className="thin"
                    dangerouslySetInnerHTML={{
                        __html: terms,
                    }}
                ></div>
            </div>

        </div>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}