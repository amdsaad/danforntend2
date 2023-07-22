import React, { useEffect, useRef, useState, useCallback } from 'react';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Topbar from '../components/layout/Topbar';
import config from '../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';


export default function Terms() {
    const { t } = useTranslation();
    const [terms, setTerms] = useState('');
    const router = useRouter();


    const [post, setPost] = useState(false);
    const getTerms = useCallback(async () => {
        try {
            await axios
                .get(`${apiURL}/settings`, {
                    headers: {
                        'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response?.data?.pages.terms.content);
                        setTerms(response?.data?.pages?.terms?.content);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getTerms();
    }, [getTerms]);
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