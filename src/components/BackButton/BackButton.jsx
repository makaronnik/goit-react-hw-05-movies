import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import BackButtonStyled from './BackButtonStyled';

const BackButton = ({ location }) => {
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

BackButton.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default BackButton;
