import styled from 'styled-components';

const SearchFormStyled = styled.div`
  & form {
    margin-top: 20px;

    & input {
      height: 21px;
      width: 300px;

      outline: none;
      border-radius: 0;
      border: 1px solid #d7d7d7;
      border-right: none;

      &:hover,
      &:focus {
        border-color: #bababa;
      }
    }

    & button {
      padding: 4px;

      font-weight: 600;
      outline: none;

      border-radius: 0;
      border: 1px solid #969696;

      &:hover,
      &:focus {
        border-color: #4e4e4e;
      }
    }
  }
`;

export default SearchFormStyled;
