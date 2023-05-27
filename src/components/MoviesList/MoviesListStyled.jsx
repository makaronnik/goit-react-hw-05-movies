import styled from 'styled-components';

const MoviesListStyled = styled.div`
  margin-top: 20px;

  & ul {
    margin-top: 0;
  }

  & li {
    margin-bottom: 5px;
  }

  & .react-loading-skeleton {
    margin-left: 20px;
  }
`;

export default MoviesListStyled;
