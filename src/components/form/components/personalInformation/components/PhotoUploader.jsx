import React, { useContext } from 'react';
import { removeProfilePicture } from '../utils/removeProfilePicture';
import Image from 'next/image';
import ParamBlock from './ParamBlock';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { BsTrash3 } from 'react-icons/bs';
import { handleProfilePicture } from '../utils/handleProfilePicture';
import { ResumeContext } from '../../../../builder';

const PhotoUploader = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <>
      {resumeData.profilePicture ? (
        <div className={'flex gap-2 items-center '}>
          <div className="w-[100px] h-[100px] rounded-2xl overflow-hidden border-fuchsia-700 ">
            <Image
              src={resumeData.profilePicture}
              alt="profile"
              width={100}
              height={100}
              className="object-cover h-full w-full"
            />
          </div>
          <button
            className={
              'flex items-center gap-1 p-1 rounded text-gray-200 hover:text-white hover:bg-red-500/80 ' +
              'transition duration-300 ease-in-out '
            }
            onClick={() => {
              removeProfilePicture(resumeData, setResumeData);
            }}
          >
            <BsTrash3 />
            <p>Delete</p>
          </button>
        </div>
      ) : (
        <ParamBlock>
          <label htmlFor="personalInfo-photo">
            <div
              className={
                'flex gap-2 items-center w-fit cursor-pointer rounded-2xl hover:bg-gray-200/30 ' +
                'transition duration-300 ease-in-out '
              }
            >
              <MdOutlineAddAPhoto className="text-[100px] text-white bg-gray-300/50 p-2 rounded-2xl" />
              <p className={'p-2'}>Upload photo</p>
            </div>
          </label>
          <input
            id={'personalInfo-photo'}
            type="file"
            name="profileImage"
            accept="image/*"
            className="profileInput hidden"
            onChange={(e) => {
              handleProfilePicture(resumeData, setResumeData, e);
            }}
            placeholder="Profile Picture"
          />
        </ParamBlock>
      )}
    </>
  );
};

export default PhotoUploader;
