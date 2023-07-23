import React, { useState, useCallback, useEffect } from 'react';
import config from '../../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import { useRouter } from 'next/router';
export default function Footer() {
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
    <div className=" flex items-center gap-2">
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
    </div>
  );
}
