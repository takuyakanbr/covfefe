
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, checked, text, onChange }) => (
  <div className="checkbox">
    <input id={ 'checkbox-' + name }
           type="checkbox"
           checked={ checked }
           onChange={ onChange } />
    <label htmlFor={ 'checkbox-' + name }>{ text }</label>
  </div>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
