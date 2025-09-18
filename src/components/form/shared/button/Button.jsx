import React from 'react';
import clsx from 'clsx';

const Button = ({ children, variant = 'contained', className, ...props }) => {
  const base =
    'flex items-center justify-center text-center gap-2  h-fit p-2 rounded font-medium  text-xl transition-colors cursor-pointer';

  const variants = {
    contained: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700',
    outlined:
      'border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-700 hover:border-fuchsia-700 hover:text-fuchsia-200',
    text: 'text-fuchsia-50 hover:bg-fuchsia-700',
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
