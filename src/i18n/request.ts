import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // This will be the locale from the middleware (x-next-intl-locale header)
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    timeZone: 'America/New_York',
    messages: (await import(`../messages/${locale}.json`)).default
  };
});