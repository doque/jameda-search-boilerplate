import React from 'react';
import PropTypes from 'prop-types';

import SuggestItem from './SuggestionItem';

const SuggestionList = ({ suggestions }) => (
  <div>
    {suggestions.map((suggest, i) => <SuggestItem {...suggest} key={i} />)}
  </div>
  );

SuggestionList.propTypes = {
  suggestions: PropTypes.array,
};

export default SuggestionList;
