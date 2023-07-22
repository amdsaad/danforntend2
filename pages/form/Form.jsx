import { useRef, useState, useCallback, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { gsap } from 'gsap';
import config from '../../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { useRouter } from 'next/router';
// import nodemailer from 'nodemailer';

export default function Form() {
  const { t } = useTranslation();
  const router = useRouter();

  const [formMsg, setFormMsg] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [resume, setResume] = useState('');
  const [feedback, setFeedback] = useState('');
  const [interest, setInterest] = useState('');
  const [submittedData, setSubmittedData] = useState({});
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
            console.log(response?.data);
            setTitle(response?.data?.contactus_titele);
            setName(response?.data?.name_con);
            setEmail(response?.data?.email_con);
            setMobile(response?.data?.phone_con);
            setCity(response?.data?.city_con);
            setMessage(response?.data?.text_con);
            setFeedback(response?.data?.feedback);
            setInterest(response?.data?.interest);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [
    setTitle,
    setName,
    setEmail,
    setMobile,
    setCity,
    setMessage,
    router.locale,
  ]);

  useEffect(() => {
    getContact();
  }, [getContact]);

  const Input_Classes =
    ' custominput border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin';

  // const onSubmit = (data) => {
  //   setSubmittedData(data)
  //   console.log(data)
  //   setFormMsg("تم إرسال رسالتك بنجاح!");
  //   let inputs = gsap.utils.toArray("form input");
  //   let textarea = document.querySelector("form textarea");
  //   inputs.forEach((e) => {
  //     e.value = "";
  //     textarea.value = "";
  //   });

  // };

  const [formName, setFormName] = useState('');
  const [formNameError, setFormNameError] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formEmailError, setFormEmailError] = useState('');
  const [formMobile, setFormMobile] = useState('');
  const [formMobileError, setFormMobileError] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formCityError, setFormCityError] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formMessageError, setFormMessageError] = useState('');
  const [formResume, setFormResume] = useState('');
  const [formResumeError, setFormResumeError] = useState('');
  const [formInterest, setFormInterest] = useState('');
  const [formInterestError, setFormInterestError] = useState('');
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const checkForm = () => {
    const error = [];
    !formName
      ? (setFormNameError(t('formError.name')), error.push('name'))
      : setFormNameError('');

    !formEmail
      ? (setFormEmailError(t('formError.email')), error.push('email'))
      : setFormEmailError('');
    !formMobile
      ? (setFormMobileError(t('formError.mobile')), error.push('mobile'))
      : setFormMobileError('');
    !formCity
      ? (setFormCityError(t('formError.city')), error.push('city'))
      : setFormCityError('');
    !formMessage
      ? (setFormMessageError(t('formError.message')), error.push('message'))
      : setFormMessageError('');
    !formResume
      ? (setFormResumeError(t('formError.resume')), error.push('resume'))
      : setFormResumeError('');
    !formInterest
      ? (setFormInterestError(t('formError.area')), error.push('interest'))
      : setFormInterestError('');

    return error;
  };

  const handleform = async (e) => {
    e.preventDefault();
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.elasticemail.com',
    //   port: 2525,
    //   secure: false,
    //   auth: {
    //     user: 'info@dan.com',
    //     pass: 'E7FFEAF247C0F467D87BD9D1F9BBBA58F773',
    //   },
    // });
    const checkError = checkForm();
    if (checkError.length === 0) {
      // setIsSubmitSuccessful(true);
      // setFormMsg('تم إرسال رسالتك بنجاح!');

      try {
        // const info = await transporter.sendMail({
        //   from: '"Dan Info 👻" <info@dan.com>', // sender address
        //   to: 'amdsaad@webse.io', // list of receivers
        //   subject: 'Hello ✔', // Subject line
        //   text: 'Hello world?', // plain text body
        //   html: '<b>Hello world?</b>', // html body
        // });
        // console.log(info);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className=" relative w-full ">
      <form onSubmit={handleform}>
        <div className="grid grid-cols-1 gap-1 lg:gap-3 lg:grid-cols-4">
          <div className="lg:col-span-2 col-span-4 relative pt-5">
            <input
              type="text"
              className={Input_Classes}
              placeholder={name}
              onInput={(e) => setFormName(e.target.value)}
            />
            <div>
              <small className=" text-red-900">{formNameError}</small>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-4 relative pt-5">
            <small className=" text-red-900">{formEmailError}</small>
            <input
              type="email"
              className={Input_Classes}
              placeholder={email}
              onInput={(e) => setFormEmail(e.target.value)}
            />
          </div>
          <div className="lg:col-span-2 col-span-4 relative pt-5">
            <small className=" text-red-900">{formMobileError}</small>
            <input
              type="number"
              className={Input_Classes}
              placeholder={mobile}
              onInput={(e) => setFormMobile(e.target.value)}
            />
          </div>
          <div className="lg:col-span-2 col-span-4 relative  pt-5">
            <input
              type="text"
              className={Input_Classes}
              placeholder={city}
              onInput={(e) => setCity(e.target.value)}
            />
            <small className=" text-red-900">{formCityError}</small>
          </div>
          {router.route === '/' || router.route === '/contact-us' ? (
            <div className="lg:col-span-2 col-span-4 relative  pt-5">
              <small className=" text-red-900">{formInterestError}</small>
              <input
                type="text"
                className={Input_Classes}
                placeholder={interest}
                onInput={(e) => setFormInterest(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <small className=" text-red-900"></small>
              <input
                type="file"
                className=""
                placeholder={t('resume')}
                id="resume"
              />
            </div>
          )}

          <div className="col-span-4 relative  pt-5">
            <small className=" text-red-900">{formMessageError}</small>
            <textarea
              placeholder={message}
              className={Input_Classes}
              onInput={(e) => setFormMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-wrap col-span-4 justify-between items-center">
            <button className="px-32 py-3 thin bg-[#E5E6E7] text-txt hover:bg-txt hover:text-white  bg-opacity-40 text-lg">
              {t('send')}
            </button>
            {/* <h3>{isSubmitSuccessful && formMsg}</h3> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
