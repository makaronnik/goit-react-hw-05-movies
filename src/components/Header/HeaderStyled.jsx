import styled from 'styled-components';

const HeaderStyled = styled.div`
  --base-color: #000;
  --active-color: #af5968;

  padding: 20px 30px;

  color: var(--base-color);
  box-shadow: 0 6px 6px -2px rgba(0, 0, 0, 0.3);

  & a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;

    &:not(:last-child) {
      margin-right: 15px;
    }

    &:hover,
    &:focus {
      border-bottom: 2px solid var(--base-color);
    }

    &.active {
      color: var(--active-color);

      &:hover,
      &:focus {
        outline: none;
        border-bottom: 2px solid var(--active-color);
      }
    }
  }
`;

export default HeaderStyled;
