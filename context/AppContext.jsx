import { createContext, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import config from '../components/config';
import { useRouter } from 'next/router';
// Create a context
export const AppContext = createContext();

const apiURL = config.api_url;

export const AppProvider = ({ children }) => {
  const router = useRouter();
  const [settings, setSettings] = useState(null);
  const getSettings = useCallback(async () => {
    try {
      await axios
        .get(`${apiURL}/settings`, {
          headers: {
            'Accept-Language': `${router.locale === 'en' ? 'en' : 'ar'}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setSettings(response?.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [router.locale]);

  useEffect(() => {
    getSettings();
  }, [getSettings, router.locale]);
  return (
    <AppContext.Provider value={{ settings }}>{children}</AppContext.Provider>
  );
};
