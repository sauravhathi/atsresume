import {setRequestLocale} from 'next-intl/server';
import {routing} from '../../i18n/routing';
import Builder from "../../components/builder";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function Page({params}) {
  const locale = (await params).locale;
  setRequestLocale(locale);

  return <Builder />;
}