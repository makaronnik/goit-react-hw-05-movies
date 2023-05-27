import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyled from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'movies'}>Movies</NavLink>
    </HeaderStyled>
  );
};

export default Header;
