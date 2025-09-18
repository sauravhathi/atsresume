import React from 'react';
import Button from './Button';
import { MdAddCircle } from 'react-icons/md';

const AddBtn = ({ ...props }) => {
  return (
    <Button
      {...props}
      type="button"
      aria-label="Add"
      title={'Add'}
      variant={'outlined'}
    >
      <MdAddCircle />
    </Button>
  );
};

export default AddBtn;
