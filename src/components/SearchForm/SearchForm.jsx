import PropTypes from 'prop-types';
import SearchFormStyled from './SearchFormStyled';

const SearchForm = ({ value, onSubmit, onChange }) => {
  return (
    <SearchFormStyled>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" value={value} onChange={onChange} />
        <button type="submit">Search</button>
      </form>
    </SearchFormStyled>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
