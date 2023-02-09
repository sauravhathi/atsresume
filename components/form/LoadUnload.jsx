import React, {  } from "react";
import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";

const LoadUnload = ({ handleLoad, handleDownload, resumeData }) => {
    return (
      <div className="flex flex-wrap gap-4 mb-2 justify-center">
        <div className="inline-flex flex-row items-center gap-2">
          <h2 className="text-[1.2rem] text-white">Load Data</h2>
          <label className="p-2 text-white bg-fuchsia-700 rounded cursor-pointer">
            <FaCloudUploadAlt className="text-[1.2rem] text-white" />
            <input
              aria-label="Load Data"
              type="file"
              className="hidden"
              onChange={handleLoad}
              accept=".json" />
          </label>
        </div>
        <div className="inline-flex flex-row items-center gap-2">
          <h2 className="text-[1.2rem] text-white">Save Data</h2>
          <button
            aria-label="Save Data"
            className="p-2 text-white bg-fuchsia-700 rounded"
            onClick={(event) => handleDownload(resumeData, resumeData.name + " by ATSResume.json", event)}>
            <FaCloudDownloadAlt className="text-[1.2rem] text-white" />
          </button>
        </div>
      </div>
    )
  }

export default LoadUnload;