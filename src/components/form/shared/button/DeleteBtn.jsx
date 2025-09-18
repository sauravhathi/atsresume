import React from 'react';
import Button from './Button';
import { BsTrash3 } from 'react-icons/bs';

const DeleteBtn = ({ ...props }) => {
  return (
    <Button
      {...props}
      type="button"
      aria-label="Delete"
      title={'Delete'}
      variant={'text'}
      className={'h-[40px] hover:bg-transparent hover:text-red-500'}
    >
      <BsTrash3 />
    </Button>
  );
};

export default DeleteBtn;
