import React from 'react';
import HeaderStyled from './HeaderStyled';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderStyled>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'movies'}>Movies</NavLink>
    </HeaderStyled>
  );
};

export default Header;
