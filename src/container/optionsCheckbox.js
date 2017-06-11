
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeOptions } from '../action/index';
import Checkbox from '../component/checkbox';

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  checked: state.options[ownProps.name] === true,
  text: ownProps.text
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(changeOptions(ownProps.name))
});

const OptionsCheckbox = connect(mapStateToProps, mapDispatchToProps)(Checkbox);

OptionsCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default OptionsCheckbox;
