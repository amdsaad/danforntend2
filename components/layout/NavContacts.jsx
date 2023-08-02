import React, { useState, useCallback, useEffect } from 'react';
import config from '../../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { AiOutlineInstagram, AiFillLinkedin,AiOutlineYoutube } from 'react-icons/ai';

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
    <div className=" flex items-center gap-4">
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
      {contacts.threads ? (
        <a target="_blank" href={contacts.threads}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23.979 23.976"
            className="h-4 w-4"
          >
            <g
              id="Instagram_Threads"
              data-name="Instagram Threads"
              transform="translate(0 -0.001)"
            >
              <path
                id="Subtraction_1"
                data-name="Subtraction 1"
                d="M-10377.916,2715.976h-17.705a3.139,3.139,0,0,1-3.137-3.134v-17.707a3.139,3.139,0,0,1,3.137-3.134h17.705a3.139,3.139,0,0,1,3.137,3.134v17.707A3.139,3.139,0,0,1-10377.916,2715.976Zm-8.772-21.088a8.581,8.581,0,0,0-4.112.965,6.841,6.841,0,0,0-2.767,2.834,10.273,10.273,0,0,0-1.114,3.842,13.311,13.311,0,0,0,.622,5.9,7.013,7.013,0,0,0,3.942,4.256,9.369,9.369,0,0,0,3.5.65,9.027,9.027,0,0,0,3.194-.551,6.1,6.1,0,0,0,3.609-3.635,4.643,4.643,0,0,0-2.74-5.809c-.017,0-.027-.019-.039-.05a4.211,4.211,0,0,0-1.806-3.541,4.315,4.315,0,0,0-2.21-.571,4.97,4.97,0,0,0-.655.043,3.846,3.846,0,0,0-2.74,1.644.052.052,0,0,0,.013.073l1.255.856a.046.046,0,0,0,.027.009.055.055,0,0,0,.041-.02,2.211,2.211,0,0,1,1.595-.945,3.792,3.792,0,0,1,.487-.032,2.123,2.123,0,0,1,2.08,1.2,3.382,3.382,0,0,1,.223.749v.018a.05.05,0,0,1-.047.045h-.009a11.275,11.275,0,0,0-1.555-.1c-.208,0-.421.005-.635.016a3.8,3.8,0,0,0-3.463,1.978,2.9,2.9,0,0,0,1.088,3.625,4.273,4.273,0,0,0,2.249.627,3.9,3.9,0,0,0,2.8-1.115,3.952,3.952,0,0,0,.874-1.441,6.359,6.359,0,0,0,.29-1.211.023.023,0,0,1,0-.018.048.048,0,0,1,.042-.024.033.033,0,0,1,.023.009,2.849,2.849,0,0,1,1.1,1.151,3.231,3.231,0,0,1,0,2.756,4.876,4.876,0,0,1-3.458,2.474,9.048,9.048,0,0,1-1.637.149,9.654,9.654,0,0,1-1.315-.092,5.392,5.392,0,0,1-4.274-2.941,11.374,11.374,0,0,1-.762-6.8,6.737,6.737,0,0,1,1.529-3.431,5.605,5.605,0,0,1,3.3-1.771,8.685,8.685,0,0,1,1.522-.135,6.233,6.233,0,0,1,5.153,2.315,6.549,6.549,0,0,1,1.057,2.25.051.051,0,0,0,.051.035h.01l1.479-.389a.038.038,0,0,0,.026-.017.059.059,0,0,0,.008-.043,8.913,8.913,0,0,0-.778-1.947,7.166,7.166,0,0,0-4.893-3.6A10.732,10.732,0,0,0-10386.688,2694.888Zm.07,12.433a3.354,3.354,0,0,1-.821-.105,1.611,1.611,0,0,1-1.017-.725,1.23,1.23,0,0,1-.095-.977,1.965,1.965,0,0,1,1.774-1.117c.306-.03.606-.044.893-.044a8.436,8.436,0,0,1,1.62.157c.021,0,.037.021.037.05a4.353,4.353,0,0,1-.365,1.561A2.12,2.12,0,0,1-10386.618,2707.321Z"
                transform="translate(10398.757 -2692)"
                fill="#fff"
              />
            </g>
          </svg>
        </a>
      ) : null}
      {contacts.platform_x ? (
        <a target="_blank" href={contacts.platform_x}>
          <svg
            id="x"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.618 23.977"
            className="h-4 w-4"
          >
            <path
              id="path1009"
              d="M281.562,167.31l9.891,13.225L281.5,191.287h2.24l8.714-9.414,7.041,9.414h7.623l-10.447-13.969,9.264-10.009h-2.24l-8.025,8.67-6.484-8.67Zm3.294,1.65h3.5l15.464,20.677h-3.5Z"
              transform="translate(-281.5 -167.31)"
              fill="#fff"
            />
          </svg>
        </a>
      ) : null}
      {contacts.snapchat ? (
        <a target="_blank" href={contacts.snapchat}>
          <AiOutlineYoutube className=" w-5 h-5 text-white thin hover:text-pr" />
        </a>
      ) : null}
    </div>
  );
}
