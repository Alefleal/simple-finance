import React from 'react';
import logoImg from '../assets/logo-img.svg';

const Header = () => {
  return (
    <div className="flex items-center font gap-1.5">
      <div>
        <img src={logoImg} alt="logo" width={24} height={16} />
      </div>

      <div>
        <p className="text-primary font-semibold text-md">Simple Finance</p>
      </div>
    </div>
  );
};

export default Header;
