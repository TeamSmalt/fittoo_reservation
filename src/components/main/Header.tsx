import React from 'react';

import Logo from 'assets/svg/Logo';

import { Link } from 'react-router-dom';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <header className="landing-intro__header">
      <div className="logo">
        <Logo />
        <span>핏투</span>
      </div>

      <div className="nav">
        <Link to="#general-user">일반 유저용</Link>
        <Link to="#coach-user">코치용</Link>
        <Link to="">문의하기</Link>
      </div>
    </header>
  );
};

export default Header;
