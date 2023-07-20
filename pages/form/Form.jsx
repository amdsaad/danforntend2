import { useRef, useState, useCallback, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { gsap } from "gsap";
import config from "../../components/config";
const apiURL = config.api_url;
import axios from "axios";
import { useRouter } from "next/router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form() {
  const { t } = useTranslation();
  const router = useRouter();
  const [formInput, setFormInput] = useState();
  const [formMsg, setFormMsg] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submittedData, setSubmittedData] = useState();

  const Input_Classes = " custominput border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin";
  const schema = yup.object().shape({
    name: yup.string().required(t("formError.name")),
    email: yup.string().email().required(t("formError.email")),
    mobile: yup
      .number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .nullable()
      .required(t("formError.mobile")),
    city: yup.string().required(t("formError.city")),
    interest: yup.string().required(t("formError.area")),
    resume: yup.mixed(),
    message: yup.string().required(t("formError.message")),
  });
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
            setInterest(response?.data?.interest);
            setFormInput(() => {
              if (router.route === "/" || router.route === "/contact-us") {
                return (
                  <>
                    <small className=" text-red-900">{errors.interest?.message}</small>
                    <input type="text" className={Input_Classes} placeholder={interest} {...register("interest")} />
                  </>
                );
              } else {
                return (
                  <>
                    <small className=" text-red-900">{errors.resume?.message}</small>
                    {/* <label htmlFor="resume" className={Input_Classes} > {t('resume')}</label> */}
                    <input type="file" className="" placeholder={t("resume")} {...register("resume")} id="resume" />
                  </>
                );
              }
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [setTitle, setName, setEmail, setMobile, setCity, setMessage, interest, router.locale]);

  useEffect(() => {
    getContact();
  }, [getContact]);

  const onSubmit = async (data) => {
    setSubmittedData(data);
    console.log(data);
    // TODO: send data to from nodemailer
    try {
      await axios
        .post(
          `${apiURL}/feedback`,
          {
            name: data.name,
            phone: data.mobile,
            message: data.message,
            email: data.emai,
            field: data.interest,
            city: data.city,
          },

          { headers: { accept: `application/json` } }
        )
        .then((response) => {
          if (response.status === 200) {
            setFormMsg("تم إرسال رسالتك بنجاح!");
          }
        });
    } catch (error) {
      console.log(error);
      setFormMsg("حدث خطأ");
    }
  };

  // let inputs = gsap.utils.toArray("form input");
  // let textarea = document.querySelector("form textarea");
  // inputs.forEach((e) => {
  //   e.value = "";
  //   textarea.value = "";
  // });

  return (
    <div className=" relative w-full ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-1 lg:gap-3 lg:grid-cols-4">
          <div className="lg:col-span-2 col-span-4 relative pt-5">
            <small className=" text-red-900">{errors.name?.message}</small>
            <input type="text" className={Input_Classes} placeholder={name} {...register("name")} />
          </div>
          <div className="lg:col-span-2 col-span-4 relative pt-5">
            <small className=" text-red-900">{errors.email?.message}</small>
            <input type="email" className={Input_Classes} placeholder={email} {...register("email")} />
          </div>
          <div className="lg:col-span-2 col-span-4 relative pt-5">
            <small className=" text-red-900">{errors.mobile?.message}</small>
            <input type="number" className={Input_Classes} placeholder={mobile} {...register("mobile")} />
          </div>
          <div className="lg:col-span-2 col-span-4 relative  pt-5">
            <small className=" text-red-900">{errors.city?.message}</small>
            <input type="text" className={Input_Classes} placeholder={city} {...register("city")} />
          </div>
          <div className="lg:col-span-2 col-span-4 relative  pt-5">{formInput}</div>

          <div className="col-span-4 relative  pt-5">
            <small className=" text-red-900">{errors.message?.message}</small>
            <textarea placeholder={message} className={Input_Classes} {...register("message")}></textarea>
          </div>
          <div className="flex flex-wrap col-span-4 justify-between items-center">
            <button className="px-32 py-3 thin bg-[#E5E6E7] text-txt hover:bg-txt hover:text-white  bg-opacity-40 text-lg">{t("send")}</button>
            <h3>{isSubmitSuccessful && formMsg}</h3>
          </div>
        </div>
      </form>
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
