import React from 'react';
import BackButtonStyled from './BackButtonStyled';
import { useLocation, useNavigate } from 'react-router-dom';

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BackButtonStyled
      type="button"
      onClick={() => navigate(location.state ?? '/')}
    >
      &larr; Go back
    </BackButtonStyled>
  );
};

export default BackButton;
