import React from "react";
import {HighlightMenu} from "react-highlight-menu";
import {FaAlignCenter, FaAlignLeft, FaAlignRight, FaBold, FaItalic, FaMinus, FaPlus, FaUnderline} from "react-icons/fa";
import useKeyboardShortcut from "../../../hooks/useKeyboardShortcut";

const ModalHighlightMenu = () => {
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
          <MenuButton title="Bold (Ctrl+B)" icon={<FaBold/>} onClick={toggleBold}/>
          <MenuButton title="Italic (Ctrl+I)" icon={<FaItalic/>} onClick={toggleItalic}/>
          <MenuButton title="Underline (Ctrl+U)" icon={<FaUnderline/>} onClick={toggleUnderline}/>
          <MenuButton title="Increase Font Size" icon={<FaPlus/>} onClick={() => changeFontSize(4)}/>
          <MenuButton title="Decrease Font Size" icon={<FaMinus/>} onClick={() => changeFontSize(2)}/>
          <MenuButton title="Align Left" icon={<FaAlignLeft/>} onClick={() => alignText("Left")}/>
          <MenuButton title="Align Center" icon={<FaAlignCenter/>} onClick={() => alignText("Center")}/>
          <MenuButton title="Align Right" icon={<FaAlignRight/>} onClick={() => alignText("Right")}/>
        </>
      )}
    />
  );
};

export default ModalHighlightMenu;
