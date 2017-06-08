
import React from 'react';
import PropTypes from 'prop-types';

let nextId = 10;

class Checkbox extends React.Component {

  componentWillMount() {
    this.cid = nextId++;
  }

  onChange(e) {
    this.props.onChange(this.props.label, e);
  }

  render() {
    return (
      <div className="checkbox">
        <input id={ 'checkbox-' + this.cid }
               type="checkbox"
               checked={ this.props.checked }
               onChange={ (e) => this.onChange(e) }/>
        <label htmlFor={ 'checkbox-' + this.cid }>{ this.props.text }</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
