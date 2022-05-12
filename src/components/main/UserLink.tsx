import React from 'react';

import RightArrow from 'assets/svg/RightArrow';

import { Link } from 'react-router-dom';

type UserLinkProps = { title: string; image: string; link: string };

const UserLink = ({ title, image, link }: UserLinkProps) => {
  return (
    <div className="user-link">
      <img src={image} alt="link" />
      <span>{title}</span>
      <Link to={link}>
        더 알아보기 <RightArrow />
      </Link>
    </div>
  );
};

export default UserLink;
