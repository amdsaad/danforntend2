import { useRef, useState, useCallback, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {useForm} from 'react-hook-form'
import { useTranslation } from "next-i18next";
import config from "../../components/config";
const apiURL = config.api_url;
import axios from "axios";
import { useRouter } from "next/router";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

export default function Form() {
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
 
  const Input_Classes = "border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin";
  const schema =  yup.object().shape({
    name: yup.string().required('required'),
    email: yup.string().email().required('required'),
    city: yup.string().required('required'),
    message:yup.string().required('required'),
  })
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  })
  const onSubmit = (data)=>{
    console.log(data)
  }

  return (
    <div className=" relative w-full ">
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="grid grid-cols-1 gap-x-10 gap-y-4 lg:gap-y-8 lg:grid-cols-4">
        <div className="lg:col-span-2 relative pt-5">
          <small className=" text-red-900">{errors.name?.message}</small>
          <input type="text" className={(Input_Classes)} placeholder={name} {...register('name')}/>
        </div>
        <div className=" relative  pt-5">
        <small className=" text-red-900">{errors.email?.message}</small>
          <input type="text" className={(Input_Classes)} placeholder={email} {...register('email')}/>
        </div>
        <div className=" relative  pt-5">
          <input type="number" className={(Input_Classes)} placeholder={mobile} {...register('mobile')}/>
        </div>
        <div className="lg:col-span-2 relative  pt-5">
        <small className=" text-red-900">{errors.city?.message}</small>
          <input type="text" className={(Input_Classes)} placeholder={city} {...register('city')}/>
        </div>
        <div className="lg:col-span-2 relative  pt-5">

          <input type="text" className={(Input_Classes)} placeholder={t("AreaOfInterest")} {...register('AreaOfInterest')} />
        </div>
        <div className="lg:col-span-4 relative  pt-5">
        <small className=" text-red-900">{errors.message?.message}</small>
          <textarea placeholder={message} className={(Input_Classes)} {...register('message')} ></textarea>
        </div>
        <button className="px-32 py-3 thin bg-[#E5E6E7] text-txt hover:bg-txt hover:text-white  bg-opacity-40 text-lg">{t("send")}</button>
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
