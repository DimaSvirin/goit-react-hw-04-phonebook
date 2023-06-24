import PropTypes from 'prop-types';
import { SearchWrap, Input, SearchLabel } from './Filter.styled';



export const  Filter= ({ handlerChangeFilter, value }) => {
  return (
    <SearchWrap>
      <SearchLabel htmlFor="filter">Find contacts by name:</SearchLabel>
      <Input
        id="filter"
        type="text"
        name="filter"
        onChange={handlerChangeFilter}
        value={value}
      />
    </SearchWrap>
  );
}

Filter.propTypes = {
  handlerChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

