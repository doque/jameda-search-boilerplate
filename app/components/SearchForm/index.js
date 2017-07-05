import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  font: 14pt Verdana;
  width: 500px;
  margin: 0 auto;
  padding-top: 50px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  margin-left: 15px;
`;

const SearchForm = ({
  children,
  searchTerm,
  onSubmitForm,
  onChangeSearchTerm,
}) =>
  <Form onSubmit={onSubmitForm}>
    <label htmlFor="what">
      Was:
      <Input
        type="text"
        className="input-field"
        name="what"
        onChange={onChangeSearchTerm}
        value={searchTerm}
      />
    </label>
    {children}
  </Form>;

SearchForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  searchTerm: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeSearchTerm: PropTypes.func,
};

export default SearchForm;
