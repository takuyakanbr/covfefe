
import loadGrammer from '../util/parser';
import generate from '../util/generator';
import { getParameterByName } from '../util/url';
import { update, setOptions } from '../action/index';

let grammar = null;

const startState = {
  output: [],
  options: {
    generated: true,
    combined: true,
    markov: true,
    covfefe: true,
    numbers: false,
    output: 18
  },
  showOptions: false
};

const generateOutput = options => {
  if (!grammar) return [];

  // determine what types to generate
  let start = [];
  if (options.generated) {
    start.push('@genword');
    start.push('@genword');
  }
  if (options.combined) {
    start.push('@comword');
    start.push('@comword');
  }
  if (options.markov) {
    start.push('@markov');
    start.push('@markov');
  }
  if (options.covfefe)
    start.push('@covfefe');

  return generate(grammar, start, options.output, options.numbers);
};

const reducer = (state = startState, action) => {
  switch (action.type) {
  case 'UPDATE':
  case 'GENERATE':
    return Object.assign({}, state, {
      output: generateOutput(state.options)
    });
  case 'TOGGLE_OPTIONS':
    return Object.assign({}, state, {
      showOptions: !state.showOptions
    });
  case 'CHANGE_OPTIONS': {
    let opts = Object.assign({}, state.options, {
      [action.name]: !state.options[action.name]
    });
    return Object.assign({}, state, {
      output: generateOutput(opts),
      options: opts
    });
  }
  case 'SET_OPTIONS': {
    let opts = Object.assign({}, state.options, action.options);
    return Object.assign({}, state, {
      output: generateOutput(opts),
      options: opts
    });
  }
  default:
    return state;
  }
};


export const initialize = (dispatch) => {

  // set initial options
  const opts = {
    generated: false,
    combined: false,
    markov: false,
    covfefe: false,
    numbers: false
  };
  const param = getParameterByName('types');
  if (param) {
    const types = param.split(',');
    for (const type of types) {
      opts[type] = true;
    }
    dispatch(setOptions(opts));
  }

  // load grammar data
  loadGrammer((g) => {
    grammar = g;
    dispatch(update(0));
  }, (code) => {
    dispatch(update(code));
  });
};

export default reducer;
