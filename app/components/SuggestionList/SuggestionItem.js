import React from 'react';
import PropTypes from 'prop-types';

const SuggestItem = ({ header, list }) =>
  <div>
    <h2>
      {header}
    </h2>
    <ul>
      {list.map((item, i) =>
        <li key={i}>
          {item.term}
        </li>
      )}
    </ul>
  </div>;

SuggestItem.propTypes = {
  header: PropTypes.string,
  list: PropTypes.array,
};

export default SuggestItem;
