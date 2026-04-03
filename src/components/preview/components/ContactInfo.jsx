"use client";

import React from "react";
import { useTranslations } from "../../../i18n/I18nProvider";

const ContactInfo = ({ mainclass, linkclass, teldata, emaildata, addressdata, telicon, emailicon, addressicon }) => {
  const t = useTranslations();

    return (
      <div className={mainclass}>
        <a className={linkclass}
          aria-label={t("a11y.phoneNumber")}
          href={`tel:${teldata}`}>
          {telicon}  {teldata}
        </a>
        <a className={linkclass}
          aria-label={t("a11y.emailAddress")}
          href={`mailto:${emaildata}`}>
          {emailicon} {emaildata}
        </a>
        <address
          aria-label={t("a11y.address")}
          className={linkclass + " not-italic"} >
          {addressicon} {addressdata}
        </address>
      </div>
    );
  }

export default ContactInfo;
