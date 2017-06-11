
import { connect } from 'react-redux';

import Button from '../component/button';
import { toggleOptions } from '../action/index';


const mapStateToProps = (state) => ({
  className: 'btn-options toggle toggle-' + (state.showOptions ? 'active' : 'inactive'),
  text: 'Options'
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(toggleOptions())
});

const OptionsButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default OptionsButton;
