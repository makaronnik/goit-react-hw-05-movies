import styled from 'styled-components';

const MovieDetailsStyled = styled.div`
  display: flex;
  margin-top: 20px;

  & .poster-wrapper {
    width: 185px;
    height: 278px;

    margin-top: 1px;

    flex-shrink: 0;

    background-color: #ebebeb;

    margin-right: 20px;
  }

  & .details-wrapper {
    flex: 1;

    & .react-loading-skeleton:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  & img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export default MovieDetailsStyled;
