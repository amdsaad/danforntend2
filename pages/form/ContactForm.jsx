import { useRef, useState, useCallback, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";
import config from "../../components/config";
const apiURL = config.api_url;
import axios from "axios";
import { useRouter } from "next/router";
import Topbar from "../../components/layout/Topbar";

export default function ContactForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const getContact = useCallback(async () => {
    try {
      await axios
        .get(`${apiURL}/settings`, {
          headers: {
            "Accept-Language": `${router.locale === "en" ? "en" : "ar"}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setTitle(response?.data?.contactus_titele);
            setName(response?.data?.name_con);
            setEmail(response?.data?.email_con);
            setMobile(response?.data?.phone_con);
            setCity(response?.data?.city_con);
            setMessage(response?.data?.text_con);
            setFeedback(response?.data?.feedback);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [setTitle, setName, setEmail, setMobile, setCity, setMessage, router.locale]);


  const { t } = useTranslation();

    useEffect(() => {
      getContact();
    }, [getContact]);

  return (
    <div className=" relative w-full ">
   
     
          <div className="grid grid-cols-1 gap-x-10 gap-y-4 lg:gap-y-8 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <input type="text" className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin" placeholder={name} />
            </div>
            <div>
              <input type="text" className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin" placeholder={email} />
            </div>
            <div>
              <input type="text" className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-txt placeholder:text-txt thin" placeholder={mobile} />
            </div>
            <div className="lg:col-span-2">
              <input type="text" className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin" placeholder={city} />
            </div>
            <div className="lg:col-span-2">
              <input
                type="text"
                className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin"
                // TODO: to be added in the backend
                placeholder={t("AreaOfInterest")}
              />
            </div>
            <div className="lg:col-span-4">
              <textarea placeholder={message} className=" border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin" name="" id="" ></textarea>
            </div>
            <button className="px-32 py-3 thin bg-[#E5E6E7] text-txt hover:bg-txt hover:text-white  bg-opacity-40 text-lg">{t("send")}</button>

          </div>
      
    
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
