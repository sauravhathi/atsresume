"use client";

import React from "react";
import {HighlightMenu} from "react-highlight-menu";
import {FaAlignCenter, FaAlignLeft, FaAlignRight, FaBold, FaItalic, FaMinus, FaPlus, FaUnderline} from "react-icons/fa";
import useKeyboardShortcut from "../../../hooks/useKeyboardShortcut";
import { useTranslations } from "next-intl";

const ModalHighlightMenu = () => {
  const t = useTranslations();

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const toggleBold = () => formatText("bold");
  const toggleItalic = () => formatText("italic");
  const toggleUnderline = () => formatText("underline");
  const changeFontSize = (size) => formatText("fontSize", size);
  const alignText = (alignment) => formatText(`justify${alignment}`);

  /* Hot keys */
  useKeyboardShortcut("b", true, toggleBold);
  useKeyboardShortcut("i", true, toggleItalic);
  useKeyboardShortcut("u", true, toggleUnderline);

  const MenuButton = ({title, icon, onClick}) => (
    <button
      onClick={onClick}
      title={title}
      className="p-2 hover:bg-gray-200 rounded font-semibold"
    >
      {icon}
    </button>
  );

  return (
    <HighlightMenu
      styles={{
        borderColor: "#C026D3",
        backgroundColor: "#C026D3",
        boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.15)",
        zIndex: 10,
        borderRadius: "5px",
        padding: "3px",
      }}
      target="body"
      menu={() => (
        <>
          <MenuButton title={t("editor.bold")} icon={<FaBold/>} onClick={toggleBold}/>
          <MenuButton title={t("editor.italic")} icon={<FaItalic/>} onClick={toggleItalic}/>
          <MenuButton title={t("editor.underline")} icon={<FaUnderline/>} onClick={toggleUnderline}/>
          <MenuButton title={t("editor.increaseFontSize")} icon={<FaPlus/>} onClick={() => changeFontSize(4)}/>
          <MenuButton title={t("editor.decreaseFontSize")} icon={<FaMinus/>} onClick={() => changeFontSize(2)}/>
          <MenuButton title={t("editor.alignLeft")} icon={<FaAlignLeft/>} onClick={() => alignText("Left")}/>
          <MenuButton title={t("editor.alignCenter")} icon={<FaAlignCenter/>} onClick={() => alignText("Center")}/>
          <MenuButton title={t("editor.alignRight")} icon={<FaAlignRight/>} onClick={() => alignText("Right")}/>
        </>
      )}
    />
  );
};

export default ModalHighlightMenu;
