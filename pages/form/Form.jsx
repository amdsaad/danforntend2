import { useRef, useState, useCallback, useEffect, useContext } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import config from '../../components/config';
const apiURL = config.api_url;
import axios from 'axios';
import { gsap } from 'gsap';

import { useRouter } from 'next/router';
import { AppContext } from '../../context/AppContext';
export default function Form() {
  const { settings } = useContext(AppContext);
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
  const [mailSettings, setMailSettings] = useState({});
  const [emailTo, setEmailTo] = useState('info@dancompany.sa');

  const [formTitle, setFormTitle] = useState('');

  const formTitleFunc = useCallback(async () => {
    switch (router.route) {
      case '/':
        setFormTitle(title);
        break;
      case '/contact-us':
        setFormTitle(title);
        break;
      case '/future-projects':
        setFormTitle(title);
        break;
      case '/careers':
        setFormTitle(t('join_us'));
        break;
      default:
        setFormTitle(title);
        break;
    }
  }, [router.route, title, t]);

  useEffect(() => {
    if (settings) {
      setTitle(settings?.contactus_titele);
      setName(settings?.name_con);
      setEmail(settings?.email_con);
      setMobile(settings?.phone_con);
      setCity(settings?.city_con);
      setMessage(settings?.text_con);
      setFeedback(settings?.feedback);
      setInterest(settings?.interest);
      setMailSettings(settings?.mail);

      if (router.route === '/careers') {
        setEmailTo(settings?.contacts?.email_jobs);
      }
      if (router.route === '/contact-us') {
        setEmailTo(settings?.contacts?.email);
      }
      if (router.route === '/future-projects' || router.route === '/') {
        setEmailTo(settings?.contacts?.email_partners);
      }
    }
    formTitleFunc();
  }, [settings, formTitleFunc]);

  const Input_Classes =
    ' custominput border-none w-full py-3 text-[19px] bg-opacity-40 placeholder:text-[19px] px-2 outline-none bg-[#E5E6E7] text-[#552a0eb3] placeholder:text-[#552a0eb3] thin';

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
  const [fileUploaded, setFileUploaded] = useState(false);
  const [resumeFileName, setResumeFileName] = useState('');
  const [isSending, setIsSending] = useState(false);

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
    router.route === '/careers'
      ? !formResume
        ? (setFormResumeError(t('formError.resume')), error.push('resume'))
        : setFormResumeError('')
      : '';
    router.route != '/careers'
      ? !formInterest
        ? (setFormInterestError(t('formError.area')), error.push('interest'))
        : setFormInterestError('')
      : '';

    return error;
  };
  const uploadFile = (e) => {
    // Check if files exist and log the event for debugging
    if (e.target && e.target.files && e.target.files.length > 0) {
      setResumeFileName(e.target.files[0].name);

      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      formData.append('upload_preset', 'yvht9wao');

      axios
        .post(
          'https://api.cloudinary.com/v1_1/dancompany/image/upload',
          formData,
        )
        .then((response) => {
          setFormResume(response.data.url);
          setFileUploaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('No file selected or event target is undefined');
    }
  };

  const handleform = async (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');

    const checkError = checkForm();
    if (checkError.length) {
      return;
    }
    if (!checkError.length) {
      setIsSending(true);
      try {
        await axios.post('/api/send-email', {
          to: emailTo,
          subject: `New Message from ${formName}`,
          text: `
          Name: ${formName}
          Email: ${formEmail}
          Mobile: ${formMobile}
          City: ${formCity}
          Interest: ${formInterest}
          Message: ${formMessage}
          `,
          attachments: [
            {
              filename: resumeFileName,
              path: formResume,
            },
          ],
        });
        setIsSubmitSuccessful(true);
        setFormMsg(t('messageSent'));
        setFormName('');
        setFormEmail('');
        setFormMobile('');
        setFormCity('');
        setFormInterest('');
        setFormMessage('');
        setFormResume('');
        setFileUploaded(false);
        setResumeFileName('');
        setIsSending(false);
        inputs.forEach((input) => {
          input.value = '';
        });
        textArea.value = '';
        if (router.route === '/careers') {
          gsap.to('.modal', {
            scale: 0,
          });
        }
      } catch (error) {
        setIsSending(false);
        setFormMsg(t('messageSentError') + { emailTo });
      }
    }
  };

  return (
    <div className=" relative w-full z-10 ">
      <div className="py-4 text-center">
        <h1 className="text-[24px]  lg:text-[35px] font-bold">{formTitle}</h1>
      </div>
      <form>
        <div className="flex flex-col gap-4 lg:flex-row flex-wrap ">
          <div className="w-full lg:w-[48.5%]">
            <input
              type="text"
              className={Input_Classes}
              placeholder={name}
              onInput={(e) => setFormName(e.target.value)}
            />
            <p className=" text-red-900 text-[12px] mt-2">{formNameError}</p>
          </div>
          <div className="w-full lg:w-[48.5%]">
            <input
              type="email"
              className={Input_Classes}
              placeholder={email}
              onInput={(e) => setFormEmail(e.target.value)}
            />
            <p className=" text-red-900 text-[12px] mt-2">{formEmailError}</p>
          </div>
          <div className="w-full lg:w-[48.5%]">
            <input
              type="number"
              className={Input_Classes}
              placeholder={mobile}
              onInput={(e) => setFormMobile(e.target.value)}
            />
            <p className=" text-red-900 text-[12px] mt-2">{formMobileError}</p>
          </div>
          <div className="w-full lg:w-[48.5%]">
            <input
              type="text"
              className={Input_Classes}
              placeholder={city}
              onInput={(e) => setFormCity(e.target.value)}
            />
            <p className=" text-red-900 text-[12px] mt-2">{formCityError}</p>
          </div>
          {router.route === '/' ||
          router.route === '/contact-us' ||
          router.route === '/future-projects' ? (
            <div className="w-full lg:w-[48.5%]">
              <input
                type="text"
                className={Input_Classes}
                placeholder={interest}
                onInput={(e) => setFormInterest(e.target.value)}
              />
              <p className=" text-red-900 text-[12px] mt-2">
                {formInterestError}
              </p>
            </div>
          ) : (
            <div className="w-full lg:w-[48.5%]">
              <input
                type="file"
                className=""
                placeholder={t('resume')}
                id="resume"
                onChange={(e) => uploadFile(e)}
              />
              <p className=" text-red-900 text-[12px] mt-2">
                {' '}
                {formResumeError}
              </p>
            </div>
          )}

          <div className="w-full">
            <textarea
              placeholder={message}
              className={Input_Classes}
              onInput={(e) => setFormMessage(e.target.value)}
            ></textarea>
            <p className=" text-red-900 text-[12px]">{formMessageError}</p>
          </div>
          <div className="">
            <button
              className="w-full px-32 py-3 thin bg-[#E5E6E7] text-txt hover:bg-txt hover:text-white  bg-opacity-40 text-lg"
              onClick={handleform}
            >
              {t('send')}
            </button>
            <h3>{isSending ? t('sending') : ''}</h3>
            <h3>{formMsg}</h3>
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
