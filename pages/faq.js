import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import config from "../components/config";
const apiURL = config.api_url;
import axios from "axios";
import Topbar from "../components/layout/Topbar";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Careers() {
  const { t } = useTranslation();

  const router = useRouter();

  const [faq, setFAQ] = useState([]);

  const getFAQ = useCallback(async () => {
    try {
      await axios

        .get(`${apiURL}/commonquestions`, {
          headers: {
            "Accept-Language": `${router.locale === "en" ? "en" : "ar"}`,
          },
        })

        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setFAQ(
              response?.data?.data.map((item) => {
                return {
                  ...item,
                  active: false,
                };
              })
            );
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [setFAQ, router.locale]);

  useEffect(() => {
    getFAQ();
  }, [getFAQ]);

  return (
    <div className="relative w-full">
      <Topbar gd={true} />

      <section>
        <div className="w-full relative pb-20 lg:pb-0  min-h-screen">
          <div className="pt-40">
            <div className="container h-full ">
              <div className=" flex items-center gap-2 mb-4">
                <Image
                  src="/home/l1.png"
                  width={20}
                  height={20}
                  className="w-5"
                  alt=""
                />
                <Image
                  src="/home/l2.png"
                  width={20}
                  height={20}
                  className="w-5"
                  alt=""
                />
                <Image
                  src="/home/l3.png"
                  width={20}
                  height={20}
                  className="w-5"
                  alt=""
                />
                <Image
                  src="/home/l4.png"
                  width={20}
                  height={20}
                  className="w-5"
                  alt=""
                />
              </div>
              <h1 className=" text-[24px]  lg:text-[35px] text-[#552A0E] font-bold introFadeUp mb-6">
                {t("faq")}
              </h1>
              <ul>
                {faq.map((item, index) => (
                  <li
                    key={index}
                    className="mb-4 bg-[#E5E6E7] p-4 cursor-pointer transition ease-in-out"
                    onClick={() => {
                      setFAQ(
                        faq.map((faqItem) => {
                          if (faqItem.id === item.id) {
                            return {
                              ...faqItem,
                              active: !faqItem.active,
                            };
                          } else {
                            return {
                              ...faqItem,
                              active: false,
                            };
                          }
                        })
                      );
                    }}
                  >
                    <div>
                      <p
                        className={`text-[#552A0E] text-[20px] flex gap-2 items-center ${
                          item.active ? "font-bold mb-6" : ""
                        }`}
                      >
                        <span className="text-[#552A0E]">
                          {item.active ? "-" : "+"}
                        </span>
                        {item.question}
                      </p>

                      <p
                        className={`text-[#552A0E] text-[20px] font-bold mx-4 transition ease-in-out ${
                          item.active ? "opacity-100 visible h-auto" : "invisible opacity-0 h-0"
                        }`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
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
