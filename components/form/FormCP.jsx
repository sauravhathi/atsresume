import React, { } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"

const FormCP = ({ formClose, setFormClose }) => {
  return (
    <button
      aria-label="Form Open/Close"
      className="exclude-print fixed bottom-5 left-10 font-bold rounded-full bg-white text-blue-600 shadow-lg border-2 border-white"
      onClick={() => setFormClose(!formClose)}
    >
      {formClose ? <BsFillArrowRightCircleFill className="w-10 h-10" title="Form Open" /> : <BsFillArrowLeftCircleFill className="w-10 h-10" title="Form Close" />}
    </button>
  )
}

export default FormCP;