import React, { useEffect } from 'react';

const A4PageWrapper = ({ children }) => {
  const alertA4Size = () => {
    const preview = document.querySelector('.preview');
    const previewHeight = preview.offsetHeight;
    console.log(previewHeight);
    if (previewHeight > 1122) {
      alert('A4 size exceeded');
    }
  };

  useEffect(() => {
    alertA4Size();
  }, []);

  return <div className="w-8.5in">{children}</div>;
};

export default A4PageWrapper;
