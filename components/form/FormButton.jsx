import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

const FormButton = ({ size, remove, add }) => {

    return (
      <div className="flex-wrap-gap-2 mb-2">
        <button type="button" onClick={add}
          aria-label="Add"
          className="p-2 text-white bg-blue-700 rounded text-xl">
          <MdAddCircle />
        </button>
        {
          size > 0 &&
          <button type="button" onClick={remove}
            aria-label="Remove"
            className="p-2 text-white bg-blue-700 rounded text-xl">
            <MdRemoveCircle />
          </button>
        }
      </div>
    )
  }

export default FormButton;