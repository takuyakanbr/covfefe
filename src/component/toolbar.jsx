
import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';
import Checkbox from './checkbox';

class Toolbar extends React.Component {

  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-controls">
          <div className="toolbar-text">
            <span className="huge">&ldquo;</span>Despite the constant negative press...
          </div>
          <div className="toolbar-buttons">
            <Button className="btn-generate" text="Generate" onClick={ this.props.onGenerate } />
            <Button className={ 'btn-options toggle toggle-' +
            (this.props.showOptions ? 'active' : 'inactive') } text="Options"
                    onClick={ this.props.onOptions } />
          </div>
        </div>
        <div className={ 'clearfix filter-options ' + (this.props.showOptions ? 'show' : 'hide') }>
          <div className="filter-options-cont">
            <Checkbox text="Generated words"
                      label={ 1 }
                      checked={ this.props.generatedWords }
                      onChange={ this.props.onCheckboxChange } />
            <Checkbox text="Combined words"
                      label={ 2 }
                      checked={ this.props.combinedWords }
                      onChange={ this.props.onCheckboxChange } />
            <Checkbox text="Append numbers"
                      label={ 3 }
                      checked={ this.props.appendNumbers }
                      onChange={ this.props.onCheckboxChange } />
          </div>
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  showOptions: PropTypes.bool.isRequired,
  onGenerate: PropTypes.func.isRequired,
  onOptions: PropTypes.func.isRequired,
  generatedWords: PropTypes.bool.isRequired,
  combinedWords: PropTypes.bool.isRequired,
  appendNumbers: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired
};

export default Toolbar;
