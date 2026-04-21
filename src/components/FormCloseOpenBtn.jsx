"use client";

import React from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useTranslations } from "../i18n/I18nProvider";

const FormCloseOpenBtn = ({ formClose, setFormClose }) => {
  const t = useTranslations();

  return (
    <button
      aria-label={t("common.formOpenClose")}
      className="exclude-print fixed bottom-5 left-10 font-bold rounded-full bg-white text-fuchsia-600 shadow-lg border-2 border-white"
      onClick={() => setFormClose(!formClose)}
    >
      {formClose ? <BsFillArrowRightCircleFill className="w-10 h-10" title={t("common.formOpen")} /> : <BsFillArrowLeftCircleFill className="w-10 h-10" title={t("common.formClose")} />}
    </button>
  )
}

export default FormCloseOpenBtn;
