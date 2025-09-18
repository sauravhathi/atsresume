import React, { useContext } from 'react';
import Logo from '@/assets/logo.svg';
import { CiMenuKebab } from 'react-icons/ci';
import Button from '../../../shared/button/Button';
import { ResumeContext } from '../../../../builder';

const Header = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleMenuClick = () => {
    setResumeData({ ...resumeData, menuIsOpened: !resumeData.menuIsOpened });
  };

  return (
    <header
      className={'flex justify-center w-full bg-[var(--form-bg-secondary)] p-1'}
    >
      {/* Menu button */}
      {!resumeData.sidebarIsCollapsed && (
        <Button
          type={'button'}
          variant={'text'}
          aria-label="Add"
          title={'Add'}
          className={
            'absolute top-0 left-0 box-sizing p-0 w-[50px] h-[50px] m-0 text-white hover:bg-transparent hover:text-fuchsia-500'
          }
          onClick={handleMenuClick}
        >
          <CiMenuKebab className={`w-[40px] h-[40px]`} />
        </Button>
      )}
      <Logo
        width={50}
        height={50}
        aria-hidden="true"
        style={{ color: '#fff6ac' }}
      />
    </header>
  );
};

export default Header;
